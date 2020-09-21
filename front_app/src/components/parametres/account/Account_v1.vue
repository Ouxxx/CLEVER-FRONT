<template>
    <div class="account-root">
        <table>
            <tr>
                <td><p>Matricule :</p></td>
                <td><p>{{$store.getters.getId}}</p></td>
            </tr>
            <tr>
                <td><p>Nom :</p></td>
                <td><p>Kokoro</p></td>
            </tr>
            <tr>
                <td><p>Prénom :</p></td>
                <td><p>Sukiru Kokoro</p></td>
            </tr>
            <tr>
                <td><p>Mot de passe :</p></td>
                <td><p>**********</p></td>
                <td><p class="clickable" @click="changePassword()">Modifier mon mot de passe</p></td>
            </tr>
            <tr>
                <td><p>E-mail :</p></td>
                <td><p>laplusbelle@suki.fr</p></td>
                <td><p class="clickable" @click="changeEmail()">Modifier mon adresse e-mail</p></td>
            </tr>
            <tr>
                <td><p>Téléphone :</p></td>
                <td><p>0600000000</p></td>
                <td><p class="clickable" @click="changePhone()">Modifier mon numéro de télephone</p></td>
            </tr>
            <tr>
                <td><p>Membre depuis :</p></td>
                <td><p>11/09/2020</p></td>
            </tr>
            <tr>
                <td></td><td></td>
                <td><p class="clickable" @click="changePhone()">Supprimer mon compte</p></td>
            </tr>
        </table>


    </div>
</template>

<script>

export default {
    methods : {
        changePassword () {
            console.log("Vous tentez de changeer votre mot de passe.")
        },
        changeEmail () {
            console.log("Vous tentez de changeer votre Email.")
        },
        changePhone () {
            console.log("Vous tentez de changeer votre numéro de télephone.")
        }
    }
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .account-root {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .account-root {
        margin: 100px auto;
        width: 1000px;
    }    
}

.account-root table{
    margin: auto
}

.account-root p {
    color: white;
    margin: 10px 50px ;
}
.clickable {
    text-decoration: underline;
}


</style>