<template>
    <div>
        <canvas ref="canvas"></canvas>
        <!-- 控制条 -->
        <div class="ctrl-box">
            <div class="btn-box">
                <el-button
                    :icon="videoState"
                    @click="ProgressStop"
                ></el-button>
                <div class="progress-time">{{ timeStr }}</div>
            </div>
            <div ref="progressBox" class="progress-box" @click="ProgressBox">
                <div ref="progress" class="progress"></div>
            </div>
        </div>
        <video
            ref="video"
            width="0"
            :src="videolink"
            type="video/mp4"
        ></video>
    </div>
</template>

<script>
import OnEvent from '../common/OnEvent'

export default {
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    extends: OnEvent,
    data() {
        return {
            videolink: this.propValue.url,
            // 进度 timer
            progressTimer: null,
            timeStr: '00:00/00:00',
            videoState: 'el-icon-video-pause',
        }
    },
    watch: {
        'propValue.url': function () {
            this.changevideo()
        },
        'element.style.width': function () {
            this.render()
        },
        'element.style.height': function () {
            this.render()
        },
    },
    mounted() {
        this.canvas = this.$refs.canvas
        this.ctx = this.canvas.getContext('2d')
        this.progressBox = this.$refs.progressBox
        this.progress = this.$refs.progress
        this.video = this.$refs.video
        this.render()
    },
    methods: {
        render() {
            function renderWord() {
                const { width, height } = this.element.style
                this.canvas.width = width
                this.canvas.height = height
                this.ctx.clearRect(0, 0, width, height)
                this.ctx.drawImage(this.video, 0, 0, width, height)
                setTimeout(renderWord.bind(this), 0)
            }
            setTimeout(renderWord.bind(this), 0)
        },

        changevideo() {
            this.videolink = this.propValue.url
        },

        // 推进进度条
        changeProgress() {
            this.timeStr = this.parseTime(this.video.currentTime) + '/' + this.parseTime(this.video.duration)
            let percent = this.video.currentTime / this.video.duration
            this.progress.style.width = percent * 100 + '%'
        },
        
        // 计算时长并给时间补0
        parseTime(value) {
            if (!value) return ''
            let interval = Math.floor(value)
            let minute = (Math.floor(interval / 60)).toString().padStart(2, '0')
            let second = (interval % 60).toString().padStart(2, '0')
            return `${minute}:${second}`
        },

        // 点击进度条的任意地方
        ProgressBox(e) {
            clearInterval(this.progressTimer)
            // vue中don元素获取坐标数值用 getBoundingClientRect()
            let length = e.pageX - this.progressBox.getBoundingClientRect().x
            let percent = length / this.progressBox.getBoundingClientRect().width
            this.video.currentTime = percent * this.video.duration
            this.video.play()
            // 显示视频在播放的样式
            this.progressTimer = setInterval(this.changeProgress, 60)
        },

        // 播放和暂停
        ProgressStop() {
            if (this.video.paused) {
                // 播放后，需要推进进度条
                this.video.play()
                this.videoState = 'el-icon-video-pause'
                this.progressTimer = setInterval(this.changeProgress, 60)
            } else {
                // 暂停后，需要停止推进进度条
                this.video.pause()
                this.videoState = 'el-icon-video-play'
                clearInterval(this.progressTimer)
            }
        },
    },
}
</script>
<style scoped>
    .ctrl-box {
        width: 100%;
    }
    .ctrl-box .progress-box {
        width: 70%;
        display:inline-block;
        position: relative;
        height: 10px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: 1px solid rgb(131, 175, 155);
        overflow: hidden;
        cursor: pointer;
    }
    .ctrl-box .progress-box .progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: rgb(131, 175, 155);
    }
    .ctrl-box .play-btn {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .ctrl-box .progress-time {
        display: inline-block;
    }

    .btn-box {
        display:inline-block;
        height: 100%;
        width: 30%;
    }

    .btn-box > .progress-time {
        margin-left: 7px;
        color: blueviolet;
    }
</style>