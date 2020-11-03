<template>
    <article id="selling">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-selling.jpg')`">
            <div class="section-border centered-middle">
                <hgroup>
                    <h2 class="head-2">Selling Your Home</h2>
                    <h3 class="head-6 accent-above-center">Lorem Ipsum</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <section id="pricing" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
                <div class="self-center md:px-10">
                    <h3 class="head-5 accent-above-left">Pricing Your Home</h3>
                    <p>The surest way to get the highest selling price for your home is to set the listing price, correctly right out of the gate.</p>
                    <p>To determine the right listing price for your home, we will perform a Comparative Market Analysis with @properties’ Digital CMA. Unlike a traditional CMA, which is a static report, our Digital CMA is up-to the-minute accurate, using real-tome data from the local Multiple Listing Service.</p>
                    <button class="btn">Learn More</button>
                </div>
                <div>
                    <p>[ VIDEO HERE ]</p>
                </div>
            </section>
            <section id="staging" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
                <div>
                    <sc-photo 
                        :sm="`images/selling/staging.jpg`"
                        :lg="`images/selling/staging.jpg`"
                        alt="Man presenting whiteboard ideas to his team"
                        border="photo-border" 
                        ar="ar ar-3-2"
                    ></sc-photo>
                </div>
                <div class="self-center md:px-10">
                    <h3 class="head-5 accent-above-left">Selling Your Home</h3>
                    <p>Staging is the art of merchandising a home to improve its marketability. It can be as simple as rearranging a few pieces of furniture or as elaborate as hiring a professional to furnish an empty home right down to the plants and artwork.</p>
                    <button class="btn">Learn More</button>
                </div>
            </section>
            <section id="negotiation" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
                <div class="self-center md:px-10">
                    <h3 class="head-5 accent-above-left">Negotiation</h3>
                    <p>Priced correctly and marketed aggressively, most homes will draw a timely offer. A real estate transaction is a fluid process that does not end with an accepted offer.</p>
                    <button class="btn">Learn More</button>
                </div>
                <div>
                    <sc-photo 
                        :sm="`images/selling/negotiation.jpg`"
                        :lg="`images/selling/negotiation.jpg`"
                        alt="Three women seated on a couch working on laptops"
                        border="photo-border" 
                        ar="ar ar-3-2"
                    ></sc-photo>
                </div>
            </section>
            <section id="closing" class="p-6 md:p-0 grid md:grid-cols-2 gap-8">
                <div>
                    <sc-photo 
                        :sm="`images/selling/closing.jpg`"
                        :lg="`images/selling/closing.jpg`"
                        alt="Man's hand signing a contract"
                        border="photo-border" 
                        ar="ar ar-3-2"
                    ></sc-photo>
                </div>
                <div class="self-center md:px-10">
                    <h3 class="head-5 accent-above-left">Contract to closing</h3>
                    <p>Guiding your real estate transaction from contract to closing is a multi-step process that requires proactive management and thorough attention to detail. Our emphasis on communication, organization and followthrough ensures that deadlines are met, documents are distributed, and every item is in place to make your transaction efficient and seamless.</p>
                    <button class="btn">Learn More</button>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
export default {
    name: 'sellingContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>