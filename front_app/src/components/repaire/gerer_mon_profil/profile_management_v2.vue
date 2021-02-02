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
                    <div class="to-change">Insérer le composant Logos et supprimer cette div</div>
                    <!-- INSERER ICI : composant logos
                         COF : Dans le rendu/aperçu, le texte doit être encadré par des guillemets
                         Div IMG guillemets :<img src="../../../assets/img/guillemets-test.png" alt="quote-mark">
                    -->

                    <autosize-textarea name="y" placeholder="Ajouter une description, ici.">
                    </autosize-textarea>
                    <p>Sauvegarder</p>
                </div>

                <div class="post-area">
                    <h1>Posts</h1>
                    <post-one :postText="textExample"></post-one>
                    
                    <modal class="post-area-modal" v-if="isModalOpen" @close-modal="closeModal">
                        <p>Publier un nouveau post</p>
                        <div class="border-top"></div>
                        <div class="form-new-post">
                            <img class="img-sender" src="../../../assets/img/user-test.png" alt="senders-img">
                            <select class="choice-sender" name="senders">
                                <option value="">Concernés</option>
                                <option value="everybody">Tout le monde</option>
                                <option value="supporters">Ceux qui me soutiennent</option>
                            </select>
                        </div>
                        <autosize-textarea name="y" placeholder="Ecrivez votre post, ici.">
                        </autosize-textarea>
                    </modal>
                    <div class="post-area-new" @click="openModal">
                        <img class="post-area-new-img" src="../../../assets/img/post-img-test-whiteback.png" @click="openModal" alt="post-img">
                        <p>Publier un nouveau post</p>
                    </div>

                </div>
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
import autosizeTextarea from '../../common/autosize_textarea/autosize_textarea_v1'
import postOne from '../../common/profile_gestion/postOne'
import modal from '../../common/modal/Modal_v1'
import chPicker from '../../common/content_picker/Picker_v2'
import chMosaique from '../../common/mosaique/Mosaique_v1'

export default {
    components : {banner, autosizeTextarea, postOne, modal, chPicker,chMosaique},
    data () {
        return {
            isModalOpen : false,
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
        }
    },
    methods : {
        openModal : function () {
            this.isModalOpen = true
        },
        closeModal : function () {
            this.isModalOpen = false
        }
    }
}
</script>
<style scoped>
.profil-management-root {
    height: 100%;
}

/* Informations générales */

.info-post-block {
    display: flex;
    flex-direction: row;
}

.info-area {
    background-color: rgb(21, 29, 41);
    width: 3000px;
    padding: 0 40px;
}

.info-area p {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 0.8);
    border: 0.5mm solid rgba(27,37,48,.8);
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
    width: 100px;
}

.to-change {
    margin-bottom: 20px;
    text-align: right;
    cursor: pointer;
    color: rgb(255, 255, 255);
}

/* Posts */

.post-area {
    background-color: rgb(25, 34, 48);
    width: 1000px;
    padding: 0 40px;
}

.post-area-new {
    display: block;
    background-color:rgba(255, 255, 255, 0.9);
    border: 0.5mm solid rgba(27,37,48,.8);
    margin: 5px 5px 15px 5px;
    border-radius: 5px;
    height: 80px;
    max-width:2000px;
    cursor: pointer;
    text-align: center;
}

.post-area-new-img {
    display: inline-block;
}

.post-area-new p{
    display: inline-block;
    color: rgba(0, 0, 0, 0.8);
    margin: 30px;
    font-weight: bold;
}

.post-area-new:hover, .post-area-new:focus {
    /* border: 0.6mm solid rgba(255, 187, 0, 0.8); */
    background-color:rgb(255, 255, 255);
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
    
}

.post-area-modal p {
    font-weight: bold;
    font-size: 1.3em;
}

.border-top {
    border-top: 1px solid rgb(0, 0 ,0);
    width: 400px;
}

.img-sender {
    display: inline-block;
    margin: 15px 10px 0px 0px;
}

.form-new-post {
    float: right;
    
    padding: 5px;
}



</style>