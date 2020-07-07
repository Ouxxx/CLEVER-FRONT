<template>
        <div class="home-root">
        
        <header-ch></header-ch>

        <sidebar-ch></sidebar-ch>

    </div>
</template>

<script>
import headerCh from './blocs/header_v3'
import sidebarCh from './blocs/sidebar_v1'

export default Vue.extend({
    components: { headerCh, sidebarCh }
    
})
</script>

<style scoped>

</style>