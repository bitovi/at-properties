<template>
    <div class="dlp-carousel" v-bind="$attrs">
        <swiper 
            ref="dlpSwiper"
            :options="swiperOptions"
            class="dlp-carousel-items">
            <slot/>
        </swiper>
        <div class="dlp-carousel-nav">
            <div class="dlp-carousel-nav-handle"></div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'dlp-carousel',
    props: {
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            swiperOptions: {
                ...this.options,
                slidesPerView: 'auto',
                loop: true,
                pagination: {
                    type: 'custom',
                    el: '.dlp-carousel-nav'
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.dlpSwiper.$swiper
        }
    },
}
</script>