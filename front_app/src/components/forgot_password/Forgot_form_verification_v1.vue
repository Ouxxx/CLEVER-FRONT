<template>
    <div class="form-data"  >

        <input-form input-id="codephone" input-type="text" 
            info-label="Code reçu par téléphone" 
            event="codephone" @codephone="saveCodePhone" >
        </input-form>

            <p style="color : white">Code phone : {{phoneCode}}</p>

        <button class="form-button-ok" @click="checkCodes()">
            <p>Suivant</p>
        </button>
    </div>

</template>

<script>
import inputForm from './../inputs/input_form_v1'

export default {
    components: {inputForm},

    data () {
        return {
            phoneCode: ''
        }
    },

    methods : {

        saveCodePhone (code) {
            this.phoneCode = code.value
        },
        
        checkCodes () {
            /* 
            TODO: faire en sorte de verifier le token et les codes.
                  Si codes === OK => creation du user plus go page suivante
            */
            this.$router.push('/forgot/password/new');
        },

    }

}
</script>

<style src="../styles/style_forms.css"></style>

