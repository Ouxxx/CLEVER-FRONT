<template>
    <div class="form-input-grp">
         <label class="form-label-gender" for="genderPicked">
            {{ infoLabel }}</label>
        <div class="form-gender">
            <select class="form-gender-select" v-model="sex" @change="makeGender">
                <option v-for="genderoption in genderoptions" :key="genderoption.value" 
                        v-bind:value="genderoption.value" >
                    {{ genderoption.text }}
                </option>
            </select>
        </div>
    </div>
</template>

<script> 
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
        makeGender () {
            this.genderPicked = this.sex
        } 
    },
    data () {
        return {
            sex: 0,
            genderPicked: '0',
            genderoptions : [
                {text: 'Femme', value: 0},
                {text: 'Homme', value: 1},
                {text: 'Autre', value: 2},
        ]
        }
    }
}
</script>

<style src="../styles/style_forms.css"></style>