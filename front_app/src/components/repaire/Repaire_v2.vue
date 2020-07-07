<template>
    <div class="home-root">

        <header-ch class="header"></header-ch>

        <sidebar-ch></sidebar-ch>

        <div class="list-elem-repaire">
            <div class="banner">
                <div class="repaire-avatar">
                    <img class="repaire-avatar-img" src="../../assets/img/exampleimg_home_v1.png" alt="avatar" style='width:100px'>
                    <p class="repaire-avatar-register"> 
                        {{$store.getters.getId}} </p>
                </div>
            </div>
            <div class="introduce-yourself">
            </div>
            <div class="thread-repaire">
            </div>
            <div class="hero-contents">
            </div>
        </div>

    </div>
</template>

<script>
import headerCh from '../blocs/header_v3'
import sidebarCh from '../blocs/sidebar_v1'

export default {
    components: { headerCh, sidebarCh },
   
    
}
</script>

<style scoped>

.list-elem-repaire{
    padding-top: 50px;
    
}

.home-root {
    position: relative;
    background-color: rgb(7,15,24);
    min-height: 100vh;
    
}

.banner {
    
    width: 1100px;
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
    
    margin-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

.repaire-avatar{
    width: 150px;
    margin-bottom: 15px;
}

.repaire-avatar-img{
    display: block;
    bottom: 15px;
    margin-right:auto;
    margin-left: auto;
}

.repaire-avatar-register{
    display: block;
    text-align: center;
    font-size: 22px;
    color : rgb(220,183,102);
    margin: 0;
}

.introduce-yourself{
    
    display: inline-block;
    width: 1100px;
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
    margin-top: 10px;
    margin-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

.thread-repaire{
    display: inline-block;
    width: 1100px;
    background-color: aliceblue;
    margin-top: 10px;
    margin-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

.hero-contents{
    display: inline-block;
    width: 1100px;
    background-color: aliceblue;
    margin-top: 10px;
    margin-left: 50px;
    padding-right: 1100px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

</style>