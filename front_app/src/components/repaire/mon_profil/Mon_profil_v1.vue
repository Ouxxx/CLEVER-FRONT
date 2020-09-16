<template>
    <div class="repaire-root">

        <banner />

        <div class="dropdown-introduce">
            <div class="introduce-yourself content-block-property">
            </div>
        </div>
        
        <div class="dropdown-thread">
            <div class="thread-repaire content-block-property content-block-property">
            </div>
        </div>
            
    </div>
</template>

<script>

import banner from '../../common/banner/Banner_v1'

export default {
    components: {banner},
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
    margin-left: 60px;
}

.content-block-property{
    display: inline-block;
    width: 98%;
    min-height: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: aliceblue;
}

.options {
    vertical-align: top;
    display: inline-block;
}

/* image entree repaire */
.entree-repaire-img{
    position: relative;
    
    top: 100px;
    left: 100px;
}

.repaire-first{
    margin-top: 20px;
    height: 600px;
    background-color:rgb(22,24,35);
}

.repaire-first-message{
    
    color:rgb(209, 129, 71);
    margin: auto;
}

.bold-message{
    font-size: 2.1em;
    color:rgb(209, 129, 71);
}
/*TO DO: User devra pouvoir personnaliser sa banniere par un chgt de couleur ou une image apportée*/

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
}
/* TO DO: actualisation de la page avec des dernières actualités. Actualités = capacité d'interagir 
  avec les gens qui regardent/suivent en mettant des posts. */
.thread-repaire{ 

}
/* TO DO: Actualisation du contenu du Hero */
.hero-contents{
    height: 500px;
}




</style>