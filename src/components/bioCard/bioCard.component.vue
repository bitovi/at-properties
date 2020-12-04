<template>
    <figure class="dlp-bio-card">
        <img :src="source" :alt="name"/>
        <figcaption>
            <span class="head-6 block mb-2">{{name}}</span>
            <span v-if="caption" class="accent--above-center block">{{caption}}</span>
        </figcaption>
    </figure>
</template>
<script>
export default {
    name: 'dlp-bio-card',
    props: {
        source: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        caption: {
            type: String,
            default: null
        },
    }
}
</script>