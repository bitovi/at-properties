<template>
    <div class="dlp-testimonial">
        <p><slot /></p>
        <dlp-rating v-if="score" :score="Number(score)"></dlp-rating>
    </div>
</template>

<script>
export default {
    name: 'dlp-testimonial',
    props: {
        score: {
            type: [Number, String],
            default: null,
            required: false
        }
    }
}
</script>