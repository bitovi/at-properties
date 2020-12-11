<template>
    <div class="section-content">
        <section id="team-bio" class="content-grid">
            <div class="col-span-full text-center">
                <img 
                    src="images/team/logo-olivia-carson.jpg" 
                    class="mx-auto logo--agency" 
                    alt="Olivia Carlson" />
            </div>
            <div class="col-span-4 md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}images/team/team-sm.jpg`"
                    :lg="`${publicPath}images/team/team-lg.jpg`"
                    alt="Olivia Carlson team"
                    ar="ar ar--4-5"
                    :isSticky="true"
                    animate="shrink"
                />
            </div>
            <div class="col-span-4 md:col-span-7 lg:col-start-9 lg:col-span-7">
                <div>
                    <h1 class="head-1">{{i18n.name}}</h1>
                    <h2 class="head-5 accent--above-left">Team Bio</h2>
                    <dlp-transition type="fadeIn ">
                        <p v-html="i18n.bio.brief"></p>
                    </dlp-transition>
                    <div class="btn-group">
                        <dlp-button type="button" @click="showModal('AgentModal')">Read Full Bio</dlp-button>
                        <dlp-appear-modal ref="AgentModal">
                            <div v-html="i18n.bio.full"></div>
                        </dlp-appear-modal>                        
                        <dlp-button type="button" @click="showModal('TeamVideo')">Watch Team Video</dlp-button>
                        <dlp-video-modal ref="TeamVideo" videoId="jsNh7ov4uD4" :caption="i18n.name"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="team-stats" class="content-grid">
            <div class="col-span-full lg:col-span-14 lg:col-start-2 my-16">
                <div class="grid md:grid-cols-3 border-t border-b border-primary-100 divide-y md:divide-y-0 md:divide-x divide-primary-100">
                    <dlp-transition type="fadeIn pop" :delay="0">
                        <div class="p-8 text-center stat">
                            <span class="head-3 block text-secondary-500" v-html="i18n.stats[0]['span-1']"></span> 
                            <span class="head-6" v-html="i18n.stats[0]['span-2']"></span>
                        </div>
                    </dlp-transition>
                    <dlp-transition type="fadeIn pop" :delay="0.25">
                        <div class="p-8 text-center stat">
                            <span class="head-3 block text-secondary-500" v-html="i18n.stats[1]['span-1']"></span> 
                            <span class="head-6" v-html="i18n.stats[1]['span-2']"></span>
                        </div>
                    </dlp-transition>
                    <dlp-transition type="fadeIn pop" :delay="0.5">
                        <div class="p-8 text-center stat">
                            <span class="head-3 block text-secondary-500" v-html="i18n.stats[2]['span-1']"></span> 
                            <span class="head-6" v-html="i18n.stats[2]['span-2']"></span>
                        </div>
                    </dlp-transition>
                </div>
            </div>
        </section>

        <section id="team-members" class="content-grid">
          <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
            <h2 class="head-5 text-center accent--below-center mb-12">Team Members</h2>
            <dlp-flat-scroll>
                <dlp-bio-card source="images/team/Olivia_Main.jpg" name="Olivia Carlson" caption="Lead Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/Paul-Headshot.jpg" name="Paul Siebert" caption="Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/LoumenaDa.jpg" name="Dani Loumena" caption="Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/Lindsey-Crop.jpeg" name="Lindsey Matejak" caption="Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/david-lubega.jpeg" name="David Lubega" caption="Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/christine-hooper.jpeg" name="Christine Hooper" caption="Broker"  ar="ar--3-4"/>
                <dlp-bio-card source="images/team/lou-prima.jpeg" name="Lou Prima" caption="Broker"  ar="ar--3-4"/>
            </dlp-flat-scroll>
          </div>
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