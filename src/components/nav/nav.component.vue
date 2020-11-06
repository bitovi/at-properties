<template>
    <scrollactive class="dlp-nav" :class="{ isOpen: isOpen}" aria-label="Main Menu">
        <div class="dlp-nav-tray xl:container mx-auto">
            <div class="dlp-nav-m-tile flex lg:items-center">
                <img class="dlp-nav-logo" height="26" width="130" alt="@properties" :src="`${publicPath}images/logos/logo-atproperties.svg`">
            </div>
            <div class="dlp-nav-menu" id="nav-menu-links">
                <h2 class="head-1 mb-6">Menu</h2>
                <ul class="dlp-nav-ul">
                    <li><a class="dlp-nav-link scrollactive-item" href="#agent" @click="close">Agent Profile</a></li>
                    <li><a class="dlp-nav-link scrollactive-item" href="#company" @click="close">Company Profile</a></li>
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
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    </scrollactive>
</template>

<script>
export default {
    name: 'dlp-nav-component',
    data: () => ({
        publicPath: process.env.BASE_URL,
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