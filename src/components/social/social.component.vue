<template>
    <div class="sc-social">
        <a v-if="facebook" :href="facebook" aria-label="Facebook">
            <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
        </a>
        <a v-if="instagram" :href="instagram" aria-label="Instagram">
            <svg class="icon icon-instagram"><use xlink:href="#icon-instagram"></use></svg>
        </a>
        <a v-if="twitter" :href="twitter" aria-label="Twitter">
            <svg class="icon icon-twitter"><use xlink:href="#icon-twitter"></use></svg>
        </a>
        <a v-if="youtube" :href="youtube" aria-label="YouTube">
            <svg class="icon icon-youtube"><use xlink:href="#icon-youtube"></use></svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'sc-social',
    props: {
        facebook: {
            type: String,
            default: null
        },
        instagram: {
            type: String,
            default: null
        },
        twitter: {
            type: String,
            default: null
        },
        youtube: {
            type: String,
            default: null
        }
    }
}
</script>