<template>
    <transition name="slide-fade">
    <div class="form-data" >
        <div class="form-input-grp">
            <label class="form-label inside-input" id="labusermail" for="usermail">Adresse mail</label>
            <input class="form-input" id="usermail" type="text" name="usermail" v-model="savedEmail"
                @focus="focusInputTransition('usermail')" @blur="blurInputTransition('usermail')">
            <div class="form-question-div" >
                
                <img class="form-question-img" alt="question" 
                    @mouseenter="openInfo('infomail')" @mouseleave="closeInfo('infomail')" 
                    src="./../../assets/img/forms_question_mark.png">
                <div class="form-question-info form-question-info-hidden" id="infomail">
                    Cette adresse sera utilisée afin de nous permettre de communiquer avec vous.
                </div>

            </div>
            <p class="form-input-error" v-if="isBadEmail">
                Veuillez entrer une adresse e-mail valide.</p>
        </div>

        <div class="form-input-grp">
            <label class="form-label inside-input" id="labpassword" for="password">Mot de passe</label>
            <input class="form-input" id="password" type="password" name="password" v-model="savedPassword"
                @focus="focusInputTransition('password')" @blur="blurInputTransition('password')">
        </div>

        <div class="form-input-grp">
            <label class="form-label inside-input" id="labconfirmpwd" for="confirmpwd">
                Confirmation du mot de passe</label>
            <input class="form-input" id="confirmpwd" type="password" name="confirmpwd" 
                v-model="savedConfPwd"
                @focus="focusInputTransition('confirmpwd')" @blur="blurInputTransition('confirmpwd')">
            <p class="form-input-error" v-if="isBadConfPwd">
                Le contenu est différent de celui contenu dans le champ "Mot de passe".</p>
        </div>

        <div class="form-input-grp">
            <label class="form-label inside-input" id="labphone" for="phone">Telephone</label>
            <input class="form-input" id="phone" type="text" name="phone" v-model="savedPhone"
                @focus="focusInputTransition('phone')" @blur="blurInputTransition('phone')">
            <div class="form-question-div" >
                <img class="form-question-img" alt="question" 
                    @mouseenter="openInfo('infophone')" @mouseleave="closeInfo('infophone')"
                    src="./../../assets/img/forms_question_mark.png">                
                <div class="form-question-info form-question-info-hidden" id="infophone">
                    Nous utilisons votre numéro de telephone qu'à des fins de 
                    sécurité et de maintien de comptes individuels
                </div>            
            </div>
            <p class="form-input-error" v-if="isBadPhone">
                Veuillez entrer un numero de téléphone valide.</p>
        </div>

        <div class="form-input-grp">
            <label class="form-label-date" id="labbirthday" for="birthday">
                Date de naissance :</label>
            <div class="form-date">
                <select class="form-date-select" v-model="birthday">
                    <option v-for="dayoption in dayoptions()" :key="dayoption.value" 
                            v-bind:value="dayoption.value">
                        {{ dayoption.text }}
                    </option>
                </select>

                <select class="form-date-select" v-model="birthmonth">
                    <option v-for="monthoption in monthoptions" :key="monthoption.value" 
                            v-bind:value="monthoption.value">
                        {{ monthoption.text }}
                    </option>
                </select>
        
                <select class="form-date-select" v-model="birthyear">
                    <option v-for="yearoption in yearoptions()" :key="yearoption.value" 
                            v-bind:value="yearoption.value">
                        {{ yearoption.text }}
                    </option>
                </select>
            </div>

            <p class="form-input-error" v-if="isBadBirthday">
                Veuillez entrer une date de naissance valide.</p>
        </div>

        <div class="form-input-grp">
            <label class="form-label inside-input" id="labzip" for="zip">Code postal</label>
            <input class="form-input" id="zip" type="text" name="zip" v-model="savedZip"
                @focus="focusInputTransition('zip')" @blur="blurInputTransition('zip')">
            <p class="form-input-error" v-if="isBadZip">
                Veuillez entrer un code postale valide.</p>
        </div>

        <div>
            <p style="color: white">{{ birthday }}:{{ birthmonth }}:{{ birthyear }}</p>
        </div>

        <button class="form-button-ok" @click="validateData()"  v-bind:disabled="isButtonDisable" >
            <p>Suivant</p>
        </button>

    </div>
    </transition>


</template>

