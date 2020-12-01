<template>
    <div class="picker-root">
        <div class="picker-btn" @click="showVideos()">Vidéo</div>
        <div class="picker-btn" @click="showEcrits()">Ecrit</div>
        <div class="picker-btn" @click="showImages()">Image</div>
        <div class="dropdown">
            <div class="picker-btn picker-btn-separator" >
                <img class="triangle-dropdown" src="../../../assets/rendus/MonRepaire/a_ObjetsCommuns/triangle_dropdownmenu_v2.png"
                        alt="triangle">
            </div>
            <div class="dropdown-content">
                <div class="#">Date</div>
                <div class="#">Matricule</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.picker-btn {
    display: inline-block;
    background-color: rgba(218,165, 32, 1);
    color: white;    
    padding: 12px;
    cursor: pointer;
}
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