<template>
  <main>
        <div class="cont_box py-5">
            <div class=" text-box text-center py-5">
                <h2 class="mb-3">Our Plans</h2>
                <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
            </div>

            <div class="d-flex justify-content-between text-center">
                <div class="box">
                    <h4>Standard</h4>
                    <div class="d-flex text-center">
                        <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                        <strong>19</strong>
                        <div>
                            <span>99</span>
                            <span>monthly</span>
                        </div>
                    </div>

                    <div>ciao</div>
                    <div>ciao</div>
                    <div>ciao</div>
                    <button>start today</button>
                </div>
                <div class="box">
                    <h4>Premium</h4>
                    <div>ciao</div>
                    <div>ciao</div>
                    <div>ciao</div>
                    <button>start today</button>
                </div>
                <div class="box">
                    <h4>Professional</h4>
                    <div>ciao</div>
                    <div>ciao</div>
                    <div>ciao</div>
                    <button>start today</button>
                </div>
                <div class="box">
                    <h4>Extreme</h4>
                    <div>ciao</div>
                    <div>ciao</div>
                    <div>ciao</div>
                    <button>start today</button>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
export default {
  name: 'MainPartFour'
}
</script>

<style scoped lang='scss'>
main{
    background-image: url(../../src/assets/images/background1.jpg);
    background-size: cover;

    .text-box{
        width: 500px;
        margin: auto;
        color: white;
    }

    .box{
        background-color: white;
        width: 250px;

        strong{
            font-size: 50px;
            vertical-align: -28%;
        }

        .fa-dollar-sign{
            font-size: 80%;
        }
    }

}
</style>
