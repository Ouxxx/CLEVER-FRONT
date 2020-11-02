<template>
    <div class="ajout-root">
        <ch-header></ch-header>
        <ch-sidebar></ch-sidebar>
        <div class="ajout-main">
            <div class="header">
                <h1>Ajouter un nouveau contenu</h1>
            </div>
            <div class="group">
                    <p>A quelle catégorie appartient-il ?</p>
                    <label class="container">Cours
                        <input type="radio" v-model="x" value="one" name="radio" id="type-1" checked>
                        <span class="class"></span>
                    </label>
                    <label class="container">Tutoriel
                        <input type="radio" v-model="x" value="one" name="radio" id="type-1" >
                        <span class="class"></span>
                    </label>
                    <label class="container">Vulgarisation
                        <input type="radio" v-model="x" value="one" name="radio" id="type-1">
                        <span class="class"></span>
                    </label>
                    <label class="container">Exercices
                        <input type="radio" v-model="x" value="one" name="radio" id="type-1">
                        <span class="class"></span>
                    </label>
                    <label class="container">Formation
                        <input type="radio" v-model="x" value="one" name="radio" id="type-1">
                        <span class="class"></span>
                    </label>
                    <label class="container">Ouvrage
                        <input type="radio" v-model="x" value="two" name="radio" id="type-2">
                        <span class="class"></span>
                    </label>
            </div>
            <div class="type1" v-if="x === 'one'">
                <p>A quel genre appartient-il ?</p>
                <div class="custom-select" style="width:200px;">
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
                <div class="format">
                    <p>Quel est son support principal ?</p>
                    <label class="media-container">Vidéo
                        <input type="radio" v-model="y" value="video" name="radio" checked>
                        <span class="class"></span>
                    </label>
                    <label class="media-container">Ecrit
                        <input type="radio" v-model="y" value="writing" name="radio">
                        <span class="class"></span>
                    </label>
                    <label class="media-container">Image
                        <input type="radio" v-model="y" value="image" name="radio">
                        <span class="class"></span>
                    </label>
                </div> 
            </div>

            <div class="type2" v-if="x === 'two'">
                <p>A quel genre appartient-il ?</p>
                <div class="custom-select" style="width:200px;">
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
                <div class="format">
                    <p>Quel est son support principal ?</p>
                    <label class="media-container">Ecrit
                        <input type="radio" v-model="y" value="writing" name="radio" checked>
                        <span class="class"></span>
                    </label>
                    <label class="media-container">Image
                        <input type="radio" v-model="y" value="image" name="radio">
                        <span class="class"></span>
                    </label>
                </div>
            </div>
        <div class="menu-middle1" v-if="y === 'video'">
            <div class="column-container">
                <div class="column">
                    <tr>Importer une image de présentation (optionnel)</tr>
                    <tr>Titre de la catégorie :<input type="text" required style="width:100%"></tr>
                    <tr>Description de la catégorie :</tr>
                    <textarea name="input-desc" value="text-desc" required style="width:100%; height:200px">
                    </textarea>
                </div>
                <div class="column">
                    <tr>Importer une image de présentation (optionnel)</tr>
                    <tr>Importer une image de présentation (optionnel)</tr>
                </div>
            </div>
        </div>
        
        <div class="menu-middle2" v-if="y === 'writing'">
            <div class="column-container">
                <div class="column">
                    <tr>Importer une image de présentation (optionnel)</tr>
                    <tr>Titre :<input type="text" required style="width:100%"></tr>
                    <tr>Résumé :</tr>
                    <textarea name="input-desc" value="text-desc" required style="width:100%; height:200px">
                    </textarea>
                </div>
                <div class="column">
                    <tr>Traitement de texte</tr>
                    <textarea name="input-text" value="text" required style="width:100%; height:200px">
                    </textarea>
                </div>
            </div>
        </div>

        <div class="menu-middle3" v-if="y === 'image'">
            <div class="column-container">
                <div class="column">
                    <tr>Importer une image de présentation (optionnel)</tr>
                    <tr>Titre :<input type="text" required style="width:100%"></tr>
                    <tr>Résumé :</tr>
                    <textarea name="input-desc" value="text-desc" required style="width:100%; height:200px">
                    </textarea>
                </div>
                <div class="column">
                    <tr>Contenu de l'ouvrage imagé</tr>
                </div>
            </div>
            <div class="price">Prix
                    <input type="price-inputted" required style="width:100px">
                    <label class="free">Je souhaite que mon contenu soit gratuit.
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
            </div>
        </div>

    </div>
</div>
</template>
<script>
import chHeader from '../common/header/Header_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'
export default {
    components: { chSidebar, chHeader},
    data () { 
        return {
            x: 'one',
            y: 'video',
        }
    }
}
</script>
<style scoped>

.ajout-main {
    padding-top: 50px;
    background-color: rgb(0,10,26);
    min-height: 100vh;
}

/* Top */

.group {
    margin-left: 50px;
    color: white;
}

.type1, .type2 {
    margin-left: 50px;
    color: white;
}

/*colonnes milieu*/

@media only screen and (max-width: 600px) {
  .column {
    display: block;
    width: 100%;
  }
}

.menu-middle1, .menu-middle2, .menu-middle3 {
    margin-left: 50px;
}

.column-container {
    display: table;
    width: 90%;
    background-color: rgb(17, 26, 41); 
}

.column {
    color: white;
    display: table-cell;
    border-width:0.8px; 
    border-style: solid;
    border-color:rgba(168, 135, 75, 0.6);
}

/* Prix */

.price {
    color: white;
}

.free {
    display: inline-block;
    position: relative;
    color: rgba(168, 135, 75, 0.6);
    padding-left: 35px;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.free input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    display: inline;
    position: absolute;
    top: 1;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
}

.free:hover input ~ .checkmark {
    background-color: #ccc;
}

.free input:checked ~ .checkmark {
    background-color: rgba(168, 135, 75, 0.6);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.free input:checked ~ .checkmark:after {
    display: block;
}

.free .checkmark:after {
    left: 7px;
    top: 3px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>