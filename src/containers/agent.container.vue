<template>
    <article id="agent" class="border-b border-light-gray pb-24">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-agent.jpg')`">
            <div class="section-border pt-10 px-10 pb-4 grid grid-cols-1 gap-8 content-between">
                <div class="text-center"> 
                    <img :src="`${publicPath}images/at-logo.svg`" alt="@properties" class="w-1/2 md:w-auto" />
                </div>
                <div class="text-center">
                    <img :src="`${publicPath}images/stop-looking.svg`" alt="Stop Looking. Start Finding." class="w-3/4 lg:w-auto" />
                </div>
                <div class="text-center">
                    <h1 class="head-1">Top 1% in Chicago<br>$250M Sales</h1>
                    <p class="head-6">Presented by Thad Wong for Stephanie Huarte & Mekael Wesley-Rosa</p>
                </div>
                <!-- <scroll-notify class="text-center"></scroll-notify> -->
                <div class="text-center">
                    <span class="scroll">Scroll to Continue</span>
                    <img :src="`${publicPath}images/scroll-arrow.svg`" alt="" />
                </div>
            </div>
        </header>
        <div class="pt-24 px-12 xl:px-32 grid md:grid-cols-3 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
            <div>
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
            <div class="md:col-span-2 xl:col-span-1">
                <section id="agent-bio">
                    <!-- Does the size of this image change? -->
                    <img src="images/logos/logo-emily-sachs-wong.jpg" alt="Emily Sachs Wong" />
                    <h2 class="head-2">Thad wong</h2>
                    <h3 class="head-5 accent-above-left">Agent Bio</h3>
                    <p>Thad Wong is the co-founder and co-CEO of @properties, the nation's 10th largest brokerage firm by sales volume (REALTrends 500). @properties and its affiliated companies have over 3,500 agents in nine states, as well as annual closed sales volume of over $12 billion...</p>
                    <div class="btn-group">
                        <button class="btn">Read Full Bio</button>
                        <button class="btn">Watch Agent Video</button>
                    </div>
                </section>
                <section id="agent-testimonials">
                    <h3 class="head-5 accent-above-left">Testimonials</h3>
                    <div class="space-y-4 divide-y divide-light-gray">
                        <sc-testimonial :score="4">Thad provided outstanding service for a very complex transaction that had to be completed within a tight timeframe while working with a difficult counterparty.</sc-testimonial>
                        <sc-testimonial>I offer my highest recommendation--this is the broker you want on your side. [Test no score]</sc-testimonial>
                        <sc-testimonial :score="5">Moreover, he brings with him an entire team to make your purchase or sale go through without a hitch.</sc-testimonial>
                    </div>
                    <button class="btn">View More Testimonials</button>
                </section>
                <section id="agent-sales">
                    <h3 class="head-5 accent-above-left">Recent Sales</h3>
                    <div class="space-y-4 divide-y divide-light-gray">
                        <div class="property">
                            <div>
                                <sc-photo 
                                    :sm="`${publicPath}images/sales/property-1.jpg`"
                                    :lg="`${publicPath}images/sales/property-1.jpg`"
                                    alt="Gray and white Craftsman style country home" 
                                    ar="ar ar-3-2"
                                    position="object-top"
                                ></sc-photo>
                            </div>
                            <div>
                                <p><strong>$589,500</strong></p>
                                <p>26W268 Inwood Lane<br />Winfield, IL 60190</p>
                            </div>
                        </div>
                        <div class="property">
                            <div>
                                <sc-photo 
                                    :sm="`${publicPath}images/sales/property-2.jpg`"
                                    :lg="`${publicPath}images/sales/property-2.jpg`"
                                    alt="Modern glass facade home" 
                                    ar="ar ar-3-2"
                                    position="object-top"
                                ></sc-photo>
                            </div>
                            <div>
                                <p><strong>$1,140,100</strong></p>
                                <p>701 W Thomas Rd<br />Wheaton, IL 60187</p>
                            </div>
                        </div>
                        <div class="property">
                            <div>
                                <sc-photo 
                                    :sm="`${publicPath}images/sales/property-3.jpg`"
                                    :lg="`${publicPath}images/sales/property-3.jpg`"
                                    alt="Modern stucco entryway" 
                                    ar="ar ar-3-2"
                                    position="object-top"
                                ></sc-photo>
                            </div>
                            <div>
                                <p><strong>$423,250</strong></p>
                                <p>2865 West Shakespeare Avenue<br />Chicago, IL 60647</p>
                            </div>
                        </div>
                    </div>
                    <button class="btn">View More Sales</button>
                </section>
                <section id="agent-stats">
                    <h3 class="head-5 accent-above-left">Agent <span aria-label="Statistics">Stats</span></h3>
                    <div class="space-y-6">
                        <div class="stat">
                            <span>Number one</span> 
                            <span>top selling agent in Lincoln park</span>
                        </div>
                        <div class="stat">
                            <span aria-label="Twenty million dollars">$20 Million</span> 
                            <span>annual sales in 2019</span>
                        </div>
                        <div class="stat">
                            <span>30 under 30</span> 
                            <span>real estate agent in Chicago</span>
                        </div>
                    </div>
                </section>
                <section id="agent-contact">
                    <h3 class="head-5 accent-above-left">Agent Contact</h3>
                    <p><a href="tel:312.999.0848">312.999.0848</a></p>
                    <p><a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a></p>
                    <sc-social 
                        facebook="https://www.facebook.com/thad.wong.54"
                        instagram="https://www.instagram.com/thadly_wong/"
                    ></sc-social>
                </section>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'agentContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>