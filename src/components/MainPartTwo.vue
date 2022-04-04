<template>
<main>
    <div class="cont_box py-5">
         <div class=" text-box text-center py-5">
          <h2 class="mb-3">See Our Notch Services</h2>
          <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
        </div>

        <div class="text-center d-flex justify-content-between color_white">
            <div class="box py-4">
               <font-awesome-icon icon="fa-brands fa-google" class="py-3"/>
               <h3 class="mb-3">Google SEO</h3>
               <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
               <a href="#!">Read more</a>
            </div>

             <div class="box py-4">
               <font-awesome-icon icon="fa-solid fa-gear" class="py-3"/>
               <h3 class="mb-3">Brand strategy</h3>
               <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
               <a href="#!">Read more</a>
            </div>

             <div class="box py-4">
               <font-awesome-icon icon="fa-solid fa-building" class="py-3"/>
               <h3 class="mb-3">Local SEO</h3>
               <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
               <a href="#!">Read more</a>
            </div>

             <div class="box py-4">
               <font-awesome-icon icon="fa-solid fa-chart-column" class="py-3"/>
               <h3 class="mb-3">SEO Analysis</h3>
               <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
               <a href="#!">Read more</a>
            </div>
        </div>

    </div>
</main>
</template>

<script>
export default {
  name: 'MainPartTwo'

}
</script>

<style scoped lang='scss'>
main{
    background-image: url(../../src/assets/images/pattern_background.png);
    background-size: cover;
    background-color: #051745;

    .text-box{
        color: #f8f8f8;
        width: 500px;
        margin: auto;
    }

    .box{
        width: 300px;
        color: white;
        background-color: #1a236c;
        margin: 0 1rem;
        padding: 1.5rem;
        font-size: 90%;

        .fa-google, .fa-gear, .fa-building, .fa-chart-column{
          color: #ffa837;
          font-size: 170%;
        }

        a{
          color: #ffa837;
          text-decoration: none;
        }
    }

}

</style>
