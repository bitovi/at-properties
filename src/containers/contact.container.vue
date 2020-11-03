<template>
    <article id="contact" class="pb-12">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-contact-lg.jpg')`">
            <div class="section-border grid lg:grid-cols-2 md:gap-8">
                <div class="self-center md:pt-10 md:px-56 lg:px-32">
                    <sc-photo 
                        :sm="`${publicPath}images/profiles/thad-wong-sm.jpg`"
                        :lg="`${publicPath}images/profiles/thad-wong-lg.jpg`"
                        alt="Thad Wong"
                        caption="Thad Wong"
                        border="photo-border" 
                        ar="ar ar-4-5"
                        position="object-top"
                    ></sc-photo>
                </div>
                <div class="self-center text-center">
                    <h2 class="head-2">MEKAEL WESLEY-ROSA</h2>
                    <h3 class="head-5 accent-above-center">Contact me today!</h3>
                    <p><a href="tel:312.999.0848">312.999.0848</a></p>
                    <p><a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a></p>
                    <sc-social 
                        facebook="https://www.facebook.com/thad.wong.54"
                        instagram="https://www.instagram.com/thadly_wong/"
                        twitter="https://twitter.com/properties" 
                        youtube="https://www.youtube.com/user/AtPropertiesTV"
                    ></sc-social>
                </div>
            </div>
        </header>
    </article>
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