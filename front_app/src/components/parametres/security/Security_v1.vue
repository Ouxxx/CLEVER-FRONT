<template>
    <div class="security-root">
        <div class="section">
            <p>Multi-validations :</p>
            <table>
                <tr>
                    <td class="security-question"><p>SMS</p></td>
                    <td>
                        <div class="centered"><switch-button /></div>
                    </td>
                </tr>
                <tr>
                    <td class="security-question"><p>E-mail</p></td>
                    <td>
                        <div class="centered"><switch-button :defaultValue="true" /></div>
                    </td>
                </tr>
                <tr>
                    <td class="privacy-question"><p>Questions secrètes</p></td>
                    <td>
                        <div class="centered"><switch-button :defaultValue="true" /></div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="section">
            <p>Liste des appareils enregistrés:</p>
            <table class="listing">
                <thead>
                    <td :style="styleColumnWidth"><p>Nom de l'appareil</p></td>
                    <td :style="styleColumnWidth"><p>Dernière connexion</p></td>
                    <td :style="styleColumnWidth"><p>Position géographique</p></td>
                </thead>
                <tr v-for="device in devices" :key="device.name">
                    <td :style="styleColumnWidth"><p>{{ device.name }}</p></td>
                    <td :style="styleColumnWidth"><p>{{ device.lastConnexion }}</p></td>
                    <td :style="styleColumnWidth"><p>{{ device.localisation }}</p></td>
                </tr>
            </table>
        </div>
        <div class="section">
            <p>Historique des connexions:</p>
            <table class="listing">
                <thead>
                    <td :style="styleColumnWidth"><p>Date de connexion</p></td>
                    <td :style="styleColumnWidth"><p>Nom de l'appareil</p></td>
                    <td :style="styleColumnWidth"><p>Position géographique</p></td>
                </thead>
                <tr v-for="connexion in connexions" :key="connexion.id">
                    <td :style="styleColumnWidth"><p>{{ connexion.date }}</p></td>
                    <td :style="styleColumnWidth"><p>{{ connexion.name }}</p></td>
                    <td :style="styleColumnWidth"><p>{{ connexion.localisation }}</p></td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
import switchButton from '../../common/button/Btn_switch_v1'

var blocContent
export default {
    components: {switchButton},
    data () {
        return {
            devices : [
                {
                    'name' : 'SukiHome',
                    'lastConnexion' : '14/09/2020',
                    'localisation' : 'Mars'
                },{
                    'name' : 'SukiPhone',
                    'lastConnexion' : '26/09/2020',
                    'localisation' : 'Mars'
                }
            ],
            connexions : [
                {
                    'id' : '14092020',
                    'name' : 'SukiHome',
                    'date' : '14/09/2020',
                    'localisation' : 'Mars'
                },{
                    'id' : '26092020',
                    'name' : 'SukiPhone',
                    'date' : '26/09/2020',
                    'localisation' : 'Mars'
                }
            ],
            columnWidth: 0 // valeur qui changera immediatement lors du hook mounted
        }
    },
    computed : {
        styleColumnWidth : function () {
            return {
                'width' : this.columnWidth + 'px',
            }
        }
    },
    mounted () {
        blocContent = document.getElementsByClassName('security-root')[0]
        this.columnWidth = blocContent.offsetWidth / 3
    }
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .security-root {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .security-root {
        margin: 100px auto;
        width: 1000px;
    }    
}

.security-root table{
    margin: auto;
    width: 100%;
}

table p {
    margin: 10px 50px;
}

.security-question {
    width: 500px;
}

.centered {
    display: block;
    margin: 10px 50px;
    text-align: center;
}
.section {
    margin-bottom: 50px; 
}

.listing {
    background-color: rgb(9, 32, 75);
    border-collapse: collapse;
    border-radius: 5px;
}

.listing thead p {
    text-decoration: underline;
    font-weight: bold;
}

.listing tr {
    border-top-style: solid;
    border-color: rgb(2, 12, 29);
}

</style>