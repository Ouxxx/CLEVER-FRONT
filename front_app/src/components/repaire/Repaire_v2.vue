<template>
    <div class="repaire-root">
        <ch-sidebar></ch-sidebar>
        <ch-header> 
            <ch-header-button @button-selected="selectPage(0)" 
                    buttonName="Mon profil" :selected="pageSelected === 0" />
            <ch-header-button @button-selected="selectPage(1)" 
                    buttonName="Gérer ma page" :selected="pageSelected === 1" />
            <ch-header-button @button-selected="selectPage(2)" 
                    buttonName="Dashboard" :selected="pageSelected === 2" />
            <ch-header-button @button-selected="selectPage(3)" 
                    buttonName="Mes soutiens" :selected="pageSelected === 3" />
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

.repaire-content {
    padding-top: 100px;
}

</style>