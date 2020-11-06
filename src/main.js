import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
 
import './components/index'

Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
