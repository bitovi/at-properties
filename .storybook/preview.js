import Vue from 'vue'
import '../src/components/index'
import '../src/assets/base.styles.scss'

import { themes } from '@storybook/theming';

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Welcome', 'Change Log', 'Foundation', ['Design Tokens', 'Breakpoints', 'Color', 'Typography', 'Object Styles', 'Iconography', 'Imagery', 'Motion', 'Structure', 'Spacing', 'Inclusive Design'], 'Components', ['Button', 'Figure', 'Heading', 'Main Navigation', 'Modal', 'Paragraph', 'Property', 'Section', 'Social', 'Statistic', 'Testimonial', 'Video']]
    }
  },
  docs: {
    theme: themes.light,
  }
}