<template>
    <div class="dlp-video-card" :title="title" @click="onClick">
        <dlp-figure 
            :sm="sm"
            :md="md"
            :lg="lg"
            :xl="xl"
            :alt="alt"
            :caption="caption"
            :showBorder="showBorder"
            :ar="ar"
            :animate="animate"
        />
        <div class="dlp-video-card--overlay">
            <svg class="icon-play"><use xlink:href="#icon-play"></use></svg>
        </div>
        <dlp-video-modal ref="VideoCardModal" :videoId="videoId" :caption="caption"/>
    </div>
</template>

<script>
export default {
    name: 'dlp-video-card',
    props: {
        sm: {
            type: String,
            default: null
        },
        md: {
            type: String,
            default: null
        },
        lg: {
            type: String,
            default: null
        },
        xl: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: null
        },
        caption: {
            type: String,
            default: null
        },
        showBorder: {
            type: Boolean,
            default: true
        },
        ar: {
            type: String,
            default: "ar ar--16-9"
        },
        animate: {
            type: String,
            default: null,
            validator: function(val) {
                return ['shrink', null].indexOf(val) !== -1
            }
        },
        videoId: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick(evt) {
            this.$refs.VideoCardModal.open(evt)
        }
    }
}
</script>