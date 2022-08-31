<template>
    <div>
        <div ref="EChart" style="width: 500px; height:300px;">
        </div>
    </div>
</template>

<script>
import { optionsum } from '@/custom-component/VChart/data.js'
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
            optionsum,
        }
    },
    watch: {
        'propValue.chart': function () {
            this.changechart()
        },
        'propValue.data': function () {
            this.changechart()
        },
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.echart = this.$echarts.init(this.$refs.EChart)
        this.render()
    },
    methods: {
        render() {
            // 清除之前的数据参数
            this.echart.clear()
            let EChart = this.echart
            let option = this.optionsum[this.propValue.chart]
            if (this.propValue.data.length > 0) option.series[0].data = this.propValue.data
            // 设置参数
            let config = {
                ...option,
            }
            // 配置参数
            EChart.setOption(config)
        },

        changechart() {
            this.render()
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
