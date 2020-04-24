<template>
    <div class="form-data" >

        <!-- TODO: A faire au propre -->
        <div v-if="isBadEmail" >
            <p>L'email n'est associé à aucun compte existant</p>
        </div>
        
        <input-form input-id="useremail" input-type="text" 
            info-label="Adresse email" 
            info-error="Veuillez entrer une adresse e-mail valide."
            event="email" @email="saveEmail" >
        </input-form>

        <button class="form-button-ok" @click="searchData()"  v-bind:disabled="isButtonDisable" >
            <p>Suivant</p>
        </button>

    </div>
</template>

<script>

import inputForm from './../inputs/input_form_v1'

const axios = require('axios').default


export default {
    components: { inputForm },
    data () {
        return {
            // data associe au champs 'adresse mail'
            savedEmail: '',
            isValidEmail: false,
            
            // affiche en fonction la div de notification
            isBadEmail: false
        }
    },

    methods: {
        saveEmail (email) {
            this.savedEmail = email.value
            this.isValidEmail = email.isValid
        },

        searchData () {

            // envoyer l'adresse mail au backend.
            axios({
                method: 'post',
                url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/search/email',
                data: {
                    email: this.savedEmail,
                }
            })
            .then( user => {
                // resultat : { isFound :true ou false }
                console.log('user : ')
                console.log(user)

                if(user.data.isFound){
                    // ajout du mail dans le store
                    this.$store.commit( 'setEmail', {
                        email: this.savedEmail                  
                    });

                    this.$router.push('/forgot/password/verification')
                } else {
                    this.isBadEmail = true
                }
            })
            .catch(error => {
                console.log(error)
            })            
        }
    },

    computed: {

        isButtonDisable () {
            return !this.isValidEmail
        } 
        

    }
    
}
</script>

<style src="../styles/style_forms.css"></style>



