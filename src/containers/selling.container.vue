<template>
    <article id="selling">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-selling.jpg')`">
            <div class="border-inset centered-middle">
                <hgroup>
                    <h2 class="head-2">Selling Your Home</h2>
                    <h3 class="head-6 accent-above-center">Lorem Ipsum</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <section id="pricing">
                <p>Pricing Your Home</p>
            </section>
            <section id="staging">
                <p>Staging Your Home</p>
            </section>
            <section id="negotiation">
                <p>Negotiation</p>
            </section>
            <section id="closing">
                <p>Contract to Closing</p>
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