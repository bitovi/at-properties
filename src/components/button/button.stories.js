import DLPButton from './button.component.vue';

export default {
  title: 'DLP/Button',
  component: DLPButton,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DLPButton },
  template: '<dlp-button type="button">Test</dlp-button>',
});

export const Primary = Template.bind({});
Primary.args = {
    
};
