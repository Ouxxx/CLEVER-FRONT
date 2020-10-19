<template>
    <div class='media-root'>
        <div class= "media-functions">

            <div class="search-bar" align="center">
                <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement...">
            </div>
                
                <div class="media-sort">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <button class="btn">Vidéo</button>
                    <button class="btn">Ecrit</button>
                    <div class="dropdown">
                        <button class="btn" style="border-left:1px solid navy">
                            <div class="fa fa-caret-down"></div>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Date</a>
                            <a href="#">Matricule</a>
                        </div>
                    </div>
                </div>  

        </div>

        <div class="container">
            
            <div style="margin-left : 100px">
                <ch-video v-for="video in videos" :key="video.docId" 
                    :docid="video.docId" :title="video.title" :author="video.author" :views="video.views" 
                    :since="video.since" :description="video.description" />
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
        </div>
    </div>

</template>

<script>
import chVideo from '../../common/video/Video_v1'

export default {
    components: { chVideo },
    data () {
        return {
            sorting : 'date',
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

input[type=text] {
    text-align: center;
    height: 40px;
    width: 280px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width: 60%;
}

.btn {
  background-color: rgba(218,165, 32, 1);
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  outline: none;
}

.dropdown {
  position: absolute;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:rgba(218,165, 32, 1);
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
    background-color: white;
    color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.btn:hover {
  background-color: rgba(218,165, 32, 0.6);
}

/*.media-select {
    float:right;
    background-color: transparent;
    color : rgba(218,165, 32, 1);
    border-style: solid;
    border-color: rgba(218,165, 32, 1);
    font-size: 1.1em;
    padding: 5px;
}*/

</style>