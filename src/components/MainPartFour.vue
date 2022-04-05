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
                            <strong class="blue_number_big">19</strong>
                        </div>
                        <div class="text-start">
                            <div class="blue_number">99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>5 Projects</div>
                    <div>5 GB Storage</div>
                    <div>Unlimited Users</div>
                    <button>start today</button>
                </div>
                <div class="box py-4">
                    <h4>Premium</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="blue_number_big">29</strong>
                        </div>
                        <div class="text-start">
                            <div class="blue_number">99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>10 Projects</div>
                    <div>15 GB Storage</div>
                    <div>Unlimited Users</div>
                    <button>start today</button>
                </div>
                <div class="box py-4">
                    <h4>Professional</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="blue_number_big">39</strong>
                        </div>
                        <div class="text-start">
                            <div class="blue_number">99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>15 Projects</div>
                    <div>30 GB Storage</div>
                    <div>Unlimited Users</div>
                    <button class="orange">start today</button>
                </div>
                <div class="box py-4">
                    <h4>Extreme</h4>
                    <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            <strong class="blue_number_big">59</strong>
                        </div>
                        <div class="text-start">
                            <div class="blue_number">99</div>
                            <em>monthly</em>
                        </div>
                    </div>
                    <div>Unlimited Projects</div>
                    <div>Unlimited Storage</div>
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
@import '@/assets/styles/otherstyles/variables.scss';

main{
    background-image: url(../../src/assets/images/background1.jpg);
    background-size: cover;

    .text-box{
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
            color: #5a5759;
        }

        h4{
            font-size: 30px;
        }

        .blue_number_big{
            font-size: 50px;
            color: #607AFE;
        }

        .blue_number{
            color: #607AFE;
            position: relative;
            top: 6px;
        }

        .fa-dollar-sign{
            font-size: 90%;
            vertical-align: 100%;
        }

        em{
            font-size: 50%;
        }

        button{
           margin: 1rem 0;
           padding: 0.5rem 1.7rem;
           color: #5a5759;
           background-color: white;
           border: 2px solid #5a5759;
           font-size: 80%;
        }

        .orange{
            color: white;
            background-color: $orange_color;
            border: 2px solid $orange_color;
        }
    }

}
</style>
