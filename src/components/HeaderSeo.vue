
<template>
<header>
    <nav class='d-flex align-items-center justify-content-between py-3 px-3'>
        <img src="../../src/assets/images/logo_seo_w_1x.png" alt="logo seo">
        <div class="d-flex align-items-center">
            <ul class='d-flex mt-3 mx-2' v-for='element in listHeader' :key='element.name'>
                <li class='d-flex '><a href="">{{ element.name }}</a></li>
                <li v-show='element.button === "APPLY" '><a class='ms-3 button-apply' href="">{{ element.button }}</a></li>
            </ul>
            <button class="ms-5">get in touch now</button>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'HeaderSeo',
  data () {
    return {
      listHeader: [
        {
          name: 'Home'
        },
        {
          name: 'Who We Are'
        },
        {
          name: 'What We Do'
        },
        {
          name: 'Where We Work'
        },
        {
          name: 'Careers',
          button: 'APPLY'
        },
        {
          name: 'News'
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
        max-width: 1500px;
        margin: auto;
    }

    button{
        text-transform: uppercase;
        padding: 0.5rem 1rem;
        color: white;
        background-color: orange;
        border-radius: 100px;
        border: none;
    }

    .button-apply{
      padding: 0.2rem 0.5rem;
      color: orange;
      border: 2px solid orange;
      border-radius: 8px;
    }

    li {
        list-style-type: none;

        a{
            color: white;
            text-decoration: none;
        }
    }
}

</style>
