<template>
    <div class="soutiens-root">
        <sidebar-ch></sidebar-ch>
        <header-ch></header-ch>
    
        <div class="page-content">
            <div class="soutiens-functions">
                <div class="soutiens-sort">
                    <select class="ch-select" v-model="sorting">
                        <option value="date">date</option>
                        <option value="matricul">matricule</option>
                        <option value="news">nouveauté</option>
                    </select>
                </div>
            </div>

            <div class="soutiens-content">
                <desc-soutien v-for="soutien in soutiens" :key="soutien.matricul"
                    :matricul="soutien.matricul" :description="soutien.description" :news="soutien.some_news" />
            </div>
        </div>
    </div>
</template>

<script>
import headerCh from '../../blocs/header_v3'
import sidebarCh from '../../blocs/sidebar_v1'
import descSoutien from './Description_soutien_v1'

/*
    TODO:
    + hook created -> devra remplir le tableau soutien
    + les fonctions de tri
*/


export default {
    components: { headerCh, sidebarCh, descSoutien },
    data () {
        return {
            sorting : 'date',
            /* soutiens est un tableaux qui contiendra l'ensemble des utilisateurs soutenus
               un souutien { matricul, avatar, description, some_news, since}
               (some news devra contenir une date pour trier par nouveauté */
            soutiens : [
                {
                    matricul: '100.A.1',
                    description: 'Caesarem adhibitis interrogationibus adhibitis inde aulaeum agenda equitum quidve diluere quaesitum'
                        + ' cuius interrogationibus subinde defensi aurem reginae notarii essent praedoctis.',
                    some_news: true
                },
                {
                    matricul: '100.A.2',
                    description: 'Iis deterruisset tenent qui politus politus probo aut vellem video inquam quod alios satis inquam' 
                        + 'vellem doctrinis videri vellem deterritum.',
                    some_news: false
                },
                {
                    matricul: '100.A.3',
                    description: 'Nostra inligato incessunt aliquotiens arma et gentes repellenteque et sollicite per hostiliter'
                        + 'quotiens explorabat mente vi nostra gentes repperisset si',
                    some_news: false
                },
                {
                    matricul: '100.A.4',
                    description: 'Caesarem adhibitis interrogationibus adhibitis inde aulaeum agenda equitum quidve diluere quaesitum'
                        + ' cuius interrogationibus subinde defensi aurem reginae notarii essent praedoctis.',
                    some_news: true
                },
                {
                    matricul: '100.A.5',
                    description: 'Caesarem adhibitis interrogationibus adhibitis inde aulaeum agenda equitum quidve diluere quaesitum'
                        + ' cuius interrogationibus subinde defensi aurem reginae notarii essent praedoctis.',
                    some_news: false
                },
                {
                    matricul: '100.A.6',
                    description: 'Caesarem adhibitis interrogationibus adhibitis inde aulaeum agenda equitum quidve diluere quaesitum'
                        + ' cuius interrogationibus subinde defensi aurem reginae notarii essent praedoctis.',
                    some_news: true
                }
            ]
        }
    }
    
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .page-content {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .page-content {
        margin: 0 auto;
        width: 1000px;
    }    
}

.soutiens-root {
    background: url("../../../assets/fonds/background_home_v1.png") no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

.soutiens-functions {
    margin: 20px 40px;
    text-align: right;
}

.ch-select {
    background-color: transparent;
    color : rgba(218,165, 32, 1);
    border-style: solid;
    border-color: rgba(218,165, 32, 1);
    font-size: 1.1em;
    padding: 5px;
}

</style>