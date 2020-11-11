<template>
    <div class='dlp-page dlp-content'>
        <div class="pt-24 px-12 xl:px-32 grid md:grid-cols-3 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
            <div>
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/thad-wong-sm.jpg`"
                    :lg="`${publicPath}images/profiles/thad-wong-lg.jpg`"
                    alt="Thad Wong"
                    caption="Thad Wong"
                    ar="ar ar-4-5"
                    :isSticky="true"
                ></dlp-figure>
            </div>
            <div class="md:col-span-2 xl:col-span-1">
                <section id="agent-bio">
                    <img
                        class="sm:mx-auto my-8 md:mb-8 md:my-0 md:mx-0"
                        alt="Emily Sachs Wong - Luxury Living" 
                        :src="`${publicPath}images/logos/logo-emily-sachs-wong.jpg`">
                    <h2 class="head-2">Thad Wong</h2>
                    <h3 class="head-5 accent">Agent Bio</h3>
                    <p v-html="i18n.thad.sample"></p>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-slide-in ref="AgentModal">
                            <div v-html="i18n.thad.full"></div>
                        </dlp-slide-in>
                        <dlp-button type="button">Watch Agent Video</dlp-button>
                    </div>
                </section>

                <section id="agent-testimonials">
                    <h3 class="head-5 accent mb-4">Testimonials</h3>
                    <dlp-testimonial :score="4">“Thad provided outstanding service for a very complex transaction that had to be completed within a tight timeframe while working with a difficult counterparty.”</dlp-testimonial>
                    <dlp-testimonial>“I offer my highest recommendation--this is the broker you want on your side." [Test no score]</dlp-testimonial>
                    <dlp-testimonial :score="5">“Moreover, he brings with him an entire team to make your purchase or sale go through without a hitch.”</dlp-testimonial>
                    <div class="btn-group">
                        <dlp-button href="#">View more testimonials</dlp-button>
                    </div>
                </section>

                <section id="agent-sales">
                    <h3 class="head-5 accent mb-4">Recent Sales</h3>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-1.jpg`" price="$589,500" address="26W268 Inwood Lane" address2="Winfield, IL 60190"></dlp-sales-card>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-2.jpg`" price="$1,140,100" address="701 W Thomas Rd Wheaton, IL 60187"></dlp-sales-card>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-3.jpg`" price="$423,250" address="2865 West Shakespeare Avenue Chicago, IL 60647"></dlp-sales-card>
                    <div class="btn-group">
                        <dlp-button href="#">View more sales</dlp-button>
                    </div>
                </section>

                <section id="agent-stats" class="mb-16">
                    <h3 class="head-5 accent">Agent Stats</h3>
                    <!-- TODO: Nick isn't overly fond of this. -->
                    <!-- Is there better semantics? -->
                    <p class="mb-4">
                        <span class="head-3 block callout-text">Number One</span>
                        <span class="head-6">Top selling agent in Lincoln Park</span>
                    </p>
                    <p class="mb-4">
                        <span class="head-3 block callout-text">$20 Million</span>
                        <span class="head-6">Annual Sales in 2019</span>
                    </p>
                    <p class="mb-4">
                        <span class="head-3 block callout-text">30 Under 30</span>
                        <span class="head-6">Real Estate Agent in Chicago</span>
                    </p>
                </section>

                <section id="agent-contact" class="mb-16">
                    <h3 class="head-5 accent">Agent Contact</h3>
                    <address class="mt-4">
                        <a href="tel:+1-312-999-0848">312.999.0848</a><br /><br />
                        <a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a>
                    </address>
                    <dlp-social 
                        facebook="https://www.facebook.com/thad.wong.54"
                        instagram="https://www.instagram.com/thadly_wong/"
                    ></dlp-social>
                </section>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
import BioStrings from '../assets/strings/bio.i18n.json'
export default {
    name: 'agentContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL,
            i18n: BioStrings
        }
    },
    methods: {
        showModal: function(name) {
            if(this.$refs[name]){
                this.$refs[name].open()
            }
        }
    }
}
</script>