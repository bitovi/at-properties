<template>
    <div class="dlp-testimonial">
        <p class="dlp-testimonial-content"><slot /></p>
        <dlp-rating v-if="score" :score="score"></dlp-rating>
    </div>
</template>

<script>
export default {
    name: 'dlp-testimonial',
    props: {
        score: {
            type: [Number, null],
            default: null,
            required: false
        }
    }
}
</script>