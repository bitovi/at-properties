<template>
    <transition
        name="fade-slide"
        v-on:after-enter="setFocus"
        >
        <div 
            class="dlp-slide-in-mask" 
            @click.self="close" 
            v-if="showModal"
            role="dialog"
            aria-modal="true"
            aria-describedby="modalDescription">
                <div class="dlp-slide-in fade-slide-content">
                    <nav class="absolute right-0 mr-12">
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
        </div>
    </transition>
</template>
<script>
import A11yStrings from '../../assets/strings/a11y.i18n.json'
// ref to <body>
const ElBody = document.getElementsByTagName("body")[0]

export default {
    name: 'dlp-slide-in',
    props: {
        srHeading:{
            type: String,
            default: A11yStrings.defaults.contentModal.heading
        }
    },
    data() {
        return {
            showModal: false
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