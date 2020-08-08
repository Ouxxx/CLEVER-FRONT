<template>
    <div class="soutiens-root">
        <sidebar-ch></sidebar-ch>
        
        <header-ch></header-ch>
    
        <div class="page-content">
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>
            <desc-soutien></desc-soutien>

        </div>

    </div>
</template>

<script>
import headerCh from '../blocs/header_v3'
import sidebarCh from '../blocs/sidebar_v1'
import descSoutien from './Description_soutien_v1'


export default {
    components: { headerCh, sidebarCh, descSoutien },
    data () {
        return {

            soutiens : []
        }
    }
    
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .page-content {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .page-content {
        margin: 100px auto 0;
        width: 1000px;
    }    
}

.soutiens-root {
    background: url("../../assets/fonds/background_home_v1.png") no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

.soutiens-main {
}

</style>