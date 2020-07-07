<template>
    <div class="home-root">

        <header-ch></header-ch>

        <sidebar-ch></sidebar-ch>

        <div class="list-elem-repaire">
            <div class="banner">
                <div class="header-avatar-register" >
                    <p>{{$store.getters.getId}}</p>
                </div>
                <div class="header-avatar-img">
                <p>{{$store.getters.getToken}}</p>
                    
                    <img class="header-avatar-img" src="../../assets/img/exampleimg_home_v1.png" alt="avatar" style='width:100px'> 

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

.home-root {
    background-color: rgb(7,15,24);
    min-height: 100vh;
}

.banner {
    display: inline-block;
    position: relative;
    top: 70px;
    width: 1100px;
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
    margin: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
    

}

.header-avatar-img{
    clip-path:circle(40%);
    position: relative;
    bottom: 15px;
    margin-left: 15px;
}

.header-avatar-register{
    float: right;
    position: relative;
    right: 20px;
    color : whitesmoke;
}

.introduce-yourself{
    display: inline-block;
    position: relative;
    width: 1100px;
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
    margin: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

.thread-repaire{
    display: inline-block;
    position: relative;
    width: 1100px;
    background-color: aliceblue;
    margin: 50px;
    padding-right: 1000px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}

.hero-contents{
    display: inline-block;
    position: relative;
    width: 1000px;
    background-color: aliceblue;
    margin: 50px;
    padding-right: 1100px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}
</style>