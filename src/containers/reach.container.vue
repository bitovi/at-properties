<template>
    <div class='section-content'>
        <div class="content-grid">
            <div class="col-span-4 md:col-span-6 md:col-start-1 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :sm="`${publicPath}images/marketing/iphone-sm.png`"
                    :lg="`${publicPath}images/marketing/iphone-lg.png`"
                    alt="iPhone 11 Pro"
                    :showBorder="false"
                />
            </div>
            <div class="col-span-4 md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-10">
                <h3 class="head-5 accent accent-above">Leading RE</h3>
                <dlp-transition type="fadeIn slideUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida ac, diam malesuada. Fringilla arcu fusce tempus sodales velit id. Tristique sed nec dignissim imperdiet. Id eu cursus et parturient suscipit.</p>
                </dlp-transition>
                <div class="btn-group pb-16">
                    <dlp-button type="button" @click="showModal('ReachVideo')">Our Global Reach</dlp-button>
                    <dlp-video-modal ref="ReachVideo" videoId="DgZb_NRk-Bk" />
                </div>
            </div>
        </div>
        <div class="content-grid">
            <div class="order-3 md:order-4 col-span-4 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-9">
                <dlp-figure
                    :sm="`${publicPath}images/marketing/iphone-sm.png`"
                    :lg="`${publicPath}images/marketing/iphone-lg.png`"
                    alt="iPhone 11 Pro"
                    :showBorder="false"
                />
            </div>
            <div class="order-4 md:order-3 col-span-4 md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-2">
                <h3 class="head-5 accent accent-above">Luxury Portfolio</h3>
                <dlp-transition type="fadeIn slideUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque gravida ac, diam malesuada. Fringilla arcu fusce tempus sodales velit id. Tristique sed nec dignissim imperdiet. Id eu cursus et parturient suscipit.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button">View Luxury Stats</dlp-button>
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
        showModal: function(name) {
            if(this.$refs[name]){
                this.$refs[name].open()
            }
        }
    }
}
</script>