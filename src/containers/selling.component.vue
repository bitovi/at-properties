<template>
    <article id="selling" class="dlp-page dlp-content">
        <section id="pricing" class="container mx-auto py-48 grid md:grid-cols-2 gap-8 gap-y-48">
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">{{i18n.pricing.heading}}</h3>
                <div v-html="i18n.pricing.content"></div>
                <dlp-button>Learn More</dlp-button>
            </div>
            <div>
                <p>[ VIDEO HERE ]</p>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/selling/staging.jpg`"
                    :lg="`images/selling/staging.jpg`"
                    alt="Man presenting whiteboard ideas to his team"
                ></dlp-figure>
            </div>
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">{{i18n.selling.heading}}</h3>
                <p>{{i18n.selling.content}}</p>
                <dlp-button>Learn More</dlp-button>
            </div>
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">{{i18n.negotiation.heading}}</h3>
                <p>{{i18n.negotiation.content}}</p>
                <dlp-button>Learn More</dlp-button>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/selling/negotiation.jpg`"
                    :lg="`images/selling/negotiation.jpg`"
                    alt="Three women seated on a couch working on laptops"
                ></dlp-figure>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/selling/closing.jpg`"
                    :lg="`images/selling/closing.jpg`"
                    alt="Man's hand signing a contract"
                ></dlp-figure>
            </div>
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">{{i18n.contract.heading}}</h3>
                <p>{{i18n.contract.content}}</p>
                <dlp-button>Learn More</dlp-button>
            </div>
        </section>
    </article>
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