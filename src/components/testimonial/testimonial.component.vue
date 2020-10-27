<template>
    <div class="sc-testimonial">
        <p class="sc-testimonial-content"><slot /></p>
        <sc-rating v-if="score" :score="score"></sc-rating>
    </div>
</template>

<script>
export default {
    name: 'sc-testimonial',
    props: {
        score: {
            type: [Number, null],
            default: null,
            required: false
        }
    }
}
</script>