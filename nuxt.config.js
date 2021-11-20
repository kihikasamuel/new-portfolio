'use-strict'
export default {
    head: {
        title: 'Samkihika.site: Fullstack JavaScript Developer' || process.env.npm_package_name,
        link: [
            {rel: 'icon', href: 'favicon.png', type: 'image/x-icon'}
        ],
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            {hid: 'description', name: 'description', 
                content: 'Get a developer for your next web project. Learn more about JavaScript and more about web development.'
            },
            {hid: 'keywords', name: 'keywords', 
                content: 'Web development, dullstack developer, developer, software, software consultants in kenya, JavaScript couch, Sam Kihika, Kihika, Sam, Best portfolio, remote devs, best developers'
            }
        ]
    },
    loading: {
        name: 'three-bounce',
        duration: 200,
        continuous: true,
        color: 'aquamarine',
        failedColorString: 'black',
        height: '1px'
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
        icons: true, //explicitly enable the IconsPlugin
    }
    
}