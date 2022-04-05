import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRoad, faVideo, faDroplet, faGear, faBuilding, faChartColumn, faAngleRight, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRoad, faVideo, faDroplet, faGoogle, faGear, faBuilding, faChartColumn, faAngleRight, faDollarSign, faFacebookF, faInstagram, faTwitter, faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
