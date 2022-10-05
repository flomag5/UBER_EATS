<template>
    <div class="restaurant--row">
        <div class="restaurant--popular">
            <h2 class="title">Populaires à proximité</h2>
            <div class="wrapper--card" id="wrapper--card" >
                <div class="restaurant--card" v-for="restaurant in popular(restaurant)" :key="restaurant.id">
                    <div class="restaurant--image">
                        <img :src="restaurant.image" alt="photo du resto" class="img-responsive">
                        <span class="heart">
                            <i class="fas fa-heart"></i>
                        </span>
                    </div>
                    <router-link :to="`/restaurants/${restaurant.id}`" style="text-decoration:none">
                    <div class="restaurant--information">
                        <div class="top">
                            <p class="name">
                                {{restaurant.name}}
                            </p>
                            <p class="note">
                                <span>{{restaurant.note}}</span>
                            </p>
                        </div>
                        <p class="time">{{restaurant.drive_time}}</p>
                    </div>
                    </router-link>
                </div>
            </div>
            
        </div>
        <div class="restaurant--list">
            <h2 class="title">Tous les restaurants autour de moi</h2>
         <div class="wrapper--card" >
                <div class="restaurant--card" v-for="restaurant in restaurants" :key="restaurant.id">
                <div class="restaurant--image">
                    <img :src="restaurant.image" alt="photo du resto" class="img-responsive" />
                    <span class="heart">
                        <i class="fas fa-heart"></i>
                    </span>
                </div>
                <router-link :to="`/restaurants/${restaurant.id}`" style="text-decoration:none">
                <div class="restaurant--information">
                    <div class="top">
                        <p class="name">
                            {{restaurant.name}}
                        </p>
                        <p class="note">
                            <span>{{restaurant.note}}</span>
                        </p>
                    </div>
                    <p class="time">{{restaurant.drive_time}}</p>
                </div>
                </router-link>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import RestaurantDataService from '../services/RestaurantDataService';


export default {
    name: "RestoRow",
    components: {
    
    },
    data() {
        return {
            restaurants: [],
            restaurant: {
                name: "",
                image: "",
                note: "",
                drive_time: "",
            }
    }
    },
    created() {
            RestaurantDataService.getAllRestaurants()
                .then((response) => {
                    this.restaurants = response.data;
                    console.log(response)
                })
                .catch(error => {
            console.log(error)
        })
    },
    methods: {
        popular: function () {
            return this.restaurants.filter(function (restaurant) {
                return restaurant.note >= 4.4;
            })
        }
    }
}

</script>

<style lang="scss">
.restaurant--row{
    width: 100%;
    .title{
        font-size: 1.8rem;
        font-weight: 700;
        margin-top: 1vh;
        padding-left: 10px;
    }
        .wrapper--card {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    
}
.restaurant--popular{
width: 100%;
height: 300px;
background: #f2f2f2;
justify-self: space-between;
.title {
        padding-top: 10px;
        padding-left: 10px;
    }
    
}

.restaurant--card {
        display: flex;
        flex-direction: column;
        border: solid 5px transparent;
        border-radius: 20px;
        background: white;
        box-shadow: 0px 4px 5px 0 #e2e2e2;
        width: 480px;
        height: 200px;
        margin: 15px auto;
        
        &:hover {
                box-shadow: 5px 5px 3px lightgray;
                transition: ease-in-out 0.3s;
                transform: scale(1.1);
            }

    p {
        margin: 0px;
    }
}
.restaurant--card > .restaurant--image {
    width: 468px;
    height: 115px;
    background-size: 100% 100%;
    border-radius: 20px 20px 0 0;
    position: relative;
}
    .restaurant--image img{
        //height: 70%;
        width: 100%;
            height: 115px;
            background-size: 100% 100%;
            border-radius: 20px 20px 0 0;
            object-fit: cover;
    }

    .fa-heart {
        position: absolute;
        font-size: 1.8em;
        color: transparent;
        -webkit-text-stroke: 3px white;
        opacity: 0.9;
        top: 15px;
        right: 15px;

    }

    .fa-heart:hover {
        background: linear-gradient(white, #06C167);
        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0px;
        opacity: 1;
        transition: all 1.8s ease-in-out;
    }

    .restaurant--information {

        .top {
            margin: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .note {
                background-color: #eee;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border-radius: 50%;
            }
        }

        .time {
            font-size: 0.9rem;
        }
    }
    .restaurant--list{
        margin: 30px auto;
    }
</style>