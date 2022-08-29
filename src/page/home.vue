<template>
    <div class="home">
        <Header />
        <div class="banner">
        </div>
        <div class="hero">
            <div class="food--choice">
                <div class="food--img">
                    <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png"
                        class="bx ae i5">
                </div>

                <h5 class="food--name">Offres</h5>

            </div>

            <div class="food--choice">
                <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png"
                    class="bx ae i5">
                <h5 class="food--name">Les mieux notés</h5>
            </div>
            <div class="food--choice">
                <img alt="hot-dog" role="presentation"
                    src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/american.png" class="bx ae i5">
                <h5 class="food--name">Américain</h5>
            </div>
            <div class="food--choice">
                <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/asian.png"
                    class="bx ae i5">
                <h5 class="food--name">Asiatique</h5>
            </div>
            <div class="food--choice">
                <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png"
                    class="bx ae i5">
                <h5 class="food--name">Pizza</h5>
            </div>
            <div class="food--choice">
                <img alt="" role="presentation"
                    src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png" class="bx ae i5">
                <h5 class="food--name">Fast Food</h5>
            </div>
            <div class="food--choice">
                <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
                    class="bx ae i5">
                <h5 class="food--name">Alcohol</h5>
            </div>
        </div>
        <hr class="d0 b7 lm gi">
        <RestoRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data" />
    </div>
    <hr class="d0 b7 lm gi">
    <Footer />
</template>

<script>
// Import BDD
import BDD from '../BDD'
import { onMounted, ref, watch } from 'vue'
import RestoRow from '../components/RestoRow.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
    name: 'Home',
components: {
    RestoRow,
    Footer,
    Header,
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

            /*
            if (newValue == 0) {
                search_restaurant.value = []
            } else {
                search_restaurant.value = new_search_restaurant;
            }
*/
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
    }
}
</script>




<style lang="scss">

.home{
    
    .banner{
        height: 200px;
        width: 100%;
        background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        background-size: cover;
        background-position: center center;
    }

    .hero{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .food--choice{
            text-align: center;
            margin-top: 10px;
            img{
                border-radius: 50%;
                width: 60%;
                height: 60%; 
            }
            
            .food--name{
            text-align: center;
            margin: auto;
            padding-bottom: 25px;
            }
            
        }
    }
}

</style>