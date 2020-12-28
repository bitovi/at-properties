<template>
    <header v-bind="$attrs" class='dlp-title-page justify-center' ref="titleWrapper">
        <div class="dlp-title-page__image" :class="{ 'opactity-set': !isAnimated }">
            <img ref="titleImg" :src="backgroundUrl" role="presentation"/>
        </div>
       <hgroup ref="titleText" class="container mx-auto dlp-title-page__text">
            <h2 class="head-1 accent--below-center-wide">{{heading}}</h2>
            <p class="head-6" v-if="subheading">{{subheading}}</p>
        </hgroup>
    </header>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExpoScaleEase } from "gsap/EasePack"
import { hasMotion } from '../../constants'

export default {
    name: 'dlp-title-page',

    data() {
        return {
            isAnimated: hasMotion
        }
    },

    props: {
        backgroundUrl: {
            type: String,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        subheading: {
            type: String,
            required: false
        },
    },

    mounted() {
        const { titleWrapper, titleImg, titleText } = this.$refs

        if(!hasMotion){
            //do nothing if prefers-reduced-motion is on
            return
        }

        gsap.to(titleImg, {
            scrollTrigger: {
                trigger: titleWrapper,
                id: "intro-image-" + this._uid,
                start: "top bottom",
                end: "bottom top", 
                scrub: 1,
            },
            scale: 1.3,
            ease: ExpoScaleEase.config(1, 1.3)
        })
      
        this.tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleWrapper,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                onLeave: (self) => {
                    self.kill()
                    ScrollTrigger.getById("intro-image-" + this._uid).kill()
                    gsap.set(titleImg, { scale: 1.3, opacity: 0.25 })
                    gsap.set(titleText, { opacity: 1, y: 0 })
                    ScrollTrigger.refresh()
                }
            },
        });

        gsap.set(titleText, { opacity: 0, transform: 'translate(0, 50px)'})
        
        this.tl.to(titleImg, {
            opacity: 0.25
        }).to(titleText, {
            opacity: 1, 
            y: 0 
        });
    }
}
</script>