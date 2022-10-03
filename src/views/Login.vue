<template>
    <div class="card">
        <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card__title" v-else>Inscription</h1>
        <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action"
                @click="switchToCreateAccount()">Créer un compte</span></p>
        <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se
                connecter</span></p>
        <div class="form-row">
            <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail" />
        </div>
        <div class="form-row" v-if="mode == 'create'">
            <input v-model="surname" class="form-row__input" type="text" placeholder="Prénom" />
            <input v-model="name" class="form-row__input" type="text" placeholder="Nom" />
        </div>
        <div class="form-row">
            <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe" />
        </div>
        <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
            Adresse mail et/ou mot de passe invalide
        </div>
        <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
            Adresse mail déjà utilisée
        </div>
        <div class="form-row">
            <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}"
                v-if="mode == 'login'">
                <span v-if="status == 'loading'">Connexion en cours...</span>
                <span v-else>Connexion</span>
            </button>
            <button @click="createAccount(user)" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
                <span v-if="status == 'loading'">Création en cours...</span>
                <span v-else>Créer mon compte</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Login",
    data: function () {
        return {
            mode: "login",
            email: "",
            name: "",
            surname: "",
            password: "",
            isAdmin: null,
        }
    },
    /*mounted: function () {
        if (this.$store.state.user.userId != -1) {
            this.$router.push('/');
            return;
        }
    },*/
    computed: {
        validatedFields: function () {
            if (this.mode == 'create') {
                if (this.email != "" && this.surname != "" && this.name != "" && this.password != "") {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (this.email != "" && this.password != "") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        ...mapState(['status'])
    },
    methods: {
        switchToCreateAccount: function () {
            this.mode = 'create';
        },
        switchToLogin: function () {
            this.mode = 'login';
        },
    
    login: function () {
            //const self = this;
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            }).then(function () {
                
                window.location.href = "/";
            }), function (error) {
                console.log(error);
            };
        },
        createAccount: function () {
            const self = this;
            this.$store.dispatch('createAccount', {
                email: this.email,
                name: this.name,
                surname: this.surname,
                password: this.password,
            }).then(function () {
                self.login();
            }, function (error) {
                console.log(error);
            });
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');
    
        * {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    
        body {
           background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 32px;
        }
.form-row {
    display: flex;
    margin: 16px 0px;
    gap: 16px;
    flex-wrap: wrap;
}

.form-row__input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    background: #f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex: 1;
    min-width: 100px;
    color: black;
}

.form-row__input::placeholder {
    color: #aaaaaa;
}

.card {
    max-width: 100%;
    width: 540px;
    background: white;
    border-radius: 16px;
    padding: 32px;
}

.card__title {
    text-align: center;
    font-weight: 800;
}

.card__subtitle {
    text-align: center;
    color: #666;
    font-weight: 500;
}

.button {
    background: #1f31ff;
    color: white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: 0.4s background-color;
}

.card__action {
    color: #4825f6;
    text-decoration: underline;
}

.card__action:hover {
    cursor: pointer;
}

.button:hover {
    cursor: pointer;
    background: #1976d2;
}

.button--disabled {
    background: #4d4d4d;
    color: #ececec;
}

.button--disabled:hover {
    cursor: not-allowed;
    background: #cecece;
}

@media screen and (max-width: 562px) {
    .card {
        max-width: 100%;
        width: 340px;
    }
}
</style>