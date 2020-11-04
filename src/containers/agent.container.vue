<template>
    <div class='sc-page sc-content'>
        <section>
            <header>
                <div class="flex flex-row justify-center mt-20 mb-20">
                    <img
                        alt="Emily Sachs Wong - Luxury Living" 
                        :src="`${publicPath}images/logos/logo-emily-sachs-wong.jpg`">
                </div>
            </header>        
        </section>
        <section class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <aside class="sc-hero">
                <profile-image 
                    :sm="`${publicPath}images/profiles/thad-wong-sm.jpg`"
                    :lg="`${publicPath}images/profiles/thad-wong-lg.jpg`"
                    alt="Thad Wong"
                    caption="Thad Wong"
                ></profile-image>
            </aside>
            <article>
                <section id="agent-bio">
                    <h1 class="title-heading">Thad Wong</h1>
                    <h2 class="section-heading">Agent Bio</h2>
                    <p v-html="i18n.thad.sample"></p>
                    <div class="sc-btn-group">
                        <sc-button type="button" @click="showModal('AgentModal')">Read Full Bio</sc-button>
                        <sc-slide-in ref="AgentModal">
                            <div v-html="i18n.thad.full"></div>
                        </sc-slide-in>
                        <sc-button type="button">Watch Agent Video</sc-button>
                    </div>
                </section>

                <section>
                    <h3 class="section-heading">Testimonials</h3>
                    <sc-testimonial :score="4">“Thad provided outstanding service for a very complex transaction that had to be completed within a tight timeframe while working with a difficult counterparty.”</sc-testimonial>
                    <sc-testimonial>“I offer my highest recommendation--this is the broker you want on your side." [Test no score]</sc-testimonial>
                    <sc-testimonial :score="5">“Moreover, he brings with him an entire team to make your purchase or sale go through without a hitch.”</sc-testimonial>
                    <div class="sc-btn-group">
                        <sc-button href="#">View more testimonials</sc-button>
                    </div>
                </section>

                <section>
                    <h3 class="section-heading">Recent Sales</h3>
                    <sc-sales-card :image="`${publicPath}images/prop-image-1.jpg`" price="$589,500" address="26W268 Inwood Lane" address2="Winfield, IL 60190"></sc-sales-card>
                    <sc-sales-card :image="`${publicPath}images/prop-image-2.jpg`" price="$1,140,100" address="701 W Thomas Rd Wheaton, IL 60187"></sc-sales-card>
                    <sc-sales-card :image="`${publicPath}images/prop-image-3.jpg`" price="$423,250" address="2865 West Shakespeare Avenue Chicago, IL 60647"></sc-sales-card>
                    <div class="sc-btn-group">
                        <sc-button href="#">View more sales</sc-button>
                    </div>
                </section>

                <section class="mb-16">
                    <h3 class="section-heading">Agent Stats</h3>
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

                <section class="mb-16">
                    <h3 class="section-heading">Agent Contact</h3>
                    <address>
                        <a href="tel:+1-312-999-0848">312.999.0848</a><br /><br />
                        <a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a>
                    </address>
                    <div class="">
                        <a href="#" target="_blank">Facebook</a>
                        <a href="#" target="_blank">Instagram</a>
                    </div>
                </section>
            </article>
        </section>
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