<template>
    <div 
        class="dlp-slide-in-wrapper"
        ref="slideWrapper"
        v-if="showModal"
        role="dialog"
        aria-modal="true"
        aria-describedby="modalDescription">
            <dlp-bg-ripple ref="dlpBg" @openDone="expandOpen" @closeDone="cleanup"/>
            <dlp-expando ref="dlpExpand" @closeDone="bgClose">
                <div 
                    ref="slideInner"
                    class="dlp-slide-in fade-slide-content">
                    <nav class="absolute right-0 mr-8">
                        <h1 
                            ref="ElDescription"
                            tabindex="0" 
                            id="modalDescription"
                            class="visually-hidden">
                            {{srHeading}}
                        </h1>
                        <dlp-close-btn @click.stop="close" />
                    </nav>
                    <div class="dlp-slide-in-content" >
                        <slot />
                    </div>
                </div>
            </dlp-expando>
            
    </div>
</template>
<script>
// import gsap from 'gsap';
// import { delay } from 'lodash'

import Background from '../util/background.component.vue'
import '../util/background.styles.scss'
import Expando from '../util/expand.component'

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
            transition: hasMotion,
            openerEl: null
        }
    },
    components: {
        [Background.name]: Background,
        [Expando.name]: Expando
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (this.showModal && e.keyCode == 27) {
                this.close()
            }
        })  
    },
    methods: {
        open(evt) {
            this.showModal = true
            this.openerEl = evt
            this.$nextTick(()=> {
                this.bgOpen()
            })
            
            try {
                ElBody.classList.add('lock-scroll')
            } catch (error) {
                console.warn('Unable to fix scroll positon')   
            }
        },
        expandOpen() {
            this.$refs.dlpExpand.open(this.openerEl)
        },
        expandClose() {
            this.$refs.dlpExpand.close(this.openerEl)
        },
        bgOpen(){
            this.$refs.dlpBg.open(this.openerEl)
        },
        bgClose(){
            this.$refs.dlpBg.close(this.openerEl)
        },
        close() {
            this.expandClose()
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