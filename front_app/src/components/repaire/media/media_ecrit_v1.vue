<template>
    <div class='media-root'> 
        
        <div class= "media-functions">

            <div class="search-bar">
                <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement...">
            </div>
                
            <div class="media-sort">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <button class="btn" @click="gotovideo()">Vidéo</button>
                <button class="btn" @click="gotoecrit()">Ecrit</button>
                <button class="btn" @click="gotoimage()">Image</button>
                <div class="dropdown">
                    <button class="btn" style="border-left:1px solid navy">
                        <div class="fa fa-caret-down"></div>
                    </button>
                    <div class="dropdown-content">
                        <div class="#">Date</div>
                        <div class="#">Matricule</div>
                    </div>
                </div>
            </div>  

        </div>

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
    methods: {
        gotovideo() {
            this.$router.push('/repaire/media')
        },
        gotoimage() {
            this.$router.push('/repaire/media/image')
        },
        gotoecrit() {
            this.$router.push('/repaire/media/ecrit')
        }
    },
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

.media-functions {
    position: relative;
    display: flex;
    align-items: center;
}

.search-bar {
    flex: 1 1 auto;
    text-align: right;
}

.media-sort {
    cursor: pointer;
    margin: 0 180px 20px 0px;
    padding-top: 20px;
}

.btn {
    cursor: pointer;
    background-color: rgba(218,165, 32, 1);
    color: white;
    padding: 12px;
    font-size: 15px;
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

.dropdown-content div {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
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