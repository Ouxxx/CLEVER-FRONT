<template>
    <div class="form-input-grp">
        <label class="form-label-date" for="birthday">
            {{ infoLabel }}</label>
        <div class="form-date">
            <select class="form-date-select" v-model="day" @change="makeBirthday">
                <option v-for="dayoption in dayoptions()" :key="dayoption.value" 
                        v-bind:value="dayoption.value" >
                    {{ dayoption.text }}
                </option>
            </select>

            <select class="form-date-select" v-model="month" @change="makeBirthday">
                <option v-for="monthoption in monthoptions" :key="monthoption.value" 
                        v-bind:value="monthoption.value" >
                    {{ monthoption.text }}
                </option>
            </select>
        
            <select class="form-date-select" v-model="year" @change="makeBirthday">
                <option v-for="yearoption in yearoptions()" :key="yearoption.value" 
                        v-bind:value="yearoption.value" >
                    {{ yearoption.text }}
                </option>
            </select>
        </div>

    </div>
</template>


<script>
import stringValidator from './../../services/string_validator'
export default {
    props: {
        infoLabel: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true
        }
    },

    methods: {
        makeBirthday () {
            this.birthday = this.day + ':' + this.month + ':' + this.year
            this.isValid = stringValidator.testDate(this.birthday)
            this.$emit(this.event,{
                value: this.birthday,
                isValid: this.isValid
            })
        } 
    },

    data () {
        return {
            day: 0,
            month: 0,
            year: 0,
            birthday: '0:0:0',
            isValid: false,

            dayoptions () {
                var res = [{text: 'Jour', value: 0}];
                for(var i = 1; i <= 31; i++){
                    res.push({text: '' + i, value: i})
                }
                return res
            },
            monthoptions : [
                {text: 'Mois', value: 0},
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
                var res = [{text: 'Année', value: 0}]
                for(var i = 1; i <= 100; i++){
                    res.push({text: 1920 + i, value : 1920 + i})
                }
                return res
            }
        }
    }
}
</script>

<style src="../styles/style_forms.css"></style>


