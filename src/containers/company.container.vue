<template>
    <div class="section-content">
        <section id="company-origin" class="content-grid">
            <div class="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-2">
                <dlp-figure
                    :lg="`images/company/train-lg.jpg`"
                    alt="Aerial view of an elevated train on a curved track"
                    ar="ar ar--5-4"
                    animate="shrink"
                />
            </div>
            <div class="col-span-full md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-10 self-center">
                <h3 class="head-5 accent--above-left fade-in">Truly Unique From the Start</h3>
                <p class="fade-in">It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago.</p>
            </div>
        </section>

        <section id="company-timeline" class="content-grid">
            <div class="col-span-full text-center">
              <h3 class="head-2 accent--below-center">Company Timeline</h3>
            </div>
            <div class="col-span-full text-center lg:mt-4">

                <dlp-timeline>
                    <swiper-slide>
                        <dlp-timeline-item  
                            date="2000"
                            alt="Modern living room"
                            img="images/company/history1.jpg"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa."
                            />
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-timeline-item  
                            class="md:pt-12"
                            date="2001"
                            alt="Cozy kitchen seating"
                            img="images/company/history2.jpg"
                            desc="Aliquet quam augue massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-timeline-item  
                            date="2002"
                            alt="Man working from home"
                            img="images/company/history3.jpg"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa."
                            />
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-timeline-item  
                            class="md:pt-12"
                            date="2003"
                            alt="Modern living room"
                            img="images/company/history1.jpg"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa."
                            />
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-timeline-item  
                            date="2004"
                            alt="Cozy kitchen seating"
                            img="images/company/history2.jpg"
                            desc="Aliquet quam augue massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                    </swiper-slide>
                    <swiper-slide>
                        <dlp-timeline-item
                            class="md:pt-12"
                            date="2005"
                            alt="Man working from home"
                            img="images/company/history3.jpg"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam augue massa."
                            />
                    </swiper-slide>
                </dlp-timeline>
                

            </div>
        </section>

        <section id="company-stats" class="content-grid">
          <div class="col-span-full text-center">
            <h3 class="head-2 accent--below-center">The Numbers Don't Lie</h3>
          </div>
          <div class="col-span-full text-center lg:mt-4">
            <dlp-stat-grid />
          </div>
          <div class="col-span-full text-center">
                <dlp-button type="button" class="mx-auto" @click="showModal('LocalStatsModal', $event)">View local stats</dlp-button>
                
                <dlp-appear-modal ref="LocalStatsModal">
                    <h3 class="head-5 accent--above-left mb-8">Local Stats</h3>
                    <img
                        class=""
                        :alt="`@properties sells 25% of luxury real estate in Chicago`" 
                        :src="`images/company/local-stats.png`">
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
        showModal: function(name, evt) {
            if(this.$refs[name]){
                this.$refs[name].open(evt)
            }
        }
    }
}
</script>