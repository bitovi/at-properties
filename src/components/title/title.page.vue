<template>
    <header v-bind="$attrs" class='dlp-page dlp-hero justify-center' style="position:relative; overflow: hidden;">
        <div class="bg" :style="`background-image: url('${backgroundUrl}'); background-repeat: no-repeat; background-size: cover; position:absolute; height:100%; width:100%; z-index: 0; transform: perspective(100px) translate3d(0, 0, 30px); opacity: 0.3; will-change: transform, opacity;`">
        </div>
        <hgroup class="container mx-auto" style="z-index: 1; transform: perspective(100px) translate3d(0px, 0, 0); will-change: transform;">
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