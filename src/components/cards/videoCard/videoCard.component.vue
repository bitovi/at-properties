<template>
    <div class="dlp-video-card" :title="title" @click="onClick">
        <div class="dlp-video-card--overlay" :class="theme">
            <svg width="126" height="120" viewBox="0 0 126 120" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63 0.904297C28.5 0.904297 0.5 27.571 0.5 60.4281C0.5 93.2853 28.5 119.952 63 119.952C97.5 119.952 125.5 93.2853 125.5 60.4281C125.5 27.571 97.5 0.904297 63 0.904297ZM50.4998 87.2137V33.6423L87.9998 60.428L50.4998 87.2137Z" />
            </svg>
        </div>
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
        },
        theme: {
            type: String,
            default: 'light',
            validator: function(val) {
                return ['dark', 'light'].indexOf(val) !== -1
            }
        }
    },
    methods: {
        onClick(evt) {
            this.$refs.VideoCardModal.open(evt)
        }
    }
}
</script>