<template>
    <div 
        class="dlp-slide-in-wrapper"
        ref="slideWrapper"
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
            <dlp-bg-ripple ref="dlpBg" @openDone="slideOpen"  @closeDone="cleanup"/>
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
                    <dlp-close-btn @click.stop="slideClose" />
                </nav>
                <div class="dlp-slide-in-content" >
                    <slot />
                </div>
            </div>
            
    </div>
</template>
<script>
// import { delay } from 'lodash'
import gsap from 'gsap'
import Background from '../util/background.component.vue'
import '../util/background.styles.scss'

import { hasMotion } from '../../../constants'

import A11yStrings from '../../../assets/strings/a11y.i18n.json'

// ref to <body>
const ElBody = document.getElementsByTagName("body")[0]

export default {
    name: 'dlp-appear-modal',
    props: {
        srHeading:{
            type: String,
            default: A11yStrings.defaults.contentModal.heading
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
                }
            })
            
            try {
                ElBody.classList.add('lock-scroll')
            } catch (error) {
                console.warn('Unable to fix scroll positon')   
            }
        },
        slideOpen() {
            gsap.to(this.$refs.slideInner, {
                right: 0
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
        },
        cleanup: function() {
            this.showModal = false
            try {
                ElBody.classList.remove('lock-scroll')
            } catch (error) {
                console.warn('Unable to release scroll position')   
            }
            this.$emit('close')
        },
        setFocus: function() {
            this.$refs.ElDescription.focus({preventScroll: true})
        }
    }
}
</script>