<template>
    <transition name="slide-fade">
    <div class="form-data"  >
        <div class="form-input-grp">
            <label class="form-label inside-input" id="labcodemail" for="codemail">Code recu par mail</label>
            <input class="form-input" id="codemail" type="text" name="codemail" v-model="emailCode"
                @focus="focusInputTransition('codemail')" @blur="blurInputTransition('codemail')">
        </div>

        <div class="form-input-grp">
            <label class="form-label inside-input" id="labcodephone" for="codephone">Code recu par SMS</label>
            <input class="form-input" id="codephone" type="text" name="codephone" v-model="phoneCode"
                @focus="focusInputTransition('codephone')" @blur="blurInputTransition('codephone')">
        </div>

        <button class="form-button-ok" @click="checkCodes()">
            <p>Suivant</p>
        </button>
    </div>
    </transition>

</template>

<script>
export default {

    data () {
        return {
            emailCode: '',
            phoneCode: ''
        }
    },

    methods : {
        

        checkCodes () {
            /*
            if(userManager.createUser(this.savedEmail, this.savedPhone, this.savedPassword)){
                console.log("Felicitation, votre compte a été créé");
            }else{
                console.log("Impossible de creer votre compte");
            }
            */
            this.$router.push('confirmation');
        },

        focusInputTransition (idFocused) {
            var lab = document.getElementById("lab" + idFocused)
            if(lab.classList.contains("inside-input")){
                lab.classList.remove("inside-input")
            }            
        },
        blurInputTransition (idBlured) {
            var buff = document.getElementById(idBlured) 
            var lab = document.getElementById("lab" + idBlured)
            if(buff.value == ""){
                lab.classList.add("inside-input")
            }
        }
    }

}
</script>

<style src="../styles/style_forms.css"></style>

