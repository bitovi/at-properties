import Vue from 'vue'
import '../src/components/index'
import '../src/assets/base.styles.scss'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

