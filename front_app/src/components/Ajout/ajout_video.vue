<template>
    <div class="ajout-video-root">
        <div class="menu-top">
            
            <div class="type">
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
            </div>
            <div class="format">
                <p>Quel est son support principal ?</p>
                <label class="container">Video
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
                <label class="container">Ecrit
                    <input type="radio" name="radio" >
                    <span class="class"></span>
                </label>
                <label class="container">Image
                    <input type="radio" name="radio">
                    <span class="class"></span>
                </label>
            </div>

            <div class="menu-middle">
                <div class="column-container">
                    <div class="column">
                        <tr>Importer une image de présentation (optionnel)</tr>
                        <tr>Titre :<input type="text" required style="width:100%"></tr>
                        <tr>Description :</tr>
                        <textarea name="input-desc" value="text-desc" required style="width:100%; height:200px">
                        </textarea>
                    </div>
                    <div class="column">
                        <tr>Importer une image de présentation (optionnel)</tr>
                        <tr>Importer une image de présentation (optionnel)</tr>
                    </div>
                </div>
            </div>

            <div class="menu-bottom">
            </div>
    </div>
</div>

</template>

<script>
export default {
    
}
</script>

<style>

</style>