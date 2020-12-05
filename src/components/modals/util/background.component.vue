<template>
    <canvas ref="canvas" class="dlp-bg-ripple"/>
</template>
<script>
import gsap from 'gsap'
import { debounce } from 'lodash'
const DPR = window.devicePixelRatio || 1;
const PI_TWO = Math.PI * 2;
const TARGET_ALPHA = 0.6
let vh, vw

let isFull = false

export default {
    name: 'dlp-bg-ripple',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggle() {
            if(isFull){
                this.close()
            } else {
                this.open()
            }
        },
        open(evt) {
            this.onResize()
            isFull = true
            this.createRipple(evt)
        },
        close(evt) {
            isFull = false
            this.createRipple(evt)
        },
        createRipple(evt) {
            if(this.isActive) return 
            const ctx = this.$refs.canvas.getContext('2d')

            this.isActive = true
            // isFull = !isFull

            let x = evt.clientX
            let y = evt.clientY 
            
            let dx = x < vw / 2 ? vw - x : x
            let dy = y < vh / 2 ? vh - y : y
            
            let radius = Math.sqrt(dx * dx + dy * dy)  

            var ripple = {
                alpha: isFull ? 0 : TARGET_ALPHA,
                radius: isFull ? 0 : radius,
                x: x,
                y: y
            }
            gsap.to(ripple, {
                duration: 0.85,
                alpha: isFull ? TARGET_ALPHA : 0, 
                radius: isFull ? radius : 0,
                onUpdate: function(){
                    ctx.clearRect(0, 0, vw, vh)
                    ctx.globalCompositeOperation = "source-over"

                    if (!isFull) {
                        ctx.beginPath()
                        ctx.rect(0, 0, vw, vh)
                        ctx.fillStyle = "rgba(0,0,0,"+ this.alpha +")"
                        ctx.fill()
                        ctx.globalCompositeOperation = "destination-out"    
                    }
                    
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, this.radius, 0, PI_TWO, false)
                    ctx.fillStyle = "rgba(0,0,0," + this.alpha + ")"
                    ctx.shadowColor="rgba(0,0,0," + this.alpha + ")"
                    ctx.shadowBlur=50
                    ctx.fill()
                },
                onComplete: () => {
                    this.isActive = false
                    if(isFull){
                        this.$emit('openDone')
                        
                    } else {
                        this.$emit('closeDone')
                    }
                },
                callbackScope: ripple
            });
        },
        onResize() {
            if(!this.$refs.canvas) return
            
            vw = window.innerWidth
            vh = window.innerHeight
            
            this.$refs.canvas.width  = vw * DPR
            this.$refs.canvas.height = vh * DPR
            
            gsap.set(this.$refs.canvas, { width: vw, height: vh })
            
            this.$refs.canvas.getContext('2d').scale(DPR, DPR)
        }
    },
    mounted() {
        const bounceRipple = debounce(this.onResize, 100)
        window.addEventListener("resize", bounceRipple)
    }
}
</script>