<template>
  <div id="app" class="theme-atproperties">
    <header>
      <NavContainer />
    </header>
    <main>
      <AgentContainer />
      <CoAgentContainer />
      <TeamContainer />
      <CompanyContainer />
      <MarketingContainer />
      <SellingContainer />
      <PartnersContainer />
      <ContactContainer />
    </main>
  </div>
</template>

<script>
  import NavContainer from './containers/nav.container'
  import AgentContainer from './containers/agent.container'
  import CoAgentContainer from './containers/coagent.container'
  import TeamContainer from './containers/team.container'
  import CompanyContainer from './containers/company.container'
  import MarketingContainer from './containers/marketing.container'
  import SellingContainer from './containers/selling.container'
  import PartnersContainer from './containers/partners.container'
  import ContactContainer from './containers/contact.container'

  import './assets/base.styles.scss'

  export default {
    name: 'App',
    components: {
      NavContainer, 
      AgentContainer, 
      CoAgentContainer, 
      TeamContainer, 
      CompanyContainer, 
      MarketingContainer, 
      SellingContainer, 
      PartnersContainer, 
      ContactContainer
    }
  }
</script>
