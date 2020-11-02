<template>
    <article id="markting">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-marketing.jpg')`">
            <div class="border-inset centered-middle">
                <hgroup>
                    <h2 class="head-2">Marketing Your Home</h2>
                    <h3 class="head-6 accent-above-center">Marketing Plan</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <section id="marketing-plan">
                <p>Plan</p>
            </section>
            <section id="listing-videos">
                <p>Listing Videos</p>
            </section>
            <section id="signage">
                <p>Signage</p>
            </section>
            <section id="marketing-assets">
                <p>Marketing Assets</p>
            </section>
            <section id="global-reach">
                <p>Global Reach</p>
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