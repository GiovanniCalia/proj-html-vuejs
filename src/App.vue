<template>
  <div id="app">
    <header-seo />
  </div>
</template>

<script>
import HeaderSeo from './components/HeaderSeo.vue'

export default {
  name: 'App',
  components: {
    HeaderSeo
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './assets/styles/stile.scss';
</style>
