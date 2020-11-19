<template>
    <div class="section-content">
        <section id="company-origin" class="content-grid">
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :lg="`${publicPath}images/company/train-lg.jpg`"
                    alt="Aerial view of an elevated train on a curved track"
                    ar="ar ar-5-4"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 md:content-center lg:col-span-6 lg:col-start-10 content-center">
                <h3 class="head-5 accent">Truly Unique From the Start</h3>
                <p class="">It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago.</p>
            </div>
        </section>

        <section id="company-timeline" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent accent-centered">Company Timeline</h3>
            </div>
            <div class="col-span-full text-center">
                <p>[ CAROUSEL HERE ]</p>
            </div>
        </section>

        <section id="company-stats" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent accent-centered">The Numbers Don't Lie</h3>
            </div>
            <div class="col-span-full text-center">
                <p>[ STATS HERE - TBD ]</p>
            </div>
            <div class="col-span-full text-center">
                <dlp-button type="button">View Local Stats</dlp-button>
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