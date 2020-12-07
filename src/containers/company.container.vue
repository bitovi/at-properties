<template>
    <div class="section-content">
        <section id="company-origin" class="content-grid">
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :lg="`${publicPath}images/company/train-lg.jpg`"
                    alt="Aerial view of an elevated train on a curved track"
                    ar="ar ar--5-4"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-10 self-center">
                <h3 class="head-5 accent--above-left">Truly Unique From the Start</h3>
                <dlp-transition type="fadeIn slideUp">
                    <p>It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago.</p>
                </dlp-transition>
            </div>
        </section>

        <section id="company-timeline" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--above-center">Company Timeline</h3>
            </div>
            <div class="col-span-full text-center">
                <p>[ CAROUSEL HERE ]</p>
            </div>
        </section>

        <section id="company-stats" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--above-center">The Numbers Don't Lie</h3>
            </div>
            
            <div class="col-span-full lg:col-span-14 lg:col-start-2">
                <div class="stat-img__grid">
                    <div class="stat-img__tile">
                        <figure>
                        <picture class="ar ar--1-1">
                            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpdmluZyUyMHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                        </picture>
                        </figure>
                        <div class="stat-img__border">
                        <div class="stat-img__content">
                            <div class="stat">
                            <span>#10</span> 
                            <span>ranking according to Real Trends</span>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div class="stat-img__tile">
                        <figure>
                        <picture class="ar ar--1-1">
                            <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                        </picture>
                        </figure>
                        <div class="stat-img__border">
                        <div class="stat-img__content">
                            <div class="stat">
                            <span aria-label="50 billion dollars">$50B</span> 
                            <span>total home sales</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="stat-img__tile">
                        <figure>
                        <picture class="ar ar--1-1">
                            <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                        </picture>
                        </figure>
                        <div class="stat-img__border">
                        <div class="stat-img__content">
                            <div class="stat">
                            <span>25%</span> 
                            <span>of our listings sold in-house</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-span-full flex">
                <dlp-button type="button" class="mx-auto" @click="showModal('LocalStatsModal')">View local stats</dlp-button>
                <dlp-slide-in ref="LocalStatsModal">
                    <h3 class="head-5 accent--above-left mb-8">Local Stats</h3>
                    <img
                        class=""
                        :alt="`@properties sells 25% of luxury real estate in Chicago`" 
                        :src="`${publicPath}images/company/local-stats.png`">
                </dlp-slide-in>
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