<template>
    <div class='media-root'> 
        
        <div class= "media-functions">
            
            <div class="search-bar">
                <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement...">
            </div>
                
            <div class="media-sort">
                
                <button class="btn" @click="gotovideo()">Vidéo</button>
                <button class="btn" @click="gotoecrit()">Ecrit</button>
                <button class="btn" @click="gotoimage()">Image</button>
                <div class="dropdown">
                    <button class="btn" style="border-left:1px solid navy">
                        <img class="triangle-dropdown" src="../../../assets/rendus/MonRepaire/a_ObjetsCommuns/triangle_dropdownmenu_v2.png" alt="triangle">
                    </button>
                    <div class="dropdown-content">
                        <div class="#">Date</div>
                        <div class="#">Matricule</div>
                    </div>
                </div>
            </div>  
            
        </div>

        <router-view ></router-view>


    </div>
    

</template>

<script>
export default {
    methods: {
        gotoecrit() {
            this.$router.push('/repaire/media/ecrit')
        },
        gotoimage() {
            this.$router.push('/repaire/media/image')
        },
        gotovideo() {
            this.$router.push('/repaire/media/video')
        }
    }
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .media-root {
        margin: auto;
        width: 80%;
    }    
}

@media screen and (min-width: 1000px){
    .media-root {
        margin: auto;
        width: 1000px auto;
    }    
}

.triangle-dropdown {
    height: 40%;
    width: 40%;
}

input[type=text] {
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 280px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    cursor: pointer;
    width: 60%;
}

.media-functions {
    display: flex;
    position: relative;
    align-items: baseline;
}

.search-bar {
    flex: 1 1 auto;
    text-align: right;
}

.media-sort {
    display: inline;
    cursor: pointer;
    margin: 0 180px 20px 10px;
    padding-top: 20px;
}

.btn {
    cursor: pointer;
    background-color: rgba(218,165, 32, 1);
    color: white;
    padding: 12px;
    font-size: 15px;
    border: none;
    outline: none;
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

.dropdown-content div:hover {
    background-color: rgba(105, 68, 12, 0.6);
    color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.btn:hover {
  background-color: rgba(218,165, 32, 0.6);
}

</style>