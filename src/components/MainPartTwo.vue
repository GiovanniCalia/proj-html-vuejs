<template>
<main>
    <div class="cont_box">
        <div class=" text-box text-center py-5">
            <h2 class="mb-3">See Our Notch Services</h2>
            <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
        </div>

        <div class="text-center d-flex justify-content-between color_white">
            <div class="box py-4">
                <font-awesome-icon icon="fa-brands fa-google" class="py-3"/>
                <h3 class="mb-3">Google SEO</h3>
                <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
                <a href="#!">Read More</a>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="ms-1"/>
            </div>

             <div class="box ms-5 me-4 py-4">
                <font-awesome-icon icon="fa-solid fa-gear" class="py-3"/>
                <h3 class="mb-3">Brand strategy</h3>
                <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
                <a href="#!">Read More</a>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="ms-1"/>
            </div>

             <div class="box ms-4 me-5 py-4">
                <font-awesome-icon icon="fa-solid fa-building" class="py-3"/>
                <h3 class="mb-3">Local SEO</h3>
                <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
                <a href="#!">Read More</a>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="ms-1"/>
            </div>

             <div class="box py-4">
                <font-awesome-icon icon="fa-solid fa-chart-column" class="py-3"/>
                <h3 class="mb-3">SEO Analysis</h3>
                <p>Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et, dapibus faucibus odio.</p>
                <a href="#!">Read More</a>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="ms-1"/>
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

    .cont_box{
      padding-top: 2rem;
      padding-bottom: 10rem;
    }

    .text-box{
      color: #f8f8f8;
    }

    .box{
      color: white;
      background-color: #1a236c;
      padding: 1.5rem;
      font-size: 90%;

        .fa-google, .fa-gear, .fa-building, .fa-chart-column{
          color: #ffa837;
          font-size: 170%;
        }

        .fa-angle-right{
          color: #ffa837;
          font-size: 70%;
        }

        a{
          color: #ffa837;
          text-decoration: none;
           vertical-align: middle;
        }

        h3{
          font-size: 1.5rem;
        }
    }
}

</style>
