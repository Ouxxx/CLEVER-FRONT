<template>
    <div class="security-root">
        <div class="section">
            <p>Moyens de paiement enregistrés:</p>
            <table class="listing">
                <thead>
                    <td><p>Type</p></td>
                    <td><p>(à définir)</p></td>
                </thead>
                <tr v-for="paymentmethod in paymentmethods" :key="paymentmethod.payementName">
                    <td><p>{{ paymentmethod.type }}</p></td>
                    <td><p>{{ paymentmethod.paymentName }}</p></td>
                </tr>
            </table>
        </div>
        <div class="section">
            <p>Détail des commandes:</p>
            <table class="listing">
                <thead>
                    <td><p>Date</p></td>
                    <td><p>Intitulé</p></td>
                    <td><p>Moyen de paiement</p></td>
                    <td><p>Montant</p></td>
                </thead>
                <tr v-for="purchase in purchases" :key="purchase.id">
                    <td><p>{{ purchase.date }}</p></td>
                    <td><p>{{ purchase.contenu }}</p></td>
                    <td><p>{{ purchase.methodePaiement }}</p></td>
                    <td><p>{{ purchase.montant }}</p></td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>

export default {
    data () {
        return {
            paymentmethods : [
                {
                    'type' : 'Visa',
                    'paymentName' : '****-2000',
                },{
                    'type' : 'Paypal',
                    'paymentName' : 'adressemailassociée@blabla.fr',
                }
            ],
            purchases : [
                {
                    'id' : '14092020',
                    'methodePaiement' : 'Visa',
                    'contenu' : 'SukiHome',
                    'date' : '14/09/2020',
                    'montant' : '13.20'
                },{
                    'id' : '14092020',
                    'methodePaiement' : 'Visa',
                    'contenu' : 'SukiHome',
                    'date' : '14/09/2020',
                    'montant' : 'Montrouge'
                }
            ]
        }
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