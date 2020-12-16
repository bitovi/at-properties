
<template>
    <div 
        class="dlp-video-modal-wrapper" 
        @click.self="close" 
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
            <dlp-bg-ripple ref="dlpVideoBg" @openDone="showContent" @closeDone="cleanup"/>
            <div 
                :class="{ 'hide': isAnimated }"
                class="dlp-video-modal content-grid" 
                ref="dlpContent">
                <nav class="absolute right-0 mr-4 lg:mr-12 lg:mt-12 z-10">
                    <h1 
                        ref="ElDescription"
                        tabindex="0" 
                        id="modalDescription"
                        class="visually-hidden">
                        {{srHeading}}
                    </h1>
                    <dlp-button @click.stop="close" :icon="true" theme="light">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Close">
                            <path class="shape" fill-rule="evenodd" clip-rule="evenodd" d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"/>
                        </svg>
                    </dlp-button>
                </nav>
                <div class="dlp-video-modal-content col-span-4 md:col-span-12 lg:col-span-12 lg:col-start-3" >
                    <div class="dlp-video-border">
                        <div class="dlp-video-modal-player">
                            <youtube :fitParent="true" :video-id="videoId" :player-vars="playerVars"/>
                        </div>
                    </div>
                    <span v-if="caption" class="head-6 accent--above-center text-white pt-4">{{caption}}</span>
                </div>
            </div>
    </div>
</template>
<script>
import gsap from 'gsap'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Background from '../util/background.component.vue'
import '../util/background.styles.scss'
import { hasMotion } from '../../../constants'

export default {
    name: 'dlp-video-modal',
    props: {
        srHeading:{
            type: String,
            default: "Beginning of dialog window. It does not collect any information. Escape will close the window."
        },
        videoId: {
            type: String,
            required: true
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
                autoplay: 0
            },
            isAnimated: hasMotion,
            openerEl: null
        }
    },
    components: {
        [Background.name]: Background
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.close()
            }
        })
    },
    methods: {
        open(evt) {
            this.showModal = true
            this.openerEl = evt
            this.$nextTick(()=> {
                this.$refs.dlpVideoBg.open(this.openerEl)
            })
            
            disableBodyScroll(this.$el)
        },
        showContent() {
            if(hasMotion){
                gsap.to(this.$refs.dlpContent, { 
                    opacity: 1
                })
            }
        },
        cleanup() {
            clearAllBodyScrollLocks(this.$el)
            
            this.$emit('close')
            this.showModal = false
            
        },
        close: function() {
            this.$refs.dlpVideoBg.close(this.openerEl)
            gsap.to(this.$refs.dlpContent, { 
                opacity: 0
            })
        },
        setFocus: function() {
            this.$refs.ElDescription.focus({preventScroll: true})
        }
    }
}
</script>
