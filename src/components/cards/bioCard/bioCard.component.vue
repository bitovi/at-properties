<template>
    <figure class="dlp-bio-card">
        <div class="dpl-bio-card--image" :class="[{ 'ar': ar}, ar]">
            <img :src="source" :alt="name"/>
        </div>
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
        ar: {
            type: String
        }
    }
}
</script>