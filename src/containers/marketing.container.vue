<template>
    <div class="section-content">
        <section id="marketing-assets" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--below-center accent--mb-0">Marketing Assets</h3>
            </div>
            <div class="col-span-full text-center lg:mt-4">

                <dlp-carousel
                    :options="{spaceBetween: 64}"
                    :hasScrollNav="true"
                    >
                    <swiper-slide>
                        <dlp-display-card 
                            source="images/marketing/marketing-1.jpg"
                            caption="Online Advertising"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card
                            source="images/marketing/marketing-2.png"
                            caption="Yard Signs"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card 
                            source="images/marketing/marketing-4.png"
                            caption="Social Media"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card 
                            source="images/marketing/marketing-3.jpg"
                            caption="Flyers"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card
                            source="images/marketing/marketing-5.jpg"
                            caption="Magazine Feature"/>
                    </swiper-slide>
                </dlp-carousel>

            </div>
        </section>

        <section id="listing-video" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--below-center accent--mb-0">Listing Video</h3>
            </div>
            <div class="col-span-2 col-start-2 md:col-span-4 md:col-start-5 lg:col-span-12 lg:col-start-3 lg:mt-4">
                <dlp-video-card
                    :sm="`images/community/video-thumb.jpg`"
                    alt="Listing Video"
                    animate="shrink"
                    videoId="WkflInhRuqE"
                    title="Lorem ipsum dolor sit amet"
                />
            </div>
            <div class="col-span-full md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <p class="accent--above-left">At @properties, video is a gamechanging marketing tool and we’re using it to tell your home’s story like never before.</p>
            </div>
        </section>

        <section id="signage" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--below-center accent--mb-0">Signage</h3>
            </div>
            <div class="col-span-full lg:col-span-10 lg:col-start-4 lg:mt-4">
                <dlp-video-card
                    :sm="`images/marketing/signage.jpg`"
                    alt="Play signage video"
                    animate="shrink"
                    videoId="XZ8F2AJa-_U"
                    title="Watch"
                />
            </div>
            <div class="col-span-full md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <p class="accent--above-left">Bold, Effective, Standing Out from the Rest. That’s how your listing should be seen and there’s no better reinforcement than @properties signage.</p>
            </div>
        </section>

        <section id="marketing-plan" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--below-center accent--mb-0">Tailored Marketing Plan</h3>
            </div>
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :sm="`images/marketing/marketing-plan.jpg`"
                    alt="Woman's hands resting on laptop with flowers and coffee cup nearby"
                    ar="ar ar--4-3"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 md:content-center lg:col-span-6 lg:col-start-10 content-center self-center">
                <p class="accent--above-left fade-in">A fully integrated marketing plan is key to getting your home sold quickly and for top dollar. No home is the same, so we provide a customized marketing plan tailored for your home.</p>
                <div class="btn-group fade-in">
                    <dlp-button type="button" @click="showModal('MarketingPlanModal', $event)">View Custom Marketing Plan</dlp-button>
                    <dlp-appear-modal ref="MarketingPlanModal">
                        <h3 class="head-5 accent--above-left mb-8">Custom Marketing Plan</h3>
                        <p>Coming soon...</p>
                    </dlp-appear-modal>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'marketingContainer',
    methods: {
        showModal: function(name, evt) {
            if(this.$refs[name]){
                this.$refs[name].open(evt)
            }
        }
    }
}
</script>