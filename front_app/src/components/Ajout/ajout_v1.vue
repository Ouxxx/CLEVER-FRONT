<template>

    <div class="repaire-root">
        <ch-sidebar></ch-sidebar>
        <ch-header></ch-header>
        <div class="header">
            <h1>Ajouter un nouveau contenu</h1>
        </div>
        <div class="group">
                <p>A quelle catégorie appartient-il ?</p>
                <label class="container">Cours
                    <input type="radio" name="radio" checked>
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
                    <input type="radio" value=7 name="radio">
                    <span class="class"></span>
                </label>
        </div>
        <div class="repaire-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import chHeader from '../common/header/Header_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'
export default {
    components: { chSidebar, chHeader},
    
}
</script>


<style scoped>
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

/*top*/

.repaire-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.repaire-content {
    padding-top: 100px;
}
.group, .type, .format {
    margin-left: 50px;
}
.container {
  display: inline;
  position: relative;
  cursor: pointer;
  color: white;
  font-size: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*colonnes milieu*/

@media only screen and (max-width: 600px) {
  .column {
    display: block;
    width: 100%;
  }
}

.column-container {
    display: table; /* Make the container element behave like a table */
    width: 90%; /* Set full-width to expand the whole page */
    margin-left: 50px;
    background-color: rgb(17, 26, 41);
    
}

.column {
    color: white;
    display: table-cell;
    border-width:0.8px; 
    border-style: solid;
    border-color:rgba(168, 135, 75, 0.6);
}

.menu-middle {
    display:block;
}


/*bottom*/

</style>

