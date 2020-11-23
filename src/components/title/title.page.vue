<template>
    <header v-bind="$attrs" class='dlp-page dlp-hero justify-center' style="background-color: rgb(0, 0, 0); overflow: hidden; position: relative;">
        <div ref="backgroundImage" class="bg" :style="`background-image: url('${backgroundUrl}'); background-color: rgb(0, 0, 0); background-repeat: no-repeat; background-size: cover; opacity: .25; position:absolute; height:100%; width:100%; z-index: 0; transform: perspective(100px) translate3d(0, 0, ${this.getDefinedValue('sizing', this.animImage, this.animImageDefaults)}px); will-change: transform, opacity;`">
        </div>
        <hgroup ref="titleText" class="container mx-auto" style="z-index: 1; transform: perspective(100px) translate3d(0, 0px, 0); opacity: 1; will-change: transform, opacity;">
            <h2 class="text-white head-1 text-center accent accent-wide accent-centered accent-below">{{heading}}</h2>
            <p class="text-white head-6 text-center" v-if="subheading">{{subheading}}</p>
        </hgroup>
    </header>
</template>

<script>
import gsap from 'gsap';
import isMobile from 'is-mobile';

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
        animText: {
            type: Object,
            required: false,
            default: () => {},
        },
        animImage: {
            type: Object,
            required: false,
            default: () => {},
        }
    },

    data() {
        return {
            animationNeedsSetup: true,
            animTextTween: null,
            animTextDefaults: {
                enabled: true,
                ease: 'ease-out',
                duration: .5,
                opacity: 0,
                offset: 100,
            },
            animImageTween: null,
            animImageDefaults: {
                enabled: true,
                ease: 'linear',
                duration: 1,
                opacity: 1,
                sizing: 50,
            },
            motionSafe: false,
            isMounted: false,
            isDesktop: isMobile() === false,
        }
    },

    methods: {
        getDefinedValue(propertyName, ...options) {
            const option = options.find((option) => option !== undefined && option[propertyName] !== undefined);
            if (!option) throw new Error(`"${propertyName}" not defined in any option argument`);
            return option[propertyName];
        },

        setupAnimation() {
            if (
                this.animationNeedsSetup && 
                this.motionSafe &&
                this.isDesktop
            ) {
                this.animationNeedsSetup = false;
                const textElement = this.$refs.titleText;
                const imageElement = this.$refs.backgroundImage;

                if (this.getDefinedValue('enabled', this.animText, this.animTextDefaults)) {
                    this.animTextTween = gsap.from(textElement, {
                        ease: this.getDefinedValue('ease', this.animText, this.animTextDefaults),
                        duration: this.getDefinedValue('duration', this.animText, this.animTextDefaults),
                        transform: `perspective(100px) translate3d(0, ${this.getDefinedValue('offset', this.animText, this.animTextDefaults)}px, 0)`,
                        opacity: this.getDefinedValue('opacity', this.animText, this.animTextDefaults),
                        scrollTrigger: {
                            trigger: imageElement,
                            start: () => `top bottom`,
                            end: () => `bottom top`,
                            scrub: true,
                        },
                    });
                }

                if (this.getDefinedValue('enabled', this.animImage, this.animImageDefaults)) {
                    this.animImageTween = gsap.from(imageElement, {
                        ease: this.getDefinedValue('ease', this.animImage, this.animImageDefaults),
                        duration: this.getDefinedValue('duration', this.animImage, this.animImageDefaults),
                        transform: 'perspective(100px) translate3d(0, 0, 0px)',
                        opacity: this.getDefinedValue('opacity', this.animImage, this.animImageDefaults),
                        scrollTrigger: {
                            trigger: imageElement,
                            start: () => `top bottom`,
                            end: () => `bottom top`,
                            scrub: true,
                        },
                    });
                }
            }
        }
    },

    created() {
        if (this.isDesktop) {
            const matchedMedia = matchMedia('(prefers-reduced-motion: no-preference)');
            this.motionSafe = matchedMedia.matches;

            if (this.motionSafe) {
                window.addEventListener(
                    'DOMContentLoaded',
                    () => setTimeout(function () {
                        this.setupAnimation();
                    }.bind(this), 1),
                    { once: true, passive: true }
                );
            }

            matchedMedia.addEventListener('change', function (evt) {
                this.motionSafe = evt.matches;
                if (this.isMounted) {
                    if (this.motionSafe) {
                        this.setupAnimation()
                    }
                    else {
                        const tweenNames = ['animTextTween', 'animImageTween'];
                        tweenNames.forEach((tweenName) => {
                            const animTween = this[tweenName];
                            if (animTween) {
                                animTween.scrollTrigger.disable(true, false);
                                animTween.seek(animTween.endTime(false));
                                animTween.kill();
                                this[tweenName] = null;
                            }
                        });
                        this.animationNeedsSetup = true;
                    }
                }
            }.bind(this));
        }
    },

    mounted() {
        this.isMounted = true;
    }
}
</script>