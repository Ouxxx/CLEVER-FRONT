<template>
<div class="content-list-root">
    
    <div class="content-list-btn" :class="{'btn-hidden': isBtnHidden}" :style="styleListBtn" @click="prevPage">
        <div class="btn"><p>{{left}}</p></div>
    </div>
    <div class="content-list-main" :style="styleListContent">
        <div v-if="contentType == 'video'">
            <ch-video v-for="video in postedContent" :key="video.docId" 
                :docid="video.docId" :title="video.title" :author="video.author" :favorite="video.isFavorite" :width="contentWidth"
                @click-on-star="switchFavorite(video.docId)" />
        </div>
        <div v-if="contentType == 'ecrit'">
            <ch-ecrit v-for="ecrit in postedContent" :key="ecrit.docId" 
                        :docid="ecrit.docId" :title="ecrit.title" :author="ecrit.author" :description="ecrit.description" 
                        :width="contentWidth"/>
        </div>        
    </div>
    <div class="content-list-btn" :class="{'btn-hidden': isBtnHidden}" :style="styleListBtn" @click="nextPage">
        <div class="btn"><p>{{right}}</p></div>
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
            listBtnWidth : 50,
            listWidth : 0, // valeur qui changera immediatement lors du hook mounted
            ecritMinWidth : 150,
            videoMinWidth : 250,
            minWidth: 0, // valeur qui changera immediatement lors du hook mounted
            nbElems : 0, // valeur qui changera immediatement lors du hook mounted
            contentWidth : 0, // valeur qui changera immediatement lors du hook mounted
            postedContent : [], // valeur qui changera immediatement lors du hook mounted
            indiceRef: 0,
            left: '<',
            right: '>'
        }
    },
    methods : {
        switchFavorite : function (docId) {
            this.$emit('click-on-star', docId)
        },
        onResize : function () {
            this.listWidth = list.offsetWidth - (2 * this.listBtnWidth)
            this.nbElems = Math.floor(this.listWidth / this.minWidth)
            this.contentWidth = this.listWidth / this.nbElems
            var tmpTab = []
            if(this.nbElems < this.contents.length){
                for(let i = 0; i < this.nbElems; i++) {
                    tmpTab.push(this.contents[ (this.indiceRef + i) % this.contents.length ])
                }
            }else{
                for(let i = 0; i < this.contents.length; i++) {
                    tmpTab.push(this.contents[i])
                }
            }
            this.postedContent = tmpTab
        },
        prevPage : function () {
            if(this.nbElems < this.contents.length){
                var tmpTab = []
                this.indiceRef = this.indiceRef - this.nbElems
                if(this.indiceRef < 0){
                    this.indiceRef = this.indiceRef + this.contents.length 
                }
                for(let i = 0; i < this.nbElems; i++){
                    tmpTab.push(this.contents[ (this.indiceRef + i) % this.contents.length ])
                }
                this.postedContent = tmpTab
            }
        },
        nextPage : function () {
            if(this.nbElems < this.contents.length){
                var tmpTab = []
                this.indiceRef = this.indiceRef + this.nbElems
                for(let i = 0; i < this.nbElems; i++){
                    tmpTab.push(this.contents[ (this.indiceRef + i) % this.contents.length ])
                }
                this.postedContent = tmpTab
            }
        }
    },
    computed : {
        styleListContent : function () {
            return {
                'width' : this.listWidth + 'px',
            }
        },
        styleListBtn : function () {
            return {
                'width' : this.listBtnWidth + 'px',
                
            }
        },
        isBtnHidden : function () {
            return this.nbElems >= this.contents.length
        }
    },
    mounted () {
        if(this.contentType == 'video') this.minWidth = this.videoMinWidth
        else if(this.contentType == 'ecrit') this.minWidth = this.ecritMinWidth
        else this.minWidth = this.videoMinWidth
        list = document.getElementsByClassName('content-list-root')[0]
        this.listWidth = list.offsetWidth - (2 * this.listBtnWidth)
        this.nbElems = Math.floor(this.listWidth / this.minWidth)
        this.contentWidth = this.listWidth / this.nbElems
        if(this.nbElems < this.contents.length){
            for(let i = 0; i < this.nbElems; i++) {
                this.postedContent.push(this.contents[(this.indiceRef+i)%this.contents.length])
            }
        }else{
            for(let i = 0; i < this.contents.length; i++) {
                this.postedContent.push(this.contents[i])
            }
        }
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>


<style scoped>
.content-list-root {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.content-list-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 4px;
}
.btn {
    background-color:rgba(255, 255, 255, 0.4);
    cursor: pointer;
}
.btn-hidden {
    visibility: hidden;
}
.content-list-btn p {
    color: black;
    font-weight: bold;
}

</style>