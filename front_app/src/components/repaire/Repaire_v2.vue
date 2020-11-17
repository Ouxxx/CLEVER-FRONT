<template>
    <div class="repaire-root">
        <ch-sidebar></ch-sidebar>
        <ch-header>
            <ch-header-button @button-selected="move('/repaire/profil')" 
                    buttonName="Mon profil" :selected="$route.fullPath === '/repaire/profil'" />
            <ch-header-button @button-selected="move('/repaire/gerermonprofil')" 
                    buttonName="Gérer mon profil" :selected="$route.fullPath === '/repaire/gerermonprofil'" />
            <ch-header-button @button-selected="move('/')" 
                    buttonName="Dashboard" :selected="$route.fullPath === '/'" />
            <ch-header-button @button-selected="move('/repaire/soutiens')" 
                    buttonName="Mes soutiens" :selected="$route.fullPath === '/repaire/soutiens'" />
            <ch-header-button @button-selected="move('/repaire/media/video')" 
                    buttonName="Médiathèque" :selected="$route.fullPath === '/repaire/media/video'" />
        </ch-header>

        <div class="repaire-content">
            <router-view ></router-view>
        </div>
    </div>
</template>

<script>
import chHeader from '../common/header/Header_v5'
import chHeaderButton from '../common/header/Header_button_v5'
import chSidebar from '../common/sidebar/Sidebar_v2'

export default {
    components: { chSidebar, chHeader, chHeaderButton },
    data () {
        return {
            pageSelected: 0
        }
    },
    methods: {
        move (moveTo) {
            if(moveTo != '' && moveTo != this.$route.fullPath){
                console.log('this.moveTo = ' + moveTo)
                console.log(this)
                this.$router.push(moveTo)
            }
        }
    }
}
</script>

<style scoped>

.repaire-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.repaire-content {
    padding-top: 100px;
}

</style>