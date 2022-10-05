<template>
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
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/burger.png"
            class="bx ae gu">
        <h5 class="food--name">Burgers</h5>
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
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png"
            class="bx ae i5">
        <h5 class="food--name">Fast Food</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/streetfood.png"
            class="bx ae gu">
        <h5 class="food--name">Street Food</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/vietnamese.png"
            class="bx ae gu">
        <h5 class="food--name">Vietnamien</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/japanese.png"
            class="bx ae gu">
        <h5 class="food--name">Japonais</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/chinese.png"
            class="bx ae gu">
        <h5 class="food--name">Chinois</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png" class="bx ae gu">
        <h5 class="food--name">Epicerie</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png" class="bx ae gu">
        <h5 class="food--name">Courses</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png" class="bx ae gu">
        <h5 class="food--name">Boutique</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/pet_supplies.jpg"
            class="bx ae gu">
        <h5 class="food--name">Animaux</h5>
    </div>
    <div class="food--choice">
        <img alt="" role="presentation" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
            class="bx ae i5">
        <h5 class="food--name">Alcohol</h5>
    </div>
</div>
</template>

<script>
export default {
    name: "Hero",
}
</script>

<style lang="scss">
.banner {
            height: 200px;
            width: 100%;
            background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
            background-size: cover;
            background-position: center center;
        }
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .food--choice {
        text-align: center;
        margin-top: 10px;

        img {
            border-radius: 50%;
            width: 60%;
            height: 60%;
            &:hover{
                background-color: rgb(226, 226, 226);
                border-radius: 50%;
                cursor: pointer;
            }
        }

        .food--name {
            text-align: center;
            margin: auto;
            padding-bottom: 25px;
        }

        h5{
            font-size: 0.9em;
            font-weight: 600;
        }

    }
}
</style>