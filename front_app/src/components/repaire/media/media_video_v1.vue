<template>
    <div class='media-root'> 

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

</style>