<template>
    <div class="dlp-bio-swiper" aria-hidden="true" role="presentation">
        <carousel class="dlp-bio-swiper-carousel">
            <ProfileCard src="images/team/team-1.jpg" name="Jenny Wilson" tagline="Lead Broker"/>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
            <slide>
                Test
            </slide>
        </carousel>
        <div class="dlp-bio-swiper-nav-wrapper">

        </div>
    </div>
</template>
<script>
import ProfileCard from './_profile.component'

export default {
    name: 'dlp-bio-swiper',
    components: {
        ProfileCard
    },
    props: {

    }
}
</script>
