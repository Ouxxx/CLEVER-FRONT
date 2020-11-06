<template>
    <div class="bloc-modal" v-if="showModal">

        <div class="overlay" v-on:click="toggleModal()"></div>
        <div class="modal container" v-on:click="toggleModal">
            <button class="btn-modal" >X</button>
            <h2>Le contenu</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props : {
        showModal: String,
        toggleModal: String,
    }
}

</script>

<style scoped>
.bloc-modal {
    color: white;
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
}

.overlay{
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.modal{
    position: fixed;
    background: white;
    color: #333;
    padding: 200px;
    top: 40%;
}

.btn-modal {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
}

</style>