<template>
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
        <div class="order">
            <button class="delivery">
                Livraison
            </button>
            <button class="takeoff">A emporter</button>
        </div>
        <div class="wrapper--input">
            <i class="fa-solid fa-location-pin" id="location"></i>
        <VueGoogleAutocomplete ref="address" id="map" classname="form-control" placeholder="Où je me trouve"
            v-on:placechanged="getAddressData">
        </VueGoogleAutocomplete>
        </div>
        <div class="wrapper--input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input v-model="user_search" type="text" placeholder="De quoi avez-vous envie?">
            <div class="search">
                <router-link v-for="(restaurant, i) in search_restaurant" :key="i"
                    :to="{ name: 'Restaurant', params: { name: restaurant.name } }">
                    <div class="container--restaurant--search">
                        <div class="wrapper--img">
                            <img :src="restaurant.image" alt="">
                        </div>
                        <h5>{{ restaurant.name }}</h5>
                    </div>
                </router-link>
            </div>
        </div>
        <button class="cart" id="cart">
            <p><i class="fa-solid fa-cart-arrow-down"></i>
                </p>
        </button>
        <div class="user--session">
            <router-link :to="'/login'">
            <button class="login">
                <i class="fa-solid fa-user"></i>
                Connexion
            </button>
            <button class="submit">
                Inscription
            </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import BDD from '../BDD'
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { onMounted, ref, watch } from 'vue'

export default {
    name: 'Header',
    components: { VueGoogleAutocomplete },
    
    data: function () {
        return {
        address: "",
    }
},
        setup() {
            class Restaurant {
                constructor(name, note, image, drive_time) {
                    this.name = name
                    this.note = note
                    this.image = image
                    this.drive_time = drive_time
                }
            }
            let data_restaurant = ref([]);
            let all_restaurant = [];

            const dataRestaurant = () => {
                let three_restaurant = [];

                for (const restaurant of BDD) {
                    const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                    // Make all restaurant array
                    all_restaurant.push(new_restaurant);

                    if (three_restaurant.length === 2) {
                        three_restaurant.push(new_restaurant)
                        data_restaurant.value.push(three_restaurant)
                        three_restaurant = []
                    } else {
                        three_restaurant.push(new_restaurant)
                    }
                }
            }
            // User search
            let user_search = ref('');
            let search_restaurant = ref([]);
            watch(user_search, newValue => {
                let regex = RegExp(newValue.toLowerCase());

                let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()));

                
                if (newValue == 0) {
                    search_restaurant.value = []
                } else {
                    search_restaurant.value = new_search_restaurant;
                }
    
                //style condition ternaire
                newValue == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
            })

            //
            onMounted(dataRestaurant);

            return {
                data_restaurant,
                user_search,
                search_restaurant
            }
    },
        mounted() {
            this.$refs.address.focus(); 
        },
    methods: {
        /**
         * When the location found
         * @param {Object} addressData, Data of the found location
       
         */
        getAddressData: function (addressData) {
            this.address = addressData;
        },
    },
}
</script>

<style lang="scss">
.header {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 200px;
    }

    .order {
        background-color: #f6f6f6;
        border: none;
        border-radius: 500px;
        height: 50px;
        width: 240px;
        outline: none;
        justify-content: space-between;


        .delivery {
            background-color: #fff;
            height: 40px;
            width: 115px;
            margin-left: 5px;
            justify-content: center;
            cursor: pointer;

            &:hover {
                background-color: black;
                color: #fff;
                transition: ease-in-out 0.3s;
            }
        }
    }

    .cart {
        cursor: pointer;
        background-color: black;
        color: #fff;
        height: 50px;
        width: 50px;
        i{
            padding-top: 16px;
        }
        &:hover {
            background-color: #06C167;
            transition: ease-in-out 0.3s;
        }
    }

    button {
        background-color: #f6f6f6;
        border: none;
        border-radius: 500px;
        height: 50px;
        width: 120px;
        outline: none;
        justify-content: space-between;

        &:hover {
            background-color: darkgray;
            transition: ease-in-out 0.4s;
        }
    }

    .user--session {
        align-items: right;
        justify-content: center;

        .submit {
            justify-content: center;
            margin-left: 10px;
            height: 40px;
            width: 140px;
            cursor: pointer;
        }

        .login {
            justify-content: center;
            margin-right: 10px;
            height: 40px;
            width: 140px;
            cursor: pointer;
        }
    }
#map{
    background-color: #f6f6f6;
        border: none;
        height: 50px;
        width: 200px;
        outline: none;
        padding: 2px 40px;
        margin: auto 15px;
        display: inline-block; 
}

#location{
    padding-left: 26px;
}
    .wrapper--input {
        position: relative;
        justify-content: space-between;

        i {
            position: absolute;
            padding-left: 12px;
            top: 18px;
            margin-right: 20px;
            color: gray;
        }

        input {
            background-color: #f6f6f6;
            border: none;
            height: 50px;
            width: 250px;
            outline: none;
            padding: 2px 40px;
            display: inline-block;
        }

        .search {
            position: absolute;
            top: 100%;
            width: 100%;

            background-color: #fff;


            .container--restaurant--search {
                display: flex;
                align-items: center;
                padding: 10px;

                &:hover {
                    background: #f6f6f6;
                }

                .wrapper--img {
                    height: 50px;
                    width: 50px;
                    margin-right: 10px;
                    border-radius: 50%;
                    overflow: hidden;

                    img {
                        height: 100%;
                        width: auto;
                    }
                }
            }
        }
    }
}
</style>