<template>
    <article id="company">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-company.jpg')`">
            <div class="border-inset centered-middle">
                <hgroup>
                    <h2 class="head-2">Company Profile</h2>
                    <h3 class="head-6 accent-above-center">Lorem Ipsum</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <section id="company-history" class="grid md:grid-cols-2 gap-8">
                <div class="self-center px-10">
                    <h3 class="head-5 accent-above-left">It Began With An Idea</h3>
                    <p>No real estate company understands this better than @properties and that’s why we use the best branding, advertising and marketing resources to tell that story and give you a leg up in the marketplace.</p>
                </div>
                <div>
                    <sc-photo 
                        :sm="`images/company/history-1.jpg`"
                        :lg="`images/company/history-1.jpg`"
                        alt="Two women talking in a cubicle"
                        border="border-inset" 
                        ar="ar ar-2-3"
                    ></sc-photo>
                </div>
                <div>
                    <sc-photo 
                        :sm="`images/company/history-2.jpg`"
                        :lg="`images/company/history-2.jpg`"
                        alt="Man presenting whiteboard ideas to his team"
                        border="border-inset" 
                        ar="ar ar-4-3"
                    ></sc-photo>
                </div>
                <div class="self-center px-10">
                    <h3 class="head-5 accent-above-left">Truly Unique From the Start</h3>
                    <p>It all began in Chicago. With tremendous personal sales success, a longstanding friendship, shared philosophies, and a mutual vision for the future of Chicago Real Estate, Mike and Thad embarked on the most significant venture of their collective careers: the founding of @properties in 2000....It all began in Chicago. </p>
                </div>
                <div class="colspan-2">
                    <sc-photo 
                        :sm="`images/company/history-3.jpg`"
                        :lg="`images/company/history-3.jpg`"
                        alt="Overhead view of two people working at their desks"
                        border="border-inset" 
                        ar="ar ar-4-3"
                    ></sc-photo>
                </div>
            </section>
            <section id="company-timeline">
                <p>Company Timeline</p>
            </section>
            <section id="company-stats">
                <p>Company Stats</p>
            </section>
            <section id="local-stats">
                <p>Local Stats</p>
            </section>
            <section id="local-stats">
                <p>Technology</p>
            </section>
        </div>
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