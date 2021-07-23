'use-strict'
export default {
    head: {
        title: 'Samkihika.site: Fullstack JavaScript Developer',//process.env.npm_package_name || 
        link: [
            {rel: 'icon', href: 'favicon.jpeg', type: 'image/x-icon'}
        ],
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
        ]
    },
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