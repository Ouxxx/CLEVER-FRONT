<template>
   <div class="search-videos-root">
            <div class="search-videos-function">
                <ch-picker @picker-selected="changeDocuments" @sorter="changeSort" :selected="this.docType" />
            </div>

            <div class="search-videos-main" >
                <ch-mosaique :contents="getVideos" contentType="video" @click-on-star="switchFavorite" />
            </div>
    </div>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

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
            ecrits : []
        }
    },
    methods: {
        ...mapMutations([ 'changeVideoFavorite' ]),
        switchFavorite(docId) {
            this.changeVideoFavorite(docId)
        },
        changeDocuments : function (docType) {
            this.docType = docType
        },
        changeSort : function (sortType) {
            this.sortType = sortType
        }
    },
    computed : {
        ...mapGetters([ 'getVideos' , 'getEcrits' ])
    }
}
</script>

<style scoped>

.search-videos-function{
    padding-top: 30px;
    padding-bottom: 50px;
}

</style>
