<template>
    <div class="dlp-page dlp-content">
        <div class="container pt-12 px-12 xl:px-32 grid md:grid-cols-3 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
            <div>
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/olivia-carson-sm.jpg`"
                    :lg="`${publicPath}images/profiles/olivia-carson-lg.jpg`"
                    alt="Olivia Carlson"
                    caption="Olivia Carlson"
                    ar="ar ar-4-5"
                    :isSticky="true"
                ></dlp-figure>
            </div>
            <div class="md:col-span-2 xl:col-span-1">
                <section class="mb-16">
                    <img
                        class="sm:mx-auto my-8 md:mb-8 md:my-0 md:mx-0"
                        alt="Olivia Carlson" 
                        :src="`${publicPath}images/logos/logo-olivia-carson.jpg`">
                    <h1 class="head-1">Olivia Carlson</h1>
                    <h2 class="head-5 accent">Team Bio</h2>
                    <p v-html="i18n['olivia-arson'].sample"></p>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-slide-in ref="AgentModal">
                            <div v-html="i18n['olivia-arson'].full"></div>
                        </dlp-slide-in>
                        <dlp-button type="button">Watch Team Video</dlp-button>
                    </div>
                </section>
            </div>
        </div>
        
        <section id="team-stats" class="my-16">
            <div class="grid md:grid-cols-3 border-t border-b border-primary-100 divide-y md:divide-y-0 md:divide-x divide-primary-100">
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" aria-label="300 plus">300+</span> 
                    <span class="head-6">transactions</span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" >10 years</span> 
                    <span class="head-6">selling real estate</span>
                </div>
                <div class="p-8 text-center stat">
                    <span class="head-3 block callout-text" aria-label="Over 24 million dollars">$24M+</span> 
                    <span class="head-6">total sales</span>
                </div>
            </div>
        </section>

        <section>
            <h2 class="head-5 text-center accent accent-centered">Team Members</h2>
            <p class="text-center">[ CAROUSEL HERE ]</p>
        </section>
    </div>
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