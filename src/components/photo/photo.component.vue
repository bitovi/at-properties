<template>
    <!-- <figure v-bind="$attrs" class="sc-hero-image" v-bind:class="showBorder"> -->
    <figure v-bind="$attrs" :class="ar">
        <picture>
            <source v-if="lg" media="(min-width:1024px)" :srcset="lg">
            <source v-if="md" media="(min-width:769px)" :srcset="md">
            <source v-if="sm" media="(min-width:640px)" :srcset="sm">
            <img :alt="alt" :src="defaultImage" />
        </picture>
        <div v-if="border" :class="border"></div>
        <figcaption v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>

<script>
export default {
    name: "sc-photo",
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
        alt: {
            type: String,
            required: true,
            default: ''
        },
        caption: {
            type: String,
            default: null
        },
        border: {
            type: String,
            default: ''
        }, 
        ar: {
            type: String,
            default: ''
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
