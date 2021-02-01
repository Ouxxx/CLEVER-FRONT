<template>
    <div class="profile-management-root">
        
        <div class="banner">
           <banner 
                :iseditabled='true'>
           </banner>
        </div>

        <div class="profile-main">

            <div class="info-post-block">
                <div class="info-area">
                    <h1>Informations Générales</h1>

                    <!-- INSERER ICI : composant logos
                         COF : Dans le rendu/aperçu, le texte doit être encadré par des guillemets 
                         Div IMG guillemets :<img src="../../../assets/img/guillemets-test.png" alt="quote-mark"> 
                    -->

                    <autosize-textarea-v-1 name="y" v-model="form.body" placeholder="Ajouter une description, ici."></autosize-textarea-v-1>
                </div>

                <div class="post-area">
                    <h1>Posts</h1>
                    <post-one></post-one>
                </div>
            </div>

            <div class="content">
                <h1>Mon contenu</h1>
                <ch-mosaique :contents="videos" contentType="video"></ch-mosaique>
            </div>
        </div>

    </div>
</template>
<script>

import banner from '../../common/banner/Banner_v1'
import autosizeTextarea from '../../common/autosize_textarea/autosize_textarea_v1'
import postOne from '../../common/profile_gestion/postOne'
import chMosaique from '../../common/mosaique/Mosaique_v1'

export default {
    components : {banner, autosizeTextarea, postOne, chMosaique},
    data () {
        return {
            videos : [
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
                },{
                    docId : "666",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.666",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "777",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.777",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                },{
                    docId : "888",
                    title : "Titre de ma vidéo",
                    author : "100.AAA.888",
                    views : "4142",
                    since : "il y a 2 mois",
                    description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace"
                }
            ],
        }
    }
}
</script>
<style scoped>

</style>