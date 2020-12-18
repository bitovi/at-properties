<template>
    <div class="section-content">
        <section class="content-grid pb-12 lg:pb-16" aria-label="Agent contact information">
            <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
                <img 
                    src="images/agent/emily-sachs-wong.jpeg" 
                    class="mx-auto logo--agency fade-in" 
                    alt="" />
            </div>
            <div class="col-span-full md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}images/agent/photo-carrie-mccormick-sm.jpg`"
                    :md="`${publicPath}images/agent/photo-carrie-mccormick-md.jpg`"
                    alt="Carrie McCormick"
                    ar="ar ar--4-5"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-7 lg:col-start-9 lg:col-span-7">
                <h1 class="head-1 fade-in">Carrie McCormick</h1>
                <h5 class="head-5 accent--above-left fade-in">Contact Me Today!</h5>
                <address class="contact-info fade-in">
                    <a :href="`tel:+1-${i18n.contact.phone}`">{{i18n.contact.phone}}</a>
                    <a :href="`mailto:${i18n.contact.email}`">{{i18n.contact.email}}</a>
                </address>
                <dlp-social 
                    class="fade-in"
                    v-bind="i18n.contact.social"
                />
            </div>
        </section>

        <section class="content-grid border-t border-b border-primary-200 py-12 lg:py-16" aria-label="@properties social presence">
            <div class="md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <img src="images/intro/logo-atproperties.svg" class="w-full" alt="@properties" />
            </div>
            <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
                <dlp-social 
                    class="fade-in"
                    facebook="https://www.facebook.com/thad.wong.54"
                    instagram="https://www.instagram.com/thadly_wong/"
                    twitter="https://twitter.com/properties" 
                    youtube="https://www.youtube.com/user/AtPropertiesTV"
                    website="https://www.atproperties.com/"
                />
            </div>
        </section>

        <section class="content-grid" aria-label="Legal disclaimers">
            <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
                <p>Disclaimer: Additional Information. All information, other than personal information subject to the @properties Privacy Policy, submitted to @properties through the Website or any related website is the property of @properties. @properties shall be free to use any ideas, concepts, know how or techniques that you may submit to us through the Website to improve our services. @properties shall not be subject to any obligations of confidentiality regarding any submitted information except as specified in our Privacy Policy, as set forth in any additional terms and conditions relating to specific products or services, or as otherwise specifically agreed or required by law.</p>
                <dlp-social 
                    lender="https://www.us.hsbc.com/home-loans/equal-housing-lender/"
                    realtor="https://www.nar.realtor/"
                />
            </div>
      </section>
    </div>
</template>

<script>
import AgentStrings from '../assets/strings/agent.i18n.json'

export default {
    name: 'contactContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL,
            i18n: AgentStrings
        }
    }
}
</script>