<template>
    <div class="dlp-carousel" v-bind="$attrs">
        <swiper 
            ref="dlpSwiper"
            :options="swiperOptions"
            class="dlp-carousel-items">
            <slot/>
        </swiper>
        <div v-if="hasScrollNav" :id="`dlp-carousel-nav-${swiperId}`" class="dlp-carousel-nav swiper-scrollbar"></div>
    </div>
</template>
<script>

export default {
    name: 'dlp-carousel',
    props: {
        options: {
            type: Object,
            required: false
        },
        hasScrollNav:{
            type: Boolean,
            default: false
        }
    },
    data() {
        //https://github.com/surmon-china/vue-awesome-swiper/issues/717
        //Fix pagination when multiple swipers used
        const _id = 'swiper' + Math.round(Math.random() * 100000)
        return {
            swiperId: _id,
            swiperOptions: {
                ...this.options,
                slidesPerView: 'auto',
                scrollbar: this.hasScrollNav ? {
                    el: `#dlp-carousel-nav-${_id}`
                } : false
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