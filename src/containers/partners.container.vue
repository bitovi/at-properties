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
            <div class="p-6 md:p-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 justify-items-stretch xl:max-w-3/5 mx-auto">
                <div class="text-center">
                    <div class="partner">
                        <div class="partner-border">
                            <img src="images/logos/logo-proper-title.png" alt="Proper Title" class="" />
                        </div>
                    </div>
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <div class="partner">
                        <div class="partner-border">
                            <img src="images/logos/logo-proper-rate.png" alt="Proper Rate" class="" />
                        </div>
                    </div>
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <div class="partner">
                        <div class="partner-border">
                            <img src="images/logos/logo-atproperties-relocation.png" alt="@properties Relocation" class="" />
                        </div>
                    </div>
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center">
                    <div class="partner">
                        <div class="partner-border">
                            <img src="images/logos/logo-atproperties-commercial.png" alt="@properties Commercial" class="" />
                        </div>
                    </div>
                    <button class="btn">Learn More</button>
                </div>
                <div class="text-center md:col-span-2 w-full md:w-1/2 mx-auto">
                    <div class="partner">
                        <div class="partner-border">
                            <img src="images/logos/logo-atproperties-dev-services.png" alt="@properties Development Services" class="" />
                        </div>
                    </div>
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