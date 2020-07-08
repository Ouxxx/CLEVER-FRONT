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
                <div class="infopoints-repaire">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>

            </div>
            <div class="introduce-yourself">
                <div class="infopoints-repaire">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>
            </div>
            <div class="thread-repaire">
                <div class="infopoints-repaire">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>
            </div>
            <div class="hero-contents">
                <div class="infopoints-repaire">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>
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



/*TO DO: User devra pouvoir personnaliser sa banniere par un chgt de couleur ou une image apportée*/
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
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    margin-bottom: 15px;
    
}

.infopoints-repaire{
    float: right;  
}

.repaire-avatar-img{
    display: block;
    bottom: 15px;
    margin-right: auto;
    margin-left: auto;
}

.repaire-avatar-register{
    display: block;
    text-align: center;
    font-size: 22px;
    color : rgb(255, 255, 255);
    margin: 0;
}

.infopoints-repaire{
    display: inline-block;
    border-color: aliceblue;
    border-style: outset;
    border-width: 1px;

}

/*TO DO: User devra pouvoir personnaliser par écrit*/
.introduce-yourself{
    
    display: block;
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
/*TO DO: actualisation de la page avec des dernières actualités. Actualités = capacité d'interagir avec les gens qui regardent/suivent en mettant des posts.*/
.thread-repaire{
    display: block;
    width: 1100px;
    background-color: aliceblue;
    margin-top: 10px;
    margin-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 150px;
    min-width: 250px;
}
/*TO DO: Actualisation du contenu du Hero*/
.hero-contents{
    display: block;
    width: 1100px;
    height: 500px;
    background-color: aliceblue;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-left: 50px;
    min-height: 150px;
    min-width: 250px;
}

</style>