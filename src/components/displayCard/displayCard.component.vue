<template>
    <figure class="dlp-display-card" v-bind="$attrs">
        <div class="dlp-display-card-content" :class="[{ 'ar': ar }, ar]">
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
            type: String
        },
        href: {
            type: String
        },
        click: {
            type: Function
        },
        caption: {
            type: String
        },
        ar: {
            type: String,

        }
    }
}
</script>