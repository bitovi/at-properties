<template>
    <article id="markting" class="sc-page sc-content">
        <section id="marketing-plan">
            <div class="md:w-2/3 xl:w-1/3 mx-auto text-center my-48">
                <h3 class="section-heading accent accent-below">{{i18n.tailored.heading}}</h3>
                <p>{{i18n.tailored.content}}</p>
                <dlp-button>View Custom Marketing Plan</dlp-button>
            </div>
        </section>
        <section id="listing-videos">
            <div class="md:w-2/3 xl:w-1/3 mx-auto text-center my-48">
                <h3 class="section-heading accent accent-below">{{i18n.listing.heading}}</h3>
                <p>{{i18n.listing.content}}</p>
                <p>[ VIDEO HERE ]</p>
            </div>
        </section>
        <section id="signage" class="p-6 md:p-0 grid md:grid-cols-2 gap-8 my-48">
            <div>
                <dlp-figure  
                    :sm="`images/marketing/signage.jpg`"
                    :lg="`images/marketing/signage.jpg`"
                    alt="@properties realtor sign"
                ></dlp-figure >
            </div>
            <div class="self-center md:px-10 text-center lg:text-left">
                <h3 class="section-heading accent">{{i18n.signage.heading}}</h3>
                <p>{{i18n.signage.content}}</p>
            </div>
        </section>
        <section id="marketing-assets" class="my-48">
            <div class="p-8 text-center">
                <h3 class="title-heading accent accent-below accent-wide">Marketing Assets</h3>
            </div>
            <div class="text-center">
                <p>[ CAROUSEL HERE ]</p>
            </div>
        </section>
        <section id="global-reach" class="my-48">
            <div class="p-8 text-center">
                <h3 class="title-heading accent accent-below accent-wide">{{i18n.global.heading}}</h3>
                <p>{{i18n.global.content}}</p>
            </div>
            <div class="text-center">
                <img :src="`${publicPath}images/marketing/global-reach.jpg`" alt="World map showing 565 brokerages around the world, 6 continents with member companies, and 130,000 associates worldwide" class="w-full" />
            </div>
        </section>
    </article>
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