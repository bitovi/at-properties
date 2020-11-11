import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
import VueCarousel from 'vue-carousel';
 
import './components/index'

Vue.use(VueScrollactive);
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
