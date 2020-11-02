<template>
  <div id="app" class="theme-atproperties">
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
