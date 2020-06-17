<template>
    <div class="form-data" >
        <!-- TODO : 2x à définir. Pas de chiffre pour le moment. -->
        <input-form input-id="password" input-type="password" 
            info-label="Nouveau mot de passe" 
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="password" @password="savePwd" >
        </input-form>
        
        <input-form input-id="confirmation" input-type="password" 
            info-label="Confirmation de mot de passe"
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="same-password" @same-password="saveSamePwd" >
        </input-form>

        <button class="form-button-ok" @click="changePwd()"  v-bind:disabled="isButtonDisable" >
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
            // data associe au champs 'mot de passe'
            savedPassword: '',
            isValidPwd: false,

            // data associe au champs 'confirmation de mot de passe'
            savedSamePwd: ''
        }
    },

    methods: {
        savePwd (pwd) {
            this.savedPassword = pwd.value
            this.isValidPwd = pwd.isValid
        },
        saveSamePwd (pwd) {
            this.savedSamePwd = pwd.value
        },
        changePwd () {
            // TODO
            axios({
                method: 'post',
                url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/search/email/changePwd',
                data: { 
                    email: this.$store.getters.getEmail, 
                    newPwd: this.savedPassword 
                }
            })
            .then( response => {
                if(response.data.state == 'SUCCESS'){
                    this.$router.push('/forgot/password/confirmation')
                } else {
                    this.isBadCode = true
                }
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    },

    computed: {

        isButtonDisable () {
            return !(this.isValidPwd
                && this.savedPassword === this.savedSamePwd)
        } 
        

    }
    
}
</script>

<style src="../styles/style_forms.css"></style>



