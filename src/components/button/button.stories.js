import { withDesign } from 'storybook-addon-designs'
import DLPButton from './button.component.vue'

export default {
    title: 'Components/Buttons/Default',
    component: DLPButton,
    argTypes: {
        nativeType: { control: { type: 'select', options: [null, 'button', 'submit', 'reset'] } }
    },
    decorators: [withDesign]
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DLPButton },
    template: '<dlp-button v-bind="$props">Button Primary</dlp-button>',
});

export const Primary = Template.bind({});
Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/9Dh5lVMksIBNrDGMlPsWMk/DLP-Design-Library?node-id=56%3A0',
    },
}
