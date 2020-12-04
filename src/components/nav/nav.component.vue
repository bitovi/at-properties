<template>
    <scrollactive 
        active-class="isActive"
        :offset="0"
        v-on:itemchanged="onItemChanged"
        class="dlp-nav" 
        :class="{ isOpen: isOpen}" 
        aria-label="Main Menu">
        <div class="dlp-nav-tray xl:container mx-auto">
            <a class="dlp-nav-m-tile flex lg:items-center" href="#">
                <img class="dlp-nav-logo" height="26" width="130" alt="@properties" :src="`images/intro/logo-atproperties.svg`">
                <span class="visually-hidden">Back to top</span>
            </a>
            <div class="dlp-nav-menu" id="nav-menu-links" ref="navMenu">
                <div ref="navUlWrapper" class="text-center">
                    <h2 ref="navUlHeader" class="head-1 mb-6">Menu</h2>
                    <ul class="dlp-nav-ul" ref="navUl">
                        <li 
                            @mouseover="mouseOver"
                            @mouseleave="mounseOut">
                            <a class="dlp-nav-link scrollactive-item" href="#agent" @click="clickNav">Agent Profile</a>
                        </li>
                        <li 
                            @mouseover="mouseOver"
                            @mouseleave="mounseOut">
                            <a class="dlp-nav-link scrollactive-item" href="#company" @click="clickNav">Company Profile</a>
                        </li>
                        <li 
                            @mouseover="mouseOver"
                            @mouseleave="mounseOut">
                            <a class="dlp-nav-link scrollactive-item" href="#marketing" @click="clickNav">Marketing Plan</a>
                        </li>
                        <li 
                            @mouseover="mouseOver"
                            @mouseleave="mounseOut">
                            <a class="dlp-nav-link scrollactive-item" href="#selling" @click="clickNav">Selling Your Home</a>
                        </li>
                        <li 
                            @mouseover="mouseOver"
                            @mouseleave="mounseOut">
                            <a class="dlp-nav-link scrollactive-item" href="#partners" @click="clickNav">Partners</a>
                        </li>
                        
                        
                        <li 
                            ref="highlight" 
                            role="presentation" 
                            class="hidden"
                            :class="{'dlp-nav-highlight': isMounted}"
                            ></li>
                    </ul>
                </div>
            </div>
            <div class="dlp-nav-trigger dlp-nav-m-tile flex lg:hidden">
                <button aria-expanded="false" :class="{ open: isOpen}" @click="toggle" id="nav-icon">
                    <span class="nav-icon-wrapper">
                        <span class="nav-icon-line line-1"></span>
                        <span class="nav-icon-line line-2"></span>
                        <span class="nav-icon-line line-3"></span>
                        <span class="nav-icon-line line-4"></span>
                    </span>
                    <span class="nav-icon-text">Menu</span>
                </button>
            </div>
            <div class="dlp-nav-contact dlp-nav-m-tile flex">
                <button class="" @click="showModal('ContactModal')" >Contact Me</button>
            </div>
            <dlp-slide-in ref="ContactModal">
                <h3 class="head-5 accent--above-left mb-8">Thad Wong</h3>
                <address class="mt-4">
                    <a :href="`tel:+1-312.999.0848`">312.999.0848</a><br /><br />
                    <a :href="`mailto:Thad@atproperties.com`">Thad@atproperties.com</a>
                </address>
                <dlp-social 
                    facebook="#test"
                    instagram="#test"
                ></dlp-social>
            </dlp-slide-in>
        </div>
    </scrollactive>
</template>

<script>
import gsap from 'gsap'
import { delay, debounce, initial } from 'lodash'
// import isMobile from 'is-mobile'

export default {
    name: 'dlp-nav-component',
    data: () => ({
        isMounted: false,
        isOpen: false,
        isScrolling: false,
        elActive: null
    }),
    methods: {
        open() {
            this.isOpen = true
            const openTimeline = gsap.timeline()
            //Expand nav menu
            openTimeline.fromTo(this.$refs.navMenu, {
                top: window.innerHeight
            }, {
                duration: 1,
                ease: "slow(0.4, 0.8, false)",
                top: 0,
            })
            //fade in header
            openTimeline.from(this.$refs.navUlHeader, {
                duration: 0.5,
                opacity: 0
            })
            //clip reveal each nav item
            openTimeline.fromTo(initial(this.$refs.navUl.children), {
                clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'
            }, {
                duration: 0.5,
                stagger: 0.2,
                clipPath: 'polygon(0 0, 100% 0, 100% 105%, 0 105%)'
            })
        },
        close() {
            const closeTimeline = gsap.timeline()
            //fade the links
            closeTimeline.to(this.$refs.navUlWrapper, {
                opacity: 0
            })
            //swipe the menu
            closeTimeline.to(this.$refs.navMenu, {
                top: window.innerHeight,
                onComplete: () => this.isOpen = false
            })
            //cleanup styles
            closeTimeline.set(this.$refs.navMenu, { clearProps: "all" })
            closeTimeline.set(this.$refs.navUlWrapper, { clearProps: "all" })
        },
        toggle() {
            if(this.isOpen){
                this.close()
            } else {
                this.open()
            }
        },
        //onClick of a link in desktop, control the highlight
        clickNav(evt) {
            this.elActive = evt.target.parentNode
            if(this.isOpen){ this.close() }
            this.changeHighlight()
        },
        //update the highlight on scroll
        // eslint-disable-next-line no-unused-vars
        onItemChanged(evt, currentItem, lastItem) {
            if(!currentItem) return
            this.elActive = currentItem.parentNode
            if(!this.isScrolling){
                this.changeHighlight()
            }
        },
        //what is the left offest including the container offset?
        getLeft(target) {
            const navState = this.$refs.navUl.getBoundingClientRect()
            const activeState = target.getBoundingClientRect()
            return `${activeState.left - navState.left}px`
        },
        //what is the width of the new nav item?
        getWidth(target) {
            const activeState = target.getBoundingClientRect()
            return `${activeState.width}px`
        },
        //on hover, highlight the current target
        mouseOver(evt) {
            gsap.to(this.$refs.highlight, {
                width: this.getWidth(evt.target),
                left: this.getLeft(evt.target)
            })
        },
        //on leave, wait a moment before returning
        mounseOut(){
            delay(this.changeHighlight, 200)
        },
        changeHighlight() {
            gsap.to(this.$refs.highlight, {
                width: this.getWidth(this.elActive),
                left: this.getLeft(this.elActive)
            })
        },
        //Are we scrolling?
        handleScroll() {
            this.isScrolling = true
            delay(() => {
                this.isScrolling = false
            }, 800)
        },
        showModal: function(name) {
            if(this.$refs[name]){
                this.$refs[name].open()
            }
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.bounceScroll);
    },
    mounted() {
        //On load, posititon the highlight. Then allow render
        const initActive = this.$refs.navUl.querySelector('.isActive')
        //set the stored active item
        if(initActive) {
            this.elActive = initActive.parentNode
        } else {
            this.elActive = this.$refs.navUl.children[0]
        }
        //set the styles to match nav item
        this.$refs.highlight.style.width = this.getWidth(this.elActive)
        this.$refs.highlight.style.left = this.getLeft(this.elActive)
        //over precidence hidden on highlight
        this.isMounted = true;

        delay(() => {
            this.bounceScroll = debounce(this.handleScroll, 1400, {leading: true})
            window.addEventListener('scroll', this.bounceScroll);
        }, 20)
        
    }
}
</script>