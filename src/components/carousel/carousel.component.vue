<template>
    <div class="dlp-carousel" v-bind="$attrs">
        <swiper 
            ref="mySwiper"
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
import { SCREENS } from '../../constants'


export default {
    name: 'dlp-carousel',
    props: {
        perPage: {
            type: Array,
            default: () => [[SCREENS.sm, 2], [SCREENS.md, 4], [SCREENS.lg, 6]]
        }
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 'auto',
                spaceBetween: 30,
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
            return this.$refs.mySwiper.$swiper
        }
    },
}
</script>