<template>
    <footer class="footer">
        <div class="logo">
            <div class="logo--uber"><img alt="Uber&nbsp;Eats" role="img"
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" width="146" height="24"
                    class="cc c5 fu"></div>
            <div class="logo--app">
                <img alt="Télécharger sur Google&nbsp;Play"
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/df47c8284add9f40.png" loading="lazy"
                    decoding="async" height="40" class="cc">
                <img alt="Télécharger sur l'App&nbsp;Store" role="img"
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/3a6703b93895d3b2.svg" loading="lazy"
                    decoding="async" height="40" class="cc">
            </div>
        </div>
        <div class="footer-link">
            <p class="footer-link_title"><a href="#">Obtenir de l'aide</a></p>
            <p class="footer-link_title"><a href="#">Ajouter votre restaurant</a></p>
            <p class="footer-link_title"><a href="#">Devenez coursier-partenaire</a></p>
            <p class="footer-link_title"><a href="#">Créez un compte professionnel</a></p>
            <p class="footer-link_title"><a href="#">Promotions</a></p>
        </div>
        <div class="footer-link">
            <p class="footer-link_title"><a href="#">Restaurants à proximité</a></p>
            <p class="footer-link_title"><a href="#">Afficher toutes les villes</a></p>
            <p class="footer-link_title"><a href="#">Tous les pays</a></p>
            <p class="footer-link_title"><a href="#">Commandes à récupérer à proximité</a></p>
            <p class="footer-link_title"><a href="#">A propos d'Uber Eats</a></p>
            <p class="footer-link_title"><a href="#"><i class="fa-solid fa-language"></i>Français</a></p>
        </div>

    </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>



<style lang="scss">

.footer {
    display: flex;
    width: 100%;
    margin-top: 25px;
    background-color: #fff;
    justify-content: space-between;
}
.logo{
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    
}

.footer-link {
    width: auto;
    margin: auto;
    margin-left: 25%;
}
a{
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
}




</style>
