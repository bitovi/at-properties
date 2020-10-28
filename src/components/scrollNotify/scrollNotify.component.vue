<template>
    <div class="scroll-notify">
        <span class="label-heading">Scroll to Continue</span>
        <img alt="@properties" :src="`${publicPath}images/scroll-arrow.svg`">
    </div>
</template>

<script>
export default {
    name: "scroll-notify",
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>
