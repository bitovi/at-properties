<template>
    <article id="contact">
        <header class="section-title" :style="`background-image: url('${publicPath}images/bg/bg-contact-lg.jpg')`">
            <div class="border-inset grid lg:grid-cols-2 lg:gap-8">
                <div class="self-center text-center hide show-md">
                    <img src="https://via.placeholder.com/200x300/CCC/333.png" alt="" />
                    <!-- <div class="ar ar-2-3">
                        <picture class="ar-inner">
                            <img src="https://via.placeholder.com/300x200/CCC/333.png" alt="" />
                        </picture>
                        <div class="border-inset"></div>
                    </div> -->
                </div>
                <div class="self-center text-center">
                    <h2 class="head-2">Thad Wong</h2>
                    <h3 class="head-5 accent-above-center">Contact me today!</h3>
                    <p><a href="tel:312.999.0848">312.999.0848</a></p>
                    <p><a href="mailto:Thad@atproperties.com">Thad@atproperties.com</a></p>
                    <p>[ SOCIA LINKS HERE ]</p>
                </div>
            </div>
        </header>
    </article>
</template>

<script>
export default {
    name: 'contactContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>