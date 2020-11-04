<template>
    <header v-bind="$attrs" class='sc-page sc-hero justify-center' :style="`background-image: url('${backgroundUrl}')`">
        <hgroup class="container mx-auto">
            <h1 class="title-heading text-center" :class="{ 'accent accent-wide accent-centered accent-below': subheading}">{{heading}}</h1>
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