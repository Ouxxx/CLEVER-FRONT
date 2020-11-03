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
                    <label class="add-container">Vidéo
                        <input type="radio" v-model="y" value="video" name="radio2" checked>
                        <span class="class"></span>
                    </label>
                    <label class="add-container">Ecrit
                        <input type="radio" v-model="y" value="writing" name="radio2">
                        <span class="class"></span>
                    </label>
                    <label class="add-container">Image
                        <input type="radio" v-model="y" value="image" name="radio2">
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
                    <p class="title">Quel est son support principal ?</p>
                    <label class="add-container">Ecrit
                        <input type="radio" v-model="y" value="writing" name="radio3" checked>
                        <span class="class"></span>
                    </label>
                    <label class="add-container">Image
                        <input type="radio" v-model="y" value="image" name="radio3">
                        <span class="class"></span>
                    </label>
                </div>
            </div>
        <div class="menu-middle1" v-if="y === 'video'">
            <div class="column-container">
                <div class="column">
                    <tr class="column-import">Importer une image de présentation (optionnel)
                        <file-selector max="1" v-model="files">
                            <input type="file"/>
                        </file-selector>
                    </tr>
                    <tr>Titre de la catégorie :<input class="input-title" type="text" required></tr>
                    <tr>Description de la catégorie :</tr>
                    <textarea name="input-desc" value="text-desc" required style="width:100%; height:200px">
                    </textarea>
                </div>
                <div class="column">
                    <tr>Importer une image de présentation (optionnel)</tr>
                </div>
            </div>
            <div class="price">Prix
                <input type="price-inputted" required style="width:100px">
                <label class="checkbox">Je souhaite que mon contenu soit gratuit.
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="options1">
            <p class="title">Facultatif </p>
            <div class="extra">
                <div class="top-part">
                    <label class="checkbox">Ajouter un support secondaire :
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <div class="format-extra">
                            <label class="format-extra-writing">Ecrit
                                <input type="radio" value="writing-extra" name="radio" checked>
                                <span class="class"></span>
                            </label>
                            <label class="format-extra-image">Image
                                <input type="radio" value="image-extra" name="radio">
                                <span class="class"></span>
                            </label>
                            <table class="file">
                                <tr class="file-import">Importer un fichier
                                    <file-selector max="5" v-model="files">
                                        <input type="file"/>
                                    </file-selector>
                                </tr>
                                <tr class="file-time">Temps de placement</tr>
                                <button class="file-add" @click="addFile()">Ajouter +</button>
                            </table>
                    </div>
                </div>
                <div class="bot-part">
                    <label class="checkbox">Planification :
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <div class="scheduler">
                        <select>
                            <option value="0">Scheduler : A voir comment faire</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="page-validation">
                <label class="checkbox">Je certifie avoir respecté les conditions générales de vente et d'utilisation
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <button class="validation-btn">JE VALIDE</button>
            </div>
        </div>
        </div>
        
        <div class="menu-middle2" v-if="y === 'writing'">
            <div class="column-container">
                <div class="column">
                    <tr class="column-import">Importer une image de présentation (optionnel)
                        <file-selector max="5" v-model="files">
                            <input type="file"/>
                        </file-selector>
                    </tr>
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
            <div class="price">Prix
                <input type="price-inputted" required style="width:100px">
                <label class="checkbox">Je souhaite que mon contenu soit gratuit.
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="options2">
                <p class="title">Facultatif </p>
                <div class="extra">
                    <div class="top-part">
                        <div class="ed-book">
                            <label class="checkbox">ED-Book :
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <table class="file">
                                <tr class="file-import">Importer un fichier
                                    <file-selector max="5" v-model="files">
                                        <input type="file"/>
                                    </file-selector>
                                </tr>
                                <tr class="file-time">Temps de placement</tr>
                                <button class="file-add" @click="addFile()">Ajouter +</button>
                            </table>
                        </div>
                        <label class="checkbox">Ajouter un support secondaire :
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <div class="format-extra">
                            <label class="format-extra-image">Image
                                <input type="radio" value="image-extra" name="radio" checked>
                                <span class="class"></span>
                            </label>
                            <table class="file">
                                <tr class="file-import">Importer un fichier
                                    <file-selector max="5" v-model="files">
                                        <input type="file"/>
                                    </file-selector>
                                </tr>
                                <tr class="file-time">Temps de placement</tr>
                                <button class="file-add" @click="addFile()">Ajouter +</button>
                            </table>
                        </div>
                    </div>
                    <div class="bot-part">
                        <label class="checkbox">Planification :
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <div class="scheduler">
                            <select>
                                <option value="0">Scheduler : A voir comment faire</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="page-validation">
                    <label class="checkbox">Je certifie avoir respecté les conditions générales de vente et d'utilisation
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <button class="validation-btn">JE VALIDE</button>
                </div>
            </div>
        </div>

        <div class="menu-middle3" v-if="y === 'image'">
            <div class="column-container">
                <div class="column">
                    <tr class="column-import">Importer une image de présentation (optionnel)
                        <file-selector max="5" v-model="files">
                            <input type="file"/>
                        </file-selector>
                    </tr>
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
                <label class="checkbox">Je souhaite que mon contenu soit gratuit.
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="options3">
                <p class="title">Facultatif </p>
                <div class="extra">
                    <div class="top-part">
                        <div class="ed-book">
                            <label class="checkbox">ED-Book :
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <table class="file">
                                <tr class="file-import">Importer un fichier
                                    <file-selector max="5" v-model="files">
                                        <input type="file"/>
                                    </file-selector>
                                </tr>
                                <tr class="file-time">Temps de placement</tr>
                                <button class="file-add" @click="addFile()">Ajouter +</button>
                            </table>
                        </div>
                        <label class="checkbox">Ajouter un support secondaire :
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <div class="format-extra">
                            <label class="format-extra-writing">Ecrit
                                <input type="radio" value="writing-extra" name="radio" checked>
                                <span class="class"></span>
                            </label>
                            <table class="file">
                                <tr class="file-import">Importer un fichier
                                    <file-selector max="5" v-model="files">
                                        <input type="file"/>
                                    </file-selector>
                                </tr>
                                <tr class="file-time">Temps de placement</tr>
                                <button class="file-add" @click="addFile()">Ajouter +</button>
                            </table>
                        </div>
                    </div>
                    <div class="bot-part">
                        <label class="checkbox">Planification :
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <div class="scheduler">
                            <select>
                                <option value="0">Scheduler : A voir comment faire</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="page-validation">
                    <label class="checkbox">Je certifie avoir respecté les conditions générales de vente et d'utilisation
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <button class="validation-btn">JE VALIDE</button>
                </div>
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
    },
    computed: {
    addFile() {
        return {
        }
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
    margin-top: 25px;
}

.column {
    color: white;
    display: table-cell;
    border-width:0.8px; 
    border-style: solid;
    border-color:rgba(168, 135, 75, 0.6);
}

.input-title {
    width:100%;
}

/* Prix */

.price {
    color: white;
}

.checkbox {
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

.checkbox input {
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

.checkbox:hover input ~ .checkmark {
    background-color: #ccc;
}

.checkbox input:checked ~ .checkmark {
    background-color: rgba(168, 135, 75, 0.6);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkbox .checkmark:after {
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

/* Options */

.extra {
    color: white;
    margin-left: 80px;
}

.title {
    margin-left: 50px;
    font-size: large;
}

.format-extra {
    display: inline;
    margin-left: 30px;
}

.ed-book {
    display: block;
}

.file {
    background-color: white;
    color: grey;
    margin-left: 40px;
    margin-top: 10px;
}

.bot-part {
    margin-top: 20px;
}

.scheduler {
    display: inline;
    margin-left: 40px;
}

.validation-btn {
    display: block;
    margin-top: 50px;
}

.page-validation {
    margin-top: 50px;
    margin-left: 50px;
}
</style>