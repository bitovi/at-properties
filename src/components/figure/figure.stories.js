import DLPFigure from './figure.component.vue'

export default {
    title: 'Components/Figure',
    component: DLPFigure
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DLPFigure },
    template: '<dlp-figure v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
    sm: 'http://placekitten.com/100/150',
    md: 'http://placekitten.com/200/300',
    lg: 'http://placekitten.com/400/600',
    alt: 'A placeholder Kitten',
    caption: 'Dr. Mittens III'
}

export const NoBorder = Template.bind({});
NoBorder.args = {
    sm: 'http://placekitten.com/100/150',
    md: 'http://placekitten.com/200/300',
    lg: 'http://placekitten.com/400/600',
    alt: 'A placeholder Kitten',
    caption: 'Dr. Mittens III',
    showBorder: false
}