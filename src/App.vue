<template>
  <div id="app">
    <header-seo />
    <main-part-one />
  </div>
</template>

<script>
import HeaderSeo from './components/HeaderSeo.vue'
import MainPartOne from './components/MainPartOne.vue'

export default {
  name: 'App',
  components: {
    HeaderSeo,
    MainPartOne
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './assets/styles/stile.scss';
</style>
