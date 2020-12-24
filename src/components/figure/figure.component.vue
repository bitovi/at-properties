<template>
    <div
        ref="figWrapper"
        class="dlp-figure__wrapper" 
        :class="[{ 'pinned': isSticky }, {'hide': isAnimated}]">
        <figure 
            v-bind="$attrs" 
            class="dlp-figure" 
            v-bind:class="[{ 'ar': ar }, ar]">
            <picture ref="figurePic">
                <source v-if="xl" media="(min-width:1920px)" :srcset="xl">
                <source v-if="lg" media="(min-width:1280px)" :srcset="lg">
                <source v-if="md" media="(min-width:768px)" :srcset="md">
                <source v-if="sm" :srcset="sm">
                <img 
                    :alt="alt" 
                    :src="defaultImage" />
            </picture>
            <div v-if="showBorder" class="dlp-figure__border">
              <figcaption v-if="caption" class="hidden md:block dlp-figure__caption head-6 accent--below-center">
                  {{ caption }}
              </figcaption>
            </div>
        </figure>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { hasMotion } from '../../constants'

export default {
    name: "dlp-figure",
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
            required: true,
            default: ''
        },
        caption: {
            type: String,
            default: null
        },
        showBorder: {
            type: Boolean,
            default: true
        },
        isSticky: {
            type: Boolean,
            required: false,
            default: false
        },
        ar: {
            type: String,
            default: null
        },
        animate: {
            type: String,
            default: null,
            validator: function(val) {
                return ['shrink', null].indexOf(val) !== -1
            }
        }
    },
    data() {
        return {
            isAnimated: hasMotion
        }
    },
    computed: {
        defaultImage() {
            //use the smallest available
            const sizes = [this.sm, this.md, this.lg]
            return sizes.find(s => ![undefined, null].includes(s))
        }
    },
    methods: {
        getCurrentSrc() {
            return this.$refs.figurePic.querySelector('img')
        }
    },
    mounted() {
        if(!hasMotion) return
        if(this.animate === 'shrink'){
            
            const fade = gsap.to(this.$refs.figWrapper, {
                duration: 0.7,
                opacity:1,
                paused: true
            })

            ScrollTrigger.create({
                trigger: this.$refs.figWrapper,
                start: "top 80%",
                onEnter: () => fade.play()
            });
            
            gsap.fromTo(this.getCurrentSrc(), {
                scale: 1.1,
            },
            {
                scrollTrigger: {
                    trigger: this.getCurrentSrc(),
                    start: "top 50%",
                    scrub: 1,
                    toggleActions: "play none none reset"
                },
                duration: 0.7,
                scale: 1,
                ease: "expoScale(1.1, 1)"
            })
        }
    }
}
</script>