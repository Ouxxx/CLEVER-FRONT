<template>
    <div class="param-root">
        <ch-sidebar></ch-sidebar>
        <ch-header> 
            <ch-header-button @button-selected="move('/parametres/account')" 
                    buttonName="Compte" :selected="fullPath === '/parametres/account'" />
            <ch-header-button @button-selected="move('/parametres/privacy')" 
                    buttonName="Confidentialité" :selected="$route.fullPath === '/parametres/privacy'" />
            <ch-header-button @button-selected="move('/parametres/security')" 
                    buttonName="Sécurité" :selected="$route.fullPath === '/parametres/security'" />
            <ch-header-button @button-selected="move('/parametres/payments')" 
                    buttonName="Facturation et paiements" :selected="$route.fullPath === '/parametres/payments'" />
        </ch-header>
        
        
        <div class="param-content">
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
    methods : {
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

.param-root {
    background: url("../../assets/fonds/background_home_v1.png") no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

.param-content {
    padding-top: 100px;
}

</style>