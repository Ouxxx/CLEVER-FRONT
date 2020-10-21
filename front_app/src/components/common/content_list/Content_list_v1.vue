<template>
    <div class="content-list-root">
        <div :style="styleObject">
            <ch-video v-for="video in videos" :key="video.docId" 
                    :docid="video.docId" :title="video.title" :author="video.author" :width="videoWidth" />
        </div>

        <div class="tests">
             largeur div : {{ listWidth }}
            <br>
        </div>
    </div>
</template>


<script>
import chVideo from '../../common/video/Video_v1'

var list
export default {
    components : { chVideo },
   
    data () {
        return {
            listWidth : 0, // valeur qui changera immediatement lors du hook mounted
            contentWidth : 0,
            contentHeight : 0,
            minWidth : 320 ,
            nbElems : 0,
            videoWidth : 0,

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
                }
            ],
        }
    },
    methods : {
        onResize : function () {
            this.listWidth = list.offsetWidth - 100
        }
    },
    computed : {
        styleObject : function () {
            return {
                'background-color' : 'red',
                width : this.listWidth + 'px',
            }
        },


    },
    mounted () {
        list = document.getElementsByClassName('content-list-root')[0]
        this.listWidth = list.offsetWidth - 100
        this.nbElems = Math.floor(this.listWidth / this.minWidth)
        this.videoWidth = this.listWidth / this.nbElems
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onResize)
    }

}
</script>


<style scoped>
.content-list-root {
    background-color: blueviolet;
}
.tests {
    margin: 30px;
    color : white
}
</style>