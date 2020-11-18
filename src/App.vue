<template>
  <div id="app">
    
      <DevGrid />
    <main class="dlp-main">
      <header>
        <Nav />
      </header>
      <article id="agent">
        <TitleContainer />
        <AgentContainer />
      </article>
      <article id="co-agent">
        <CoagentContainer />
      </article>
      <article id="team">
        <TeamContainer />
      </article>
      <article id="company">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/05-145-oxford-rd-84-a-breathtaking-foyer-with-original-marble-flooring-printjpg-5f628f078b4e2.jpg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
      </article>
      <article id="marketing">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/07-111-woodley-road-2016-printjpg-5f8dc1282e1d4.jpg`"
          heading="Marketing your home" 
          subheading="Marketing Plan" />
        <MarketingContainer />
      </article>
      <article id="selling">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/09-2550-n-lakeview-ave-3802-165-living-room-printjpg-5f8da927c0f72.jpg`"
          heading="Selling your home"/>
        <SellingContainer />
      </article>
      <article id="partners">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-partners.jpg`"
          heading="Our Partners"
          subheading="all working as a team, through every step of the transaction."/>
        <PartnerContainer />
      </article>
      <footer id="contact">
        <ContactContainer />
      </footer>
    </main>
  </div>
</template>

<script>
/* eslint-disable no-unreachable, no-unused-vars */
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from './components/nav/nav.component.vue'
import TitleContainer from './containers/title.container.vue'
import AgentContainer from './containers/agent.container.vue'
import CoagentContainer from './containers/coagent.container.vue'
import TeamContainer from './containers/team.container.vue'
import CompanyContainer from './containers/company.container.vue'
import MarketingContainer from './containers/marketing.container.vue'
import SellingContainer from './containers/selling.component.vue'
import PartnerContainer from './containers/partner.container.vue'
import ContactContainer from './containers/contact.container.vue'

import TitlePage from './components/title/title.page.vue'

import DevGrid from './components/dev/grids.dev'

import './assets/base.styles.scss'

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'App',
  components: {
    Nav,
    TitleContainer,
    AgentContainer,
    CoagentContainer,
    TeamContainer,
    CompanyContainer,
    MarketingContainer,
    SellingContainer,
    PartnerContainer,
    ContactContainer,

    TitlePage,
    DevGrid
  },
  data(){
      return {
          publicPath: process.env.BASE_URL
      }
  },
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>
