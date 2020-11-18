import Vue from 'vue'
import '../src/components/index'
import '../src/assets/base.styles.scss'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['About', ['DLP', 'Design System'], 'Foundation', ['Design Tokens', 'Platform Scale', 'Color', 'Typography', 'Object Styles', 'Iconography', 'Imagery', 'Layout', 'Motion', 'Inclusive Design'], 'Components', 'Example']
    }
  }
}
