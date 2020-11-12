<template>
    <div class="section-content">
        <div class="content-grid">
            <div class="col-span-4 md:col-span-5 lg:col-start-2 lg:col-span-6">
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/brooklyn-simmons-sm.jpg`"
                    :lg="`${publicPath}images/profiles/brooklyn-simmons-lg.jpg`"
                    alt="Brooklyn Simmons"
                    caption="Brooklyn Simmons"
                    ar="ar ar-4-5"
                    :isSticky="true"
                ></dlp-figure>
            </div>
            <div class="col-span-4 md:col-span-7 lg:col-start-9 lg:col-span-8">
                <section>
                    <img
                        class="sm:mx-auto my-8 md:mb-8 md:my-0 md:mx-0"
                        alt="Emily Sachs Wong - Luxury Living" 
                        :src="`${publicPath}images/logos/logo-emily-sachs-wong.jpg`">
                    <h1 class="head-1">Brooklyn Simmons</h1>
                    <h2 class="head-5 accent">Co-agent Bio</h2>
                    <p>Thad Wong is the co-founder and co-CEO of @properties, the nation's 10th largest brokerage firm by sales volume (REALTrends 500). @properties and its affiliated companies have over 3,500 agents in nine states, as well as annual closed sales volume of over $12 billion...</p>
                    <div class="btn-group">
                        <dlp-button href="#">Read Full Bio</dlp-button>
                        <dlp-button type="button">Watch Agent Video</dlp-button>
                    </div>
                </section>
            </div>
        </div>
        <hr />
    </div>
</template>
<script>
export default {
    name: 'coagentContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>