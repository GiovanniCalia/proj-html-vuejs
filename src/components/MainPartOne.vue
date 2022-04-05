<template>
  <main>
    <div class="cont_box pt-5">
        <div class=" text-box text-center py-5">
          <h2 class="mb-3">Meet The New Agency SEO template From The Avada Team</h2>
          <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
        </div>

      <div class="text-center d-flex justify-content-between color_white">
        <div class="box py-4">
          <font-awesome-icon icon="fa-solid fa-road" class="py-3"/>
          <h3 class="mb-3">Establish Goals</h3>
          <p>Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula eusimod odio, vel dictum mi risus ami.</p>
        </div>

        <div class="box py-4">
          <font-awesome-icon icon="fa-solid fa-video" class="py-3"/>
          <h3 class="mb-3">Work With a Team</h3>
          <p>Cras semper auctor aliquaum. Sed porta sed lacus sin amet consectetur. Lorem ipsum dolor sin amet, consectetur adipiscin.</p>
        </div>

        <div class="box py-4">
          <font-awesome-icon icon="fa-solid fa-droplet" class="py-3"/>
          <h3 class="mb-3">Get Results</h3>
          <p>Vestibulum scelerisque egestas lectus sit amet molestie. Donec consectetur cursus est sed blandit. Nunc sed risus lacus.</p>
        </div>
      </div>

      <img src="../../src/assets/images/agency-seo-desk-front-1200x570.jpg" class="img-fluid" alt="Seo Desk">

    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPartOne'
}
</script>

<style scoped lang='scss'>
@import '@/assets/styles/otherstyles/variables.scss';

main{
  background-color: #f8f8f8;

  .text-box{
    width: 550px;
  }

  .fa-road, .fa-video, .fa-droplet{
    color: $orange_color;
    font-size: 170%;
  }

  p{
    font-size: 90%;
    color: #5a5759;
  }

  .color_white{

    .box{
      background-color: white;
      width: 350px;
      padding: 1.5rem;

      h3{
       font-size: 1.5rem;
       transition: 0.3s;
       transition-timing-function: linear;

       &:hover{
         color: $orange_color;
       }
      }

    }
  }
}

</style>
