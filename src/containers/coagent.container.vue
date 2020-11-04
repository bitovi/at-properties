<template>
    <div class="sc-page sc-content">
        <article class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <aside class="sc-hero">
                <dlp-figure 
                    :sm="`${publicPath}images/profiles/brooklyn-simmons-sm.jpg`"
                    :lg="`${publicPath}images/profiles/brooklyn-simmons-lg.jpg`"
                    alt="Brooklyn Simmons"
                    caption="Brooklyn Simmons"
                ></dlp-figure>
            </aside>
            <section>
                <img
                    class="mb-8"
                    alt="Emily Sachs Wong - Luxury Living" 
                    :src="`${publicPath}images/logos/logo-emily-sachs-wong.jpg`">
                <h1 class="title-heading">Brooklyn Simmons</h1>
                <h2 class="section-heading">Co-agent Bio</h2>
                <p>Thad Wong is the co-founder and co-CEO of @properties, the nation's 10th largest brokerage firm by sales volume (REALTrends 500). @properties and its affiliated companies have over 3,500 agents in nine states, as well as annual closed sales volume of over $12 billion...</p>
                <div class="sc-btn-group">
                    <sc-button href="#">Read Full Bio</sc-button>
                    <sc-button type="button">Watch Agent Video</sc-button>
                </div>
            </section>
        </article>
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