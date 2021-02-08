<template>
    <div class="modal-root" @click.native="click">
        <div class="overlay" v-on:click="$emit('close-modal')"></div>
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        click : function () {
            console.log('click')
        }
    }
}
</script>

<style scoped>
.modal-root {
    /* display: flex; */
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* justify-content: center; */
    /* align-items: center; */
    padding-top: 200px;
     background: rgba(255, 0, 0, 1);
    /* background: rgba(0, 0, 0, 0.8); */
    
}
Z
.modal-root p{
    color: black;
}

.overlay{
    z-index: -1;
    position: fixed;
    /* background: rgba(255, 0, 0, 1); */
        background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.modal{
    background: white;
    color: #333;
    padding: 200px;
    top: 20%;
    width: 50%;
    margin-right: auto;
    margin-left: auto;


}
</style>