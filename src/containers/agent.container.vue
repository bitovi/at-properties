<template>
    <div class='dlp-page dlp-content'>
        <header>
            <div class="flex flex-row justify-center mt-20 mb-20">
                <img
                    alt="Emily Sachs Wong - Luxury Living" 
                    :src="`${publicPath}images/logos/logo-emily-sachs-wong.jpg`">
            </div>
        </header>
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <aside class="dlp-hero">
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/thad-wong-sm.jpg`"
                    :lg="`${publicPath}images/profiles/thad-wong-lg.jpg`"
                    alt="Thad Wong"
                    caption="Thad Wong"
                    class="sticky"
                ></dlp-figure>
            </aside>
            <div>
                <section id="agent-bio">
                    <h1 class="title-heading">Thad Wong</h1>
                    <h2 class="section-heading accent">Agent Bio</h2>
                    <p v-html="i18n.thad.sample"></p>
                    <div class="dlp-btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-slide-in ref="AgentModal">
                            <div v-html="i18n.thad.full"></div>
                        </dlp-slide-in>
                        <dlp-button type="button">Watch Agent Video</dlp-button>
                    </div>
                </section>

                <section id="agent-testimonials">
                    <h3 class="section-heading accent">Testimonials</h3>
                    <dlp-testimonial :score="4">“Thad provided outstanding service for a very complex transaction that had to be completed within a tight timeframe while working with a difficult counterparty.”</dlp-testimonial>
                    <dlp-testimonial>“I offer my highest recommendation--this is the broker you want on your side." [Test no score]</dlp-testimonial>
                    <dlp-testimonial :score="5">“Moreover, he brings with him an entire team to make your purchase or sale go through without a hitch.”</dlp-testimonial>
                    <div class="dlp-btn-group">
                        <dlp-button href="#">View more testimonials</dlp-button>
                    </div>
                </section>

                <section id="agent-sales">
                    <h3 class="section-heading accent">Recent Sales</h3>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-1.jpg`" price="$589,500" address="26W268 Inwood Lane" address2="Winfield, IL 60190"></dlp-sales-card>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-2.jpg`" price="$1,140,100" address="701 W Thomas Rd Wheaton, IL 60187"></dlp-sales-card>
                    <dlp-sales-card :image="`${publicPath}images/sales/property-3.jpg`" price="$423,250" address="2865 West Shakespeare Avenue Chicago, IL 60647"></dlp-sales-card>
                    <div class="dlp-btn-group">
                        <dlp-button href="#">View more sales</dlp-button>
                    </div>
                </section>

                <section id="agent-stats" class="mb-16">
                    <h3 class="section-heading accent">Agent Stats</h3>
                    <!-- TODO: Nick isn't overly fond of this. -->
                    <!-- Is there better semantics? -->
                    <p class="mb-4">
                        <span class="callout-heading">Number One</span>
                        <span class="label-heading">Top selling agent in Lincoln Park</span>
                    </p>
                    <p class="mb-4">
                        <span class="callout-heading">$20 Million</span>
                        <span class="label-heading">Annual Sales in 2019</span>
                    </p>
                    <p class="mb-4">
                        <span class="callout-heading">30 Under 30</span>
                        <span class="label-heading">Real Estate Agent in Chicago</span>
                    </p>
                </section>

                <section id="agent-contact" class="mb-16">
                    <h3 class="section-heading accent">Agent Contact</h3>
                    <address>
                        <a href="tel:+1-312-999-0848">312.999.0848</a><br /><br />
                        <a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a>
                    </address>
                    <div class="">
                        <a href="#" target="_blank">Facebook</a>
                        <a href="#" target="_blank">Instagram</a>
                    </div>
                </section>
            </div>
        </div>
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