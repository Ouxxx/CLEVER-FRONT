<template>
    <div class="privacy-root">
        <div class="section">
            <p>Si vous choisissez de ne plus recevoir de mail/SMS de notre part, vous ne serez plus éligible à la sécurité par multi-validation.</p>
            <table>
                <tr>
                    <td class="privacy-question"><p>Recevoir les e-mails de CleverHero</p></td>
                    <td>
                        <div class="centered"><switch-button /></div>
                    </td>
                </tr>
                <tr>
                    <td class="privacy-question"><p>Recevoir des SMS de CleverHero</p></td>
                    <td>
                        <div class="centered"><switch-button :defaultValue="true" /></div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="section">
            <p>
                En desactivant cette fonctionnalité, la fenêtre automatique de notation n'apparaîtra plus après le visionage du contenu. 
                Pour aider la comunauté, pensez à laisser une évaluation. Autrement une notation positive automatique sera attribuée.
            </p>
            <table>
                <tr>
                    <td class="privacy-question"><p>Me demander mon avis en fin de contenu</p></td>
                    <td>
                        <div class="centered"><switch-button :defaultValue="false" /></div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
import switchButton from '../../common/button/Btn_switch_v1'

export default {
    components: {switchButton}
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .privacy-root {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .privacy-root {
        margin: 100px auto;
        width: 1000px;
    }    
}

.privacy-root table{
    margin: auto
}

table p {
    margin: 10px 50px ;
}

.privacy-question {
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

</style>