<script>
import dataValidater from './../../services/api/data_validator'
import stringValidator from './../../services/string_validator'
export default {
    data () {
        return {
            savedEmail : '',
            savedPhone : '',
            savedPassword :'',
            savedConfPwd : '',
            birthday : '0',
            birthmonth: '0',
            birthyear : '0',
            savedBirthday : this.birthday + ':' + this.birthmonth + ':' + this.birthyear,
            savedZip : '',
            isBadEmail : false,
            isBadPhone : false,
            isBadConfPwd : false,
            isBadBirthday : false,
            isBadZip : false,
            isButtonDisable : true,
            isPhoneHovered : true,

            dayoptions () {
                var res = [{text: 'Jour', value: '0'}];
                for(var i = 1; i <= 31; i++){
                    res.push({text: '' + i, value: i})
                }
                return res
            },
            monthoptions : [
                {text: 'Mois', value: '0'},
                {text: 'Janvier', value: 1},
                {text: 'Février', value: 2},
                {text: 'Mars', value: 3},
                {text: 'Avril', value: 4},
                {text: 'Mai', value: 5},
                {text: 'Juin', value: 6},
                {text: 'Juillet', value: 7},
                {text: 'Aout', value: 8},
                {text: 'Septembre', value: 9},
                {text: 'Octobre', value: 10},
                {text: 'Novembre', value: 11},
                {text: 'Decembre', value: 12}
            ],
            yearoptions () {
                var res = [{text: 'Année', value: '0'}]
                for(var i = 1; i <= 100; i++){
                    res.push({text: 1919 + i, value : 1919 + i})
                }
                return res
            }

                

        }
    },

    methods: {

        validateData () {
            // TODO : verifier que les donnees passé en entree sont ok
            // TODO : verifier qu'il n existe pas deja un user avec ce numero ou cette adresse mail

            var token = dataValidater.getToken({
                email: this.savedEmail, 
                phone: this.savedPhone, 
                pwd: this.savedPassword
            });
            this.$emit('tokenized', token);
            console.log('codePhone : ' + dataValidater.getPhoneCode());
            console.log('codeEmail : ' + dataValidater.getEmailCode());

            this.$router.push('/create/user/verification')
        },

        openInfo(idHovered) {
            var infodiv = document.getElementById(idHovered)
            infodiv.classList.remove('form-question-info-hidden')
        },
        
        closeInfo(idHovered) {
            var infodiv = document.getElementById(idHovered)
            infodiv.classList.add('form-question-info-hidden')
        },

        focusInputTransition (idFocused) {
            var lab = document.getElementById('lab' + idFocused)
            if(lab.classList.contains('inside-input')){
                lab.classList.remove('inside-input')
            }            
        },
        blurInputTransition (idBlured) {
            // TODO : gerer le cas du birthday qui ne passe pas par là 

            var buff = document.getElementById(idBlured) 
            var lab = document.getElementById('lab' + idBlured)
            lab.classList.remove('form-invalid-label')
            buff.classList.remove('form-invalid-input')
            switch (idBlured) {
                case 'phone':
                    if(buff.value === '' || stringValidator.testPhone(buff.value)){
                        this.isBadPhone = false;
                    }else{
                        lab.classList.add('form-invalid-label')
                        buff.classList.add('form-invalid-input')
                        this.isBadPhone = true;
                    }
                    break;
                case 'usermail':
                    if(buff.value === '' || stringValidator.testEmail(buff.value)){
                        this.isBadEmail = false;
                    }else{
                        lab.classList.add('form-invalid-label')
                        buff.classList.add('form-invalid-input')
                        this.isBadEmail = true;
                    }
                    break;
                case 'confirmpwd':
                    if(this.savedPassword === '' && buff.value === '' 
                            || buff.value != '' && buff.value === this.savedPassword){
                        this.isBadConfPwd = false;
                    }else{
                        lab.classList.add('form-invalid-label')
                        buff.classList.add('form-invalid-input')
                        this.isBadConfPwd = true;
                    }
                    break;
                case 'birthday':
                    if(buff.value === '' || stringValidator.testBirthday(buff.value)){
                        this.isBadBirthday = false;
                    }else{
                        lab.classList.add('form-invalid-label')
                        buff.classList.add('form-invalid-input')
                        this.isBadBirthday = true;
                    }
                    break;
                case 'zip':
                    if(buff.value === '' || stringValidator.testZip(buff.value)){
                        this.isBadZip = false;
                    }else{
                        lab.classList.add('form-invalid-label')
                        buff.classList.add('form-invalid-input')
                        this.isBadZip = true;
                    }
                    break;
            }
            if(buff.value === ''){
                lab.classList.add('inside-input')
            }
            this.isButtonDisable = false

            /*
            this.isButtonDisable = 
                this.savedPassword === '' || this.savedEmail === '' || this.savedPhone === '' 
                || this.savedConfPwd === '' || this.savedBirthday === '' || this.savedZip === ''
                || this.isBadEmail || this.isBadPhone || this.isBadConfPwd 
                || this.isBadBirthday || this.isBadZip
            */
        }
    }
    
}
</script>

<style src="../styles/style_forms.css"></style>

