<template>
    <div 
        class="dlp-slide-in__wrapper"
        ref="slideWrapper"
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
        <dlp-bg-ripple ref="dlpBg" @click="close" @closeDone="cleanup"/>
        <div 
            ref="slideInner"
            :class="{ 'off-screen':isAnimated }"
            class="dlp-slide-in">
            <nav class="absolute right-0 mr-8">
                <h1 
                    ref="ElDescription"
                    tabindex="0" 
                    id="modalDescription"
                    class="visually-hidden">
                    {{srHeading}}
                </h1>
                <dlp-button @click.stop="close" :icon='true'>
                    <svg role="img" aria-label="Close"><use xlink:href="images/icons/icons.svg#icon-close"></use></svg>
                </dlp-button>
            </nav>
            <div class="dlp-slide-in-content" ref="modalContent">
                <slot />
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
    name: 'dlp-appear-modal',
    props: {
        srHeading:{
            type: String,
            default: "Beginning of dialog window. It does not collect any information. Escape will close the window."
        }
    },
    data() {
        return {
            showModal: false,
            isAnimated: hasMotion,
            openerEl: null
        }
    },
    components: {
        [Background.name]: Background
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (this.showModal && e.keyCode == 27) {
                this.slideClose()
            }
        })
    },
    methods: {
        open(evt) {
            this.showModal = true
            this.openerEl = evt

            this.$nextTick(()=> {
                if(hasMotion){
                    this.bgOpen()
                    this.slideOpen()
                }
                disableBodyScroll(this.$refs.modalContent)
            })
        },
        slideOpen() {
            gsap.to(this.$refs.slideInner, {
                right: 0,
                delay: 0
            })
        },
        slideClose() {
            gsap.to(this.$refs.slideInner, {
                right: '-100%',
                onComplete: () => {
                    this.bgClose()
                }
            })
        },
        bgOpen(){
            this.$refs.dlpBg.open(this.openerEl)
        },
        bgClose(){
            this.$refs.dlpBg.close(this.openerEl)
        },
        close() {
            this.slideClose()
            clearAllBodyScrollLocks()
        },
        cleanup: function() {
            this.showModal = false
            this.$emit('close')
        },
        setFocus: function() {
            this.$refs.ElDescription.focus({preventScroll: true})
        }
    }
}
</script>