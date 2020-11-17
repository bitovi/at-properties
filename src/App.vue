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
          :backgroundUrl="`${publicPath}images/company/bg-company.jpg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
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
          :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
          heading="Award-winning marketing materials" 
          subheading="Marketing" />
        <MarketingContainer />
      </article>

      <article id="partners">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-partners.jpg`"
          heading="We're local, we're global"
          subheading="Luxury"/>
        
        
      </article>
      <footer id="contact">
        <ContactContainer />
      </footer>
    </main>
  </div>
</template>

<script>
import Nav from './components/nav/nav.component'
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'
import CoagentContainer from './containers/coagent.container'
import TeamContainer from './containers/team.container'
import CompanyContainer from './containers/company.container'
import MarketingContainer from './containers/marketing.container'
import TechnologyContainer from './containers/technology.container'
import ContactContainer from './containers/contact.container'

import TitlePage from './components/title/title.page'

import DevGrid from './components/dev/grids.dev'

import './assets/base.styles.scss'


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

    TitlePage,
    DevGrid
  },
  data(){
      return {
          publicPath: process.env.BASE_URL
      }
  }
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>
