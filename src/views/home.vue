<template>
    <div class="home">
        <Header />
        <Hero />
        <RestoRow />
        <Footer />
        </div>
   
</template>

<script>
import Header from "../components/Header.vue"
import Hero from "../components/Hero.vue"
import RestoRow from "../components/RestoRow.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "Home",
    components: {
        Hero,
        Header,
        RestoRow,
        Footer
    },
    data() {
        return {
            restaurants: [],
        }
    },
    
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