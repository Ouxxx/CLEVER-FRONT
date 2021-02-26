<template>
    <div class="home-root">
        <sidebar-ch></sidebar-ch>
        <header-ch></header-ch>

        <div class="home-main">
            <div style="margin-left : 100px">

                <ch-list :contents="getVideos" contentType="video" @click-on-star="switchFavorite" />
                <ch-list :contents="getEcrits" contentType="ecrit"  />

            </div>

            <div style="margin: 150px; background: red">
                <shares :shared-links="shares" :is-editable="true" @add-share="addShare" @delete-share="deleteShare" />
            </div>
            
            <element-list category="En cours de visionnage"></element-list>
            <element-list category="Catégorie 1"></element-list>
            <element-list category="Catégorie 2"></element-list>
            
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { mapMutations } from 'vuex'

import sidebarCh from './common/sidebar/Sidebar_v2'
import elementList from './blocs/list_elements_v1'
import headerCh from './common/header/Header_v5'
import shares from './common/shares/Shares_v1'

import chList from './common/content_list/Content_list_v1'

export default {
    components: { headerCh, sidebarCh, elementList, chList, shares },
    data () {
        return {
            shares : [],
        }
    },
    methods : {
        ...mapMutations([ 'changeVideoFavorite' ]),
        addShare(share) {
            this.shares.push(share)
        },
        deleteShare(share) {
            this.shares = this.shares.filter(item => item.url !== share.url)
        },
        switchFavorite(docId) {
            this.changeVideoFavorite(docId)
        },
        goViewingVideoPage() {
            this.$router.push('/video')
        }
    },
    computed : {
        ...mapGetters([ 'getVideos' , 'getEcrits' ])
    }
    
}
</script>

<style scoped>

* {
  font-family: sans-serif, Verdana, Geneva, Tahoma, sans-serif;
}



.home-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}


.home-main {
    padding-top: 50px;
    min-height: 200vh;
}

</style>