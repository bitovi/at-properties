<template>
    <div class='section-content'>
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
                <h3 class="head-5 accent accent-above">Pricing your home</h3>
                <p>The surest way to get the highest selling price for your home is to set the listing price, correctly right out of the gate.</p>
                <p>To determine the right listing price for your home, we will perform a Comparative Market Analysis with @properties’ Digital CMA. Unlike a traditional CMA, which is a static report, our Digital CMA is up-to the-minute accurate, using real-tome data from the local Multiple Listing Service.</p>
                <div class="btn-group">
                    <dlp-button type="button">View Sample CMA</dlp-button>
                </div>
            </div>
        </div>
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
                <h3 class="head-5 accent accent-above">Staging your home</h3>
                <p>Staging is the art of merchandising a home to improve its marketability. It can be as simple as rearranging a few pieces of furniture or as elaborate as hiring a professional to furnish an empty home right down to the plants and artwork.</p>
                <div class="btn-group">
                    <dlp-button type="button" >Learn more</dlp-button>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import Strings from '../assets/strings/selling.i18n.json'
export default {
    name: 'sellingContainer',
    data(){
        return {
            i18n: Strings,
            publicPath: process.env.BASE_URL
        }
    }
}
</script>