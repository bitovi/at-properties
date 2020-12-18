import Vue from 'vue'
import App from './App.vue'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ExpoScaleEase } from "gsap/EasePack";
import VueScrollactive from 'vue-scrollactive';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueYoutube from 'vue-youtube'

import 'swiper/css/swiper.min.css'

import './components/index'

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ExpoScaleEase);

Vue.use(VueScrollactive);
Vue.use(VueAwesomeSwiper);
Vue.use(VueYoutube);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
