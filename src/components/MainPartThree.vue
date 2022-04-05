<template>
    <main>
        <div class="cont_box py-5">
            <div class=" text-box text-center py-5">
                <h2 class="mb-3">Our Work</h2>
                <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
            </div>

            <div class="box d-flex flex-wrap justify-content-between">
                <img src="../../src/assets/images/case-study-gallery-3-1-400x300.jpg" alt="">
                <img src="../../src/assets/images/case-study-gallery-2-400x300.jpg" alt="">
                <img src="../../src/assets/images/case-study-gallery-1-1-400x300.jpg" alt="">
                <img src="../../src/assets/images/case-study-gallery-4-1-400x300.jpg" alt="">
                <img src="../../src/assets/images/case-study-gallery-5-1-400x300.jpg" alt="">
                <img src="../../src/assets/images/case-study-gallery-6-1-400x300.jpg" alt="">
            </div>

            <div class="text-center my-5"><button>view our work</button></div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'MainPartThree'
}
</script>

<style scoped lang='scss'>
@import '@/assets/styles/otherstyles/variables.scss';

main{
    background-color: $alabaster_white;

    p{
      color: $dark_grey_text;
    }

    img{
       width: 32%;
       margin-bottom: 23.36px;
    }

    button{
       text-transform: uppercase;
       padding: 0.6rem 1.5rem;
       color: $alabaster_white;
       background-color: $orange_color;
       border-radius: 100px;
       border: none;
       font-size: 80%;
    }
}

</style>
