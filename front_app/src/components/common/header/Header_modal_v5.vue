<template>
    <div class="header-modal-root">
        <div class="header-overlay" @click="$emit('header-modal-cancel')" />
        <div class="header-modal">
            <!-- <div class="header-modal-functions header-modal-marge"> -->
                <!-- <div class="header-modal-functions-position"> -->
                    
                    <div class="header-modal-button" @click="$emit('header-modal-submit')" >
                        <div class="header-modal-button-img header-modal-button-item">
                            <img :src="getLogoByName('Plus').path" alt="">
                        </div>
                        <div class="header-modal-button-item">
                            <p class="header-modal-p">Déconnexion</p>
                        </div>
                    </div>
                <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed : {
        ...mapGetters([ 'getLogoByName' ])
    }
}
</script>

<style scoped>
.header-modal-root {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 60px;
}

.header-overlay{
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.header-modal{
    position: fixed;
    right: 20px;
    background: rgb(71, 71, 71);
    width: 250px;
}

.header-modal-p{
    margin: 0;
    color: white;
}

.header-modal-button {
    display: flex;
    align-items: center;
    padding: 10px 0px;
    cursor: pointer;
}
.header-modal-button-img{
    padding: 0 15px;
}

.header-modal-marge {
    padding: 24px;
}
</style>