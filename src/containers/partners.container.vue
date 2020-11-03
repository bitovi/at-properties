<template>
    <article id="partners">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-partners.jpg')`">
            <div class="section-border centered-middle">
                <hgroup>
                    <h2 class="head-2">Our Partners</h2>
                    <h3 class="head-6 accent-above-center">All working as a team, through every step of the transaction</h3>
                </hgroup>
            </div>
        </header>
        <div class="section-content">
            <div class="grid md:grid-cols-2 gap-x-8 gap-y-20 justify-items-stretch lg:max-w-3/5 mx-auto">
                <div class="text-center">
                    <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" class="w-full" />
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" class="w-full" />
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" class="w-full" />
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" class="w-full" />
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center md:col-span-2">
                    <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" class="w-full md:w-1/2 md:mx-auto" />
                    <button class="btn">Learn More</button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'partnersContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>