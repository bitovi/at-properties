<template>
    <div class="flat-scroll__wrapper">
        <div class="flat-scroll">
            <div class="flat-scroll__stage">
                <slot />
            </div>
            <div class="flat-scroll__fade-left"></div>
            <div class="flat-scroll__fade-right"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dlp-flat-scroll'
}
</script>