<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-form>
            <el-form-item label="倒计时内容">
                <el-input v-model="curComponent.propValue.text" />
            </el-form-item>
            <el-form-item label="开始时间">
                <div class="block">
                    <el-date-picker

                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        @change="getTimestamp">
                    </el-date-picker>
                </div>
            </el-form-item>
            <el-form-item label="结束时间">
                <div class="block">
                    <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="选择日期"
                        @change="getTimestamp">
                    </el-date-picker>
                </div>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import { styleData, textAlignOptions, borderStyleOptions, verticalAlignOptions, selectKey, optionMap } from '@/utils/attr'
import CommonAttr from '@/custom-component/common/CommonAttr.vue'

export default {
    components: { CommonAttr },

    data() {
        return {
            optionMap,
            styleData,
            textAlignOptions,
            borderStyleOptions,
            verticalAlignOptions,
            selectKey,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date())
                    },
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    },
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', date)
                    },
                }],
            },
            value1: '',
            value2: '',
        }
    },
    computed: {
        styleKeys() {
            if (this.curComponent) {
                const curComponentStyleKeys = Object.keys(this.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },

        getTimestamp() {
            this.curComponent.propValue.starttime = this.value1
            this.curComponent.propValue.endtime = this.value2
            this.curComponent.propValue.diff = this.value2 % 1000 - this.value1 % 131
        },
    },
}
</script>

<style lang="scss" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>
