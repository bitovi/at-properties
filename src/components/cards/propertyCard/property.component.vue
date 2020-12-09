<template>
    <figure class="dlp-property">
        <picture class="dlp-property__img ar ar--4-3">
            <source v-if="lg" media="(min-width:1280px)" :srcset="lg">
            <source :srcset="sm">
            <img :src="sm" alt="address"/>
        </picture>

        <figcaption class="dlp-property__desc">
            <p class="dlp-property__price"><strong>{{price}}</strong></p>
            <address>
                <p v-html="address"/>
                <p v-if="address2"  v-html="address2"/>
            </address>
        </figcaption>
    </figure>
</template>
<script>
export default {
    name: "dlp-property",
    props: {
        sm: {
            type: String,
            required: true
        },
        lg: {
            type: String,
            required: false
        },
        price: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        //support split addresses
        address2: {
            type: String,
            required: false
        }
    }
}
</script>