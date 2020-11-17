<template>
    <scrollactive class="dlp-nav" :class="{ isOpen: isOpen}" aria-label="Main Menu">
        <div class="dlp-nav-tray xl:container mx-auto">
            <a class="dlp-nav-m-tile flex lg:items-center" href="#">
                <img class="dlp-nav-logo" height="26" width="130" alt="@properties" :src="`images/logos/logo-atproperties.svg`">
                <span class="visually-hidden">Back to top</span>
            </a>
            <div class="dlp-nav-menu" id="nav-menu-links">
                <h2 class="head-1 mb-6">Menu</h2>
                <ul class="dlp-nav-ul">
                    <li><a class="dlp-nav-link scrollactive-item" href="#agent" @click="close">Agent Profile</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#company" @click="close">Company Profile</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#reach" @click="close">Global Reach</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#technology" @click="close">Technology</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#marketing" @click="close">Marketing Plan</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#selling" @click="close">Selling Your Home</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#partners" @click="close">Partners</a></li>
                </ul>
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
                <a class="scrollactive-item" href="#contact">Contact Me</a>
            </div>
        </div>
    </scrollactive>
</template>

<script>
export default {
    name: 'dlp-nav-component',
    data: () => ({
        isOpen: false
    }),
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        toggle() {
            if(this.isOpen){
                this.close()
            } else {
                this.open()
            }
        }
    }
}
</script>