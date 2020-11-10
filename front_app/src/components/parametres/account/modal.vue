<template>
    <div class="modal-root">
        <div class="overlay" v-on:click="$emit('close-modal')"></div>
        <div class="modal container">
            <button class="btn-modal" v-on:click="$emit('close-modal', modalId)">X</button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
    }
}

</script>

<style scoped>
.modal-root {
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
    top: 20%;
}

.btn-modal {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
}

</style>