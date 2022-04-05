<template>
  <div id="app">
    <header-seo />
    <main-part-one />
    <main-part-two />
    <main-part-three />
    <main-part-four />
    <main-part-five />
    <main-part-six />
  </div>
</template>

<script>
import HeaderSeo from './components/HeaderSeo.vue'
import MainPartOne from './components/MainPartOne.vue'
import MainPartTwo from './components/MainPartTwo.vue'
import MainPartThree from './components/MainPartThree.vue'
import MainPartFour from './components/MainPartFour.vue'
import MainPartFive from './components/MainPartFive.vue'
import MainPartSix from './components/MainPartSix.vue'

export default {
  name: 'App',
  components: {
    HeaderSeo,
    MainPartOne,
    MainPartTwo,
    MainPartThree,
    MainPartFour,
    MainPartFive,
    MainPartSix
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './assets/styles/stile.scss';
</style>
