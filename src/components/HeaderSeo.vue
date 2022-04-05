
<template>
<header class="pb-5">
  <div class="cont_box">
    <nav class='d-flex align-items-center justify-content-between py-3'>
      <img src="../../src/assets/images/logo_seo_w_1x.png" alt="logo seo">
      <div class="d-flex align-items-center">
        <ul class='d-flex mt-3' v-for='element in listHeader' :key='element.name'>
          <li class='d-flex '><a :href="element.href">{{ element.name }}</a></li>
          <li v-show='element.button === "APPLY"'><a class='ms-2 button-apply' :href="element.href">{{ element.button }}</a></li>
        </ul>
        <button class="ms-5">get in touch now</button>
      </div>
    </nav>

    <div class="box-header">
      <h1>SEM Campaigns Made Simple With Avada</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Phasellus eu ornare erat. Curabitur pulvinar elit.</p>
      <button class="me-3">buy avada now</button>
      <button class="color-blue">contact us</button>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'HeaderSeo',
  data () {
    return {
      listHeader: [
        {
          name: 'Home',
          href: '#!'
        },
        {
          name: 'Who We Are',
          href: '#!'
        },
        {
          name: 'What We Do',
          href: '#!'
        },
        {
          name: 'Where We Work',
          href: '#!'
        },
        {
          name: 'Careers',
          button: 'APPLY',
          href: '#!'
        },
        {
          name: 'News',
          href: '#!'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/styles/otherstyles/variables.scss';

header{
  background-image: url(../../src/assets/images/1-hero-image.png);
  background-size: cover;

  nav{
    font-size: 90%;

    button{
      padding: 0.5rem 1.5rem;
      color: $alabaster_white;
      background-color: $orange_color;
    }

    .button-apply{
      padding: 0.2rem 0.4rem;
      color: $orange_color;
      border: 1px solid $orange_color;
      border-radius: 4px;
      font-size: 70%;
    }

    li {
      list-style-type: none;

      a{
        color: $alabaster_white;
        text-decoration: none;
        transition: 0.3s;
        transition-timing-function: linear;

        &:hover{
          color: $orange_color;
        }
      }
    }
  }

  .box-header{
    width: 500px;
    color: $alabaster_white;
    padding-top: 5rem;
    padding-bottom: 10rem;

    h1{
      font-size: 50px;
    }

    button{
      padding: 0.6rem 2rem;
      font-size: 90%;
      background-color: $orange_color;
    }

    .color-blue{
      background-color: $blue_color;
    }
  }
}

</style>
