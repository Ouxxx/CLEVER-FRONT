<template>
   <div class="profile-management-root">
        
        <div class="banner">
           <banner></banner>
        </div>
        <div class="profile-main">
            <div class="introduce-profile content-block-property">
                
                <div class="flexbox">Ajouter un Description :
                    <autosizeTextarea name="y" v-model="form.body" placeholder="coucou from parent" />
                </div>
                
                <div class="logo-choice">
                    <div>Lien Facebook : <input /> </div>
                    <div>Lien Instagram : <input /> </div>
                    <div>Autre lien : <input /> </div>
                    <div v-if="linkFacebook">Lien Facebook : <input /> </div>
                </div>
            </div>
            <div class="post-profile content-block-property">
                <div class="new-post">Ajouter un Post :
                    <autosizeTextarea name="y" v-model="form.body" placeholder="coucou from parent" />
                </div>
                
                <div class="post-one">
                    <postOne :postText="textExample">
                    </postOne>
                    <div class="img-cross-post">
                         <!-- mettre @click suppression de post-->
                        <img class="cross" src="../../../assets/img/cross_menu.png" alt="cross_menu"> 
                    </div>
                </div>
            </div>
            <div class="contents-profile content-block-property">

            </div>

            

        </div>

    </div> 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
import autosizeTextarea from '../../common/autosize_textarea/autosize_textarea_v1'
import postOne from '../../common/profile_gestion/postOne'

export default {
    components : {banner, autosizeTextarea, postOne},
    data () {
        return {
            form: {
                body: ''
            },
            textExample : "Coucou les loulous Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, , proviennent de la section 1.10.32.",
        }
    }
}
    

</script>

<style scoped>

.test {
    color: white;
}

/* Body */

/*commun*/

.content-block-property {
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-top: 20px;
    background-color: rgba(27,37,48,.8);
}

/*introduce*/


.description-post {
    display: block;
    color: white;
}

.flexbox {
    display: block;
    color: white;
    max-width: 900px;  
}

.logo-choice {
    color:white;
}

/* post */

.text-area-post {
    width: 400px;
    height: 200px;
    resize: none;
}

.new-post {
    display: flex;
    color: white;
    padding-right: 10px;
    text-align: top;
}

.post-one {
    display: flex;
}

.cross {
    margin-top: 5px;
    width: 15px;
    height: 15px;
    cursor: pointer;
}

</style>