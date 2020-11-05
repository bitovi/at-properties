<template>
    <div class="dlp-sales-card grid grid-cols-3 gap-4">
        <div class="col-span-1">
            <img :src="image" alt="address"/>
        </div>
        <div class="col-span-2">
            <h5 class="bold-heading">{{price}}</h5>
            <p>{{address}}</p>
            <p v-if="address2">{{address2}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "dlp-sales-card",
    props: {
        image: {
            type: String,
            required: true
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