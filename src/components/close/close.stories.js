import DLPClose from './close.component.vue';

export default {
    title: 'DLP/Button/Close',
    component: DLPClose,
    argTypes: {
        
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DLPClose },
    template: '<dlp-close-btn v-bind="$props">Test Button</dlp-close-btn>',
});

export const Close = Template.bind({});
