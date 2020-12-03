<template>
    <component
        class="dlp-transition-wrapper"
        :is="tagName"
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

const ALLOWED_HOOKS = ['fadeIn', 'slideRight', 'slideLeft', 'slideUp', 'slideDown', 'scale']

//Helper for foraming scrollTrigger object
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
            //fadeIn, slideRight, slideLeft, slideUp, slideDown, scale
        },
        scrollTrigger: {
            type: Object,
            default: function() {
                return {
                    start: "top 90%",
                    end: "bottom center", 
                    scrub: true, 
                    // markers: true,
                    toggleActions: "play none none reverse"
                }
            }
        }
    },
    methods: {
        fadeIn(target) {
            return[{
                opacity: 0
            },{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                opacity: 1
            }]
        },
        slideRight(target) {
            gsap.set(target, {transform: 'translate(-50px, 0)'})
            return [{},{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                x: 0
            }]
        },
        slideLeft(target) {
            gsap.set(target, {transform: 'translate(50px, 0)'})
            return [{},{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                x: 0
            }]
        },
        slideUp(target) {
            gsap.set(target, {transform: 'translate(0, 50px)'})
            return [{},{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                y: 0,
            }]
        },
        slideDown(target) {
            gsap.set(target, {transform: 'translate(0, -50px)'})
            return [{},{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                y: 0,
            }]
        },
        scale(target) {
            gsap.set(target, {transform: 'scale(0.5)'})
            return [{},{
                scrollTrigger: ScrollTrigger(target, this.scrollTrigger),
                scale: 1
            }]
        }
    },
    mounted() {
        if(!hasMotion) return
        this.tl = gsap.timeline()
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