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
                <dlp-transition type="fadeIn ">
                    <p>It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago.</p>
                </dlp-transition>
            </div>
        </section>

        <section id="company-timeline" class="content-grid">
            <div class="col-span-full text-center">
                <h3 class="head-2 accent--below-center">Company Timeline</h3>

            </div>
            <div class="col-span-full text-center">
                
                <dlp-flat-scroll class="flat-scroll--company">
                    <div>
                        <figure>
                            <picture class="ar ar--4-3">
                                <img src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=800&q=60" alt="Modern living room" />
                            </picture>
                            <figcaption>
                                <p class="accent--above-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <picture class="ar ar--4-3">
                                <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=800&q=60" alt="Cozy kitchen seating" />
                            </picture>
                            <figcaption>
                                <p class="accent--above-center">Aliquet quam augue massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <picture class="ar ar--4-3">
                                <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=800&q=60" alt="Neutral toned bedroom" />
                            </picture>
                            <figcaption>
                                <p class="accent--above-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <picture class="ar ar--4-3">
                                <img src="https://images.unsplash.com/photo-1584722065001-ee7f49d903b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWUlMjBvZmZpY2V8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60" alt="Man working from home" />
                            </picture>
                            <figcaption>
                                <p class="accent--above-center">Aliquet quam augue massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <picture class="ar ar--4-3">
                                <img src="https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbHRvcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=800&q=60" alt="Living room" />
                            </picture>
                            <figcaption>
                                <p class="accent--above-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa.</p>
                            </figcaption>
                        </figure>
                    </div>
                </dlp-flat-scroll>

            </div>
        </section>

        <section id="company-stats">
            <div class="text-center">
                <h3 class="head-2 accent--below-center mb-12">The Numbers Don't Lie</h3>
            </div>
            <dlp-stat-grid />
            


            <div class="col-span-full flex">
                <dlp-button type="button" class="mx-auto" @click="showModal('LocalStatsModal')">View local stats</dlp-button>
                <dlp-appear-modal ref="LocalStatsModal">
                    <h3 class="head-5 accent--above-left mb-8">Local Stats</h3>
                    <img
                        class=""
                        :alt="`@properties sells 25% of luxury real estate in Chicago`" 
                        :src="`${publicPath}images/company/local-stats.png`">
                </dlp-appear-modal>
            </div>
        </section>
    </div>
</template>
<script>
import Strings from '../assets/strings/company.i18n.json'
import StatGrid from './statGrid.container'
export default {
    name: 'companyContainer',
    data(){
        return {
            i18n: Strings,
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        [StatGrid.name]: StatGrid
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