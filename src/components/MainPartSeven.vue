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
  background-position: center;

  .text-box{
    width: auto;
    padding: 6rem 0;
    color: $alabaster_white;
    background-color: rgba(0, 0, 0, 0.6);

    button{
      margin: 1rem 0;
      padding: 0.5rem 2rem;
      background-color: $orange_color;
      font-size: 80%;
    }
  }
}

</style>
