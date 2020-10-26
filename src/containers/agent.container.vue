<template>
    <div class='sc-page'>
        <section>
            <header>
                <div class="flex flex-row justify-center">
                    <img
                        alt="Emily Sachs Wong - Luxury Living" 
                        :src="`${publicPath}images/agent-logo.png`">
                </div>
            </header>        
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <aside class="sc-hero">
                <hero-image 
                    :sm="`${publicPath}images/thad-wong-sm.jpg`"
                    :lg="`${publicPath}images/thad-wong-lg.jpg`"
                    alt="Thad Wong"
                    caption="Thad Wong"
                ></hero-image>
                
            </aside>
            <article>
                <section id="agent-bio" class="container">
                    <h1 class="h1">Thad Wong</h1>
                    <h2 class="h5">Agent Bio</h2>
                    <p>Thad Wong is the co-founder and co-CEO of @properties, the nation's 10th largest brokerage firm by sales volume (REALTrends 500). @properties and its affiliated companies have over 3,500 agents in nine states, as well as annual closed sales volume of over $12 billion...</p>
                    <div class="sc-btn-group">
                        <sc-button href="#">Read Full Bio</sc-button>
                        <sc-button type="button">Watch Agent Video</sc-button>
                    </div>
                </section>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'agentContainer',
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>