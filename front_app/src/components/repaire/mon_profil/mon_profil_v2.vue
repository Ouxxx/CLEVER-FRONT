<template>

   <div class="profile-root">

       <div class="profile-banner">
           <banner />
       </div>

       <div class="profile-main">
            <div class="introduce-profile content-block-property">
                    <div class="flexbox">
                        <p class="input-text">Coucou les loulous !
                            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
                        </p>
                        <div class="logo-bar">
                            <div v-if="this.input|=''">
                                <img class="instagram logo" src="@/assets/img/instagram.png" alt="instagram">
                            </div>
                            <div v-if="this.input|=''">
                                <img class="linkedin logo" src="@/assets/img/linkedin.png" alt="linkedin">
                            </div>
                            <div v-if="this.input|=''">
                                <img class="twitter logo" src="@/assets/img/twitter.png" alt="twitter">
                            </div>
                            
                        </div>
                    </div>
            </div>

            <div class="post-profile content-block-property">
                <postOne :postText="textExample">
                </postOne>
                <postOne :postText="textExample">
                </postOne>
                <postOne :postText="textExample2">
                </postOne>
            </div>

            <div class="contents-profile content-block-property">
                <div class="contents">
                    <div class="search-bar">
                        <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement...">
                    </div>
                    <div class="sorting-bar">
                        <button class="btn" @click="gotovideo()">Vidéo</button>
                        <button class="btn" @click="gotoecrit()">Ecrit</button>
                        <button class="btn" @click="gotoimage()">Image</button>
                        <div class="dropdown">
                            <button class="btn">
                            <img class="triangle-dropdown" src="../../../assets/rendus/MonRepaire/a_ObjetsCommuns/triangle_dropdownmenu_v2.png" alt="triangle">
                            </button>
                            <div class="dropdown-content">
                                <div class="#">Date</div>
                                <div class="#">Matricule</div>
                            </div>
                        </div>
                    </div>
                    <ch-mosaique :contents="videos" contentType="video" />
                    <p class="test"></p>
                </div>
            </div>

        </div>
   </div>
 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
import postOne from '../../common/profile_gestion/postOne'
import chMosaique from '../../common/mosaique/Mosaique_v1'
export default {
    components : {banner, postOne, chMosaique},
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
        /*gotoecrit() {
            this.$router.push('/repaire/media/ecrit')
        },
        gotoimage() {
            this.$router.push('/repaire/media/image')
        },
        gotovideo() {
            this.$router.push('/repaire/media/video')
        }*/
    }
}
</script>

<style scoped>


.profile-root {
    position: relative;
    background-color: rgb(24, 7, 20);
    min-height: 100vh;
}


/* Body */

/*commun*/

.content-block-property {
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-top: 20px;
    border: 0.5mm solid rgba(27,37,48,.8);
    background-color: rgba(27,37,48,.8);
}

/*introduce*/

.flexbox {
    display:flex;
}

.input-text {
    width: 90%;
    color: white;
}

.logo-bar {
    margin-right:20px;
    margin-left:20px;
}

.logo {
    display: block;
    margin-top:5px;
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    border-radius:50%;
    width:30px;
    height:30px;
    cursor: pointer;
}

/*post*/

/*contents*/

.search-bar {
    display: inline;
    flex: 1 1 auto;
    text-align: right;
}

input[type=text] {
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 280px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    cursor: pointer;
    width: 60%;
}

.sorting-bar {
    display: inline;
    cursor: pointer;
    margin: 0 180px 20px 10px;
    padding-top: 20px;
    
}

.triangle-dropdown {
    height: 40%;
    width: 40%;
}

.btn {
    cursor: pointer;
    background-color: rgba(218,165, 32, 1);
    color: white;
    padding: 12px;
    font-size: 15px;
    border: none;
    outline: none;
    border-left:1px solid navy
}

.dropdown {
    display: inline-block;
    position: absolute;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color:rgba(218,165, 32, 1);
    min-width: 160px;
    z-index: 1;
}

.dropdown-content div {
    display: block;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
  
}

.dropdown-content div:hover {
    background-color: rgba(105, 68, 12, 0.6);
    color: white;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.btn:hover {
    background-color: rgba(218,165, 32, 0.6);
}

.test {
    margin: 100px;
}
</style>