# new-portfolio
Fresh crafted portfolio/personal website.
Building it first in pure html and css(bootstrap).
<h2>Hello</h2>


1. Run - npm install bootstrap-vue

2. Add bootstrap-vue/nuxt to modules section of your nuxt.config.js file.
module.exports = {
  modules: ['bootstrap-vue/nuxt']
}

3. If using custom bootstrap scss add the following lines inside the module.export
bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  }

4. By default the bootstrap IconsPlugin is not enabled. To enable it explicitly add the following lines:
bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  }

5. If you’d prefer to specify the icons you want to  be enabled globally use:
bootstrapVue: {
    // Add the desired icon components to the `components` array
    components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears']
  }


<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Get a developer for your next web project.
    Learn more about JavaScript and more about web development.">
    <meta name="keywords" content="web development, fullstack developer, developer, software, software consultants in kenya,
    JavaScript couch, Sam Kihika">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon">
    
  <title>Samkihika.site: Fullstack JavaScript Developer</title>
