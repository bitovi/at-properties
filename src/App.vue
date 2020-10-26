<template>
  <div id="app">
    <TitleContainer />
    <AgentContainer />
  </div>
</template>

<script>
import TitleContainer from './containers/title.container'
import AgentContainer from './containers/agent.container'

import './assets/base.styles.scss'


export default {
  name: 'App',
  components: {
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
