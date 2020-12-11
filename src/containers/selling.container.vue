<template>
    <div class='section-content'>
        <div class="content-grid">
            <div class="order-3 md:order-4 col-span-4 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-9">
                <dlp-video-card
                    :sm="`images/selling/selling-1.jpg`"
                    alt="Person at desk"
                    animate="shrink"
                    videoId="K41QuRaOJPc"
                    title="Pricing Your Home"
                />
            </div>
            <div class="order-4 md:order-3 col-span-4 md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-2">
                <h3 class="head-5 accent--above-left">Pricing Your Home</h3>
                <dlp-transition type="fadeIn ">
                    <p>The surest way to get the highest selling price for your home is to set the listing price, correctly right out of the gate.</p>
                    <p>To determine the right listing price for your home, we will perform a Comparative Market Analysis with @properties’ Digital CMA. Unlike a traditional CMA, which is a static report, our Digital CMA is up-to the-minute accurate, using real-tome data from the local Multiple Listing Service.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button" @click="showModal('CMAModal', $event)">View Sample CMA</dlp-button>
                    <dlp-appear-modal ref="CMAModal">
                        <h3 class="head-5 accent--above-left mb-8">Luxury Stats</h3>
                        <p>Coming soon...</p>
                    </dlp-appear-modal>
                </div>
            </div>
        </div>
        <div class="content-grid">
            <div class="col-span-4 md:col-span-6 md:col-start-1 lg:col-span-7 lg:col-start-2 self-center">
                <dlp-figure
                    :sm="`images/selling/selling-2.jpg`"
                    alt="Fancy Living Room"
                    animate="shrink"
                    ar="ar--4-3"
                />
            </div>
            <div class="col-span-4 md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-10 self-center">
                <h3 class="head-5 accent--above-left">Staging your home</h3>
                <dlp-transition type="fadeIn ">
                    <p>Staging is the art of merchandising a home to improve its marketability. It can be as simple as rearranging a few pieces of furniture or as elaborate as hiring a professional to furnish an empty home right down to the plants and artwork.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button" @click="showModal('LearnModal', $event)">Learn More</dlp-button>
                    <dlp-appear-modal ref="LearnModal">
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
    name: 'sellingContainer',
    methods: {
        showModal: function(name, evt) {
            if(this.$refs[name]){
                this.$refs[name].open(evt)
            }
        }
    }
}
</script>