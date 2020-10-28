<template>
    <header class='sc-page sc-hero' :style="`background-image: url('${publicPath}images/clay-banks-Lmc-tvmuopw-unsplash.jpg')`">
        <img alt="@properties" :src="`${publicPath}images/at-logo.svg`">
        <img alt="Stop Looking. Start Finding." :src="`${publicPath}images/stop-looking.svg`">
        <h1>Presented by Thad Wong for Stephanie Huarte & Mekael Wesley-Rosa</h1>
        <scroll-notify></scroll-notify>
    </header>
</template>

<script>
export default {
    name: 'titleContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>