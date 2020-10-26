<template>
  <div id="app">
    <TitleContainer />
  </div>
</template>

<script>
import TitleContainer from './containers/title.container'
import './assets/base.styles.scss'


export default {
  name: 'App',
  components: {
    TitleContainer
  }
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>
