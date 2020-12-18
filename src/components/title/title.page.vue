<template>
    <header v-bind="$attrs" class='dlp-title-page justify-center' ref="titleWrapper">
        <div class="dlp-title-page--image">
            <img ref="titleImg" :src="backgroundUrl" role="presentation"/>
        </div>
       <hgroup ref="titleText" class="container mx-auto dlp-title-page-text">
            <h2 class="dlp-title-page-head head-1 accent--below-center-wide">{{heading}}</h2>
            <p class="dlp-title-page-subhead head-6" v-if="subheading">{{subheading}}</p>
        </hgroup>
    </header>
</template>

<script>
import gsap from 'gsap'

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

    mounted() {
        const { titleWrapper, titleImg, titleText } = this.$refs

        this.tl = gsap.timeline({
            paused: true
        })

        this.tl.to(titleImg, {
            scrollTrigger: {
                trigger: titleImg,
                start: "top top",
                end: "bottom top", 
                scrub: 1
            },
            opacity: 0.25,
            scale: 1.3,
        });
        this.tl.to(titleText, {
            scrollTrigger: {
                trigger: titleWrapper,
                start: "top top",
                end: "bottom top", 
                scrub: 1,
                pin: true,
            },
            opacity: 1, 
            y: 0,
        });
    }
}
</script>