<template>
    <div class='media-root'> 

        <div class="container" style="background-color : yellow">
            
            <div style="margin-left : 100px">
                <ch-mosaique :contents="videos" contentType="video" />
            </div>

        </div>
    </div>

</template>

<script>
import chMosaique from '../../common/mosaique/Mosaique_v1'

export default {
    components: { chMosaique },
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
            ]
        }
    }
}
</script>

<style scoped>



</style>