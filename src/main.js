import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//font awesome
// library.add(faUserSecret)
// library.add(faEnvelope)
// library.add(faUser)
// library.add(faFacebook)
// library.add(faTwitter)
// library.add(faJs, faVuejs);

// Vue.component('font-awesome-icon', FontAwesomeIcon)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
