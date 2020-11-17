<template>
   <div class="profile-management-root">
        
        <div class="banner">
           <banner></banner>
        </div>
        <div class="profile-main">
            <div class="introduce-profile content-block-property">
                <div class="flexbox">
                        <textarea class="input-text" placeholder="Introduisez-vous et votre contenu"
                        rows="1" cols="40" :input="autoSizeTextArea(this)">
                            Coucou les loulous !
                            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines
                            dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un 
                            professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, 
                            consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature
                            classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
                        </textarea>
                        <div class="logo-bar">
                            <img class="instagram logo" src="@/assets/img/instagram.png" alt="instagram">
                            <img class="linkedin logo" src="@/assets/img/linkedin.png" alt="linkedin">
                            <img class="twitter logo" src="@/assets/img/twitter.png" alt="twitter">
                        </div>
                    </div>
            </div>
        </div>

    </div> 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
export default {
    components : {banner},
    methods: {
        
    }
}
    

</script>

<style scoped>

/* Body */

/*commun*/

.content-block-property {
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-top: 20px;
    background-color: rgba(27,37,48,.8);
}

/*introduce*/

.input-text {
    display: inline;
    width: 90%;
    resize: none;
    overflow: visible;
    min-height: 40px;
    max-height: 100px;
}

.logo-bar {
    display: inline;
}

.logo {
    display: block;
    margin-top:5px;
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    border-radius:50%;
    width:30px;
    height:30px;
    cursor: pointer;
}

</style>