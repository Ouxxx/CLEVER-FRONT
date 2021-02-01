<template>
   <div class="profile-management-root">
        
        <div class="banner">
           <banner 
                :iseditabled='true'>
           </banner>
        </div>
        <div class="profile-main">
            <div class="introduce-profile content-block-property title">
                <h1>Présentation</h1>
                <div class="flexbox">
                    <autosizeTextarea name="y" v-model="form.body" placeholder="Ajouter une description, ici." />
                </div>
                <div class="link-sharing">
                    <linkSharing class="link-sharing-rectangle" />
                    <!-- <div v-if="linkFacebook">Lien Facebook : <input /> </div> -->
                </div>
                
            </div>
            <div class="post-profile content-block-property title" >
                <h1>Mes posts</h1>
                <div class="post-one" @mouseover="setCrossHover(true)" @mouseout="setCrossHover(false)">
                    
                    <div class="post-one-text">
                        <postOne :postText="textExample">
                    </postOne>
                    </div>
                    
                    <div class="dark-background-cross">
                        <div class="img-cross-post" v-show="showCross">
                            <div class="img-cross">
                                <img src="../../../assets/img/cross_menu.png" alt="cross-menu">
                            </div>
                        <!-- mettre @click suppression de post-->
                        </div>
                    </div>
                </div>
                <div class="new-post">
                    <autosizeTextarea class="autosize-textarea" name="y" v-model="form.body" placeholder="Ajouter un nouveau post, ici." />
                </div>
            </div>
            <div class="contents-profile content-block-property title">
                <h1>Mon contenu</h1>
                <div class="content-one"  @mouseover="setContentHover(true)" @mouseout="setContentHover(false)">
                    <div class="content-one-mosaique">
                        <ch-mosaique :contents="videos" contentType="video" />
                    </div>

                    <div class="dark-background-content">
                        <div class="img-content" v-show="showContentProperties">
                            <div class="content">
                                <img src="../../../assets/img/rouage_test2.png" alt="content-img">
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


            

        </div>

    </div> 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
import autosizeTextarea from '../../common/autosize_textarea/autosize_textarea_v1'
import postOne from '../../common/profile_gestion/postOne'
import linkSharing from '../../common/linkSharing/LinkSharing_v1'
import chMosaique from '../../common/mosaique/Mosaique_v1'


export default {
    components : {banner, autosizeTextarea, postOne, linkSharing, chMosaique},
    props: {
    
    },
    
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
            form: {
                body: ''
            },
            textExample : "Coucou les loulous Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, , proviennent de la section 1.10.32.",
            showCross : false,
            showContentProperties : false,
        }
    },
    methods :  {
        setCrossHover : function (b) {
            this.showCross=b
        },
        setContentHover : function (b) {
            this.showContentProperties=b
        }
    }
}
    

</script>

<style scoped>

.test {
    color: white;
}

/* Body */

/*commun*/

.content-block-property {
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-top: 20px;
    background-color: rgba(245, 245, 245, 0.993);
}

/*introduce*/

.title p{
    color:  rgb(168, 135, 75);
    font-size: 1.3em;
    font-weight: bold;
}

.description-post {
    display: block;
    color: white;
}

.flexbox {
    display: block;
    color: white;
    max-width: 2000px;
    margin-bottom: 20px;  
}

.logo-choice {
    color:white;
}

.type-of-choice {
    display: inline-block;
    width: 150px; 
}

.link-sharing {
    max-width: 300px;
}

.link-sharing-rectangle {
    max-width: 100%;
    background-color: rgba(27,37,48,.8);
    border: 0.5mm solid rgb(250, 250, 250);
    padding:5px;
}

.link-sharing-rectangle:hover {
    background-color: rgba(27,37,48,1);
}

/* post */



.text-area-post {
    width: 400px;
    height: 200px;
    resize: none;
}

.new-post {
    display: block;
    color: white;
    padding-right: 10px;
    text-align: top;
}

.post-one {
    display: flex;
    background-color: rgba(27,37,48,.8);
    max-width: 460px;
}

.post-one-text {
    position: relative;
}

.dark-background-cross {
    position: absolute;
    height: 20%;
    width: 50%;
    cursor: pointer;
}

.img-cross-post {
    display:flex;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.4)
}

.img-cross{
    margin:auto;
}

/* Content */

.content-one {
    display: flex;
    max-width: 460px;
}

.content-one-mosaique{
    position: relative;
}

.dark-background-content {
    position: absolute;
    height: 20%;
    width: 50%;
    cursor: pointer;
}

.img-content {
    display:flex;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.4)
}

.content{
    margin:auto;
}


</style>