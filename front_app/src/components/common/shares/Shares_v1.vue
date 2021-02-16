<template>
    <div class="shares-root">
        <modal v-if="isAddModalOpen" title="Ajouter un lien" submit-label="Valider" cancel-label="Annuler" :with-submit="isSubmitEnable"
                @modal-submit="addLink" @modal-cancel="closeAddModal" >
            <div class="add-modal-root">
                <div class="modal-section">
                    <div class="modal-section-form">Choisissez le type de lien à ajouter</div>
                    <div class="modal-section-content">
                        <div class="link-type img-container" v-for="share in getShares" :key="share.name"
                            @click="selectLogo(share)">
                            <img :src="share.path" :alt="share.name">
                        </div>
                        <div class="link-type img-container" @click="selectLogo(getLogoByName('Autre'))">
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
        <modal v-if="isDeleteModalOpen" title="Supprimer un lien" submit-label="Confirmer" cancel-label="Annuler" :with-submit="true"
                @modal-submit="deleteShare" @modal-cancel="closeDeleteModal" >
                <div class="delete-modale-root">
                    <div class="modal-section">
                        <div class="modal-section-form">Voulez-vous supprimer le lien suivant ?</div>
                        <div class="modal-section-content modal-delete-container">
                            <div class="modal-delete-item img-container" >
                                <img :src="currentShareToDelete.path" :alt="currentShareToDelete.name">
                            </div>
                            <div class="modal-delete-item">{{currentShareToDelete.url}}</div>
                        </div>
                    </div>
                </div>
        </modal>
        <div class="shares-item img-container" v-for="share in sharedLinks" :key="share.url">
            <img :src="share.path" :alt="share.name" @click="openDeleteModal(share)">
        </div>
        <div class="shares-item img-container" @click="openAddModal">
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

            isDeleteModalOpen : false,
            currentShareToDelete : {},

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
            this.closeAddModal()
            console.log(this.sharedLinks)
        },
        deleteShare : function () {
            this.sharedLinks = this.sharedLinks.filter(item => item.url !== this.currentShareToDelete.url)
            this.closeDeleteModal()
            console.log(this.sharedLinks)
        },
        openAddModal : function () {
            this.isAddModalOpen = true
        },
        closeAddModal : function () {
            this.isAddModalOpen = false
            this.currentLogoSelected = {}
            this.inputLink = ''
        },
        openDeleteModal : function (share) {
            this.currentShareToDelete = share
            this.isDeleteModalOpen = true
        },
        closeDeleteModal : function () {
            this.isDeleteModalOpen = false
            this.currentShareToDelete = {}
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

.modal-delete-container {
    display: flex
}

.modal-delete-item {
    align-self: center;
}

.with-min-hight {
    min-height: 80px;
}

.shares-root {
    display: inline-flex
}

.shares-item {
    flex-grow: 1;
}

.link-type {
    display: inline-block;
    opacity: 1;
}

.link-hidden {
    opacity: 0;
}

img {
    /* width : 40px; */
    background-color: blueviolet
}

.img-container {
    padding: 5px
}

</style>