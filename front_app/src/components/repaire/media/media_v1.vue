<template>
    <div class='media-root' style="background-color: blue"> 
            <chPicker />
        
        <div class= "media-functions">
            
            <div class="search-bar">
                <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement...">
            </div>
                
            <div class="media-sort">

                
                
                <div class="media-btn" @click="showVideos()">Vidéo</div>
                <div class="media-btn" @click="showEcrits()">Ecrit</div>
                <div class="media-btn" @click="showImages()">Image</div>
                <div class="dropdown">
                    <div class="media-btn media-btn-separator" >
                        <img class="triangle-dropdown" src="../../../assets/rendus/MonRepaire/a_ObjetsCommuns/triangle_dropdownmenu_v2.png"
                                alt="triangle">
                    </div>
                    <div class="dropdown-content">
                        <div class="#">Date</div>
                        <div class="#">Matricule</div>
                    </div>
                </div>
            </div>  
            
        </div>

        <div class="media-main" style="background-color : yellow">
            <ch-mosaique :contents="videos" contentType="video" />
        </div>

    </div>
</template>

<style scoped>

.media-root {
    margin: auto;
    padding-left: 50px;
}
@media screen and (max-width: 1200px){
    .media-root {
        width: 80%;
    }    
}
@media screen and (min-width: 1000px){
    .media-root {
        width: 1000px auto;
    }    
}
.triangle-dropdown {
    height: 40%;
    width: 40%;
}
.media-functions {
    display: flex;
    position: relative;
    align-items: baseline;
}
.search-bar {
    flex: 1 1 auto;
    text-align: right;
}
.search-bar input {
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 280px;
    border-radius: 5px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.search-bar input:focus {
    width: 60%;
}
.media-sort {
    display: inline-block;
    margin: 0 180px 20px 10px;
    padding-top: 20px;
    cursor: pointer;
}
.media-btn {
    display: inline-block;
    background-color: rgba(218,165, 32, 1);
    color: white;    
    padding: 12px;
    cursor: pointer;
}
.media-btn-separator {
    border-left:1px solid navy;
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

</style>

<script>
import chMosaique from '../../common/mosaique/Mosaique_v1'
import chPicker from '../../common/content_picker/Content_picker_v1'

export default {
    components: { chMosaique, chPicker },
    data () {
 
        return {
            images : [],
            ecrits : [],
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
            ]
        }
    },
    methods: {
        showEcrits : function () {

        },
        showImages : function () {
            
        },
        showVideos : function () {
            
        }

    }
}
</script>