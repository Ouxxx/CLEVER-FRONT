<template>
    <div class="add-form-one-root">
        <sidebar-ch></sidebar-ch>
        <header-ch></header-ch>
        <div class="form-content">
            <div class="format">
                <p>Support principal</p>
                <button class="format-video">Vidéo</button>
                <button class="format-writing">Ecrit</button>
                <button class="format-img">Image</button>
            </div>
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
                    <input type="file" id="myFile" name="filename">
                    <input type="submit">
                </div>
                
                <div class="description">
                    <p>Description du contenu:</p>
                    <div class="content-editable" contenteditable="true">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import headerCh from '../common/header/Header_v5'
import sidebarCh from '../common/sidebar/Sidebar_v2'
export default {
    components : {headerCh, sidebarCh},
    
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

.format button {
    cursor: pointer;
}

.type select, .title input {
    cursor: pointer;
    outline: none;
}

.content-editable {
    background-color: white;
    outline: none;
}

</style>