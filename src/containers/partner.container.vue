<template>
    <div class="section-content">
        <div class="content-grid">
            <div class="col-span-full md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-6">
                <h5 class="head-5 accent">Lorem Ipsum Dolor</h5>
                <dlp-transition type="fadeIn slideUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium eu molestie id sit ultricies in arcu quam. Diam, aliquet convallis neque, morbi libero. Nunc nisl purus, ut vitae potenti suspendisse. Pulvinar habitant sapien tempus proin.</p>
                </dlp-transition>
            </div>
            <div class="col-span-full text-center">
                <dlp-flat-scroll class="">
                    <dlp-display-card source="images/partners/ProperTitle-Logo_horiz_blue.png"/>
                    <dlp-display-card source="images/partners/proper-rate.jpeg"/>
                    <dlp-display-card source="images/partners/at-commercial-logo.png"/>
                    <dlp-display-card source="images/partners/chicago-asso-realtors.jpeg"/>
                </dlp-flat-scroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'partnersContainer'
}
</script>