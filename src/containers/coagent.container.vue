<template>
    <div class="section-content">
        <div class="content-grid">
            <div class="col-span-full lg:col-span-14 lg:col-start-2 text-center">
                <img 
                    class="mx-auto logo--agency fade-in" 
                    :src="`${i18n.logo.sm}`" 
                    :alt="`${i18n.logo.alt}`" />
            </div>
            <div class="col-span-full md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${i18n.photo.sm}`"
                    :md="`${i18n.photo.md}`"
                    :alt="`${i18n.name}`"
                    :caption="`${i18n.name}`"
                    ar="ar ar--4-5"
                    :isSticky="false"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-7 lg:col-start-9 lg:col-span-7">
                <section>
                    <h1 class="head-1 fade-in">{{i18n.name}}</h1>
                    <h2 class="head-5 accent--above-left fade-in">Co-agent Bio</h2>    
                    <p v-html="i18n.bio.brief" class="fade-in"></p>
                    <div class="btn-group fade-in">
                        <dlp-button type="button" @click="showModal('CoagentModal', $event)">Read Full Bio</dlp-button>
                        <dlp-button type="button" @click="showModal('AgentVideo', $event)">Watch Agent Video</dlp-button>
                    </div>
                        <dlp-appear-modal ref="CoagentModal">
                            <h3 class="head-5 accent--above-left mb-8">Agent Bio</h3>
                            <div v-html="i18n.bio.full"></div>
                        </dlp-appear-modal>
                        <dlp-video-modal ref="AgentVideo" videoId="7ZMbcaCJzdg" :caption="i18n.name"/>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import CoAgentStrings from '../assets/strings/coagent.i18n.json'
export default {
    name: 'coagentContainer',
    data(){
        return {
            i18n: CoAgentStrings
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