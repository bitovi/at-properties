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
import { filter, includes } from 'lodash'
import { hasMotion } from '../../constants'

const ALLOWED_HOOKS = ['fadeIn', 'slideRight', 'slideLeft', 'slideUp', 'slideDown', 'pop']

//Helper for forming scrollTrigger object
function ScrollTrigger(ref, opts){
    return {
        trigger: ref,
        ...opts
    }
}

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
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            }
        }
    },
    methods: {
        fadeIn(target) {
            gsap.set(target, { opacity: 0 })
            return[{},{
                duration: 0.7,
                opacity: 1
            }, 0]
        },
        slideRight(target) {
            gsap.set(target, {transform: 'translate(-50px, 0)'})
            return [{},{
                x: 0
            }, 0]
        },
        slideLeft(target) {
            gsap.set(target, {transform: 'translate(50px, 0)'})
            return [{},{
                x: 0
            }, 0]
        },
        slideUp(target) {
            gsap.set(target, {transform: 'translate(0, 50px)'})
            return [{},{
                y: 0,
            }, 0]
        },
        slideDown(target) {
            gsap.set(target, {transform: 'translate(0, -50px)'})
            return [{},{
                y: 0,
            }, 0]
        },
        pop(target) {
            gsap.set(target, {transform: 'scale(0.5)'})
            return [{},{
                duration: 0.5,
                scale: 1
            }, 0]
        }
    },
    mounted() {
        if(!hasMotion) return
        this.tl = gsap.timeline({
            delay: this.delay,
            scrollTrigger: ScrollTrigger(this.$refs.tInner, this.scrollTrigger),
        })
        //add any valid animation types to the timeline
        this.hooks.forEach(h => {
            const res = this[h](this.$refs.tInner)
            this.tl.fromTo(this.$refs.tInner, ...res)
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