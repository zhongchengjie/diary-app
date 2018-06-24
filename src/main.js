// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

// Import App Custom Styles
import IconFont from  './assets/iconfont/iconfont.scss'
import AppStyles from './assets/sass/main.scss'
import AppCss from './assets/css/app.scss'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './main.vue'

//vuex
import store from "./store"
window.store = store;

//eventBus
window.eventBus = new Vue();

//dom7对象
window.$$ = window.Dom7;

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    swipeBackPage:true
  },
  // Register App Component
  components: {
    app: App
  }
})

//在此处定义全局对象myApp
window.myApp = window.f7;
