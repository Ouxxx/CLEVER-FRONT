<template>
    <div class="form-data" >
        
        <input-form input-id="useremail" input-type="text" 
            info-label="Adresse email" 
            info-question="Cette adresse sera utilisée afin de nous permettre de communiquer avec vous."
            info-error="Veuillez entrer une adresse e-mail valide."
            event="email" @email="saveEmail" >
        </input-form>

        <input-form input-id="password" input-type="password" 
            info-label="Mot de passe" 
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="password" @password="savePwd" >
        </input-form>
        
        <input-form input-id="confirmation" input-type="password" 
            info-label="Confirmation de mot de passe"
            info-error="TODO : à définir. Pas de chiffre pour le moment."
            event="same-password" @same-password="saveSamePwd" >
        </input-form>

        <input-form input-id="phone" input-type="text" 
            info-label="Téléphone"
            info-question="Nous utilisons votre numéro de telephone qu'à des fins de sécurité et de maintien de comptes individuels."
            info-error="Veuillez entrer un numero de téléphone valide."
            event="phone" @phone="savePhone" >
        </input-form>

        <input-date info-label="Date de naissance : "
            event="birthday" @birthday="saveBirthday" >
        </input-date>

        <input-form input-id="zip" input-type="text" 
            info-label="Code postal"
            info-error="Veuillez entrer un code postal valide."
            event="zip" @zip="saveZip" >
        </input-form>

        <input-gender info-label="Genre :" 
            event="genderPicked">
        </input-gender>

        <!--  <div class="radio">
            <input type="radio" id="two" value="Femme" name="gender" checked>
                <label for="two">Femme</label>
        </div>
        <div class="radio2">
            <input type="radio" id="one" value="Homme" name="gender">
                <label for="one">Homme</label>
        </div>
        <div class="radio3">
            <input type="radio" id="one" value="Homme" name="gender">
                <label for="three">Autre</label>
        </div> -->

        <button class="form-button-ok" @click="postForm()"  v-bind:disabled="isButtonDisable" >
            <p>Suivant</p>
        </button>

    </div>
</template>

<script>

import inputForm from './../inputs/input_form_v1'
import inputDate from './../inputs/input_date_v1'
import inputGender from './../inputs/input_gender_v1'

const axios = require('axios').default

export default {
    components: { inputForm, inputDate, inputGender },

    data () {
        return {
            // data associee au champs 'adresse mail'
            savedEmail: '',
            isValidEmail: false,

            // data associee au champs 'mot de passe'
            savedPassword: '',
            isValidPwd:false,

            // data associee au champs 'confirmation de mot de passe'
            savedSamePwd: '',

            // data associee au champs 'telephone'
            savedPhone: '',
            isValidPhone: false,

            //TO DO: Envoi BDD du genre
            // data associee au champs 'genre'
            savedGender: '',

            // data associee au champs 'date de naissance'
            savedBirthday: '',
            isValidBirthday: false,

            // data associee au champs 'code postal'
            savedZip: '',
            isValidZip: false,
        }
    },

    methods: {

        /*testButtonForGender (picked){
            this.value.checked =     
        },*/

        saveEmail (email) {
            this.savedEmail = email.value
            this.isValidEmail = email.isValid
        },
        savePwd (pwd) {
            this.savedPassword = pwd.value
            this.isValidPwd = pwd.isValid
        },
        saveSamePwd (pwd) {
            this.savedSamePwd = pwd.value
        },
        savePhone (phone) {
            this.savedPhone = phone.value
            this.isValidPhone = phone.isValid
        },
        saveZip (zip) {
            this.savedZip = zip.value
            this.isValidZip = zip.isValid
        },
        saveBirthday (date) {
            this.savedBirthday = date.value
            this.isValidBirthday = date.isValid
        },
        saveGender (genre) {
            this.savedGender = genre.value
        },

        postForm () {

            axios({
                method: 'post',
                url: this.$store.getters.getAddr + ':' + this.$store.getters.getPort + '/api/user/form',
                data: {
                    email: this.savedEmail,
                    password: this.savedPassword,
                    phone: this.savedPhone,
                    zip: this.savedZip,
                    birthday: this.savedBirthday,
                    genderPicked: this.savedGender
                }
            })

            .then(() => {

                // Enrichissement du store
                this.$store.commit( 'setUser', {
                    email: this.savedEmail,
                    phone: this.savedPhone                    
                });


                this.$router.push('/create/user/verification');                
            })
            .catch(error => {
                 // TODO : afficher une erreur pour le client
                console.log(error+'probleme survenu');            
            })
        }
    },

    computed: {

        isButtonDisable () {
            return !(this.isValidEmail && this.isValidPwd && this.isValidPhone 
                && this.isValidBirthday && this.isValidZip 
                && this.savedPassword === this.savedSamePwd)
        } 
        

    }
    
}
</script>

<style src="../styles/style_forms.css"></style>



