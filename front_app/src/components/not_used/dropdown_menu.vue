<template>
    <div class="root-menu" @click="openFunctions()">
        
        <div class="openwindow" v-if="isOpen">
            <div>
                <img class="img-menu" src="../../assets/img/cross_menu.png" style='width:20px' >
            </div>
            
            <slot></slot>
        </div>
        <div class="closewindow" v-else>
            <img class="img-menu" src="../../assets/img/icon_menu_v2.png" style='width:20px'>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false,
            
        }
    },

    methods : {
        openFunctions () {
            this.isOpen = !this.isOpen
        }
    }   
}
</script>

<style scoped>

.root-menu {
    cursor: pointer;
    
}


</style>