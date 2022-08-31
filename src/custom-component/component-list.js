// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    collapseName: '', // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
    linkage: {
        duration: 0, // 过渡持续时间
        data: [ // 组件联动
            {
                id: '', // 联动的组件 id
                label: '', // 联动的组件名称
                event: '', // 监听事件
                style: [{ key: '', value: '' }], // 监听的事件触发时，需要改变的属性
            },
        ],
    },
}

// 编辑器左侧组件列表
const list = [

    // 文本框组件
    // {
    //     component: 'VText',
    //     label: '文字',
    //     propValue: '双击编辑文字',
    //     icon: 'wenben',
    //     request: {
    //         method: 'GET',
    //         data: [],
    //         url: '',
    //         series: false,
    //         time: 1000,
    //         paramType: '', // string object array
    //         requestCount: 0, // 请求次数限制，0 为无限
    //     },
    //     style: {
    //         width: 200,
    //         height: 28,
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: '',
    //         color: '',
    //     },
    // },

    // 按钮组件
    {
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: 'button',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },

    // 图片组件
    {
        component: 'Picture',
        label: '图片',
        icon: 'el-icon-picture-outline',
        propValue: {
            url: require('@/assets/title.jpg'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },

    // 表格组件
    // {
    //     component: 'VTable',
    //     label: '表格',
    //     icon: 'biaoge',
    //     propValue: {
    //         data: [
    //             ['表头1', '表头2', '表头3'],
    //             ['内容1', '内容2', '内容3'],
    //         ],
    //         stripe: true,
    //         thBold: true,
    //     },
    //     request: {
    //         method: 'GET',
    //         data: [],
    //         url: '',
    //         series: false,
    //         time: 1000,
    //         paramType: '', // string object array
    //         requestCount: 0, // 请求次数限制，0 为无限
    //     },
    //     style: {
    //         width: 600,
    //         height: 200,
    //         fontSize: '',
    //         fontWeight: 400,
    //         textAlign: 'center',
    //         color: '',
    //         backgroundColor: 'rgba(255, 255, 255, 1)',
    //     },
    // },

    // 链接组件
    {
        component: 'VLink',
        label: '链接',
        propValue: {
            text: '添加链接',
            link: '',
        },
        icon: 'el-icon-link',
        style: {
            width: 200,
            height: 28,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
        },
    },

    // 公告组件
    {
        component: 'Vactivity',
        label: '公告',
        propValue: {
            text: '活动',
            starttime: '',
            endtime: '',
            diff: 0,
        },
        icon: 'el-icon-postcard',
        style: {
            width: 360,
            height: 40,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '3',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: 'rgb(255, 255, 255)',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },

    // 视频组件
    {
        component: 'Video',
        label: '视频',
        icon: 'el-icon-video-camera',
        propValue: {
            url: require('@/assets/video1.mp4'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 500,
            height: 300,
            borderRadius: '',
            backgroundColor: '',
        },
    },
    {
        component: 'Vboard',
        label: '画板',
        propValue: {
            colors: ['black', 'red', 'orange', 'green', 'blue'],
            nowcolor: '',
            eraser: false,
            clear: false,
        },
        icon: 'el-icon-data-board',
        style: {
            width: 600,
            height: 300,
            borderRadius: '',
            backgroundColor: 'white',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            borderStyle: 'solid',
            verticalAlign: 'middle',
        },
    },
    {
        component: 'VChart',
        label: '图表',
        propValue: {
            chart: 'optionline',
            list: [
                {
                    name: '折线图',
                    count: 5,
                }, 
                {
                    name: '柱状图',
                    count: 5,
                },
                {
                    name: '圆环图',
                    count: 5,
                },
                {
                    name: '散点图',
                    count: 7,
                },
                {
                    name: '趋势图',
                    count: 9,
                },
            ],
            data: [],
        },
        icon: 'el-icon-data-analysis',
        style: {
            width: 500,
            height: 300,
            borderRadius: '',
            backgroundColor: 'white',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            borderStyle: 'solid',
            verticalAlign: 'middle',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
