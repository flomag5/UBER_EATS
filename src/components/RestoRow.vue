<template>
    <div class="restaurant--row">
        <div class="restaurant--popular">
            <h2 class="title">Populaires à proximité</h2>
            <div class="wrapper--card" v-for="restaurant in restaurants" :key="restaurant.id">
                <div class="restaurant--card" v-if="restaurant.note >= 4.4">
                    <div class="restaurant--image">
                        <img :src="restaurant.image" alt="photo du resto" class="img-responsive">
                        <span class="heart">
                            <i class="fas fa-heart"></i>
                        </span>
                      
                    </div>
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
                </div>
            </div>
        </div>
        <div class="restaurant--list">
            <h2 class="title">Tous les restaurants autour de moi</h2>
            <div class="wrapper--card" v-for="restaurant in restaurants" :key="restaurant.id">
                <div class="restaurant--card">
                <div class="restaurant--image">
                    <img :src="restaurant.image" alt="photo du resto" class="img-responsive" />
                    <span class="heart">
                        <i class="fas fa-heart"></i>
                    </span>
                    
                </div>
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

}
</script>

<style lang="scss">
.restaurant--row{
    .title{
        font-size: 1.8rem;
    }
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.restaurant--card {
    width: 32%;
    height: 30vh;

    p {
        margin: 0px;
    }

    .restaurant--image {

        height: 70%;
        background-size: cover;
        background-position: center;

    }

    .fa-heart {
        display: flex;
        font-size: 1.8em;
        color: transparent;
        -webkit-text-stroke: 3px white;
        opacity: 0.5;
        margin-left: 92%;
        padding-top: 2%;
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
}
</style>