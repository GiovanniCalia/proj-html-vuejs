
<template>
<header class="pb-5">
  <div class="cont_box">
    <nav class='d-flex align-items-center justify-content-between py-3 px-5'>
        <img src="../../src/assets/images/logo_seo_w_1x.png" alt="logo seo">
        <div class="d-flex align-items-center">
            <ul class='d-flex mt-3 mx-2' v-for='element in listHeader' :key='element.name'>
                <li class='d-flex '><a href="">{{ element.name }}</a></li>
                <li v-show='element.button === "APPLY" '><a class='ms-3 button-apply' :href="element.href">{{ element.button }}</a></li>
            </ul>
            <button class="ms-5">get in touch now</button>
        </div>
    </nav>
    <div class="box-header px-5">
      <h1>SEM Campaigns Made Simple With Avada</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Phasellus eu ornare erat. Curabitur pulvinar elit.</p>
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
header{
    background-image: url(../../src/assets/images/1-hero-image.png);
    background-size: cover;

    nav{
        font-size: 90%;

        button{
        text-transform: uppercase;
        padding: 0.6rem 1.5rem;
        color: white;
        background-color: #ffa837;
        border-radius: 100px;
        border: none;
        }
    }

    .button-apply{
      padding: 0.2rem 0.5rem;
      color: #ffa837;
      border: 2px solid #ffa837;
      border-radius: 8px;
    }

    li {
        list-style-type: none;

        a{
            color: #f8f8f8;
            text-decoration: none;

            &:hover{
              color: #ffa837;
            }
        }
    }

    .box-header{
      width: 550px;
      color: #f8f8f8;
      padding-top: 5rem;
      padding-bottom: 10rem;

      button{
        text-transform: uppercase;
        padding: 0.6rem 1.8rem;
        color: #f8f8f8;
        background-color: #ffa837;
        border-radius: 100px;
        border: none;
        font-size: 80%;
      }

      .color-blue{
        background-color: #0369d7;
      }
    }
}

</style>
