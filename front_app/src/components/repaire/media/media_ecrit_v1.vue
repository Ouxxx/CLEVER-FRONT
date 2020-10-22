<template>
    <div class='media-root'> 
        <div class="container">          
            <div style="margin-left : 100px">
                <ch-ecrit v-for="ecrit in ecrits" :key="ecrit.docId" 
                        :docid="ecrit.docId" :title="ecrit.title" :author="ecrit.author" :views="ecrit.views" 
                        :since="ecrit.since" :description="ecrit.description" />
            </div>
        </div>
    </div>

            <!-- <img class="image" :src='image' alt="">
                <div class="overlay">
                <div class="text" >
                    <p>{{ this.description }}</p>
                </div>
            <select class="media-select" v-model="sorting">
                        <option value="date">Date</option>
                        <option value="matricule">Matricule</option>
            </select>
            </div>-->

</template>

<script>
import chEcrit from '../../common/ecrit/Ecrit_v1'

export default {
    components: { chEcrit },

    data () {
        return {
            ecrits : [
                {
                    docId : "111",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.111",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "222",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.222",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "333",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.333",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "444",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.444",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "555",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.555",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                }
            ]
        }
    }
}

</script>

<style scoped>

@media screen and (max-width: 1200px){
    .media-root {
        margin: 100px auto;
        width: 80%;
    }    
}

@media screen and (min-width: 1000px){
    .media-root {
        margin: 100px auto;
        width: 1000px auto;
    }    
}

</style>