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
      order: [
        'Design System', [
          'Welcome', 'Change Log'
        ], 
        'Style Guide', [
          'Design Tokens', 'Breakpoints', 'Color', 'Typography', 'Object Styles', 
          'Iconography', 'Imagery', 'Structure', 'Spacing', 'Animation', 'Inclusive Design'
        ], 
        'Pattern Library', [
          'Containers', [
            'Navigation', 'Section', 'Footer', 'Modal'
          ], 
          'Components', [
            'Button', 'Figure', 'Heading', 'Paragraph', 'Property', 'Social', 'Statistic', 'Testimonial', 'Video'
          ]
        ]
      ]
    }
  },
  docs: {
    theme: themes.light,
  }
}