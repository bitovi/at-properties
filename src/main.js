import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
import VueYoutube from 'vue-youtube'

import './components/index'

Vue.use(VueScrollactive);
Vue.use(VueYoutube);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
