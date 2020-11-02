<template>
    <article id="team">
        <header>
            <div class="px-12 xl:px-32 grid md:grid-cols-3 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-32">
                <div>
                    <sc-photo 
                        :sm="`images/profiles/olivia-carson-sm.jpg`"
                        :lg="`images/profiles/olivia-carson-lg.jpg`"
                        alt="Our Team"
                        caption="Our Team"
                        border="border-inset" 
                        ar="ar ar-4-5"
                    ></sc-photo>
                </div>
                <div id="team-bio" class="md:col-span-2 xl:col-span-1">
                    <!-- Does the size of this image change? -->
                    <img src="images/logos/logo-olivia-carson.jpg" alt="Olivia Carson" />
                    <h2 class="head-2">Olivia Carson</h2>
                    <h3 class="head-5 accent-above-left">Team Bio</h3>
                    <p>My greatest desire is to invest in my neighbors and connect them to their community. This was the driving force behind my decision to leave a career in commercial interiors and become a Broker. My passion of design combined with business skills and vast real estate experience helps to lead clients
    through their most important investment: your home.</p>
                    <div class="btn-group">
                        <button class="btn">Read Full Bio</button>
                        <button class="btn">Watch Team Video</button>
                    </div>
                </div>
            </div>
        </header>
        <div class="section-content">
            <section id="team-stats">
                <div class="p-8 text-center">
                    <h3 class="head-5 accent-above-center">Team Stats</h3>
                </div>
                <div class="grid md:grid-cols-3 border-t border-b border-light-gray divide-y md:divide-y-0 md:divide-x divide-light-gray">
                    <div class="p-8 text-center stat">
                        <span aria-label="300 plus">300+</span> 
                        <span>transactions</span>
                    </div>
                    <div class="p-8 text-center stat">
                        <span>10 years</span> 
                        <span>selling real estate</span>
                    </div>
                    <div class="p-8 text-center stat">
                        <span aria-label="Over 24 million dollars">$24M+</span> 
                        <span>total sales</span>
                    </div>
                </div>
            </section>
            <section id="team-stats">
                <div class="p-8 text-center">
                    <h3 class="head-5 accent-above-center">Team Members</h3>
                </div>
                <div class="text-center">
                    <p>[ CAROUSEL HERE ]</p>
                </div>
            </section>
        </div>
    </article>
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