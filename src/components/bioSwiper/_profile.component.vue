<template>
    <figure class="dlp-swiper-profile">
        <img src="src" alt="name" />
        <figcaption>
            <span>{{name}}</span>
            <span>{{tagline}}</span>
        </figcaption>
    </figure>
</template>
<script>
export default {
    name: 'dlp-swiper-profile',
    props: {
        name: {
            type: String,
            required: true
        },
        tagline: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    }
}
</script>