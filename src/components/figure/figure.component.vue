<template>
    <div :class="{ 'sticky top-4': isSticky }">
        <figure 
            v-bind="$attrs" 
            class="dlp-figure" 
            v-bind:class="[{ 'hide-border': !showBorder }, ar]">
            <picture>
                <source v-if="xl" media="(min-width:1920px)" :srcset="xl">
                <source v-if="lg" media="(min-width:1280px)" :srcset="lg">
                <source v-if="md" media="(min-width:768px)" :srcset="md">
                <source v-if="sm" :srcset="sm">
                <img 
                    alt="alt" 
                    :src="defaultImage" />
            </picture>
            <figcaption v-if="caption" class="dlp-figure-caption head-6">
                {{ caption }}
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: "dlp-figure",
    props: {
        sm: {
            type: String,
            default: null
        },
        md: {
            type: String,
            default: null
        },
        lg: {
            type: String,
            default: null
        },
        xl: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            required: true,
            default: ''
        },
        caption: {
            type: String,
            default: null
        },
        showBorder: {
            type: Boolean,
            default: true
        },
        isSticky: {
            type: Boolean,
            required: false,
            default: false
        },
        ar: {
            type: String,
            default: null
        }
    },
    computed: {
        defaultImage() {
            //use the smallest available
            const sizes = [this.sm, this.md, this.lg]
            return sizes.find(s => ![undefined, null].includes(s))
        }
    }
}
</script>
