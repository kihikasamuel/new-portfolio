# new-portfolio
<h1>See it here 👉 <a href="https://samkihika.site">new portfolio</a></h1><br>
Fresh crafted portfolio/personal website.
Built it first using pure html and css(bootstrap).
Built the second and current version using Nuxt.js, Vue.js and bootstrap.
<h2>Hello 👋</h2>
<h6>You can clone it and use it for your portfolio too</h6>


#1. Run - npm install bootstrap-vue

#2. Add bootstrap-vue/nuxt to modules section of your nuxt.config.js file.
module.exports = {
  modules: ['bootstrap-vue/nuxt']
}

#3. If using custom bootstrap scss add the following lines inside the module.export
bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  }

#4. By default the bootstrap IconsPlugin is not enabled. To enable it explicitly add the following lines:
bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
#    icons: true
#  }

#5. If you’d prefer to specify the icons you want to  be enabled globally use:
#bootstrapVue: {
 #   // Add the desired icon components to the `components` array
  #  components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears']
 # }

