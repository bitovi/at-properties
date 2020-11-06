<template>
    <div class="dlp-social">
        <a v-if="facebook" :href="facebook" target="blank" aria-label="Facebook">
            <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
        </a>
        <a v-if="instagram" :href="instagram" target="blank" aria-label="Instagram">
            <svg class="icon icon-instagram"><use xlink:href="#icon-instagram"></use></svg>
        </a>
        <a v-if="twitter" :href="twitter" target="blank" aria-label="Twitter">
            <svg class="icon icon-twitter"><use xlink:href="#icon-twitter"></use></svg>
        </a>
        <a v-if="youtube" :href="youtube" target="blank" aria-label="YouTube">
            <svg class="icon icon-youtube"><use xlink:href="#icon-youtube"></use></svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'dlp-social',
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