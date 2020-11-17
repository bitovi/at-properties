<template>
    <header v-bind="$attrs" class='dlp-page dlp-hero justify-center' style="background-color: rgb(0, 0, 0); overflow: hidden; position: relative;">
        <div ref="backgroundImage" class="bg" :style="`background-image: url('${backgroundUrl}'); background-color: rgb(0, 0, 0); background-repeat: no-repeat; background-size: cover; opacity: .25; position:absolute; height:100%; width:100%; z-index: 0; transform: perspective(100px) translate3d(0, 0, 70px); will-change: transform, opacity;`">
        </div>
        <hgroup ref="titleText" class="container mx-auto" style="z-index: 1; transform: perspective(100px) translate3d(0, 0px, 0); opacity: 1; will-change: transform, opacity;">
            <h2 class="text-white head-1 text-center accent accent-wide accent-centered accent-below">{{heading}}</h2>
            <p class="text-white head-6 text-center" v-if="subheading">{{subheading}}</p>
        </hgroup>
    </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import gsap from 'gsap';
// eslint-disable-next-line no-unused-vars
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'dlp-title-page',
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
    data() {
        return {
            animationNeedsSetup: true,
        }
    },
    methods: {
        preSetupAnimation() {
            if (this.animationNeedsSetup) {
                this.animationNeedsSetup = false;
                const setupAnimation = () => {
                    const textElement = this.$refs.titleText;
                    console.log(`Setting up animation for ${textElement.textContent}`);
                    const textHeight = textElement.offsetHeight;
                    const imageElement = this.$refs.backgroundImage;
                    // eslint-disable-next-line no-unused-vars
                    const imageHeight = imageElement.offsetHeight;
                    console.log(imageHeight);
                    gsap.from(textElement, {
                        ease: 'sine-inOut',
                        duration: 1.5,
                        transform: 'perspective(100px) translate3d(0, 300px, 0)',
                        opacity: 0,
                        scrollTrigger: {
                            trigger: textElement,
                            start: () => `top bottom-=${textHeight}px`,
                            end: () => `50%-${textHeight} 50%`,
                            scrub: true,
                        },
                    });
                    gsap.from(imageElement, {
                        ease: 'sine-inOut',
                        duration: 1,
                        transform: 'perspective(100px) translate3d(0, 0, 0px)',
                        opacity: 1,
                        scrollTrigger: {
                            trigger: imageElement,
                            start: () => `top bottom`,
                            end: () => `bottom top+${imageHeight}`,
                            scrub: true,
                        },
                    });
                };
                window.addEventListener(
                    'DOMContentLoaded',
                    setupAnimation.bind(this),
                    { once: true, passive: true }
                );
            }
        }
    },
    created() {
        this.preSetupAnimation();
    }
}
</script>