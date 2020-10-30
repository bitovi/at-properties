<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <TitleContainer />
      <AgentContainer />
    </main>
  </div>
</template>

<script>
import Nav from './components/nav/nav.component'
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'

import './assets/base.styles.scss'


export default {
  name: 'App',
  components: {
    Nav,
    TitleContainer,
    AgentContainer
  }
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>
