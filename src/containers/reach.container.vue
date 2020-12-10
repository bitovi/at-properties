<template>
    <div class='section-content'>
        <section class="content-grid">
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :sm="`${publicPath}images/reach/leading_re.jpeg`"
                    alt="Leading Real Estate Companies of the World"
                    ar="ar ar--4-3"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-10 self-center">
                <h3 class="head-5 accent--above-left">Leading RE</h3>
                <dlp-transition type="fadeIn slideUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida ac, diam malesuada. Fringilla arcu fusce tempus sodales velit id. Tristique sed nec dignissim imperdiet. Id eu cursus et parturient suscipit.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button" @click="showModal('ReachVideo', $event)">Our Global Reach</dlp-button>
                    <dlp-video-modal ref="ReachVideo" videoId="DgZb_NRk-Bk" />
                </div>
            </div>
        </section>
        <div class="content-grid">
            <div class="order-3 md:order-4 col-span-4 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-9">
                <dlp-figure
                    :sm="`${publicPath}images/reach/luxury_portfolio.jpeg`"
                    alt="Luxury Portfolio International"
                    ar="ar ar--4-3"
                    animate="shrink"
                />
            </div>
            <div class="order-4 md:order-3 col-span-4 md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-2 content-center self-center">
                <h3 class="head-5 accent--above-left">Luxury Portfolio</h3>
                <dlp-transition type="fadeIn slideUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida ac, diam malesuada. Fringilla arcu fusce tempus sodales velit id. Tristique sed nec dignissim imperdiet. Id eu cursus et parturient suscipit.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button" @click="showModal('LuxaryStatsModal', $event)">View Luxury Stats</dlp-button>
                    <dlp-appear-modal ref="LuxaryStatsModal">
                        <h3 class="head-5 accent--above-left mb-8">Luxury Stats</h3>
                        <p>Coming soon...</p>
                    </dlp-appear-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'globalreachContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
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