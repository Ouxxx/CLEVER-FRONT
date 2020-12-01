<template>
    <div class="picker-root" style="background : red">
        <!--div class="picker-search picker-height">
                
        </div-->
         <input class="picker-height" type="text" name="search" 
                        placeholder="Rechercher un contenu plus rapidement...">
        <div class="picker-btn picker-height" @click="showVideos()"><p>Vidéo</p></div>
        <div class="picker-btn picker-height" @click="showEcrits()"><p>Ecrit</p></div>
        <div class="picker-btn picker-height" @click="showImages()"><p>Image</p></div>
        <!--div >
            <div class="picker-btn picker-height"><p>Pas de tri</p></div>
            <div class="picker-btn picker-height"><p>Date</p></div>
            <div class="picker-btn picker-height"><p>Matricule</p></div>

            <div></div>
            <div></div>
        </div-->
            <!--

        <div class="dropdown">
                <div class="#">Date</div>
                <div class="#">Matricule</div>
        </div>
            -->

    </div>
</template>

<style scoped>
.picker-root{
    position: relative;
    display: flex;
    align-items: flex-start;
}
.picker-height {
    height: 40px;
}
.picker-search {
}
.picker-root input {
    width: 290px;
    padding-left: 10px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.picker-root input:focus {
    outline: none;
    width: 60%;
}

.picker-btn {
    display: inline-block;
    background-color: rgba(218,165, 32, 1);
    cursor: pointer;
}
.picker-btn p{
    line-height: 2.5em;
    margin: 0;
    padding: 0 10px;
}

/*
.search-bar {
    flex: 1 1 auto;
    text-align: right;
}
.search-bar input {
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 280px;
    border-radius: 5px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.search-bar input:focus {
    width: 60%;
}


*/

/*

input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}


-----------------------

input:focus {
    outline-offset: 0px;
}
user agent stylesheet
:focus {
    outline: -webkit-focus-ring-color auto 1px;
}
user agent stylesheet
input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
*/


.picker-btn-separator {
    border-left:1px solid navy;
}

.dropdown {
    display: inline-block;
    position: absolute;
  
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color:rgba(218,165, 32, 1);
    min-width: 160px;
    z-index: 1;
}

.dropdown-content div {
    display: block;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
  
}
.triangle-dropdown {
    height: 40%;
    width: 40%;
}
</style>

<script>
export default {
    
}
</script>