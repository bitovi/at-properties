import { withDesign } from 'storybook-addon-designs'
import DLPClose from './close.component.vue'

export default {
    title: 'Components/Buttons/Close',
    component: DLPClose,
    decorators: [withDesign]
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DLPClose },
    template: '<dlp-close-btn v-bind="$props">Test Button</dlp-close-btn>',
});

export const Close = Template.bind({});
Close.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/9Dh5lVMksIBNrDGMlPsWMk/DLP-Design-Library?node-id=56%3A0',
    },
}