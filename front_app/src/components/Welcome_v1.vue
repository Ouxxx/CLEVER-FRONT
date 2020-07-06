<template>
  <div class="div-connexion">
    <header class="header-welcome">
      
        <div class="div-logo">
          <img class="header-logo" alt="CHlogo" src="./../assets/img/logoCH.png"
            @click="goHome()">
        </div>

    </header>
    <div class="main-welcome">
      <div class="connexion-div">
        <div class="inputs-main">
          <!--
          <input class="input-connexion login-input" type=text name=user placeholder="Utilisateur">
          <input class="input-connexion password-input" type="password" name=pwd placeholder="Mot de passe">
          -->
          <input-form class="input-connexion login-input"
            input-id="user" input-type="text" 
            info-label="Utilisateur" 
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="user" @user="saveUser" >
          </input-form>
          <input-form class="input-connexion password-input"
            input-id="password" input-type="password" 
            info-label="Mot de passe" 
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="password" @password="savePwd" >
          </input-form>
          <button  @click="connexion()" v-bind:disabled="isButtonDisable">
            <p>Connexion</p>
          </button>
        </div>
        <router-link class="button-visitor" to="/visitor">
          <p class="p-welcome">Se connecter en tant que visiteur</p>
        </router-link>
        <router-link class="button-create-account" to="/create/user/informations">
          <p class="p-welcome">Créer un compte</p>
        </router-link>
        <router-link class="button-forgot-pwd" to="/forgot/password/informations">
          <p class="p-welcome">Mot de passe oublié</p>
        </router-link>
      </div>
    </div>
    <footer class="footer-welcome">
      <div class="copyright-div">
        <p class="p-welcome">Copyright 2019</p>
      </div>
    </footer>
  </div>
</template>

<script>

import inputForm from './inputs/input_form_v1'
const axios = require('axios').default
export default {
  name: 'Welcome',
  components: { inputForm },
  data () {
    return {
      // data associe au champs 'Utilisateur'
      savedUser: '',
      isValidUser: false,

      // data associe au champs 'mot de passe'
      savedPassword: '',
      isValidPwd: false,
    }
  },
  methods: {
    createUser () {
      console.log('Clic sur le bouton de creation de user');
    },
    goHome() {
      this.$router.go(0)
    },
    saveUser (user) {
      this.savedUser = user.value
      this.isValidUser = user.isValid
    },
    savePwd (pwd) {
      this.savedPassword = pwd.value
      this.isValidPwd = pwd.isValid
    },
    connexion() {
      axios({
        method: 'post',
        url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/signin',
        data: { 
          email: this.savedUser, 
          password: this.savedPassword 
        }})
        .then( response => {
          if(response.status == 200){
            // Enrichissement du store
            this.$store.commit( 'loadUser', {
                id: response.data.register,
                email: response.data.userId,
                token: response.data.token,
            });


            this.$router.push('/home')
          } else if(response?.status == 401){
            //TODO not implemented yet
          }else { // cas erreur 500
            //TODO not implemented yet
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
  },
  computed: {
    isButtonDisable () {
      return !(this.isValidPwd && this.isValidUser)
    }
  }
    
      
}
</script>

<style scoped>

* {
  font-family:"Montserrat", Verdana, Geneva, Tahoma, sans-serif;
}

.div-connexion {
  background-image: url("./../assets/fonds/background_welcome_v1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}

.header-welcome {
  position: relative;
  text-align: center;
  height: 25vh;
}
.main-welcome {
  padding: 30px;
  height: 60vh;
}

.footer-welcome {
  height: 15vh;
}


.div-logo {
  position: absolute;
  width: 100%;
  bottom: 0 
}

.header-logo {
  text-align: center;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}

.connexion-div {
  text-align: center;
}

.inputs-main {
  margin: 20px;
}

.input-connexion {
  background: transparent;
  display: block;
  margin: auto;
  color: aliceblue;
  border: none;
  text-align: center;
  margin-bottom: 3px;
  padding: 10px;
}

.input-connexion:focus {
  outline-color: grey;
}

input::placeholder {
  color: aliceblue;
  text-align: center;
}

a {
  text-decoration: none
}

.button-visitor {
  user-select: none;
  display: block;
  margin-top: 50px;
}

.button-create-account {
  user-select: none;
  display: inline-block;
  margin: 30px;
}

.button-forgot-pwd {
  user-select: none;
  display: inline-block;
  margin: 30px;
}

.button-visitor:hover, .button-visitor:focus,
.button-create-account:hover , .button-create-account:focus,
.button-forgot-pwd:hover , .button-forgot-pwd:focus {
  cursor: pointer;
}


.p-welcome {
  margin: 0;
  color: white;
}

.copyright-div {
  text-align: center;
}
</style>