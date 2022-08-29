<template>
  <Header></Header>
  <div class="banner">
    <div class="restaurant--love">
      <div class="cercle"></div>
      <span class="heart">
        <i class="fas fa-heart"></i>
      </span>
    </div>
  </div>
  <div class="restaurant--infos">
    <h1 class="restaurant--name">{{$route.params.name}}</h1>
    <h4 class="restaurant--specs"><i class="fa-solid fa-star"></i> Note <i class="fa-solid fa-circle"></i> Fast Food <i
        class="fa-solid fa-circle"></i> €€ <i class="fa-solid fa-circle"></i> <img
        src="https://dkl8of78aprwd.cloudfront.net/ticket@3x.png" width="14" height="14" vertical-align="middle"> <i
        class="fa-solid fa-circle"></i> Plus
      dinformations</h4>
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
      <a class="nav-link" href="#">Boissons</a>
      <a class="nav-link" href="#">Menu enfant</a>
    </nav>
  </aside>
  <div class="menu--cards">
    <div class="menu--card">
      <div class="menu--image">
      </div>
      <div class="menu--information">
        <div class="top--menu">
          <p class="menu--name">
            Menu Tacos à volonté
          </p>
          <p class="menu--price">5€</p>
          <p class="menu--description">
            <span>Kebab, salade, tomate, oignon...</span>
          </p>
        </div>

      </div>
    </div>
    <div class="menu--card">
      <div class="menu--image">
      </div>
      <div class="menu--information">
        <div class="top--menu">
          <p class="menu--name">
            Menu tacos à composer
          </p>
          <p class="menu--price">5€</p>
          <p class="menu--description">
            <span>Kebab, salade, tomate, oignon...</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'


export default {
  name: "Restaurant",
  components: {
  Header,
}
}
</script>



<style lang="scss">





.banner {
  height: 200px;
  width: 100%;
  background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
  background-size: cover;
  background-position: center center;
  
.cercle {
  position: fixed absolute;
    height: 42px;
    width: 42px;
    background-color: white;
    border-radius: 50%;
    margin-left: 93%;
    margin-bottom: -5.5%;
}
  
  .fa-heart {
    position:  relative;
      display: flex;
      font-size: 1.5em;
      color: transparent;
      -webkit-text-stroke: 3px black;
      opacity: 1;
      margin-left: 94%;
      padding-top: 1.7%;
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
  width: 18vw;
  position: sticky;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 5%;
  
  .flex-column {
      display: flex;
      flex-direction: column;
      a{
       margin: 10px 0px;
       font-size: 1.1em;
       &:hover{
        text-decoration: none;
        font-weight: 700;
       }
      }
    }
}
.active {
  font-weight: 600;
  text-decoration: underline;
}
.menu--cards{
  display: inline-block;
  vertical-align: top;
  width: 75vw;
  margin: 50px auto;
  
.menu--card {
  display: inline-block;
  max-width: 48%;
  height: 30vh;
  margin-right: 10px;
&:hover{
  border: solid 0px;
  box-shadow: 5px 5px 3px lightgray;
  transition: ease-in-out 0.3s;
  transform: scale(1.1);
}
  
  p {
    margin: 0px;
  }

  .menu--image {
    display: flex;
    background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
    height: 40%;
    width: 100%;
    background-size: cover;
    background-position: right;
    object-fit: cover;
  
  }
  

  .menu--information {
//display: inline-block;

    .top--menu {
      margin: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .menu--description {
        background-color: #eee;
        //width: 30px;
        //height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
      }
    }
    .menu--price {
      font-size: 0.9rem;
    }
  }
}
}
</style>