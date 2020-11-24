<template>
    <figure class="dlp-bio-card">
        <img :src="source" :alt="name"/>
        <figcaption>
            <span class="dlp-bio-card-name head-6">{{name}}</span>
            <span v-if="caption" class="dlp-bio-card-caption accent accent-centered">{{caption}}</span>
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