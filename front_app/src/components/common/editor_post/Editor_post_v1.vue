<template>
    <div class="post-editor-root">
        <div class="post-editor-input" contenteditable="true">

        </div>
        <div class="post-editor-functions">
            <button @click="addLinkFonction()">Ajouter un lien</button>
        </div>
        <div class="post-editor-function-form">
            <div v-if="activeFunction === 'add-link'">
                <div>
                    <p>libellé du lien : </p>
                    <input type="text" v-model="labelLink" >
                </div>
                <div>
                    <p>lien : </p>
                    <input type="text" v-model="url">
                </div>
                <button @click="addLink()">Valider</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeFunction : '',
            selectionContext : {},
            labelLink : '',
            url : ''
        }
    },
    methods : {
        addLink() {
            
        },
        addLinkFonction() {
            var selection = window.getSelection();
            this.selectionContext = {
                text : selection.toString(),
                offSet : selection.anchorOffset,
                editor : selection.anchorNode.parentElement
            };
            this.activeFunction = 'add-link';
            this.labelLink = this.selectionContext.text

            
            // var functionZone = document.getElementsByClassName('post-editor-function-form')[0];

            
            console.log("---------------------------------")
            console.log(selection)
            console.log(selection.toString())
            console.log("---------------------------------")
            console.log("---------------------------------")
        }
    }

}
</script>

<style scoped>

.post-editor-root {
}

.post-editor-input {
    background-color: aqua;

}

.post-editor-functions {

}

.post-editor-function-form {
    background-color: blueviolet;

}

</style>