import Vue from 'vue'
import '../src/components/index'
import '../src/assets/base.styles.scss'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Welcome', 'Foundation', ['Front-End Stack', 'Design System', 'Design Tokens', 'Breakpoints', 'Color', 'Typography', 'Object Styles', 'Iconography', 'Imagery', 'Layout', 'Motion'], 'Components', ['Button', 'Figure', 'Heading', 'Main Navigation', 'Modal', 'Paragraph', 'Property', 'Section', 'Social', 'Statistic', 'Testimonial', 'Video']]
    }
  }
}