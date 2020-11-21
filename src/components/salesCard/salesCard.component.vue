<template>
    <div class="dlp-sales-card grid grid-cols-3 gap-4">
        <div class="col-span-1">
            <picture>
                <source v-if="lg" media="(min-width:1280px)" :srcset="lg">
                <source :srcset="sm">
                <img :src="sm" alt="address"/>
            </picture>
            
        </div>
        <div class="col-span-2">
            <p><strong>{{price}}</strong></p>
            <p  v-html="address"/>
            <p v-if="address2"  v-html="address2"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "dlp-sales-card",
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