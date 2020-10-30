<template>
    <nav class="sc-nav" :class="{ isOpen: isOpen}" aria-label="Main Menu">
        <div class="sc-nav-tray xl:container mx-auto">
            <div class="sc-nav-m-tile flex md:items-center">
                <img class="sc-nav-logo" height="26" width="130" alt="@properties" :src="`${publicPath}images/at-logo.svg`">
            </div>
            <div class="sc-nav-menu" id="nav-menu-links">
                <h2 class="title-heading mb-6">Menu</h2>
                <ul class="sc-nav-ul">
                    <li><a class="sc-nav-link sc-active" href="#">Agent Profile</a></li>
                    <li><a class="sc-nav-link" href="#">Company Profile</a></li>
                    <li><a class="sc-nav-link" href="#">Marketing Plan</a></li>
                    <li><a class="sc-nav-link" href="#">Selling Your Home</a></li>
                    <li><a class="sc-nav-link" href="#">Partners</a></li>
                </ul>
            </div>
            <div class="sc-nav-trigger sc-nav-m-tile flex md:hidden">
                <button aria-expanded="false" @click="toggle">
                    Menu
                </button>
            </div>
            <div class="sc-nav-contact sc-nav-m-tile flex">
                <a href="#">Contact Me</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navContainer',
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