<template>
    <header class='sc-page sc-hero justify-between' :style="`background-image: url('${publicPath}images/bg/bg-agent.jpg')`">
        <img class="mt-4 md:mt-12 w-2/4 md:w-auto mb-4" alt="@properties" :src="`${publicPath}images/logos/logo-atproperties.svg`">
        <div class="container mx-auto flex flex-col">
            <img class="pb-8 sm:pb-20" alt="Stop Looking. Start Finding." :src="`${publicPath}images/intro/stop-looking.svg`">
            <h1 class="presentation-heading">Presented by Thad Wong for Stephanie Huarte & Mekael Wesley-Rosa</h1>
        </div>
        <scroll-notify class=""></scroll-notify>
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