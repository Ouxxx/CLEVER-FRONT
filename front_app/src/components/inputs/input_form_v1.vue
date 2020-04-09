<template>
    <div class="form-input-grp" @click="focusInput()">
        
            <label class="form-label" :for="this.inputId"
                    :class="{'form-invalid-label': error, 'inside-input': labelInside}" >
                {{ infoLabel }}
            </label>
            <input class="form-input" :id="this.inputId" :type="inputType"
                v-model="value" ref="input" :class="{'form-invalid-input': error}"
                @focus="focusInputTransition()" @blur="blurInputTransition()" >

            <div class="form-question-div" v-if="infoQuestion">
                <img class="form-question-img" alt="question" 
                    src="./../../assets/img/forms_question_mark.png" 
                    @mouseenter="showQuestion()" @mouseleave="hideQuestion()" >
                <div class="form-question-info" :class="{'form-question-info-hidden': hideInfo}" >
                    {{ infoQuestion }}
                </div>
            </div>

            <p class="form-input-error" v-if="infoError != null && error">
                {{ infoError }}</p>
    </div>
</template>

<script>
import stringValidator from './../../services/string_validator'

export default {
    props: {
        inputType: {
            type: String,
            required: true
        },
        inputId: {
            type: String,
            required: true
        },
        infoLabel: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true
        },
        infoError: String,
        infoQuestion: String
    },
    data () {
        return {
            value: '',
            isValid: false,
            labelInside: true,
            error: false,
            hideInfo: true
        }
    },

    methods: {
        focusInput () {
            this.$refs.input.focus()
        },
        focusInputTransition () {
            this.labelInside = false
        },
        blurInputTransition () {
            this.labelInside = this.value === ''
            this.isValid = this.test()
            this.error = this.value != '' && !this.isValid
            this.$emit(this.event, {
                value: this.value,
                isValid: this.isValid
            })
        },
        
        showQuestion(){
            this.hideInfo = false
        },
        hideQuestion(){
            this.hideInfo = true
        },

        test(){
            var res = true
            switch (this.event){
                case 'email':
                    res = stringValidator.testEmail(this.value)
                    break
                case 'password':
                    res = stringValidator.testPassword(this.value)
                    break
                case 'same-password':
                    res = stringValidator.testPassword(this.value)
                    break
                case 'phone':
                    res = stringValidator.testPhone(this.value)
                    break
                case 'zip':
                    res = stringValidator.testZip(this.value)
                    break
                case 'codephone':
                    res = stringValidator.testCode(this.value)
                    break
                case 'codeemail':
                    res = stringValidator.testCode(this.value)
                    break
            }
            return res
        }

        
    }

}
</script>

<style src="../styles/style_forms.css">

</style>


