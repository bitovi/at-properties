<template>
    <div class='section-content'>
        <div class="content-grid">
            <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
                <img
                    class="mx-auto logo--agency fade-in"
                    :alt="`${i18n.logo.alt}`" 
                    :src="`${i18n.logo.sm}`"/>
            </div>
            <div class="col-span-full md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}${i18n.photo.sm}`"
                    :md="`${publicPath}${i18n.photo.md}`"
                    :alt="`${i18n.name}`"
                    :caption="`${i18n.name}`"
                    ar="ar ar--4-5"
                    :isSticky="true"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-7 lg:col-start-9 lg:col-span-7">
                <section id="agent-bio" class="">
                    
                    <h2 class="head-1 fade-in">{{i18n.name}}</h2>
                    <h3 class="head-5 accent--above-left fade-in">Agent Bio</h3>
                    <p v-html="i18n.bio.brief" class="fade-in"></p>
                    <div class="btn-group fade-in">
                        <dlp-button type="button" @click="showModal('AgentModal', $event)">Read Full Bio</dlp-button>
                        <dlp-appear-modal ref="AgentModal">
                            <h3 class="head-5 accent--above-left mb-8">Agent Bio</h3>
                            <div v-html="i18n.bio.full"></div>
                        </dlp-appear-modal>
                        <dlp-button type="button" @click="showModal('AgentVideo', $event)">Watch Agent Video</dlp-button>
                        <dlp-video-modal ref="AgentVideo" videoId="U0DYr9w9SX0" :caption="i18n.name"/>
                    </div>
                </section>

                <section id="agent-testimonials" class="">
                    <h3 class="head-5 accent--above-left fade-in">Testimonials</h3>
                    <div class="dlp-testimonial__wrapper">
                        <dlp-testimonial
                            v-for="t in i18n.testimonials.slice(0, 3)" v-bind:key="t.id"
                            class="fade-in"
                            :score="t.rating">
                            <q v-html="t.trunk"/>
                        </dlp-testimonial>
                    </div>
                    <div class="btn-group">
                        <dlp-button type="button" class="fade-in" @click="showModal('TestimonialsModal', $event)">View more testimonials</dlp-button>
                        <dlp-appear-modal ref="TestimonialsModal">
                            <h3 class="head-5 accent--above-left">Testimonials</h3>
                            <div class="dlp-testimonial__wrapper">
                                <dlp-testimonial
                                    v-for="t in i18n.testimonials" 
                                    v-bind:key="t.id" 
                                    :score="t.rating">
                                        <div v-html="t.quote"/>
                                    </dlp-testimonial>
                            </div>
                        </dlp-appear-modal>
                    </div>
                </section>

                <section id="agent-sales" class="">
                    <h3 class="head-5 accent--above-left fade-in">Recent Sales</h3>
                    <div class="dlp-property__wrapper">
                        <dlp-property
                            class="fade-in"
                            v-for="s in i18n.sales.slice(0, 3)" 
                            v-bind:key="`brief-${s.id}`"
                            :sm="s.photo.sm" 
                            :lg="s.photo.lg" 
                            :price="s.price" 
                            :address="s.address" />
                    </div>
                    <div class="btn-group">
                        <dlp-button type="button" class="fade-in" @click="showModal('SalesModal', $event)">View more sales</dlp-button>
                        <dlp-appear-modal ref="SalesModal">
                            <h3 class="head-5 accent--above-left mb-8">Recent Sales</h3>
                            <div class="dlp-property__wrapper">
                                <dlp-property
                                    v-for="sale in i18n.sales" 
                                    v-bind:key="sale.id" 
                                    :sm="sale.photo.sm" 
                                    :lg="sale.photo.lg" 
                                    :price="sale.price" 
                                    :address="sale.address" />
                            </div>
                        </dlp-appear-modal>
                    </div>
                </section>

                <section id="agent-stats" class="">
                    <h3 class="head-5 accent--above-left fade-in">Agent Stats</h3>
                    <div class="space-y-4 lg:space-y-6 mt-6 lg:mt-8">
                        <div class="stat fade-in">
                            <span class="head-3 text-secondary-500" v-html="i18n.stats[0]['span-1']"></span>
                            <span class="head-6" v-html="i18n.stats[0]['span-2']"></span>
                        </div>
                        <div class="stat fade-in">
                            <span class="head-3 text-secondary-500" v-html="i18n.stats[1]['span-1']"></span>
                            <span class="head-6" v-html="i18n.stats[1]['span-2']"></span>
                        </div>
                        <div class="stat fade-in">
                            <span class="head-3 text-secondary-500">{{i18n.stats[2]['span-1']}}</span>
                            <span class="head-6" v-html="i18n.stats[2]['span-2']"></span>
                        </div>
                    </div>
                </section>

                <section id="agent-contact">
                    <h3 class="head-5 accent--above-left fade-in">Agent Contact</h3>
                    <address class="contact-info fade-in">
                        <a :href="`tel:+1-${i18n.contact.phone}`">{{i18n.contact.phone}}</a>
                        <a :href="`mailto:${i18n.contact.email}`">{{i18n.contact.email}}</a>
                    </address>
                    <dlp-social 
                        class="fade-in"
                        v-bind="i18n.contact.social"
                    />
                </section>
            </div>
        </div>
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
        showModal: function(name, evt) {
            if(this.$refs[name]){
                this.$refs[name].open(evt)
            }
        }
    }
}
</script>