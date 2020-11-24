<template>
    <div class="dlp-page dlp-hero mb-12" :style="`background-image: url('${publicPath}images/contact/bg-contact-lg.jpg')`">
        <div class="h-full grid grid-cols-1 lg:grid-cols-2 md:gap-8 content-center">
            <div class="hidden md:block self-center md:w-2/4 lg:w-full lg:p-20 mx-auto">
                <dlp-figure 
                    :sm="`${publicPath}images/agent/photo-carrie-mccormick-sm.jpg`"
                    :md="`${publicPath}images/agent/photo-carrie-mccormick-md.jpg`"
                    alt="MEKAEL WESLEY-ROSA"
                    caption="MEKAEL WESLEY-ROSA"
                    ar="ar ar-4-5"
                ></dlp-figure>
            </div>
            <div class="self-center text-center">
                <h2 class="head-2">MEKAEL WESLEY-ROSA</h2>
                <h3 class="head-5 accent accent-centered">Contact me today!</h3>
                <address>
                    <p><a href="tel:3129990848">312.999.0848</a></p>
                    <p><a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a></p>
                </address>
                <dlp-social 
                    facebook="https://www.facebook.com/thad.wong.54"
                    instagram="https://www.instagram.com/thadly_wong/"
                    twitter="https://twitter.com/properties" 
                    youtube="https://www.youtube.com/user/AtPropertiesTV"
                ></dlp-social>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>