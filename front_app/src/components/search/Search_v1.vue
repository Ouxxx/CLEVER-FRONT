<template>
    <div class="search-root">
        <ch-sidebar />
        <ch-header />

        <div class="search-content">
            <div class="search-functions">
                <ch-picker @picker-selected="changeDocuments" @sorter="changeSort" :selected="this.docType" />
            </div>

            <div v-show="docType == 'video'" class="search-main" >
                <div v-if="getVideos.length != 0">
                    <ch-mosaique :contents="getVideos" contentType="video" @click-on-star="switchFavorite" />
                </div>
                <div v-else class="search-empty-result" >
                    <p>Aucune vidéo trouvée pour votre recherche</p>
                </div>
            </div>
            <div v-show="docType == 'ecrit'" class="search-main" >
                <div v-if="getEcrits.length != 0">
                    <ch-mosaique :contents="getEcrits" contentType="ecrit" @click-on-star="switchFavorite" />
                </div>
                <div v-else class="search-empty-result" >
                    <p>Aucun ecrit trouvé pour votre recherche</p>
                </div>
            </div>
            <div v-show="docType == 'image'" class="search-main" >
                <div v-if="images.length != 0">
                    <div>Not implemented yet</div>
                </div>
                <div v-else class="search-empty-result" >
                    <p>Aucune image trouvée pour votre recherche</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import chHeader from '../common/header/Header_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'
import chMosaique from '../common/mosaique/Mosaique_v1'
import chPicker from '../common/content_picker/Picker_v2'

export default {
    components: { chSidebar, chHeader, chMosaique, chPicker },
    data () {
        return {
            docType: 'video',
            images : []
        }
    },
    methods: {
        ...mapMutations([ 'changeVideoFavorite' ]),
        switchFavorite(docId) {
            this.changeVideoFavorite(docId)
        },
        move (moveTo) {
            if(moveTo != '' && moveTo != this.$route.fullPath){
                this.$router.push(moveTo)
            }
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
.search-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.search-content {
    padding-top: 60px;
    padding-left: 50px;
}

.search-functions {
    padding-top: 30px;
    padding-bottom: 50px;
}
</style>