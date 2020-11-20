<template>
    <figure>
        <img srch="images/company/bio-1.jpg" alt=""/>
        <figcaption>
            <span></span>
            <span class="accent accent-centered"></span>
        </figcaption>
    </figure>
</template>
<script>
export default {
    name: 'dlp-bio-card',
    props: {
        source: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        caption: {
            type: String,
            default: null
        },
    }
}
</script>