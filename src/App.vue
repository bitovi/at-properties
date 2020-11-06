<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main class="dlp-main">
      <TitleContainer />
      <article id="agent">
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
          :backgroundUrl="`${publicPath}images/bg/bg-company.jpg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
      </article>
      <article id="marketing">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
          heading="Marketing your home" 
          subheading="Marketing Plan" />
        <MarketingContainer />
      </article>
      <article id="selling">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
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
import Nav from './components/nav/nav.component'
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'
import CoagentContainer from './containers/coagent.container'
import TeamContainer from './containers/team.container'
import CompanyContainer from './containers/company.container'
import MarketingContainer from './containers/marketing.container'
import SellingContainer from './containers/selling.component'
import PartnerContainer from './containers/partner.container'
import ContactContainer from './containers/contact.container'

import TitlePage from './components/title/title.page'

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
    SellingContainer,
    PartnerContainer,
    ContactContainer,

    TitlePage
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
