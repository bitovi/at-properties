<template>
    <div class='section-content'>
        <div class="content-grid">
            <div class="order-1 md:order-2 col-span-4 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-9">
                <dlp-video-card
                    :lg="`${publicPath}images/technology/laptop-lg.jpg`"
                    alt="Man's hands resting on a laptop"
                    animate="shrink"
                    videoId="9wYizJiPrNI"
                    title="Cutting Edge Technology"
                />
            </div>
            <div class="order-2 md:order-1 col-span-4 md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-2">
                <h3 class="head-5 accent--above-left">Cutting Edge Technology</h3>
                <dlp-transition type="fadeIn ">
                    <p>Designed, built and supported by @properties’ in-house programming team, pl@tform is the brokerage industry’s premier suite of technology applications for managing all aspects of your real estate transaction. Even before your home is officially listed, @properties brokers market internally to a powerful network of 3,000+ brokers – each with a broad sphere of influence that forms a rich source of prospects, buyers and referrals.</p>
                </dlp-transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'technologyContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL,
        }
    },
}
</script>