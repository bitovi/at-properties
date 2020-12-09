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
      <hr />
      <article id="co-agent">
        <CoagentContainer />
      </article>
      <hr />
      <article id="team">
        <TeamContainer />
      </article>
      <article id="company">
        <TitlePage 
          :backgroundUrl="`images/company/bg-company.jpeg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
      </article>

      
      <article id="reach">
        <TitlePage 
          :backgroundUrl="`images/reach/bg-reach.jpg`"
          heading="We're local, we're global"
          subheading="Luxury"/>
        <ReachContainer />
      </article>

      <article id="technology">
        <TitlePage 
          :backgroundUrl="`images/technology/bg-technology.jpg`"
          heading="Industry leading technology" 
          subheading="Technology" />
        <TechnologyContainer />
      </article>

      <article id="marketing">
        <TitlePage 
          :backgroundUrl="`images/marketing/bg-marketing.jpeg`"
          heading="Award-winning marketing materials" 
          subheading="Marketing" />
        <MarketingContainer />
      </article>
      
      <article id="selling">
        <TitlePage 
          :backgroundUrl="`images/auxiliary/09-2550-n-lakeview-ave-3802-165-living-room-printjpg-5f8da927c0f72.jpg`"
          heading="Selling your home" 
          subheading="Final Steps" />
        <SellingContainer />
      </article>
      <article id="partners">
        <TitlePage 
          :backgroundUrl="`images/partners/bg-partners.jpeg`"
          heading="Our Partners" 
          subheading="All working as a team, through every step of the transaction" />
          <PartnersContainer />
      </article>
      <article id="community">
        <TitlePage 
          :backgroundUrl="`images/community/bg-community.jpeg`"
          heading="Community" 
          subheading="Community" />
        <CommunityContainer />
      </article>
      <hr />
      <footer id="contact">
        <ContactContainer />
      </footer>
    </main>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
import ExpoScaleEase from "gsap/EasePack";
import MotionPathPlugin from "gsap/MotionPathPlugin";


import Nav from './components/nav/nav.component'
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'
import CoagentContainer from './containers/coagent.container'
import TeamContainer from './containers/team.container'
import CompanyContainer from './containers/company.container'
import MarketingContainer from './containers/marketing.container'
import TechnologyContainer from './containers/technology.container'
import ContactContainer from './containers/contact.container'
import ReachContainer from './containers/reach.container'
import SellingContainer from './containers/selling.container'
import CommunityContainer from './containers/community.container'
import PartnersContainer from './containers/partner.container'

import TitlePage from './components/title/title.page.vue'

import DevGrid from './components/dev/grids.dev'

import './assets/base.styles.scss'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ExpoScaleEase);

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
    ContactContainer,
    TechnologyContainer,
    ReachContainer,
    SellingContainer,
    CommunityContainer,
    PartnersContainer,

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
