<template>
    <div class="shares-root">
        <modal v-if="isModalOpen" title="coucou ceci est mon titre" submit-label="Clique ici c'est ok" cancel-label="Annuler"
            @modal-submit="addLink" @modal-cancel="closeModal" >
            Ici j'ai plus qu a mettre le contenu
        </modal>
        <div class="shares-item">
            <img src="@/assets/test.png" alt="">
        </div>
        <div class="shares-item" @click="openModal">
            <img src="@/assets/testp.png" alt="">
        </div>
    </div>
</template>

<script>
import modal from '../modal/Modal_v2'
export default {
    components : { modal },
    data() {
        return {
            isModalOpen : false
        }
    },
    methods: {
        addLink : function () {
            this.isModalOpen = false
        },
        closeModal : function () {
            this.isModalOpen = false
        },
        openModal : function () {
            this.isModalOpen = true
        }
    }
    
}
</script>

<style scoped>

.shares-root {
    display: inline-flex
}

.shares-item {
    flex-grow: 1;
    padding: 5px;
    background-color: aqua;
}

img {
    /* width : 40px; */
    background-color: blueviolet
}

</style>