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
          :backgroundUrl="`${publicPath}images/auxiliary/05-145-oxford-rd-84-a-breathtaking-foyer-with-original-marble-flooring-printjpg-5f628f078b4e2.jpg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
      </article>
      <article id="reach">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-partners.jpg`"
          heading="We're local, we're global"
          subheading="Luxury"/>
        <ReachContainer />
      </article>
      <article id="technology">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-tech.jpg`"
          heading="Industry leading technology" 
          subheading="Technology" />
        <TechnologyContainer />
      </article>
      <article id="marketing">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/auxiliary/07-111-woodley-road-2016-printjpg-5f8dc1282e1d4.jpg`"
          heading="Award-winning marketing materials" 
          subheading="Marketing" />
        <MarketingContainer />
      </article>
      <article id="selling">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/auxiliary/09-2550-n-lakeview-ave-3802-165-living-room-printjpg-5f8da927c0f72.jpg`"
          heading="Selling your home" 
          subheading="Final Steps" />
        <SellingContainer />
      </article>
      <footer id="contact">
        <ContactContainer />
      </footer>
    </main>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
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
    ContactContainer,
    TechnologyContainer,
    ReachContainer,
    SellingContainer,

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
