<template>
  <main>
        <div class="cont_box py-5">
            <div class=" text-box text-center py-5">
                <h2 class="mb-3">Our Plans</h2>
                <p>Set ut perspiciatis unde omnis iste natus erroe sit voluptatem accusantinum doloremque laudantium.</p>
            </div>

            <div class="d-flex justify-content-between text-center big-box">
                <div class="box py-4">
                    <h4>Standard</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="big-number">19</strong>
                        </div>
                        <div class="text-start">
                            <div>99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>5 projects</div>
                    <div>5 GB storage</div>
                    <div>Unlimited Users</div>
                    <button>start today</button>
                </div>
                <div class="box py-4">
                    <h4>Premium</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="big-number">29</strong>
                        </div>
                        <div class="text-start">
                            <div>99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>10 projects</div>
                    <div>15 GB storage</div>
                    <div>Unlimited Users</div>
                    <button>start today</button>
                </div>
                <div class="box py-4">
                    <h4>Professional</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="big-number">39</strong>
                        </div>
                        <div class="text-start">
                            <div>99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>15 projects</div>
                    <div>30 GB storage</div>
                    <div>Unlimited Users</div>
                    <button class="orange">start today</button>
                </div>
                <div class="box py-4">
                    <h4>Extreme</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="big-number">59</strong>
                        </div>
                        <div class="text-start">
                            <div>99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>Unlimited projects</div>
                    <div>Unlimited storage</div>
                    <div>Unlimited Users</div>
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

    .big-box{
        margin: 0 -1rem;
    }

    .box{
        background-color: white;
        width: 250px;
        font-size: 90%;

        div{
            margin-bottom: 0.6rem;
        }

        h4{
            font-size: 30px;
        }

        .big-number{
            font-size: 50px;
            color: #607AFE;
        }

        .fa-dollar-sign{
            font-size: 90%;
            vertical-align: 90%;
        }

        em{
            font-size: 50%;
        }

        button{
           text-transform: uppercase;
           margin: 1rem 0;
           padding: 0.5rem 1.8rem;
           background-color: white;
           border-radius: 100px;
           border: 2px solid black;
           font-size: 80%;
        }

        .orange{
               background-color: #ffa837;
                border: 2px solid #ffa837;
           }
    }

}
</style>
