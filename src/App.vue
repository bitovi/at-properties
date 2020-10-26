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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
