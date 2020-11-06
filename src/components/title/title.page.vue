<template>
    <header v-bind="$attrs" class='dlp-page dlp-hero justify-center' :style="`background-image: url('${backgroundUrl}')`">
        <hgroup class="container mx-auto">
            <h1 class="head-1 text-center accent accent-wide accent-centered accent-below">{{heading}}</h1>
            <h2 class="head-6 text-center" v-if="subheading">{{subheading}}</h2>
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