<template>
    <component
        class="dlp-transition-wrapper"
        :is="tagName"
        v-bind="$attrs"
        v-on="$listeners"
        ref="tWrapper"
    >
        <div class="dlp-transition" ref="tInner">
            <slot/>
        </div>
    </component>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { filter, includes } from 'lodash'
import { hasMotion } from '../../constants'

const ALLOWED_HOOKS = ['fadeIn', 'slideRight', 'slideLeft', 'slideUp', 'slideDown', 'pop']

export default {
    name: 'dlp-transition',
    props: {
        tagName: {
            type: String,
            default: 'div',
            validator: function(val) {
                //add more native tags if you need them
                return ['div', 'span', 'p'].indexOf(val) !== 1
            }
        },
        type: {
            type: String,
            default: 'fadeIn',
            //fadeIn, slideRight, slideLeft, slideUp, slideDown, pop
        },
        delay: {
            type: Number,
            default: 0
        },
        scrollTrigger: {
            type: Object,
            default: function() {
                return {
                    start: "top 80%",
                }
            }
        }
    },
    methods: {
        fadeIn(target) {
            gsap.set(target, { opacity: 0 })
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.7,
                opacity: 1,
                paused: true
            })
        },
        slideRight(target) {
            gsap.set(target, {transform: 'translate(-50px, 0)'})
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.7,
                x: 0,
                paused: true
            })
        },
        slideLeft(target) {
            gsap.set(target, {transform: 'translate(50px, 0)'})
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.7,
                x: 0,
                paused: true
            })
        },
        slideUp(target) {
            gsap.set(target, {transform: 'translate(0, 50px)'})
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.7,
                y: 0,
                paused: true
            })
        },
        slideDown(target) {
            gsap.set(target, {transform: 'translate(0, -50px)'})
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.7,
                y: 0,
                paused: true
            })
        },
        pop(target) {
            gsap.set(target, {transform: 'scale(0.5)'})
            return gsap.to(this.$refs.tInner, {
                delay: this.delay,
                duration: 0.5,
                scale: 1,
                paused: true
            })
        }
    },
    mounted() {
        if(!hasMotion) return
        //add any valid animation types to the timeline
        this.hooks.forEach(h => {
            const anim = this[h](this.$refs.tInner)

            ScrollTrigger.create({
                trigger: this.$refs.tInner,
                ...this.scrollTrigger,
                onEnter: () => anim.play()
            });
            
            ScrollTrigger.create({
                trigger: this.$refs.tInner,
                start: "top bottom",
                onLeaveBack: () => anim.pause(0)
            });
        })
    },
    computed: {
        hooks: function() {
            const hooks = this.$props.type.split(' ')
            return filter(hooks, item => includes(ALLOWED_HOOKS, item))
        }
    }
}
</script>