<template>
    <div class="dlp-display-card" v-bind="$attrs">
        <div class="dlp-display-card-content">
            <div class="dlp-display-card-border">
                <slot />
            </div>
        </div>
        <div class="dlp-display-card-cta">
            <dlp-button v-if="href" :href="href">{{cta}}</dlp-button>
            <dlp-button v-else-if="click" nativeType="button" @click="click">{{cta}}</dlp-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dlp-display-card',
    props: {
        href: {
            type: String,
            required: false
        },
        click: {
            type: Function,
            required: false
        },
        cta: {
            type: String,
            default: "Learn More"
        }
    }
}
</script>