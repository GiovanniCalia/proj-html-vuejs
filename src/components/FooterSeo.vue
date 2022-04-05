<template>
  <footer class="text-center py-5">
    <img src="../../src/assets/images/logo_seo_1x.png" class="mb-5" alt="logo Seo black">

    <ul class="d-flex justify-content-center mb-5">
      <li v-for='element in footerList' :key='element.title' class="mx-3"><a :href="element.href">{{ element.title}}</a></li>
    </ul>

    <ul class="d-flex justify-content-center second-list mb-4">
      <li><small>&#169; Copyright 2012 - 2020 </small></li>
      <div>|</div>
      <li><small>Avada Theme by <a href="#!">ThemeFusion </a></small></li>
      <div>|</div>
      <li><small>All Right Reserved </small></li>
      <div>|</div>
      <li><small>Powered by <a href="#!">WordPress </a></small></li>
    </ul>

    <div class="d-flex justify-content-center">
      <font-awesome-icon icon="fa-brands fa-facebook-f" />
      <font-awesome-icon icon="fa-brands fa-instagram" />
      <font-awesome-icon icon="fa-brands fa-twitter" />
      <font-awesome-icon icon="fa-brands fa-youtube" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSeo',
  data () {
    return {
      footerList: [
        {
          title: 'Home',
          href: '#!'
        },
        {
          title: 'Who We Are',
          href: '#!'
        },
        {
          title: 'What We Do',
          href: '#!'
        },
        {
          title: 'Where We Work',
          href: '#!'
        },
        {
          title: 'Careers',
          href: '#!'
        },
        {
          title: 'News',
          href: '#!'
        },
        {
          title: 'Get in Touch Now',
          href: '#!'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>

li {
  list-style-type: none;

  a{
    color: black;
    text-decoration: none;

    &:hover{
      color: #ffa837;
    }
  }
}

.second-list{
  li{
    margin: 0 0.5rem;
  }
}

.fa-facebook-f, .fa-instagram, .fa-twitter, .fa-youtube{
  color: #818e9d;
  font-size: 1.5rem;
  margin: 0 1rem;
  cursor: pointer;
}
</style>
