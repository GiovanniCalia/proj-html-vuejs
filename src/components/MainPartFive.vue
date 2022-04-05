<template>
    <main>
        <div class="cont_box py-5">
            <div class="text-box text-center py-5">
                <h2 class="mb-3">Our News</h2>
                <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
            </div>

            <div class="box text-center">
                <div>
                    <img src="../../src/assets/images/related-service-2-320x202.jpg" class="img-fluid mb-2" alt="">
                    <h4>Why you need a SEO Agency Now</h4>
                    <small>November 1st, 2017</small>
                    <p>ALorem ipsum dolor sit amet consectetur adipisicing elit. In et scelerisque sem.  Nunc molestie neque augue, at gravida mi blandit</p>
                </div>
                <div>
                    <img src="../../src/assets/images/related-service-4-320x202.jpg" class="img-fluid mb-2" alt="">
                    <h4>SEO Tips For Your Startup</h4>
                    <small>November 1st, 2017</small>
                    <p>ALorem ipsum dolor sit amet consectetur adipisicing elit. In et scelerisque sem.  Nunc molestie neque augue, at gravida mi blandit</p>
                </div>
                <div>
                    <img src="../../src/assets/images/blog-post-6-320x202.jpg" class="img-fluid mb-2" alt="">
                    <h4>Image Optimization For Your Site</h4>
                    <small>November 1st, 2017</small>
                    <p>ALorem ipsum dolor sit amet consectetur adipisicing elit. In et scelerisque sem.  Nunc molestie neque augue, at gravida mi blandit</p>
                </div>
            </div>
            <div class="text-center my-4">
                <button>view our work</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'MainPartFive'
}
</script>

<style scoped lang='scss'>

main{
    background-color: #f8f8f8;

    .box{
      display: flex;
      justify-content: space-between;

      div{
        width: 30%;

        h4{
          font-size: 120%;
          color: #ffa837;
        }

        img{
          width: 100%;
        }

        p{
            margin-top: 1rem;
            font-size: 90%;
        }
      }
    }

    button{
        text-transform: uppercase;
        margin: 1rem 0;
        padding: 0.6rem 2rem;
        color:white;
        background-color: #ffa837;
        border-radius: 100px;
        border: none;
        font-size: 80%;
    }
}

</style>
