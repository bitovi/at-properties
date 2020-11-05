<template>
    <div class="dlp-page dlp-content">
        <section id="company-history" class="container mx-auto py-48 grid md:grid-cols-2 gap-8 gap-y-48">
            <div class="self-center md:px-10">
                <h3 class="section-heading accent ">{{i18n.idea.heading}}</h3>
                <p>{{i18n.idea.content}}</p>
            </div>
            <dlp-figure 
                :sm="`images/company/history-1.jpg`"
                :lg="`images/company/history-1.jpg`"
                alt="Two women talking in a cubicle"
            ></dlp-figure>
            <dlp-figure 
                :sm="`images/company/history-2.jpg`"
                :lg="`images/company/history-2.jpg`"
                alt="Man presenting whiteboard ideas to his team"
            ></dlp-figure>
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">{{i18n.unique.heading}}</h3>
                <p>{{i18n.unique.content}}</p>
            </div>
            <dlp-figure 
                :sm="`images/company/history-3.jpg`"
                :lg="`images/company/history-3.jpg`"
                alt="Overhead view of two people working at their desks"
                class="md:col-start-2"
            ></dlp-figure>
        </section>

        <section id="company-timeline" class="container mx-auto mb-48">
            <h3 class="title-heading text-center accent accent-below accent-wide">Company Timeline</h3>
            <p>[ CAROUSEL HERE ]</p>
        </section>

        <section id="company-stats" class="container mx-auto p-6 md:p-0 grid md:grid-cols-2 gap-8 gap-y-48">
            <div class="md:col-span-2">
                <h3 class="title-heading text-center accent accent-below accent-wide">The Numbers Don't Lie</h3>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span class="callout-heading">Number 10</span> 
                <span class="label-heading">ranking according to Real Trends</span>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-1.jpg`"
                    :lg="`images/company/stat-1.jpg`"
                    alt="Aerial view of a neighborhood with saltbox houses"
                ></dlp-figure>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-2.jpg`"
                    :lg="`images/company/stat-2.jpg`"
                    alt="Sunlit modern living room"
                ></dlp-figure>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span class="callout-heading">25%</span> 
                <span class="label-heading">of our listings sold in-house</span>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span class="callout-heading" aria-label="50 Billion Dollars">$50 Billion</span> 
                <span class="label-heading">total home sales</span>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-3.jpg`"
                    :lg="`images/company/stat-3.jpg`"
                    alt="Airy modern living room with high ceiling and fireplace"
                ></dlp-figure>
            </div>
        </section>

        <section id="company-local-stats">
            <div class="md:w-2/3 xl:w-1/3 mx-auto text-center my-48">
                <h3 class="section-heading accent accent-centered">{{i18n.stats.heading}}</h3>
                <p>{{i18n.stats.content}}</p>
                <dlp-button>View Local Stats</dlp-button>
            </div>
        </section>

        <section id="company-technology" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
            <div class="md:col-span-2 text-center mb-32">
                <h3 class="title-heading accent accent-below accent-wide">{{i18n.technology.heading}}</h3>
            </div>
            <div>
                <p>[ VIDEO HERE ]</p>
            </div>
            <div class="self-center md:px-10">
                <p class="accent">{{i18n.technology.content}}</p>
                <dlp-button>Learn More</dlp-button>
            </div>
        </section>
    </div>
</template>

<script>
import Strings from '../assets/strings/company.i18n.json'
export default {
    name: 'companyContainer',
    data(){
        return {
            i18n: Strings,
            publicPath: process.env.BASE_URL
        }
    }
}
</script>