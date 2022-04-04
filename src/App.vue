<template>
  <div id="app">
    <header-seo />
    <main-part-one />
    <main-part-two />
  </div>
</template>

<script>
import HeaderSeo from './components/HeaderSeo.vue'
import MainPartOne from './components/MainPartOne.vue'
import MainPartTwo from './components/MainPartTwo.vue'

export default {
  name: 'App',
  components: {
    HeaderSeo,
    MainPartOne,
    MainPartTwo
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './assets/styles/stile.scss';
</style>
