<template>
    <div class="repaire-root">
        <ch-sidebar></ch-sidebar>
        <ch-header></ch-header>
        <menu-haut>
            <menu-haut-button @button-selected="selectPage(0)" 
                    buttonName="Mon profil" :selected="pageSelected === 0" />
            <menu-haut-button @button-selected="selectPage(1)" 
                    buttonName="Gérer ma page" :selected="pageSelected === 1" />
            <menu-haut-button @button-selected="selectPage(2)" 
                    buttonName="Dashboard" :selected="pageSelected === 2" />
            <menu-haut-button @button-selected="selectPage(3)" 
                    buttonName="Mes soutiens" :selected="pageSelected === 3" />
        </menu-haut>
        <ch-banner ></ch-banner>
        <div class="repaire-content">
            <router-view ></router-view>
        </div>
    </div>
</template>

<script>
import chHeader from '../common/header/Header_v4'
import chSidebar from '../common/sidebar/Sidebar_v2'
import menuHaut from '../common/menu_haut/Menu_haut_v1'
import menuHautButton from '../common/menu_haut/Menu_haut_button_v1'
import chBanner from '../common/banner/Banner_v1'


export default {
    components: { chHeader, chSidebar, menuHaut, menuHautButton, chBanner },
    data () {
        return {
            pageSelected: 0
        }
    },
    methods: {
        selectPage(numPage){
            if(this.pageSelected != numPage){
                this.pageSelected = numPage
                switch (numPage) {
                    case 0:
                        this.$router.push('/repaire/profil')
                        break
                    case 1:
                        this.$router.push('/')
                        break
                    case 2:
                        this.$router.push('/')
                        break
                    case 3:
                        this.$router.push('/repaire/soutiens')
                        break
                    default:
                        this.$router.push('/repaire/profil')
                }
            }
        }
    }
}
</script>

<style scoped>

.repaire-root {
    background: url("../../assets/fonds/background_home_v1.png") no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

</style>