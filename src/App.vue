<template>
  <div id="app">
    <DevGrid /><!-- Remove this for production. Development only to check alignment. -->

    <TitleContainer />

    <Nav />

    <main class="dlp-main">
      <article id="agent" class="section-divider">
        <AgentContainer />
      </article>

      <article id="co-agent" class="section-divider">
        <CoagentContainer />
      </article>

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

      <article id="reach">
        <TitlePage 
          :backgroundUrl="`images/reach/bg-reach.jpg`"
          heading="We're local, we're global"
          subheading="Luxury"/>
        <ReachContainer />
      </article>

      <article id="selling">
        <TitlePage 
          :backgroundUrl="`images/selling/bg-selling.jpeg`"
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

      <article id="community" class="section-divider">
        <TitlePage 
          :backgroundUrl="`images/community/bg-community.jpeg`"
          heading="Community" 
          subheading="Community" />
        <CommunityContainer />
      </article>
    </main>

    <footer id="contact">
      <ContactContainer />
    </footer>
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

/* Remove this for production. Development only to check alignment. */
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
  mounted() {
    //generic fade-in 
    gsap.utils.toArray(".fade-in").forEach(item => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top center", 
          scrub: 1, 
          once: true
        },
        opacity: 1 
      })
    })

  }
}
</script>