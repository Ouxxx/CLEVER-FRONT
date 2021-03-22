<template>
    <div class="sidebar-root z-index-h1" :class="{ 'opened' : opened, 'closed' : !opened} " 
            @mouseenter="open" @mouseleave="close" >
        <div class="sidebar-opened" v-if="opened">
            <div class="sidebar-group-fonctions" >
                <sidebar-button name="Accueil" moveTo="/home" :selected="$route.matched[0].path === '/home'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="home-icon" >
                </sidebar-button>
                <sidebar-button name="Mon repaire" moveTo="/repaire/profil" :selected="$route.matched[0].path === '/repaire'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Mon repaire">
                </sidebar-button>
                <sidebar-button name="Ajout" moveTo="/ajout" :selected="$route.matched[0].path === '/ajout'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Ajout">
                </sidebar-button>
                <sidebar-button name="New" moveTo="/ajoutnew" :selected="$route.matched[0].path === '/ajoutNew'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="New">
                </sidebar-button>
                <sidebar-button name="Favoris" moveTo="/favoris" :selected="$route.matched[0].path === '/favoris'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Favoris">
                </sidebar-button>
                <sidebar-button name="Paramètres" moveTo="/parametres/account" :selected="$route.matched[0].path === '/parametres'">
                    <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Paramètres">
                </sidebar-button>
            </div>
            

        </div>
        <div class="sidebar-closed" v-else></div>

    </div>

</template>


<style scoped>

.opened {    
    background-color: rgba(5, 7, 21, 0.88);
    border-right-style: solid;
    border-right-color: rgba(218,165, 32, 1);
}
.closed {
    background-color: rgba(5, 7, 21, 0.5);
    border-right-style: none;
    transform: translateX(-160px);

}

.sidebar-root {
    position: fixed;
    height: 100vh;
    width: 200px;
    cursor: pointer;
    transition: transform 500ms ease-out, 
                background-color 500ms ease-out, 
                border-right-style 500ms ease-out;
}

.sidebar-closed {
    height: 100vh;
    width: 100%;
}

.sidebar-opened {
    height: 100vh;
    width: 100%;
}

.sidebar-group-fonctions {
    margin-top: 100px;
    height: 60%;
}



.button-img {
    display: inline-block;
    width: 40px;

}
</style>


<script>
import sidebarButton from './Sidebar_button_v2'
export default {
    components: { sidebarButton },
    data () {
        return {
            opened: false            
        }
    },
    methods: {
        open () {
            this.opened = true
        },
        close () {
            this.opened = false
        }

        
    }
}
</script>




