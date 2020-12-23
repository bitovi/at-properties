<template>
  <div class="dlp-rating" role="img" :aria-label="`Rated ${score} out of 5 stars`">
    <span v-for="n in score" :key="`rating-${n}`" aria-hidden="true">
      <svg class="icon-star"><use xlink:href="#icon-star"></use></svg>
    </span>
  </div>
</template>

<script>
export default {
    name: "dlp-rating",
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
