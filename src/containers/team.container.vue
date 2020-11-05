<template>
    <article class="dlp-page dlp-content">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <aside class="dlp-hero">
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/olivia-carson-sm.jpg`"
                    :lg="`${publicPath}images/profiles/olivia-carson-lg.jpg`"
                    alt="Olivia Carlson"
                    caption="Olivia Carlson"
                ></dlp-figure>
            </aside>
            <section class="mb-16">
                <img
                    class="mb-8"
                    alt="Olivia Carlson" 
                    :src="`${publicPath}images/logos/logo-olivia-carson.jpg`">
                <h1 class="title-heading">Olivia Carlson</h1>
                <h2 class="section-heading accent">Team Bio</h2>
                <p v-html="i18n['olivia-arson'].sample"></p>
                <div class="dlp-btn-group">
                    <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                    <dlp-slide-in ref="AgentModal">
                        <div v-html="i18n['olivia-arson'].full"></div>
                    </dlp-slide-in>
                    <dlp-button type="button">Watch Team Video</dlp-button>
                </div>
            </section>
        </div>
        <section id="team-stats" class="my-16">
            <div class="grid md:grid-cols-3 border-t border-b border-light-gray divide-y md:divide-y-0 md:divide-x divide-light-gray">
                <div class="p-8 text-center stat">
                    <span class="callout-heading" aria-label="300 plus">300+</span> 
                    <span class="label-heading">transactions</span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="callout-heading" >10 years</span> 
                    <span class="label-heading">selling real estate</span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="callout-heading" aria-label="Over 24 million dollars">$24M+</span> 
                    <span class="label-heading">total sales</span>
                </div>
            </div>
        </section>
        <section>
            <h2 class="section-heading text-center accent accent-centered">Team Members</h2>
        </section>
    </article>
</template>
<script>
import BioStrings from '../assets/strings/bio.i18n.json'

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