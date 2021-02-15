<template>
    <div class="shares-root">
        <modal v-if="isAddModalOpen" title="Ajouter un lien" submit-label="Valider" cancel-label="Annuler" :with-submit="isSubmitEnable"
                @modal-submit="addLink" @modal-cancel="closeModal" >
            <div>
                <div class="modal-section">
                    <div class="modal-section-form">Choisissez le type de lien à ajouter</div>
                    <div class="link-types modal-section-content">
                        <div class="link-type" v-for="share in getShares" :key="share.name"
                            @click="selectLogo(share)">
                            <img :src="share.path" :alt="share.name">
                        </div>
                        <div class="link-type" @click="selectLogo(getLogoByName('Autre'))">
                            <img src="@/assets/img/logos/plus.png" alt="lien">
                        </div>
                    </div>
                </div>
                <div class="modal-section with-min-hight" :class="{ 'link-hidden' : isObjEmpty(currentLogoSelected)}">
                    <div class="modal-section-form">Renseigner votre lien {{currentLogoSelected.name != 'Autre' ? currentLogoSelected.name : '' }} :</div>
                    <div class="modal-section-content">{{currentLogoSelected.url}} <input v-model="inputLink" type="text"></div>
                </div>
            </div>
        </modal>
        <div class="shares-item" v-for="share in sharedLinks" :key="share.url">
            <img :src="share.path" :alt="share.name">
        </div>
        <div class="shares-item" @click="openModal">
            <img :src="getLogoByName('Plus').path" :alt="getLogoByName('Plus').name">
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import modal from '../modal/Modal_v2'
export default {
    components : { modal },
    data() {
        return {
            isAddModalOpen : false,
            currentLogoSelected : {},
            inputLink : '',
            sharedLinks : []
        }
    },
    computed: {
        isSubmitEnable : function () {
            return this.inputLink != '' 
        }, 

        ...mapGetters([ 'getLogoByName' , 'getShares' ])
    },
    methods: {
        isObjEmpty: (obj) => Object.keys(obj).length === 0,
        addLink : function () {
            if(this.currentLogoSelected.name === 'Autre') { 
                // TODO : en terme de securite faut peut etre verifier quelque chose? Car on ne sait pas vers quoi pointe ce lien
                if(this.inputLink != '' && this.sharedLinks.filter(link => link.url === this.inputLink).length === 0) {
                    this.sharedLinks.push({
                        name : this.currentLogoSelected.name,
                        path : this.currentLogoSelected.path,
                        url : this.inputLink
                    }) 
                }
            } else if(this.currentLogoSelected.name != '') {
                if(this.inputLink != '' 
                        && this.sharedLinks.filter(link => link.url === (this.currentLogoSelected.url + this.inputLink)).length === 0){
                    this.sharedLinks.push({
                        name : this.currentLogoSelected.name,
                        path : this.currentLogoSelected.path,
                        url : this.currentLogoSelected.url + this.inputLink
                    })
                }
            }
            this.closeModal()
            console.log(this.sharedLinks)
        },
        closeModal : function () {
            this.isAddModalOpen = false
            this.currentLogoSelected = {}
            this.inputLink = ''
        },
        openModal : function () {
            this.isAddModalOpen = true
        },
        selectLogo : function (logo) {
            this.currentLogoSelected = logo
        }
    }
}
</script>

<style scoped>

.modal-section {
    padding-bottom: 16px;
}

.modal-section-form {
    padding-bottom: 16px;
}

.modal-section-content {
    padding-left: 16px;;
}

.with-min-hight {
    min-height: 80px;
}

.shares-root {
    display: inline-flex
}

.shares-item {
    flex-grow: 1;
    padding: 5px;
}

.link-type {
    display: inline-block;
    padding: 5px;
    opacity: 1;
}

.link-hidden {
    opacity: 0;
}

img {
    /* width : 40px; */
    background-color: blueviolet
}

</style>