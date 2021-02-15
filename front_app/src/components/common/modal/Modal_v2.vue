<template>
    <div class="modal-root">
        <div class="overlay" @click="$emit('modal-cancel')"></div>
        <div class="modal">
            <div class="modal-title modal-marge"><p class="modal-p">{{title}}</p></div>
            <div class="modal-content modal-marge">
                <slot></slot>
            </div>
            <div class="modal-functions modal-marge">
                <div class="modal-functions-position">
                    <div class="modal-button" @click="$emit('modal-submit')" v-if="withSubmit"><p class="modal-p">{{submitLabel}}</p></div>
                    <div class="modal-button" @click="$emit('modal-cancel')"><p class="modal-p">{{cancelLabel}}</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        title: {
            type: String,
            required: true
        },
        submitLabel: {
            type: String,
            required: false
        },
        cancelLabel: {
            type: String,
            required: true
        },
        withSubmit: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.modal-root {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 200px;
    background: rgba(0, 0, 0, 0.8);
}

.overlay{
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.modal{
    background: white;
    width: 50%;
    min-width: 500px;
    margin-right: auto;
    margin-left: auto;
}

.modal-p{
    color: black;
    margin: 0;
}

.modal-title {
    cursor: default;
    background-color: rgb(216, 216, 216);
}

.modal-title p {
    text-transform: uppercase;
}

.modal-functions {
    display: flex;
    justify-content: flex-end;
}

.modal-button {
    display: inline-block;
    padding: 16px;
    margin: 16px;
    cursor: pointer;
    background-color: rgb(216, 216, 216);
}

.modal-marge {
    padding: 24px;
}
</style>