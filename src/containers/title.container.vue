<template>
    <header class='dlp-page dlp-hero justify-between' :style="`background-image: url('${publicPath}images/intro/bg-intro.jpg')`">
        <img class="mt-4 md:mt-12 w-2/4 md:w-auto mb-4" alt="@properties" :src="`${publicPath}images/intro/logo-atproperties.svg`">
        <div class="container mx-auto flex flex-col text-center">
            <img class="pb-8 sm:pb-20 w-2/4 mx-auto" alt="Stop Looking. Start Finding." :src="`${publicPath}images/intro/stop-looking.svg`">
            <h1 class="head-6">Presented by CARRIE MCCORMICK &amp; LEIGH MARCUS for OLIVIA CARLSON</h1>
        </div>
        <scroll-notify />
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