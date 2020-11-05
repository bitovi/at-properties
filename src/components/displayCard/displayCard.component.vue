<template>
    <div class="dlp-display-card" v-bind="$attrs">
        <div class="dlp-display-card-content">
            <div class="dlp-display-card-border">
                <slot />
            </div>
        </div>
        <div class="dlp-display-card-cta">
            <sc-button v-if="href" :href="href">{{cta}}</sc-button>
            <sc-button v-else-if="click" nativeType="button" @click="click">{{cta}}</sc-button>
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