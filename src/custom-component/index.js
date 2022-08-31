import Vue from 'vue'

const components = [
    'Picture',
    // 'VText',
    'VButton',
    // 'VTable',
    'VLink',
    'Vactivity',
    'Video',
    'Vboard',
    'VChart',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
})

const svgs = [
    'SVGStar',
    'SVGTriangle',
]

svgs.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/svgs/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/svgs/${key}/Attr`))
})
