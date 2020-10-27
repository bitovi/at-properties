<template>
    <div class="sc-rating" :aria-label="`Rated ${score} out of 5 stars`">
        <span v-for="n in score" :key="`rating-${n}`" aria-hidden="true">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0Z" fill="#D22630"/>
            </svg>
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
