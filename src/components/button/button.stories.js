import DLPButton from './button.component.vue';

export default {
    title: 'DLP/Button',
    component: DLPButton,
    argTypes: {
        nativeType: { control: { type: 'select', options: [null, 'button', 'submit', 'reset'] } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DLPButton },
    template: '<dlp-button v-bind="$props">Test Button</dlp-button>',
});

export const Primary = Template.bind({});
