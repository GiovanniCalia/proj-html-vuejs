<template>
  <main>
    <div class="cont_box my-5">
      <div class="text-box text-center py-5">
        <h2 class="mb-5">What Our Clients Say</h2>
        <img src="../../src/assets/images/testimonials-2.jpg" class="mb-4" alt="Luis Desalvo">
        <p>Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.</p>
        <p class="py-3"><strong>Luis Desalvo</strong>, CREO TECH</p>
        <div class="full"></div>
        <div></div>
      </div>

      <hr>

      <div class="avada-images d-flex justify-content-around">
        <img src="../../src/assets/images/clients_partner_5-200x202.png" alt="">
        <img src="../../src/assets/images/clients_partner_6-200x202.png" alt="">
        <img src="../../src/assets/images/clients_partner_1-200x202.png" alt="">
        <img src="../../src/assets/images/clients_partner_2-200x202.png" alt="">
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPartSix'

}
</script>

<style scoped lang='scss'>

.text-box{
  width: 600px;
  margin: auto;

  img{
    border-radius: 50%;
  }

  div{
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 50%;
    display: inline-block;
    margin: 0.2rem;
  }

  .full{
    background-color: black;
  }

}

hr{
  margin-bottom: 2rem;
}

.avada-images{

  img{
  width: 10%;
  }
}

</style>
