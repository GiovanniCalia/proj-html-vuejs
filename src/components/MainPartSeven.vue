<template>
  <main>
    <div class="text-box text-center">
      <h2 class="mb-3">Start Your Free Consultation</h2>
      <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem <br> accusantinum doloremque laudantium.</p>
      <button>contact us now</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPartSeven'
}
</script>

<style scoped lang='scss'>
@import '@/assets/styles/otherstyles/variables.scss';

main{
  background-image: url(../../src/assets/images/CTA-seo-1.jpg);
  background-size: cover;

  .text-box{
    width: auto;
    padding: 6rem 0;
    color: #f8f8f8;
    background-color: rgba(0, 0, 0, 0.6);

    button{
      text-transform: uppercase;
      margin: 1rem 0;
      padding: 0.6rem 2rem;
      color:white;
      background-color: $orange_color;
      border-radius: 100px;
      border: none;
      font-size: 80%;
    }
  }
}

</style>
