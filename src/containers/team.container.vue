<template>
    <div class='section-content'>
        <div class="content-grid">
            <div class="col-span-4 md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}images/team/team-sm.jpg`"
                    :lg="`${publicPath}images/team/team-lg.jpg`"
                    alt="Olivia Carlson"
                    caption="Olivia Carlson"
                    ar="ar ar-4-5"
                    :isSticky="true"
                ></dlp-figure>
            </div>
            <div class="col-span-4 md:col-span-7 lg:col-start-9 lg:col-span-7">
                <section class="mb-16">
                    <img
                        class="sm:mx-auto my-8 md:mb-8 md:my-0 md:mx-0"
                        alt="Olivia Carlson" 
                        :src="`${publicPath}images/team/logo-olivia-carson.jpg`">
                    <h1 class="head-1">i18n.name</h1>
                    <h2 class="head-5 accent">Team Bio</h2>
                    <p v-html="i18n.bio.brief"></p>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-slide-in ref="AgentModal">
                            <div v-html="i18n.bio.full"></div>
                        </dlp-slide-in>
                        <dlp-button type="button">Watch Team Video</dlp-button>
                    </div>
                </section>
            </div>
        </div>
        
        <section id="team-stats" class="my-16">
            <div class="grid md:grid-cols-3 border-t border-b border-primary-100 divide-y md:divide-y-0 md:divide-x divide-primary-100 max-w-screen-lg mx-auto">
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" v-html="i18n.stats[0]['span-1']"></span> 
                    <span class="head-6" v-html="i18n.stats[0]['span-2']"></span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" v-html="i18n.stats[1]['span-1']"></span> 
                    <span class="head-6" v-html="i18n.stats[1]['span-2']"></span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" v-html="i18n.stats[2]['span-1']"></span> 
                    <span class="head-6" v-html="i18n.stats[2]['span-2']"></span>
                </div>
            </div>
        </section>

        <section>
            <h2 class="head-5 text-center accent accent-below accent-centered mb-12">Team Members</h2>
            <dlp-carousel
                :options="{spaceBetween: 30}"
                :hasScrollNav="true"
                :loop="true"
                >
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-1.jpg" name="Jenny Wilson" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-2.jpg" name="Annette Black" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-3.jpg" name="Theresa Webb" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-4.jpg" name="Savannah Nguyen" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-1.jpg" name="Jenny Wilson" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-2.jpg" name="Annette Black" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-3.jpg" name="Theresa Webb" caption="Lead Broker" />
                </swiper-slide>
                <swiper-slide>
                    <dlp-bio-card source="images/team/bio-4.jpg" name="Savannah Nguyen" caption="Lead Broker" />
                </swiper-slide>

            </dlp-carousel>

        </section>
    </div>
</template>
<script>
import BioStrings from '../assets/strings/team.i18n.json'

export default {
    name: 'teamContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL,
            i18n: BioStrings,
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