<template>
    <div class="survey-root">
        <div class="question">
            <input type="text" placeholder="De quelle question s'agit-il ?">
        </div>
        <div class="more-choices" v-for="choice in choices" :key="choice">
            <div class="choices" >{{ choice }}</div>
            <button @click="deleteChoice(choice)">Supprimer</button>
        </div>
        <div class="choices">
            <input type="text" placeholder="Choix de réponse" v-model="textChoice">
            <button @click="addChoice(textChoice)">+ Ajouter</button>
        </div>
        <div>Sélectionner la catégorie de Héros qui pourront effectuer le sondage</div>
        <div class="radio-survey">
            <input type="radio" id="everybody" value="everybody" checked>
            <label for="everybody">Tout le monde</label>
        </div>
        <div class="radio-survey">
            <input type="radio" id="supportsonly" value="supportsonly">
            <label for="supportsonly">Ceux qui me soutiennent</label>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            choices : [],
            textChoice:'',
        }
    },
    methods : {
        deleteChoice : function (choice) {
            this.choices = this.choices.filter(item => item !== choice)
        },
        addChoice : function (choice) {
            this.choices.push(choice)
        }
    }
}

</script>

<style scoped>


</style>