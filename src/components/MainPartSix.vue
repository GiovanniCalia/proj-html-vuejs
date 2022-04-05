<template>
  <main>
    <div class="cont_box py-5">
      <div class="text-box text-center py-5">
        <h2 class="mb-5">What Our Clients Say</h2>
        <img src="../../src/assets/images/testimonials-2.jpg" class="mb-4" alt="Luis Desalvo">
        <p>Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.</p>
        <p><strong>Luis Desalvo</strong>, CREO TECH</p>
        <div class="full"></div>
        <div></div>

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

</style>
