<template>
<div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    <p>Prénom: {{user.surname}} Nom: {{user.name}} </p>
    <img :src="user.image" />
    <div class="form-row">
        <button @click="logout()" class="button">
            Déconnexion
        </button>
    </div>
</div>
</template>

<script>
//import { mapState } from 'vuex'; 

export default {
    name: 'Profile',
    data() {
        return {
            user: {},
        };
    },
  
    beforeCreate() {
        let user = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:3000/api/user/${user.userId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                this.user = data;
            })
            .catch((error) => {
                error;
            });
    },
    methods: {
        logout: function () {
            this.$store.commit('logout');
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>