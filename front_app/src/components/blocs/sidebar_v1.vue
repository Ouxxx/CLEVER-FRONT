<template>
    <div class="sidebar-root" :class="{ 'opened' : opened, 'closed' : !opened} " 
            @mouseenter="open" @mouseleave="close" >
        <div class="sidebar-opened" v-if="opened">
            <div class="sidebar-group-fonctions" >
                <sidebar-button name="Mon repaire" moveTo="" >
                    <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Mon repaire">
                </sidebar-button>
                <sidebar-button name="Ajout" moveTo="" >
                    <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Ajout">
                </sidebar-button>
                <sidebar-button name="Mes soutiens" moveTo="" >
                    <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Mes soutiens">
                </sidebar-button>
                <sidebar-button name="Liste des achats" moveTo="" >
                    <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Liste des achats">
                </sidebar-button>
                <sidebar-button name="Paramètre" moveTo="" >
                    <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Paramètre">
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
    z-index: 1;
    height: 100vh;
    width: 200px;
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
import sidebarButton from './elements/sidebar_button_v1'
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




