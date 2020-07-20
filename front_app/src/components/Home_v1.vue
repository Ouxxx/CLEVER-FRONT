<template>
    <div class="home-root">
        
        <header-ch></header-ch>


        <sidebar-ch></sidebar-ch>
        <notification message="Cool c'est OK" isErr="false"></notification>
        <notification message="Cool c'est KO" isErr="true"></notification>
        <notification message="Cool je sais pas" ></notification>


        <div class="home-main">
            <element-list category="En cours de visionnage"></element-list>
            <element-list category="Catégorie 1"></element-list>
            <element-list category="Catégorie 2"></element-list>
            
        </div>

    </div>
</template>

<script>
import headerCh from './blocs/header_v3'
import sidebarCh from './blocs/sidebar_v1'
import elementList from './blocs/list_elements_v1'
import notification from './blocs/notification_v1'

export default {
    components: { headerCh, sidebarCh, elementList, notification },
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
    background: url("./../assets/fonds/background_home_v1.png") no-repeat fixed;
    min-height: 100vh;
    position: relative;
}


.home-main {
    padding-top: 50px;
    min-height: 200vh;
}

</style>