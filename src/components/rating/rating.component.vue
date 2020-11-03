<template>
    <div class="sc-rating" role="img" :aria-label="`Rated ${score} out of 5 stars`">
        <span v-for="n in score" :key="`rating-${n}`" aria-hidden="true">
            <svg class="icon icon-star-full"><use xlink:href="#icon-star-full"></use></svg>
        </span>
    </div>
</template>

<script>
export default {
    name: "sc-rating",
    props: {
        score: {
            type: Number,
            required: true,
            validator: (value) => {
                return value > 0 && value <= 5
            }
        }
    }
}
</script>
