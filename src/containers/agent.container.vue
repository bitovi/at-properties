<template>
    <div class='section-content'>
        <div class="content-grid pb-16">
            <div class="col-span-full text-center">
                <img
                    class="mx-auto" 
                    style="width: 200px;"
                    :alt="`${i18n.logo.alt}`" 
                    :src="`${i18n.logo.sm}`">
            </div>
            <div class="col-span-4 md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}${i18n.photo.sm}`"
                    :md="`${publicPath}${i18n.photo.md}`"
                    :alt="`${i18n.name}`"
                    :caption="`${i18n.name}`"
                    ar="ar ar-4-5"
                    :isSticky="true"
                ></dlp-figure>
            </div>
            <div class="col-span-4 md:col-span-7 lg:col-start-9 lg:col-span-7">
                <section id="agent-bio" class="mb-16">
                    
                    <h2 class="head-2">{{i18n.name}}</h2>
                    <h3 class="head-5 accent mb-4">Agent Bio</h3>
                    <div v-html="i18n.bio.brief"></div>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-slide-in ref="AgentModal">
                            <h3 class="head-5 accent mb-8">Agent Bio</h3>
                            <div v-html="i18n.bio.full"></div>
                        </dlp-slide-in>
                        <dlp-button type="button" @click="showModal('AgentVideo')">Watch Agent Video</dlp-button>
                        <dlp-video-modal ref="AgentVideo" videoId="U0DYr9w9SX0" :caption="i18n.name"/>
                    </div>
                </section>

                <section id="agent-testimonials" class="mb-16">
                    <h3 class="head-5 accent mb-4">Testimonials</h3>
                    <dlp-testimonial 
                                v-for="t in i18n.testimonials.slice(0, 3)" 
                                v-bind:key="t.id" 
                                :score="t.rating">
                                    <div v-html="t.trunk"></div>
                                </dlp-testimonial>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('TestimonialsModal')">View more testimonials</dlp-button>
                        <dlp-slide-in ref="TestimonialsModal">
                            <h3 class="head-5 accent mb-8">Testimonials</h3>
                            <dlp-testimonial 
                                v-for="t in i18n.testimonials" 
                                v-bind:key="t.id" 
                                :score="t.rating">
                                    <div v-html="t.quote"></div>
                                </dlp-testimonial>
                        </dlp-slide-in>
                    </div>
                </section>

                <section id="agent-sales" class="mb-16">
                    <h3 class="head-5 accent mb-4">Recent Sales</h3>
                    <dlp-sales-card 
                        v-for="sale in i18n.sales.slice(0, 3)" 
                        v-bind:key="sale.id" 
                        :sm="sale.photo.sm" 
                        :lg="sale.photo.lg" 
                        :price="sale.price" 
                        :address="sale.address" />
                    
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('SalesModal')">View more sales</dlp-button>
                        <dlp-slide-in ref="SalesModal">
                            <h3 class="head-5 accent mb-8">Recent Sales</h3>
                            <dlp-sales-card 
                                v-for="sale in i18n.sales" 
                                v-bind:key="sale.id" 
                                :sm="sale.photo.sm" 
                                :lg="sale.photo.lg" 
                                :price="sale.price" 
                                :address="sale.address" />
                        </dlp-slide-in>
                    </div>
                </section>

                <section id="agent-stats" class="mb-16">
                    <h3 class="head-5 accent">Agent Stats</h3>
                    <p class="mb-4">
                        <span class="head-3 block callout-text" v-html="i18n.stats[0]['span-1']"></span>
                        <span class="head-6" v-html="i18n.stats[0]['span-2']"></span>
                    </p>
                    <p class="mb-4">
                        <span class="head-3 block callout-text" v-html="i18n.stats[1]['span-1']"></span>
                        <span class="head-6" v-html="i18n.stats[1]['span-2']"></span>
                    </p>
                    <p class="mb-4">
                        <span class="head-3 block callout-text">{{i18n.stats[2]['span-1']}}</span>
                        <span class="head-6" v-html="i18n.stats[2]['span-2']"></span>
                    </p>
                </section>

                <section id="agent-contact">
                    <h3 class="head-5 accent">Agent Contact</h3>
                    <address class="mt-4">
                        <a :href="`tel:+1-${i18n.contact.phone}`">{{i18n.contact.phone}}</a><br /><br />
                        <a :href="`mailto:${i18n.contact.email}`">{{i18n.contact.email}}</a>
                    </address>
                    <dlp-social 
                        v-bind="i18n.contact.social"
                    ></dlp-social>
                    
                </section>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
import AgentStrings from '../assets/strings/agent.i18n.json'

export default {
    name: 'agentContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL,
            i18n: AgentStrings
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