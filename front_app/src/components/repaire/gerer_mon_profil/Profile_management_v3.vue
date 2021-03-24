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
                    <div class="info-area-top">
                        <h1>Informations Générales</h1>
                        <p class="to-change">Insérer le composant Logos et supprimer cette div</p>
                        <!-- INSERER ICI : composant logos
                        -->
                    </div>
                    <!-- COF : Dans le rendu/aperçu, le texte doit être encadré par des guillemets
                    Div IMG guillemets :<img src="../../../assets/img/guillemets-test.png" alt="quote-mark"> -->
                    <div class="content-editable" contenteditable="true" aria-placeholder="Ajouter une description ici.">
                    </div>
                </div>

                <div class="post-area">
                    <h1>Posts</h1>
                    <post-one :postText="textExample"></post-one>
                    <post-one :postText="textExample"></post-one>
                    <modal class="post-area-modal" v-if="isModalOpen" @close-modal="closeModal" 
                            title="Publier un nouveau post" submit-label="Valider" cancel-label="Annuler" :with-submit="true">
                        <!-- TODO INSERER ICI: composant Timer 
                        En attendant je laisse l'image du timer.
                        Image qui sera placée à gauche du composant-->
                        
                        <div class="new-post top">
                            <div class="top-timer">
                                <img src="../../../assets/img/icon_timer.png" alt="timer">
                            </div>
                            <div class="top-concerns">
                                <img src="../../../assets/img/user-test.png" alt="concerns-img">
                                <select name="concerns">
                                    <option value="who">Concernés</option>
                                    <option value="everybody">Tout le monde</option>
                                    <option value="supporters">Ceux qui me soutiennent</option>
                                </select>
                            </div>
                        </div>
                        <div class="items-added" v-for="link in links" :key="link">
                            <div class="links">{{ link }}</div>
                            <button class="btn link" @click="deleteLink(link)">Supprimer</button>
                        </div>
                        <div>
                            <editor textcolor="black" />
                        </div>
                    </modal>
                    <div class="post-area-new" @click="openModal">
                        <img class="post-area-new-img" src="" @click="openModal" alt="post-img">
                        <p>Publier un nouveau post</p>
                    </div>

                </div>
            </div>
            <div class="info-post-block">
                <div class="info-area"></div>
                <div class="post-area"></div>
            </div>

            <div class="buttons-management">
                <div class="style-buttons-management cancel" @click="getBackToProfile()">ANNULATION</div>
                <!-- INSERER DANS DIV SAVE CI-DESSOUS : @click= 1/ Possibilité de sauvegarder via BACK 2/ Renvoi sur 
                la page profil -->
                <div class="style-buttons-management save">SAUVEGARDER</div>
            </div>
            
            <div class="content">
                <h1>Mon contenu</h1>
                <ch-picker></ch-picker>
                <ch-mosaique :contents="getVideos" contentType="video"></ch-mosaique>
            </div>
        </div>

    </div>
</template>
<script>
import {mapGetters} from 'vuex'

import banner from '../../common/banner/Banner_v1'
import postOne from '../../common/profile_gestion/postOne'
import modal from '../../common/modal/Modal_v2'
import chPicker from '../../common/content_picker/Picker_v2'
import chMosaique from '../../common/mosaique/Mosaique_v1'
import editor from '../../common/editor/Editor_v1'

export default {
    components : {banner, postOne, modal, chPicker,chMosaique, editor},
    data () {
        return {
            isModalOpen : false,
            isLinkOpen : false,
            iconOpened : "",
            textExample : "Coucou les loulous Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, , proviennent de la section 1.10.32.",
            links : [],
            linkText : '',
            isOpenCreateLinkForm : false,
            linkValue : ''
        }
    },
    methods : {
        openModal : function () {
            this.isModalOpen = true
        },
        closeModal : function () {
            this.isModalOpen = false
        },
        getBackToProfile : function () {
            this.$router.push('/repaire/profil')
        },
        openIcon : function (x) {
            this.iconOpened = x
        },
        deleteLink : function (link) {
            this.links = this.links.filter(item => item !== link)
        },
        addLink : function (link) {
            this.links.push(link)
        },
        openAddLinkForm : function () {
            this.isOpenCreateLinkForm = ! this.isOpenCreateLinkForm
        },
        addLinkv2 : function () {
            const myeditor =  
            console.log('this.linkValue ' + this.linkValue)
            myeditor.document.execCommand('createlink', false, '<a href="' + this.linkValue + '" >' + this.linkValue + '</a>');
        }
    },
    computed : {
        ...mapGetters([ 'getVideos' ])
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

/* Posts */

.post-area {
    display: block;
    background-color: rgb(25, 34, 48);
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

/* Boutons */

.buttons-management {
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: flex-end;
    right: 30px;
    bottom: 30px;
    z-index: 522;
}

.style-buttons-management {
    color: white;
    background-color: blue;
    border-radius: 5px;
    line-height: 40px; /*A VOIR SI CEST LA MEILLEURE OPTION, c'est pour centrer verticalement*/
    text-align: center;
    width: 180px;
    height: 40px;
    cursor: pointer;
}

.style-buttons-management:hover {
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

.new-post {
    padding: 10px;
}
    /* -TOP */

.top {
    display: flex;
    justify-content: space-between;
}

.top-concerns {
    display: flex;
    height: 80%;
}

.top-concerns select {
    margin-left: 5px;
    cursor: pointer;
}

    /* -CONTENTEDITABLE */ 

.content-editable {
    min-height: 150px;
    padding: 10px;
    outline: none;
    color: white;
}

[contenteditable=true]:empty:before {
  content: attr(aria-placeholder);
  cursor: text;
  color: white;
 }

.icon-bar {
    display: inline-block;
}

.icon-bar img{
    cursor: pointer;
    margin: 8px;
}


.btn {
    cursor: pointer;
    margin: 5px;
}

.items-added {
    display: flex;
}

.link-opened button {
    cursor: pointer;
}

.link-opened input {
    margin-right: 5px;
    outline: none;
}





.post-area-modal p {
    font-weight: bold;
    font-size: 1.3em;
}

.border-top {
    border-top: 1px solid rgb(0, 0 ,0);
    width: 400px;
}

.top-new-post {
    display: inline;
    flex-direction: row;
}

.test {
    display: inline;
}

.timer-post {
    display: inline;
}

.bot {
    background-color: rgb(143, 3, 143);
}



</style>