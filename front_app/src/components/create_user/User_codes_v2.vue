<template>
    <div class="form-data"  >

        <input-form input-id="codemail" input-type="text" 
            info-label="Code reçu par email" 
            event="codemail" @codemail="saveCodeEmail" >
        </input-form>

        <input-form input-id="codephone" input-type="text" 
            info-label="Code reçu par téléphone" 
            event="codephone" @codephone="saveCodePhone" >
        </input-form>

        <button class="form-button-ok" @click="checkCodes2()">
            <p>Suivant</p>
        </button>
    </div>

</template>

<script>
import inputForm from './../inputs/input_form_v1'

const axios = require('axios').default


export default {
    components: {inputForm},

    data () {
        return {
            emailCode: '',
            phoneCode: ''
        }
    },

    methods : {

        saveCodeEmail (code) {
            this.emailCode = code.value
        },
        saveCodePhone (code) {
            this.phoneCode = code.value
        },
        
        checkCodes () {
            /* 
            TODO: faire en sorte de verifier le token et les codes.
                  Si codes === OK => creation du user plus go page suivante
            */
           
            this.$router.push('confirmation');
        },

        checkCodes2 () {
            console.log('on entre dans checkCode2');
            axios({
                method: 'post',
                url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/signup',
                data:  {
                    // recuperer les infos du store
                    email: this.$store.getters.getEmail,
                    phone: this.$store.getters.getPhone,
                    phoneCode: this.phoneCode,
                    emailCode: this.emailCode
                }
            })
            .then(response => {
                console.log(response);
                // this.$router.push('/create/user/verification');                
            })
            .catch(error => {
                 // TODO : afficher une erreur pour le client
                console.log(error);            
            })
        }

    }

}
</script>

<style src="../styles/style_forms.css"></style>

