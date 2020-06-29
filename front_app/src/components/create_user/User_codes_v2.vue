<template>
    <div class="form-data"  >

        <input-form input-id="codeemail" input-type="text" 
            info-label="Code reçu par email" 
            event="codeemail" @codeemail="saveCodeEmail" >
        </input-form>

        <input-form input-id="codephone" input-type="text" 
            info-label="Code reçu par téléphone" 
            event="codephone" @codephone="saveCodePhone" >
        </input-form>

        <button class="form-button-ok" @click="checkCodes()">
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

        // TODO: Me renommer
        checkCodes () {


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
                console.log('userID :' + response.data.userId);
                if(response.data.userId){
                    // Enrichissement du store

                    this.$store.commit( 'setUserId', response.data.userId);

                } else {
                    console.log("whatttttt")
                    // TODO: signaler un panic
                }

                this.$router.push('/create/user/confirmation');
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

