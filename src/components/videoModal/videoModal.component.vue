// Possible solution to showing ads
// It's a bit trickstery 
// https://support.google.com/policies/answer/9664901

// also
// https://www.geekytech.co.uk/remove-disable-related-videos-youtube-embed/

// Known Dev Bug:
// The target origin provided ('https://www.youtube.com') does not match the recipient window's origin ('http://localhost:8081').
// When in production with https, this should disapear
<template>
    <transition
        name="fade"
        v-on:after-enter="setFocus"
        >
        <div 
            class="dlp-video-modal-mask" 
            @click.self="close" 
            v-if="showModal"
            role="dialog"
            aria-modal="true"
            aria-describedby="modalDescription">
                <div class="dlp-video-modal">
                    <nav class="absolute right-0 mr-12">
                        <h1 
                            ref="ElDescription"
                            tabindex="0" 
                            id="modalDescription"
                            class="visually-hidden">
                            {{srHeading}}
                        </h1>
                        <dlp-close-btn @click.stop="close" :light="true" />
                    </nav>
                    <div class="dlp-video-modal-content" >
                        <div class="dlp-video-modal-player">
                            <youtube :fitParent="true" :video-id="videoId" :player-vars="playerVars"/>
                        </div>
                        <span v-if="caption" class="head-6 accent accent-centered text-white pt-4">{{caption}}</span>
                    </div>
                </div>
        </div>
    </transition>
</template>
<script>
import A11yStrings from '../../assets/strings/a11y.i18n.json'
// ref to <body>
const ElBody = document.getElementsByTagName("body")[0]

export default {
    name: 'dlp-video-modal',
    props: {
        srHeading:{
            type: String,
            default: A11yStrings.defaults.videoModal.heading
        },
        videoId: {
            type: String,
            default: "U0DYr9w9SX0"
        },
        caption: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            showModal: false,
            playerVars: {
                rel: 0,
                autoplay: 1
            }
        }
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.close()
            }
        })  
    },
    methods: {
        open() {
            try {
                ElBody.classList.add('dlp-modal-open')
            } catch (error) {
                console.warn('Unable to fix scroll positon')   
            }
            
            this.showModal = true
        },
        close: function() {
            try {
                ElBody.classList.remove('dlp-modal-open')
            } catch (error) {
                console.warn('Unable to release scroll position')   
            }
            this.showModal = false
            this.$emit('close')
        },
        setFocus: function() {
            this.$refs.ElDescription.focus({preventScroll: true})
        }
    }
}
</script>
