<template>
    <div class="title-descr-root">
        <div class="title-descr-type">
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
        <div class="title-descr-title">
            <label for="title">Entrer un titre:</label>
            <input type="text" id="title" name="title" required
            minlength="4" maxlength="30" size="30">
        </div>
        <div class="title-descr-description">
            <p>Description du contenu:</p>
            <div class="content-editable" contenteditable="true">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>

</style>