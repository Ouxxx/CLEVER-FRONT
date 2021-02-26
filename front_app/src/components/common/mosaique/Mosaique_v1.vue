<template>
<div class="mosaique-list-root">
    <div class="mosaique-list-main" :style="styleListContent">
        <div v-if="contentType == 'video'">
            <ch-video v-for="video in contents" :key="video.docId" 
                :docid="video.docId" :title="video.title" :author="video.author" :favorite="video.isFavorite" :width="contentWidth" 
                @click-on-star="switchFavorite(video.docId)" />
        </div>
        <div v-if="contentType == 'ecrit'">
            <ch-ecrit v-for="ecrit in contents" :key="ecrit.docId" 
                        :docid="ecrit.docId" :title="ecrit.title" :author="ecrit.author" :description="ecrit.description" 
                        :width="contentWidth"/>
        </div>        
    </div>
</div>
    
</template>

<script>
import chVideo from '../../common/video/Video_v1'
import chEcrit from '../../common/ecrit/Ecrit_v1'

var list
export default {
    components : { chVideo, chEcrit },
    props : {
        contents : Array,
        contentType : String
    },
    data () {
        return {
            listWidth : 0, // valeur qui changera immediatement lors du hook mounted
            ecritMinWidth : 150,
            videoMinWidth : 250,
            minWidth: 0, // valeur qui changera immediatement lors du hook mounted
            nbElems : 0, // valeur qui changera immediatement lors du hook mounted
            contentWidth : 0, // valeur qui changera immediatement lors du hook mounted
            indiceRef: 0,

        }
    },
    methods : {
        switchFavorite : function (docId) {
            this.$emit('click-on-star', docId)
        },
        onResize : function () {
            this.listWidth = list.offsetWidth
            this.nbElems = Math.floor(this.listWidth / this.minWidth)
            this.contentWidth = this.listWidth / this.nbElems
        },
        
    },
    computed : {
        styleListContent : function () {
            return {
                'width' : this.listWidth + 'px',
            }
        }
    },
    mounted () {
        if(this.contentType == 'video') this.minWidth = this.videoMinWidth
        else if(this.contentType == 'ecrit') this.minWidth = this.ecritMinWidth
        else this.minWidth = this.videoMinWidth
        list = document.getElementsByClassName('mosaique-list-root')[0]
        this.listWidth = list.offsetWidth
        this.nbElems = Math.floor(this.listWidth / this.minWidth)
        this.contentWidth = this.listWidth / this.nbElems
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>


<style scoped>
.mosaique-list-root {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

</style>