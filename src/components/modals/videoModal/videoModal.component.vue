
<template>
    <div 
        class="dlp-video-modal-mask" 
        @click.self="close" 
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
            <dlp-bg-ripple ref="dlpVideoBg" @openDone="showContent" @closeDone="cleanup"/>
            <div 
                :class="{ 'fade-in': isAnimated }"
                class="dlp-video-modal content-grid" 
                ref="dlpContent">
                <nav class="absolute right-0 mr-4 lg:mr-12 lg:mt-12">
                    <h1 
                        ref="ElDescription"
                        tabindex="0" 
                        id="modalDescription"
                        class="visually-hidden">
                        {{srHeading}}
                    </h1>
                    <dlp-close-btn @click.stop="close" :light="true" />
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
import Background from '../util/background.component.vue'
import '../util/background.styles.scss'
import { hasMotion } from '../../../constants'

// ref to <body> for locking scroll
const ElBody = document.getElementsByTagName("body")[0]

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
            
            try {
                ElBody.classList.add('lock-scroll')
            } catch (error) {
                console.warn('Unable to fix scroll positon')   
            }
        },
        showContent() {
            if(hasMotion){
                gsap.to(this.$refs.dlpContent, { 
                    opacity: 1
                })
            }
        },
        cleanup() {
            try {
                ElBody.classList.remove('lock-scroll')
            } catch (error) {
                console.warn('Unable to release scroll position')   
            }
            
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
