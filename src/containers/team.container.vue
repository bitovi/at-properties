<template>
    <div class="sc-page sc-content">
        <article class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <aside class="sc-hero">
                <profile-image 
                    :sm="`${publicPath}images/profiles/olivia-carson-sm.jpg`"
                    :lg="`${publicPath}images/profiles/olivia-carson-lg.jpg`"
                    alt="Olivia Carlson"
                    caption="Olivia Carlson"
                ></profile-image>
            </aside>
            <div>
                <section class="mb-16">
                    <img
                        class="mb-8"
                        alt="Olivia Carlson" 
                        :src="`${publicPath}images/logos/logo-olivia-carson.jpg`">
                    <h1 class="title-heading">Olivia Carlson</h1>
                    <h2 class="section-heading">Team Bio</h2>
                    <p>My greatest desire is to invest in my neighbors and connect them to their community. This was the driving force behind my decision to leave a career in commercial interiors and become a Broker. My passion of design combined with business skills and vast real estate experience helps to lead clients through their most important investment: your home.</p>
                    <div class="sc-btn-group">
                        <sc-button href="#">Read Full Bio</sc-button>
                        <sc-button type="button">Watch Team Video</sc-button>
                    </div>
                </section>
                <section class="mb-16">
                    <!-- This is effectivly the same thing as the horizontal one -->
                    <!-- Do we really need two? -->
                    <h3 class="section-heading">Team Stats</h3>
                    <p class="mb-4">
                        <span class="callout-heading">300+</span>
                        <span class="label-heading">Transactions</span>
                    </p>
                    <p class="mb-4">
                        <span class="callout-heading">10 Years</span>
                        <span class="label-heading">Selling Real Estate</span>
                    </p>
                    <p class="mb-4">
                        <span class="callout-heading">$24M+</span>
                        <span class="label-heading">Total Sales</span>
                    </p>
                </section>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    name: 'teamContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>