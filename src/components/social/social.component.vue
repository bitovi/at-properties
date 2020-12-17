<template>
    <div class="dlp-social">
        <a v-if="facebook" :href="facebook" target="blank" aria-label="Facebook">
            <svg class="icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
        </a>
        <a v-if="instagram" :href="instagram" target="blank" aria-label="Instagram">
            <svg class="icon-instagram"><use xlink:href="#icon-instagram"></use></svg>
        </a>
        <a v-if="twitter" :href="twitter" target="blank" aria-label="Twitter">
            <svg class="icon-twitter"><use xlink:href="#icon-twitter"></use></svg>
        </a>
        <a v-if="linkedin" :href="linkedin" target="blank" aria-label="linkedin">
            <svg class="icon-linkedin"><use xlink:href="#icon-linkedin"></use></svg>
        </a>
        <a v-if="youtube" :href="youtube" target="blank" aria-label="YouTube">
            <svg class="icon-youtube"><use xlink:href="#icon-youtube"></use></svg>
        </a>
        <a v-if="website" :href="website" target="blank" aria-label="Website">
            <svg class="icon-earth"><use xlink:href="#icon-earth"></use></svg>
        </a>
        <a v-if="lender" :href="lender" target="blank" aria-label="Equal Housing Lender">
            <svg class="icon-lender"><use xlink:href="#icon-equal-housing"></use></svg>
        </a>
        <a v-if="realtor" :href="realtor" target="blank" aria-label="Member National Association of Realtors">
            <svg class="icon-realtor"><use xlink:href="#icon-realtor"></use></svg>
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
        linkedin: {
            type: String,
            default: null
        },
        youtube: {
            type: String,
            default: null
        },
        website: {
            type: String,
            default: null
        },
        lender: {
            type: String,
            default: null
        },
        realtor: {
            type: String,
            default: null
        }
    }
}
</script>