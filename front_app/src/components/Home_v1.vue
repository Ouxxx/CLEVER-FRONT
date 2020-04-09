<template>
    <div class="home-root">
        
        <header-ch></header-ch>

        <sidebar-ch></sidebar-ch>

        <div class="home-main">
            <element-list category="Catégorie 1"></element-list>
            <element-list category="Catégorie 2"></element-list>
        </div>

    </div>
</template>

<script>
import headerCh from './blocs/header_v3'
import sidebarCh from './blocs/sidebar_v1'
import elementList from './blocs/list_elements_v1'

export default {
    components: { headerCh, sidebarCh, elementList },
    data () {
        return {}
    }
    
}
</script>

<style scoped>

* {
  font-family: sans-serif, Verdana, Geneva, Tahoma, sans-serif;
}



.home-root {
    background: url("./../assets/fonds/background_home_v1.png") no-repeat center fixed;
    min-height: 100vh;
}


.home-main {
    padding-top: 50px;
    min-height: 100vh;
}

</style>