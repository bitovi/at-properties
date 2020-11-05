<template>
    <nav class="dlp-nav" :class="{ isOpen: isOpen}" aria-label="Main Menu">
        <div class="dlp-nav-tray xl:container mx-auto">
            <div class="dlp-nav-m-tile flex md:items-center">
                <img class="dlp-nav-logo" height="26" width="130" alt="@properties" :src="`${publicPath}images/at-logo.svg`">
            </div>
            <div class="dlp-nav-menu" id="nav-menu-links">
                <h2 class="title-heading mb-6">Menu</h2>
                <ul class="dlp-nav-ul">
                    <li><a class="dlp-nav-link dlp-active" href="#">Agent Profile</a></li>
                    <li><a class="dlp-nav-link" href="#">Company Profile</a></li>
                    <li><a class="dlp-nav-link" href="#">Marketing Plan</a></li>
                    <li><a class="dlp-nav-link" href="#">Selling Your Home</a></li>
                    <li><a class="dlp-nav-link" href="#">Partners</a></li>
                </ul>
            </div>
            <div class="dlp-nav-trigger dlp-nav-m-tile flex md:hidden">
                <button aria-expanded="false" @click="toggle">
                    Menu
                </button>
            </div>
            <div class="dlp-nav-contact dlp-nav-m-tile flex">
                <a href="#">Contact Me</a>
            </div>
        </div>
    </nav>
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