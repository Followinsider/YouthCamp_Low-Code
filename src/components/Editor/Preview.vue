<template>
    <div v-if="show" ref="container" class="bg">
        <el-button class="close" @click="close">关闭</el-button>
        <el-button 
            v-if="isScreenshot" 
            class="screenshot" 
            @click="htmlToImage" 
            type="primary">
            确定
        </el-button>
        <el-button 
            ref="send_btn" 
            class="send"
            @click="exportHTML" 
            type="primary"
            v-else>
            发布
        </el-button>
        <a ref="send_link" style="display: none;"></a>
        <div class="canvas-container">
            <div
                class="canvas"
                :style="{
                    ...getCanvasStyle(canvasStyleData),
                    width: changeStyleWithScale(canvasStyleData.width) + 'px',
                    height: changeStyleWithScale(canvasStyleData.height) + 'px',
                }"
            >
                <ComponentWrapper
                    v-for="(item, index) in componentData"
                    :key="index"
                    :config="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getStyle, getCanvasStyle } from '@/utils/style'
import { mapState } from 'vuex'
import ComponentWrapper from './ComponentWrapper'
import { changeStyleWithScale } from '@/utils/translate'
import { toPng } from 'html-to-image'
import getDom from '@/utils/getDom'

export default {
    components: { ComponentWrapper },
    model: {
        prop: 'show',
        event: 'change',
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        isScreenshot: {
            type: Boolean,
            default: false,
        },
    },
    computed: mapState([
        'componentData',
        'canvasStyleData',
        'curComponent',
    ]),
    methods: {
        getStyle,
        getCanvasStyle,
        changeStyleWithScale,
        getDom,
        
        close() {
            this.$emit('change', false)
        },

        htmlToImage() {
            console.log(this.componentData)
            toPng(this.$refs.container.querySelector('.canvas'))
            .then(dataUrl => {
                const a = document.createElement('a')
                a.setAttribute('download', 'screenshot')
                a.href = dataUrl
                a.click()
            })
            .catch(error => {
                console.error('oops, something went wrong!', error)
            })
            .finally(this.close)
        },
        
        exportHTML() {
            if (this.componentData.length <= 0) return alert('发布需要有内容！')
            this.$confirm('确认发布', '提示', {
                type: 'warning',
                confirmButtonText: '确认',
                cancelButtonText: '取消',
            }).then(res => {
                if (res === 'confirm') {
                    const link = this.$refs.send_link
                    const url = URL.createObjectURL(new Blob([this.getDom()], { type: 'text/plain;charset="utf-8"' }))
                    link.href = url
                    link.download = 'Publish.html'
                    link.click()
                    window.URL.revokeObjectURL(url)
                }
            }).catch(err => err)
        },
    },
    
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: rgb(0, 0, 0, .5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 20px;

    .canvas-container {
        width: calc(100% - 40px);
        height: calc(100% - 120px);
        overflow: auto;

        .canvas {
            background: #fff;
            position: relative;
            margin: auto;
        }
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .send,
    .screenshot {
        position: absolute;
        right: 100px;
        top: 20px;
    }
}
</style>