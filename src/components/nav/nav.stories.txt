import Nav from './nav.component.vue';

export default {
    title: 'Components/Nav',
    component: Nav,
    argTypes: {
        
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Nav },
    template: '<dlp-nav-component />',
});

export const Primary = Template.bind({});
