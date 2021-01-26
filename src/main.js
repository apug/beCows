import Vue from 'vue'
import App from './App.vue'
import regeneratorRuntime from "regenerator-runtime";
import VueHtml2Canvas from 'vue-html2canvas';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(regeneratorRuntime);
Vue.use(VueHtml2Canvas);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
