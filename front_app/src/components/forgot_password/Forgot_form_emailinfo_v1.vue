<template>
    <div class="form-data" >
        
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
import dataValidater from './../../services/api/data_validator'

import inputForm from './../inputs/input_form_v1'

export default {
    components: { inputForm },
    data () {
        return {
            // data associe au champs 'adresse mail'
            savedEmail: '',
            isValidEmail: false
        }
    },

    methods: {
        saveEmail (email) {
            this.savedEmail = email.value
            this.isValidEmail = email.isValid
        },

        searchData () {
            // TODO : verifier qu'il n existe pas deja un user avec ce numero ou cette adresse mail

            var token = dataValidater.findUser({
                email: this.savedEmail
            });
            this.$emit('tokenized', token);
            console.log('phoneCode : ' + dataValidater.getSearchCode());

            this.$router.push('/forgot/password/verification')
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



