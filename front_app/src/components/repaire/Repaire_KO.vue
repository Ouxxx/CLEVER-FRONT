<template>
    <div class="repaire-root">

        <header-ch class="header"></header-ch>
        <sidebar-ch></sidebar-ch>

        <div class="repaire-body">
            <div class="ch-topbar">
                <div class="ch-topbar-button" :class="{'ch-topbar-button-selected': selected}">
                    <p class="ch-topbar-button-p">Mes soutiens</p>
                </div>
                <div class="ch-topbar-button" :class="{'ch-topbar-button-selected': selected}">
                    <p class="ch-topbar-button-p">Historique des achats</p>
                </div>
            </div>
            <div class=banner> 
                <div class="banner-block content-block-property content-width">
                    <div class="repaire-avatar">
                        <img class="repaire-avatar-img" src="../../assets/img/avatar-circle-user.png" alt="avatar" style='width:90px'>
                        <p class="repaire-avatar-register">{{$store.getters.getId}} </p>
                    </div>
                </div>
                <div class="points-menu">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>

            </div>

            <div>
                <div class="introduce-yourself content-block-property content-width">
                </div>
                <div class="points-menu">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>
            </div>
            
            <div>
                <div class="thread-repaire content-block-property content-block-property content-width">
                </div>
                <div class="points-menu">
                    <img class="infopoints-repaire-img" src="../../assets/img/infopoints-repaire.png" alt="infopoints">
                </div>
            </div>
            <div>
                <div class="hero-contents content-block-property content-width">
                </div>
                <div class="points-menu">
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
    data () {
        return {
            hover: false,
        }
    }
}

</script>

<style scoped>

.ch-topbar-button {
    display: inline-block;
    padding: 10px 15px 10px 15px;
    color: white;
    text-decoration: none;
    background: linear-gradient(0turn, transparent 15%, #e66465 20%, transparent 10%) no-repeat;
    background-size: 0 100%;
    transition: background-size .3s;
}

.ch-topbar-button:hover {
    cursor: pointer;
    background-size: 100% 100%;
    
}
/*
.ch-topbar-button-hover{
    background: linear-gradient(0turn, transparent 15%, #e66465 20%, transparent 10%) no-repeat;
    background-size: 100% 100%;
}
*/

/*.p {
    
    background: linear-gradient(0turn, transparent 15%, #e66465 20%, transparent 10%) no-repeat;
    background-size: 0 100%;
    transition: linear;

        
    linear-gradient(0.50turn, transparent 10%, #e66465 70%, transparent 10%) no-repeat;*/


@media screen and (min-width: 1500px) {
    .content-width{
        width: 1100px;        
    }
}
@media screen and (max-width: 1500px) {
    .content-width{
        width: 75%;        
    }  
}

.repaire-body{
    padding-left: 250px;
    padding-top: 50px;
}

.repaire-root {
    position: relative;
    background-color: rgb(7,15,24);
    min-height: 100vh;
}

.content-block-property{
    display: inline-block;
    min-height: 150px;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}



/*TO DO: User devra pouvoir personnaliser sa banniere par un chgt de couleur ou une image apportée*/
.banner-block {
    display: inline-block;
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
    
}

.repaire-avatar{
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    margin-bottom: 15px;
    
}

.repaire-avatar-img{
    display: block;
    padding-top:5px;
    bottom: 15px;
    margin-right: auto;
    margin-left: auto;
}

.repaire-avatar-register{
    display: block;
    padding-top:10px;
    text-align: center;
    font-size: 22px;
    color : rgb(255, 255, 255);
    margin: 0;
}

.points-menu{
    display: inline-block;
    vertical-align: top;
    border-style: dotted;
    border-width: 1px;
    border-color: aliceblue;
    padding: 5px;
}

/* TO DO: User devra pouvoir personnaliser par écrit */
.introduce-yourself{
    border-color: aliceblue;
    border-style: dotted;
    border-width: 1px;
}
/* TO DO: actualisation de la page avec des dernières actualités. Actualités = capacité d'interagir 
  avec les gens qui regardent/suivent en mettant des posts. */
.thread-repaire{
    background-color: aliceblue;
}
/* TO DO: Actualisation du contenu du Hero */
.hero-contents{
    height: 500px;
    background-color: aliceblue;
}

</style>