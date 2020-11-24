<template>
    <figure class="dlp-display-card" v-bind="$attrs">
        <div class="dlp-display-card-content">
            <img :src="source" :alt="caption"/>
        </div>
        <figcaption>
            <span v-if="caption" class="dlp-bio-card-caption accent accent-centered head-6">{{caption}}</span>
        </figcaption>
    </figure>
</template>
<script>
export default {
    name: 'dlp-display-card',
    props: {
        source: {
            type: String,
            default: null
        },
        href: {
            type: String,
            required: false
        },
        click: {
            type: Function,
            required: false
        },
        caption: {
            type: String,
            default: "Learn More"
        }
    }
}
</script>