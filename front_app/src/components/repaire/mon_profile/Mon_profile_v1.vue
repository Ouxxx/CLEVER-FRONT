<template>
    <div class="repaire-root">

        <sidebar-ch></sidebar-ch>

        <header-ch></header-ch>

        <div class="repaire-body">
            <div class="repaire-topbar">
                <topbarButton buttonName="Mon repaire"></topbarButton>
                <topbarButton buttonName="Gérer ma page"></topbarButton>
                <topbarButton buttonName="Dashboard"></topbarButton>
                <topbarButton buttonName="Mes soutiens"></topbarButton>
            </div>
             
            <div class="dropdown-introduce">
                <div class="introduce-yourself content-block-property">
                </div>
            </div>
                 
            <div class="dropdown-thread">
                <div class="thread-repaire content-block-property content-block-property">
                </div>
            </div>

            <div class="hero-contents content-block-property">
            </div>
        </div>
    </div>
</template>

<script>
import headerCh from '../../blocs/header_v3'
import sidebarCh from '../../blocs/sidebar_v1'
import topbarButton from '../repaire_button_v1'

export default {
    components: { headerCh, sidebarCh, topbarButton },
    data () {
        return {
            hover: false,
            bannerUrl : '@/assets/img/banner_example.jpg',
            bannerBackground : {
                background : 'url(' + require('@/assets/img/banner_example.jpg') + ')' 
            }
        }
    },
}

</script>

<style scoped>

.repaire-root {
    position: relative;
    background-color: rgb(7,15,24);
    min-height: 100vh;
    padding-bottom: 30px;
    
}

/* Body */
.repaire-body {
    display: block;
    margin-left: 20px;
}

.content-block-property{
    display: inline-block;
    width: 100%;
    min-height: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.options {
    vertical-align: top;
    display: inline-block;
}

/*TO DO: User devra pouvoir personnaliser sa banniere par un chgt de couleur ou une image apportée*/
.banner-block {


}




.banner-avatar{

}

.banner-avatar-img img{
}

.banner-supports{

}

.banner-supports img{
}


/* Avatar (image + matricule) en haut à droite */
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
    width:100%;
}

.repaire-avatar-register{
    display: block;
    padding-top:10px;
    text-align: center;
    font-size: 22px;
    color : rgb(255, 255, 255);
    margin: 0;
}

/* Icone de soutien */
.repaire-support-img {
    float: right;
    vertical-align: bottom;
    width:30px;
}

/* TO DO: User devra pouvoir personnaliser par écrit */
.introduce-yourself{
    background-color: aliceblue;
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