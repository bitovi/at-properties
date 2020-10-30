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
    </main>
  </div>
</template>

<script>
import Nav from './components/nav/nav.component'
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'
import CoagentContainer from './containers/coagent.container'
import TeamContainer from './containers/team.container'

import './assets/base.styles.scss'


export default {
  name: 'App',
  components: {
    Nav,
    TitleContainer,
    AgentContainer,
    CoagentContainer,
    TeamContainer
  }
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>
