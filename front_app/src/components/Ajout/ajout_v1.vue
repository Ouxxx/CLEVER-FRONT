<template>

    <div class="repaire-root">
        <ch-sidebar></ch-sidebar>
        <ch-header></ch-header>
        <div class="repaire-content">
            <router-view ></router-view>
        </div>
        
        <div class="header">
            <h1>Ajouter un nouveau contenu</h1>
        </div>

        <div class="menu-top">
            <div class="group">
                <p>A quelle catégorie appartient-il ?</p>
                <label class="container">Cours
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
                <label class="container">Tutoriel
                    <input type="radio" name="radio" >
                    <span class="class"></span>
                </label>
                <label class="container">Vulgarisation
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
                <label class="container">Exercices
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
                <label class="container">Formation
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
                <label class="container">Ouvrage
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
            </div>
            <div class="type">
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
            </div>
        </div>

        <div class="menu-middle">
        

        </div>

        <div class="menu-bottom">

        </div>

    </div>
       
</template>

<script>
import chHeader from '../common/header/Header_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'
export default {
    components: { chSidebar, chHeader},
    data () {}
}
</script>

<style lang="scss">



@media screen and (max-width: 1200px){
    .ajout-root {
        margin: 100px auto;
        width: 80%;
    }    
}

@media screen and (min-width: 1000px){
    .ajout-root {
        margin: 100px auto;
        width: 1000px auto;
    }    
}

.repaire-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.repaire-content {
    padding-top: 100px;
}

.container {
  display: inline;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  color: white;
  font-size: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


</style>