<template>
  <Header></Header>
  <div class="b6 ao ap d4 eq f8" id="banner">
    <img :src="restaurant.image" alt="photo du resto" class="img-responsive">
    <div class="restaurant--love">
      <div class="cercle">
      <span class="heart">
        <i class="fas fa-heart"></i>
      </span>
      </div>
    </div>
  </div>
  <div class="restaurant--infos">
    <h2 class="restaurant--name">{{restaurant.name}}</h2>
    <h6 class="restaurant--specs"><i class="fa-solid fa-star"></i> Note {{restaurant.note}} <i class="fa-solid fa-circle"></i> {{restaurant.category}} <i
        class="fa-solid fa-circle"></i> {{restaurant.drive_time}} <i class="fa-solid fa-circle"></i>  <img
        src="https://dkl8of78aprwd.cloudfront.net/ticket@3x.png" width="14" height="14" vertical-align="middle"> <i
        class="fa-solid fa-circle"> </i> Plus
      d'informations</h6>
    <p class="restaurant--hours">Ouvert jusqu'à 2:30 PM</p>
  </div>
  <container class="order--guidelines">
    <div class="restaurant--delivery">
      <button class="group--order" id="group-order"><i class="fa-solid fa-user-plus"></i> Commande groupée</button>
      <button class="group--order"><i class="fa-solid fa-calendar-check"></i> Planifier</button>
    </div>
    <div class="order">
      <button class="delivery">
        Livraison
      </button>
      <button class="takeoff">A emporter</button>
    </div>
  </container>
  <aside class="menu--items">
    <nav class="nav flex-column">
      <a class="nav-link active" aria-current="page" href="#">
        Notre sélection pour vous</a>
      <a class="nav-link" href="#">Entrées</a>
      <a class="nav-link" href="#">Menus</a>
      <a class="nav-link" href="#">Desserts</a>
      <a class="nav-link" href="#">Formules</a>
      <a class="nav-link" href="#">Plats</a>
      <a class="nav-link" href="#">Burgers</a>
      <a class="nav-link" href="#">Salades</a>
      <a class="nav-link" href="#">Poke Bowls</a>
      <a class="nav-link" href="#">Accompagnements</a>
      <a class="nav-link" href="#">Exclusivités</a>
      <a class="nav-link" href="#">Boissons</a>
      <a class="nav-link" href="#">Menu enfant</a>
    </nav>
  </aside>
<div class="bloc">
<div class="menu--cards">
  <div class="menu--card" v-for="menu in restaurant.menu" v-bind:key="menu.id">
    <div class="menu--image">
      <img :src="menu.image" alt="photo du resto" class="img-responsive">
    </div>
    <div class="p-4 md:p-5">
      <p class="font-bold text-xl md:text-2xl" id="menu--title">{{menu.title}}</p>
      <p class="text-gray-700 md:text-lg" id="menu--description">{{menu.description}}
      </p>
    </div>
    <div class="p-4 md:p-5 bg-gray-100">
      <div class="sm:flex sm:justify-between sm:items-center">
        <div id="righ--el">
          <div class="text-lg text-gray-700"><span class="text-gray-900 font-bold" id="menu--price">{{menu.price}}0€</span> </div>
          <button
            class="add" id="add"> + </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<hr class="page--mark">
<Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue"
import RestaurantDataService from '../services/RestaurantDataService';

