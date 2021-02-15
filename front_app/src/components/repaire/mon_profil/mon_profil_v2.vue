<template>

   <div class="profile-root">

        <div class="banner">
           <banner
                :iseditabled='true'>
           </banner>
        </div>

        <div class="profile-main">

            <div class="info-post-block">
                <div class="info-area">
                    <div class="info-area-top">
                        <h1>Informations Générales</h1>
                        <p class="to-change">Insérer le composant Logos et supprimer cette div</p>
                        <!-- INSERER ICI : composant logos
                        -->
                    </div>
                    <!-- COF : Dans le rendu/aperçu, le texte doit être encadré par des guillemets
                    Div IMG guillemets :<img src="../../../assets/img/guillemets-test.png" alt="quote-mark"> -->
                    <div class="save-text">Voici mon super texte de présentation. Vraiment trop beau. Merci
                    </div>
                    
                </div>

                <div class="post-area">
                    <h1>Posts</h1>
                    <post-one :postText="textExample"></post-one>
                    <post-one :postText="textExample"></post-one>
                </div>
            </div>
            <div class="info-post-block">
                <div class="info-area"></div>
                <div class="post-area"></div>
            </div>

            <div class="button-profile">
                <div class="style-button-profile manage" @click="goToManagementProfile()">GERER MON PROFIL</div>
            </div>
            
            <div class="content">
                <h1>Mon contenu</h1>
                <ch-picker></ch-picker>
                <ch-mosaique :contents="videos" contentType="video"></ch-mosaique>
            </div>

    </div>


   </div>
 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
import postOne from '../../common/profile_gestion/postOne'
import chPicker from '../../common/content_picker/Picker_v2'
import chMosaique from '../../common/mosaique/Mosaique_v1'

export default {
    components : {banner, postOne, chPicker,chMosaique},
    data () {
        return  {
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
            textExample : "Coucou les loulous Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, , proviennent de la section 1.10.32.",     
            textExample2: "Coucou les loulous !"
        }
    },
    methods: {
        goToManagementProfile: function () {
            this.$router.push('/repaire/gerermonprofil')
        }
    }
}
</script>

<style scoped>


.profile-root {
    position: relative;
    background-color: rgb(24, 7, 20);
    min-height: 100vh;
}

/* Informations générales */

@media (max-width: 1000px) {
    .info-post-block {
        flex-direction: column;
    }
}

.info-post-block {
    display: flex;
}

.info-area {
    background-color: rgb(21, 29, 41);
    flex-grow: 6;
    padding: 0 40px;
}

.info-area-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.save-text {
    color: white;
}

/* Posts */

.post-area {
    display: block;
    background-color: rgb(25, 34, 48);
    padding: 0 40px;
}

/* Boutons */

.button-profile {
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: flex-end;
    right: 30px;
    bottom: 30px;
    z-index: 522;
}

.style-button-profile {
    color: white;
    background-color: blue;
    border-radius: 5px;
    line-height: 40px; /*A VOIR SI CEST LA MEILLEURE OPTION, c'est pour centrer verticalement*/
    text-align: center;
    width: 180px;
    height: 40px;
    cursor: pointer;
}

.style-button-profile:hover {
    background-color: rgb(124, 124, 182);
}

.cancel {
    margin-right: 5px;
}

/* Contenu */

.content {
    display: inline-block;
    background-color: rgb(12, 20, 32);
    width: 100%;
    height: 100%;
}

/* Modal */

.post-area-modal {
    z-index: 520;
}

.post-area-modal p {
    font-weight: bold;
    font-size: 1.3em;
}

.border-top {
    border-top: 1px solid rgb(0, 0 ,0);
    width: 400px;
}

.form-new-post {
    padding: 5px;
    display: flex;
    flex-direction: row;
}

.timer-post {
    
}

.img-sender {
    
}

.choice-sender {
    
}

.link-bar-img {
    cursor: pointer;
}

</style>