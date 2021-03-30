<template>
    <div class="add-form-one-root">
        <sidebar-ch></sidebar-ch>
        <header-ch></header-ch>
        <div class="form-content">

            <div class="format">
                <p>Support principal</p>
                <div class="button video" @click="selectFormat('video')">Vidéo</div>
                <div class="button writing" @click="selectFormat('writing')">Écrit</div>
                <div class="button img" @click="selectFormat('img')">Image</div>
                <div class="button img" @click="goToComposant()">composant</div>
            </div>

            <div class="format-selected">
                <div class="button-video-selected" v-if="selectedFormat=='video'">
                    <div class="type">
                        <p>Genre</p>
                        <select>
                                <option value="0">Architecture</option>
                                <option value="1">Beauté</option>
                                <option value="2">Cuisine</option>
                                <option value="3">Design</option>
                                <option value="4">Géographie</option>
                                <option value="5">Histoire</option>
                                <option value="6">Jeu</option>
                                <option value="7">Langues</option>
                                <option value="8">Mécanique</option>
                                <option value="9">Mode</option>
                                <option value="10">Musique</option>
                                <option value="11">Politique</option>
                                <option value="12">Religion</option>
                                <option value="13">Sciences</option>
                                <option value="14">Sport</option>
                                <option value="15">Technologies</option>
                            </select>
                    </div>
                    <form action="">
                        <div class="title">
                            <label for="title">Entrer un titre:</label>
                            <input type="text" id="title" name="title" required
                            minlength="4" maxlength="30" size="30">
                        </div>
                        <div class="file">
                            <label for="file">Importer une image de présentation: </label>
                            <input type="file" id="myFile" name="filename" accept="">
                        </div>
                    </form>
                    <div class="description">
                        <p>Description du contenu:</p>
                        <div class="content-editable" contenteditable="true">
                        </div>
                    </div>
                    <div class="price">
                        <label for="price">Quel est son prix ?</label>
                        <input type="text" maxlength="4" size="10">
                        <label for="cheese">Je souhaite que mon contenu soit gratuit</label>
                        <input type="checkbox" name="free-price" id="free-price">
                    </div>
                </div>
            </div>

                <div class="button-writing-selected" v-if="selectedFormat=='writing'">
                    <div class="type">
                        <p>Genre</p>
                        <select>
                            <option value="0">Science-Fiction</option>
                            <option value="1">Romantique</option>
                            <option value="2">Policier</option>
                            <option value="3">Design</option>
                            <option value="4">Géographie</option>
                            <option value="5">Histoire</option>
                            <option value="6">Jeu</option>
                            <option value="7">Langues</option>
                            <option value="8">Mécanique</option>
                            <option value="9">Mode</option>
                            <option value="10">Musique</option>
                            <option value="11">Politique</option>
                            <option value="12">Religion</option>
                            <option value="13">Sciences</option>
                            <option value="14">Sport</option>
                            <option value="15">Technologies</option>
                        </select>
                    </div>
                    <div class="title">
                        <label for="title">Entrer un titre:</label>
                        <input type="text" id="title" name="title" required
                        minlength="4" maxlength="30" size="30">
                    </div>
                    <div class="file">
                        <label for="file">Importer une image de présentation: </label>
                        <input type="file" id="myFile" name="filename" accept="">
                    </div>
                    <div class="description">
                        <p>Description du contenu:</p>
                        <div class="content-editable" contenteditable="true">
                        </div>
                    </div>
                </div>

                <div class="button-img-selected" v-if="selectedFormat=='img'">Su</div>
        </div>

            
            
        
    </div>
</template>

<script>
import headerCh from '../common/header/Header_v5'
import sidebarCh from '../common/sidebar/Sidebar_v2'
export default {
    components : {headerCh, sidebarCh},
    data () {
        return {
            selectedFormat: '',
        }
    },
    methods : {
        selectFormat : function (format) {
            this.selectedFormat=format
        },
        goToComposant : function () {
             this.$router.push('/composant')
        }
    }
}
</script>

<style scoped>

.add-form-one-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.form-content {
    padding-top: 50px;
    color: white;
    margin-left: 50px;
}

.button {
    display: inline-block;
    cursor: pointer;
}

.type select {
    cursor: pointer;
    outline: none;
}

.title input {
    outline: none;
}

.content-editable {
    width: 30%;
    background-color: white;
    outline: none;
}

</style>