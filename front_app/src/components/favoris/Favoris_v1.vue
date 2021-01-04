<template>
   <div class="favoris-root">
        <ch-sidebar></ch-sidebar>
        <ch-header />

        <div class='favoris-content'> 
            <div class="favoris-function">
                <ch-picker @picker-selected="changeDocuments" @sorter="changeSort" :selected="this.docType" />
            </div>

            <div class="favoris-main" >
                <ch-mosaique :contents="videos" contentType="video" />
            </div>
        </div>
    </div>

</template>

<script>
import chHeader from '../common/header/Header_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'
import chMosaique from '../common/mosaique/Mosaique_v1'
import chPicker from '../common/content_picker/Picker_v2'

export default {
    components: { chHeader, chSidebar, chMosaique, chPicker },
    data () {
 
        return {
            docType : 'video',
            sortType : '',
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
        changeDocuments : function (docType) {
            this.docType = docType
        },
        changeSort : function (sortType) {
            this.sortType = sortType
        }
    }
}
</script>

<style scoped>
.favoris-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.favoris-content {
    padding-top: 60px;
    padding-left: 50px;
}

.favoris-function{
    padding-top: 30px;
    padding-bottom: 50px;
}

</style>
