
<template>
    <div 
        class="dlp-video-modal__wrapper" 
        @click.self="close" 
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
            <dlp-bg-ripple ref="dlpVideoBg" @openDone="showContent" @closeDone="cleanup"/>
            <div 
                :class="{ 'hide': isAnimated }"
                class="dlp-video-modal content-grid" 
                ref="dlpContent"
                >
                <nav class="absolute right-0 mr-4 lg:mr-12 lg:mt-12 z-40">
                    <h1 
                        ref="ElDescription"
                        tabindex="0" 
                        id="modalDescription"
                        class="visually-hidden">
                        {{srHeading}}
                    </h1>
                    <dlp-button @click.stop="close" :icon="true" theme="light">
                        <svg role="img" aria-label="Close"><use xlink:href="images/icons/icons.svg#icon-close"></use></svg>
                    </dlp-button>
                </nav>
                <div class="dlp-video-modal__content col-span-4 md:col-span-12 lg:col-span-12 lg:col-start-3" >
                    <div class="dlp-video-modal__border">
                        <div class="dlp-video-modal__player">
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

        document.addEventListener("resize", this.cleanup)
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
            console.log('cleanup')
            clearAllBodyScrollLocks(this.$el)
            
            this.$emit('close')
            this.showModal = false

            window.removeEventListener('resize', this.cleanup);
            
        },
        close: function() {
            gsap.to(this.$refs.dlpContent, { 
                opacity: 0,
                onComplete: () => {
                    this.$refs.dlpVideoBg.close(this.openerEl)
                }
            })
        },
        setFocus: function() {
            this.$refs.ElDescription.focus({preventScroll: true})
        }
    }
}
</script>
