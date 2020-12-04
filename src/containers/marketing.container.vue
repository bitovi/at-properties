<template>
    <div class="section-content">
        <section id="marketing-assets" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--above-center">Marketing Assets</h3>
            </div>
            <div class="col-span-full text-center">
                <dlp-carousel
                    :options="{spaceBetween: 64}"
                    :hasScrollNav="true"
                    >
                    <swiper-slide>
                        <dlp-display-card 
                            source="http://placekitten.com/254/255"
                            caption="Online Advertising"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card 
                            class="pt-16"
                            source="http://placekitten.com/g/254/255"
                            caption="Yard Signs"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card 
                            source="http://placekitten.com/254/255"
                            caption="Social Media"/>
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-display-card 
                            class="pt-16"
                            source="http://placekitten.com/g/254/255"
                            caption="Sales Kittens"/>
                    </swiper-slide>
                </dlp-carousel>

            </div>
        </section>

        <section id="listing-video" class="content-grid mb-24">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--above-center">Listing Video</h3>
            </div>
            <div class="col-span-2 col-start-2 md:col-span-4 md:col-start-5 lg:col-span-12 lg:col-start-3">
                <dlp-figure
                    :sm="`${publicPath}images/marketing/iphone-sm.png`"
                    :lg="`${publicPath}images/marketing/iphone-lg.png`"
                    :showBorder="false"
                    alt="iPhone 11 Pro"
                />
            </div>
            <div class="col-span-4 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <p class="accent--above-center">At @properties, video is a gamechanging marketing tool and we’re using it to tell your home’s story like never before.</p>
            </div>
        </section>

        <section id="signage" class="content-grid">
            <div class="col-span-full">
                <h3 class="head-2 accent--above-center text-center">Signage</h3>
            </div>
            <div class="col-span-full lg:col-span-10 lg:col-start-4">
                <dlp-figure
                    :sm="`${publicPath}images/marketing/signage.jpg`"
                    alt="Play signage video"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <p class="accent--above-center">Bold, Effective, Standing Out from the Rest. That’s how your listing should be seen and there’s no better reinforcement than @properties signage.</p>
            </div>
        </section>

        <section id="marketing-plan" class="content-grid">
            <div class="col-span-full">
                <h3 class="head-2 accent--above-center text-center">Tailored Marketing Plan</h3>
            </div>
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :sm="`${publicPath}images/marketing/marketing-plan.jpg`"
                    alt="Woman's hands resting on laptop with flowers and coffee cup nearby"
                    ar="ar ar--5-4"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 md:content-center lg:col-span-6 lg:col-start-10 content-center">
                <dlp-transition type="fadeIn slideUp">
                    <p class="accent--above-left">At @properties, video is a gamechanging marketing tool and we’re using it to tell your home’s story like never before.</p>
                </dlp-transition>
                <div class="btn-group">
                    <dlp-button type="button">View Custom Marketing Plan</dlp-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Strings from '../assets/strings/marketing.i18n.json'
export default {
    name: 'marketingContainer',
    data(){
        return {
            i18n: Strings,
            publicPath: process.env.BASE_URL
        }
    }
}
</script>