export default {
  name: "Restaurant",
  components: {
    Header,
    Footer,
  },
  props: {
    restaurantId: Number,
  },
  data() {
    return {
      restaurant: {
        name: "",
        image: "",
        note: "",
        drive_time: "",
      },
      menu: {
        title: "",
        image: "",
        price: "",
        description: "",
      },
      menus: [],
      user: {},
      isAdmin: "",
    };
  },
  // ----- RECUPERATION DU RESTAU CIBLE ----- //
  created() {
    // APPEL API
    let id = this.$route.params.id;
    RestaurantDataService.getOneRestaurant(id)
      .then((response) => {
        this.restaurant = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
  mounted() {
    let id = this.$route.params.id;
    RestaurantDataService.getMenus(id)
      .then(res => {
        this.menu = res.data;
        console.log(res.data);
      })
      .catch(err => console.log(err))
  },
}
</script>



<style lang="scss">
#banner {
  height: 200px;
  //width: 100%;
  position: relative;
  background-size: cover;
  background-position: center center;
.img-responsive{
  height: 200px;
    width: 100%;
   object-fit: cover;
   //position: relative;
}
.cercle {
    position: absolute;
    height: 42px;
    width: 42px;
    background-color: white;
    border-radius: 50%;
    top: 12%;
    right: 3%;
    
  .fa-heart {
      position:  absolute;
      display: flex;
      font-size: 1.4em;
      color: transparent;
      -webkit-text-stroke: 3px black;
      opacity: 1;
      top: 10px;
      left: 9px;
     
    }
  
    .fa-heart:hover {
      background: linear-gradient(white, #06C167);
      -webkit-background-clip: text;
  
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0px;
      opacity: 1;
      transition: all 1.8s ease-in-out;
    }
  }
}
button {
  background-color: #f6f6f6;
  border: none;
  border-radius: 500px;
  height: 50px;
  width: 120px;
  font-weight: 600;
  outline: none;
  justify-content: space-between;

  &:hover {
    background-color: darkgray;
    transition: ease-in-out 0.4s;
  }
}
.restaurant--infos{
  margin: 15px auto;
}
#group-order{
  width: 210px;
  margin-right: 15px;
}
.order--guidelines {
  display: flex;
  justify-content: space-between;

.order {
  flex-direction: inline-flex;
  background-color: #f6f6f6;
  border: none;
  border-radius: 500px;
  height: 50px;
  width: 370px;
  outline: none;
  justify-content: space-between;

  .takeoff{
width: 158px;
}
  .delivery {
    background-color: #fff;
    height: 40px;
    width: 205px;
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
}

.menu--items{
  display: inline-block;
  vertical-align: top;
  height: 100vh;
  width: 17%;
  position: sticky;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 3%;
  
  .flex-column {
      display: flex;
      flex-direction: column;
      a{
       margin: 3px 0px;
       font-size: 1em;
      font-weight: 700;
       color: #3A3A3A;
       text-decoration: none;
       &:hover{
        text-decoration: none;
        font-weight: 900;
       }
      }
    }
}
.active {
  font-weight: 600;
  text-decoration: underline;
}

.bloc{
display: inline-flex;
width: 83%;
min-width: 375px;
background: #f2f2f2;
margin-top: 55px;

.menu--cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 25px;
  width: 100%;
}  
  
.menu--card {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 680px;
    height: 165px;
    border: solid 5px transparent;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 5px 5px 0 #e2e2e2;
    margin: 20px 20px;
  
&:hover{
  box-shadow: 5px 5px 3px lightgray;
  transition: ease-in-out 0.3s;
  transform: scale(1.1);
}

  p {
    margin: 20px;
    flex-wrap: wrap;
  }

  .menu--image {
      width: 155px;
      //height: 145px;
      background-size: 100% 100%;
      border-radius: 15px 0 0 15px;
  
  }
    .menu--image img{
        width: 100%;
        height: 153px;
        background-size: 100% 100%;
        border-radius: 15px 0 0 15px;
        object-fit: cover;
    }
  
    #menu--title{
        font-weight: bold;
    }
    #menu--description{
        display: flex;
        flex-wrap: wrap;
    }
    
    #menu--price {
        font-size: 1rem;      
    }

    #add{
      width: 35px;
      height: 35px;
      margin: 15px auto;
      color: white;
      background-color: black;
      outline: solid 1px white;
      outline-offset: -2px;
      &:hover{
        color: black;
        background-color: #06C167;
      }
    }
  }
}
</style>