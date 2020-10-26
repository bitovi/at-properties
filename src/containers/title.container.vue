<template>
    <header>
        <div>
            <img alt="@properties" :src="`${publicPath}images/at-logo.svg`">
            <img alt="Stop Looking. Start Finding." :src="`${publicPath}images/stop-looking.svg`">
            <h1>Presented for Thad Wong for Stephanie Huarte & Mekael Wesley-Rosa</h1>
            <scroll-notify></scroll-notify>
        </div>
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