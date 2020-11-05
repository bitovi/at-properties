<template>
    <article id="partners" class="container mx-auto py-48">
        <div class="p-6 md:p-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 justify-items-stretch xl:max-w-3/5">
            <dlp-display-card href="#">
                <img src="images/logos/logo-proper-title.png" alt="Proper Title" class="" />
            </dlp-display-card>
            <dlp-display-card href="#">
                <img src="images/logos/logo-proper-rate.png" alt="Proper Rate" class="" />
            </dlp-display-card>
            <dlp-display-card href="#">
                <img src="images/logos/logo-atproperties-relocation.png" alt="@properties Relocation" class="" />
            </dlp-display-card>
            <dlp-display-card href="#">
                <img src="images/logos/logo-atproperties-commercial.png" alt="@properties Commercial" class="" />
            </dlp-display-card>
            <dlp-display-card href="#" class="md:col-span-2 w-full md:w-1/2 mx-auto">
                <img src="images/logos/logo-atproperties-dev-services.png" alt="@properties Development Services" class="" />
            </dlp-display-card>
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