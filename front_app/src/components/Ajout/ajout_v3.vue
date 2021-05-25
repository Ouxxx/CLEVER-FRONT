<template>
    
    <div class="add-root">
        <sidebar-ch></sidebar-ch>
        <header-ch></header-ch>
        <div class="categories-blocks">
            <div class="top">
                <div class="lesson test" @click="goToFormOne()">
                    <div class="title">Cours</div>
                    <img class="icon" src="../../assets/img/mini-plus.png">
                    <div class="description">
                    <p>Contenu unique sur un sujet unique.</p>
                </div>
            </div>
            <div class="tutorial test">
                <div class="title">Tutoriel</div>
                <img class="icon" src="../../assets/img/mini-plus.png">
                <div class="description">
                    <p>Guide favorisant la transmission directe d'un savoir
                       au travers d'un enchaînement d'étapes.</p>
                </div>
            </div>
            <div class="popular test">
                <div class="title">Vulgarisation</div>
                <img class="icon" src="../../assets/img/mini-plus.png">
                <div class="description">
                    <p>Contenu unique sur un sujet unique.</p>
                </div>
            </div>
            </div>
            <div class="bot">
                <div class="exercises test">
                <div class="title">Exercices</div>
                <img class="icon" src="../../assets/img/mini-plus.png">
                <div class="description">
                    <p>Proposez une source d'entrainement. Nous vous conseillons de le faire sur sujet unique.</p>
                </div>
            </div>
            <div class="training test">
                <div class="title">Formation</div>
                <img class="icon" src="../../assets/img/mini-plus.png">
                <div class="description">
                    <p>Vous souhaitez créer un contenu multi-catégories 
                       axé autour d'un sujet unique ? Alors cette catégorie sera préférée.</p>
                </div>
            </div>
            <div class="book test">
                <div class="title">Ouvrage</div>
                <img class="icon" src="../../assets/img/mini-plus.png">
                <div class="description">
                    <p>Contenu unique sur un sujet unique.</p>
                </div>
            </div>
            </div>
        </div>
        
    
    </div>
</template>

<script>
import headerCh from '../common/header/Header_v5'
import sidebarCh from '../common/sidebar/Sidebar_v2'
export default {
    components : {headerCh, sidebarCh},
    methods : {
        goToFormOne : function () {
            this.$router.push('/addformone')
        },
        goToFormTwo : function () {
            this.$router.push('/addformone')
        },
        goToFormThree : function () {
            this.$router.push('/addformone')
        }
    }
}
</script>

<style scoped>

.add-root {
    background-color: rgb(0,10,26);
    min-height: 100vh;
    position: relative;
}

.categories-blocks {
    padding-top: 50px;
    color: white;
    margin-left: 50px;
}

.test {
    display: inline-block;
    height: 300px;
    width: 500px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
}

.lesson {
    background-color: darkorchid;   
}

.tutorial {
    background-color: yellow;
}

.popular {
    background-color: greenyellow;   
}

.exercises {
    background-color: orange;   
}

.training {
    background-color: darkturquoise;
}

.book {
    background-color: rgb(139, 0, 139);   
}

.title {
    display: inline-block;
}

.icon {
    display: inline-block;
}

</style>