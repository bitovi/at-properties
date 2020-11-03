<template>
    <article id="markting">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-marketing.jpg')`">
            <div class="section-border centered-middle">
                <hgroup>
                    <h2 class="head-2">Marketing Your Home</h2>
                    <h3 class="head-6 accent-above-center">Marketing Plan</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <section id="marketing-plan">
                <div class="md:w-2/3 xl:w-1/3 mx-auto text-center">
                    <h3 class="head-5 accent-below-center">Tailored Marketing Plan</h3>
                    <p>A fully integrated marketing plan is key to getting your home sold quickly and for top dollar. No home is the same, so we provide a customized marketing plan tailored for your home.</p>
                    <button class="btn">View Custom Marketing Plan</button>
                </div>
            </section>
            <section id="listing-videos">
                <div class="md:w-2/3 xl:w-1/3 mx-auto text-center">
                    <h3 class="head-5 accent-below-center">Listing Videos</h3>
                    <p>At @properties, video is a gamechanging marketing tool and we’re using it to tell your home’s story like never before.</p>
                </div>
            </section>
            <section id="signage" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
                <div>
                    <sc-photo 
                        :sm="`images/marketing/signage.jpg`"
                        :lg="`images/marketing/signage.jpg`"
                        alt="@properties realtor sign"
                        border="photo-border" 
                        ar="ar ar-4-3"
                    ></sc-photo>
                </div>
                <div class="self-center md:px-10 text-center lg:text-left">
                    <h3 class="head-5 accent-above-responsive">Signage</h3>
                    <p>Bold, Effective, Standing Out from the Rest. That’s how your listing should be seen and there’s no better reinforcement than @properties signage.</p>
                </div>
            </section>
            <section id="marketing-assets">
                <div class="p-8 text-center">
                    <h3 class="head-2 accent-below-center-wide">Marketing Assets</h3>
                </div>
                <div class="text-center">
                    <p>[ CAROUSEL HERE ]</p>
                </div>
            </section>
            <section id="global-reach">
                <div class="p-8 text-center">
                    <h3 class="head-2 accent-below-center-wide">Global Reach</h3>
                    <p>We are well connected through our partnership with Luxury Portfolio.</p>
                </div>
                <div class="text-center">
                    <img src="images/marketing/global-reach.jpg" alt="World map showing 565 brokerages around the world, 6 continents with member companies, and 130,000 associates worldwide" class="w-full" />
                </div>
            </section>
        </div>
    </article>
</template>

<script>
export default {
    name: 'marketingContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>