<template>
    <header v-bind="$attrs" class='dlp-page dlp-hero justify-center' :style="`background-image: url('${backgroundUrl}')`">
        <hgroup class="container mx-auto">
            <h1 class="title-heading text-center accent accent-wide accent-centered accent-below">{{heading}}</h1>
            <h2 class="presentation-heading" v-if="subheading">{{subheading}}</h2>
        </hgroup>
    </header>
</template>

<script>
export default {
    name: 'dlp-title-page',
    props: {
        backgroundUrl: {
            type: String,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        subheading: {
            type: String,
            required: false
        }
    },
}
</script>