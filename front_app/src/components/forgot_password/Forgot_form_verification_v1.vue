<template>
    <div class="form-data"  >

        <!-- TODO: A faire au propre -->
        <div v-if="isBadCode" >
            <p>Le code de verification est incorrect</p>
        </div>

        <input-form input-id="codeemail" input-type="text" 
            info-label="Code reçu par email" 
            event="codeemail" @codeemail="saveCodeEmail" >
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
            isBadCode: false
        }
    },

    methods : {

        saveCodeEmail (code) {
            this.emailCode = code.value
        },
        
        checkCodes () {
           // envoyer le code au backend.
            axios({
                method: 'post',
                url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/search/email/check',
                data: {
                    email: this.$store.getters.getEmail,
                    code: this.emailCode,
                }
            })
            .then( response => {
                if(response.status == 200){
                    this.$router.push('/forgot/password/new')
                } else {
                    this.isBadCode = true
                }
            })
            .catch(error => {
                console.log(error)
            })

        }

    }

}
</script>

<style src="../styles/style_forms.css"></style>

