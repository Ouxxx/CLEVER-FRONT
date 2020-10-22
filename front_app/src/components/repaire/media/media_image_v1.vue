<template>
    <div class="ajout-root">

        <div class="menu-top">

            <div class="form-title-div">
                <p class="form-title-text-tl">A quelle catégorie appartient-il ?</p>
            </div>

            <div class="radio">
                <input type="radio" id="two" value="Femme" name="gender" checked>
                <label for="two">Cours</label>
             </div>
            <div class="radio2">
                <input type="radio" id="one" value="Homme" name="gender">
                <label for="one">Tutoriel</label>
        </div>
        <div class="radio3">
            <input type="radio" id="one" value="Homme" name="gender">
            <label for="three">Vulgarisation</label>
        </div>
        <div class="radio4">
            <input type="radio" id="one" value="Homme" name="gender">
            <label for="three">Exercices</label>
        </div>
        <div class="radio5">
            <input type="radio" id="one" value="Homme" name="gender">
            <label for="three">Formation</label>
        </div>
        <div class="radio6">
            <input type="radio" id="one" value="Homme" name="gender">
            <label for="three">Ouvrage</label>
        </div>

        </div>

        <div class="menu-middle">

        </div>

        <div class="menu-bottom">

        </div>

    </div>

 <!-- <img class="image" :src='image' alt="">
                <div class="overlay">
                <div class="text" >
                    <p>{{ this.description }}</p>
                </div>
            <select class="media-select" v-model="sorting">
                        <option value="date">Date</option>
                        <option value="matricule">Matricule</option>
            </select>

            <div class='media-root'> 
        <div class="container">COUCOU</div>
    </div>

            </div>-->

</template>

<script>

</script>

<style scoped>

@media screen and (max-width: 1200px){
    .media-root {
        margin: 100px auto;
        width: 80%;
    }    
}

@media screen and (min-width: 1000px){
    .media-root {
        margin: 100px auto;
        width: 1000px auto;
    }    
}

.form-title-text-tl {
    display: block;
    text-align: left;
    padding-left: 70px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-variant-caps: titling-caps;
}
.radio, .radio2, .radio3, .radio4, .radio5, .radio6{
    display: inline;
    color:white;
    padding-left: 70px;
}


</style>