<template>
    <div class="dlp-timeline" v-bind="$attrs">
        <swiper 
            ref="dlpTimeline"
            :options="timelineOptions"
            class="dlp-timeline-items">
            <slot/>
        </swiper>
        <div class="dlp-timeline--line"></div>
    </div>
</template>
<script>
export default {
    name: 'dlp-timeline',
    props: {
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            timelineOptions: {
                ...this.options,
                slidesPerView: 'auto'
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.dlpTimeline.$swiper
        }
    },
}
</script>