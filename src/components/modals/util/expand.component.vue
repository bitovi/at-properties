<template>
    <div class="dlp-expando-wrapper" ref="expando" @click.self="close" >
        <div class="dlp-expando-inner">
            <slot />
        </div>
    </div>
</template>
<script>
// import gsap from 'gsap'
import { debounce } from 'lodash'
import gsap from 'gsap'

import './expand.styles.scss'

export default {
    name: 'dlp-expando',
    data() {
        return {
            isActive: false,
            isOpen: false,
            origin: 0,
            caller: null
        }
    },
    methods: {
        toggle() {
            if(this.isOpen){
                this.close()
            } else {
                this.open()
            }
        },
        open(evt) {
            this.caller = evt
            this.onResize()

            gsap.set(this.$refs.expando, {
                clipPath: `circle(20% at 40% ${this.origin}%)`
            })

            gsap.to(this.$refs.expando, {
                duration: 1,
                clipPath: `circle(100% at 40% ${this.origin}%)`,
                onComplete: () => this.$emit('openDone')
            })

        },
        close() {
            gsap.to(this.$refs.expando, {
                duration: 1,
                clipPath: `circle(0% at 40% ${this.origin}%)`,
                onComplete: () => this.$emit('closeDone')
            })
        },
        onResize() {
            const viewPortHeight = window.innerHeight;
            const offsetY = this.caller.clientY
            this.origin = ((offsetY / viewPortHeight) * 100).toFixed(2)
        }
        
    },
    mounted() {
        const bounceRipple = debounce(this.onResize, 100)
        window.addEventListener("resize", bounceRipple);

        gsap.set(this.$refs.expando, {
            clipPath: `circle(0% at 40% 0%)`
        })
    }
}
</script>