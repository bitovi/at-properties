<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main class="sc-main">
      <TitleContainer />
      <AgentContainer />
      <CoagentContainer />
      <TeamContainer />
      <TitlePage 
        :backgroundUrl="`${publicPath}images/bg/bg-company.jpg`"
        heading="Every home has a story" 
        subheading="Company Profile" />
      <CompanyContainer />
      <TitlePage 
        :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
        heading="Marketing your home" 
        subheading="Marketing Plan" />
        <MarketingContainer />
      <TitlePage 
        :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
        heading="Selling your home"/>
        <SellingContainer />
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
