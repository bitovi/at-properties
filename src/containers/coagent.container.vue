<template>
    <article id="co-agent" class="border-b border-light-gray pb-24">
        <div class="px-12 xl:px-32 grid md:grid-cols-3 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
            <div>
                <sc-photo 
                    :sm="`${publicPath}images/profiles/brooklyn-simmons-sm.jpg`"
                    :lg="`${publicPath}images/profiles/brooklyn-simmons-lg.jpg`"
                    alt="Brooklyn Simmons"
                    caption="Brooklyn Simmons"
                    border="border-inset" 
                    ar="ar ar-4-5"
                ></sc-photo>
            </div>
            <div id="co-agent-bio" class="md:col-span-2 xl:col-span-1">
                <!-- Does the size of this image change? -->
                <img src="images/logos/logo-emily-sachs-wong.jpg" alt="Emily Sachs Wong" />
                <h2 class="head-2">Brooklyn Simmons</h2>
                <h3 class="head-5 accent-above-left">Co-Agent Bio</h3>
                <p>Thad Wong is the co-founder and co-CEO of @properties, the nation's 10th largest brokerage firm by sales volume (REALTrends 500). @properties and its affiliated companies have over 3,500 agents in nine states, as well as annual closed sales volume of over $12 billion...</p>
                <div class="btn-group">
                    <button class="btn">Read Full Bio</button>
                    <button class="btn">Watch Agent Video</button>
                </div>
            </div>
        </div>
    </article>
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