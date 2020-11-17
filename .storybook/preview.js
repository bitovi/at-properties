import Vue from 'vue'
import '../src/components/index'
import '../src/assets/base.styles.scss'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Foundation', ['Platform Scale', 'Color', 'Typography', 'Object Styles', 'Motion', 'Iconography', 'Imagery', 'Layout', 'Inclusive Design'], 'Components', 'Example']
    }
  }
}