<template>
    <div class="dlp-timeline-item" v-bind="$attrs">
        <figure class="dlp-timeline-item--content">
            <div class="ar ar--4-3">
                <img class="dlp-timeline-item--img" :src="img" :alt="alt"/>
            </div>
            <figcaption>
                <p class="accent--above-center">{{desc}}</p>
            </figcaption>
        </figure>
        <div class="dlp-timeline-item--time">
            <div class="dlp-timeline-item--pointer-line"></div>
            <div class="dlp-timeline-item--pointer"></div>
            <span class="dlp-timeline-item--date">{{date}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dlp-timeline-item',
    props: {
        date: {
            type: String
        },
        img: {
            type: String,
            required: true
        },
        alt: {
            type: String
        },
        desc: {
            type: String
        }
    }
}
</script>