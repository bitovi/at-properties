<template>
    <article id="company" class="sc-page sc-content ">
        <section id="company-history" class="container mx-auto py-48 grid md:grid-cols-2 gap-8 gap-y-48">
            <div class="self-center md:px-10">
                <h3 class="section-heading accent ">It Began With An Idea</h3>
                <p>No real estate company understands this better than @properties and that’s why we use the best branding, advertising and marketing resources to tell that story and give you a leg up in the marketplace.</p>
            </div>
            <dlp-figure 
                :sm="`images/company/history-1.jpg`"
                :lg="`images/company/history-1.jpg`"
                alt="Two women talking in a cubicle"
            ></dlp-figure>
            <dlp-figure 
                :sm="`images/company/history-2.jpg`"
                :lg="`images/company/history-2.jpg`"
                alt="Man presenting whiteboard ideas to his team"
            ></dlp-figure>
            <div class="self-center md:px-10">
                <h3 class="section-heading accent">Truly Unique From the Start</h3>
                <p>It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago. </p>
            </div>
            <dlp-figure 
                :sm="`images/company/history-3.jpg`"
                :lg="`images/company/history-3.jpg`"
                alt="Overhead view of two people working at their desks"
                class="md:col-start-2"
            ></dlp-figure>
        </section>
        <section id="company-timeline">
            <div class="text-center">
                <h3 class="head-2 accent-below-center-wide">Company Timeline</h3>
                <p>[ CAROUSEL HERE ]</p>
            </div>
        </section>
        <section id="company-stats" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
            <div class="md:col-span-2 text-center">
                <h3 class="head-2 accent-below-center-wide">The Numbers Don't Lie</h3>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span>Number 10</span> 
                <span>ranking according to Real Trends</span>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-1.jpg`"
                    :lg="`images/company/stat-1.jpg`"
                    alt="Aerial view of a neighborhood with saltbox houses"
                ></dlp-figure>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-2.jpg`"
                    :lg="`images/company/stat-2.jpg`"
                    alt="Sunlit modern living room"
                ></dlp-figure>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span>25%</span> 
                <span>of our listings sold in-house</span>
            </div>
            <div class="self-center text-center stat stat-lg">
                <span aria-label="50 Billion Dollars">$50 Billion</span> 
                <span>total home sales</span>
            </div>
            <div>
                <dlp-figure 
                    :sm="`images/company/stat-3.jpg`"
                    :lg="`images/company/stat-3.jpg`"
                    alt="Airy modern living room with high ceiling and fireplace"
                ></dlp-figure>
            </div>
        </section>
        <section id="local-stats">
            <div class="md:w-2/3 xl:w-1/3 mx-auto text-center">
                <h3 class="section-heading accent-below-center">Local Stats</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique integer pharetra id aliquet pellentesque amet viverra.</p>
                <button class="btn">View Local Stats</button>
            </div>
        </section>
        <section id="local-stats" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
            <div class="md:col-span-2 text-center">
                <h3 class="head-2 accent-below-center-wide">Industry Leading Technology</h3>
            </div>
            <div>
                <p>[ VIDEO HERE ]</p>
            </div>
            <div class="self-center md:px-10">
                <p class="accent">Designed, built and supported by @properties’ in-house programming team, pl@tform is the brokerage industry’s premier suite of technology applications for managing all aspects of your real estate transaction. Even before your home is officially listed, @properties brokers market internally to a powerful network of 3,000+ brokers – each with a broad sphere of influence that forms a rich source of prospects, buyers and referrals.</p>
                <button class="btn">Learn More</button>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: 'companyContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>