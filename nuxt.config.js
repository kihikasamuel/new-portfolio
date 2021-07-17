'use-strict'
export default {

    // custom css
    css: [
        '~/assets/all.min.css',
        '~/assets/style.css'
    ],

    // auto import components
    components: true,

    // rendering
    ssr:false,

    // modules
    modules: ['bootstrap-vue/nuxt'],

    bootstrapVue: {
        //bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false, // Or `bvCSS: false`
        icons: true //explicitly enable the IconsPlugin
    }
    
}