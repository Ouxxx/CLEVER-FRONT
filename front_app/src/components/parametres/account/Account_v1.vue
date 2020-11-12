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
                <td><p>Sukiru</p></td>
            </tr>
            <tr>
                <td><p>Mot de passe :</p></td>
                <td><p>**********</p></td>
                <td>
                  <td>
                  <modal v-if="modalSelected == 'change-pwd'" v-on:close-modal="closeModal">
                    <h1>Modification de votre mot de passe</h1>
                  
                    <label class="mid-part" for="old-pwd">Entrez votre ancien mot de passe</label>
                      <input type="text" id="old-pwd" name="old-pwd" required>
                    <label class="mid-part" for="new-pwd">Entrez un nouveau mot de passe</label>
                      <input type="text" id="new-pwd" name="new-pwd" required>
                    <label class="mid-part" for="new-bis-pwd">Confirmez le nouveau mot de passe</label>
                      <input type="text" id="new-bis-pwd" name="new-bis-pwd" required>
                    <button class="validation" v-on:click="postCodePwd()">Je valide</button>
                  </modal>
                <div class="btn btn-open" v-on:click="openModal('change-pwd')"><p class="clickable">Modifier votre mot de passe</p></div>
                </td>
                
            </tr>
            <tr>
                <td><p>E-mail :</p></td>
                <td><p>laplusbelle@suki.fr</p></td>
                <td>
                  <td>
                  <modal v-if="modalSelected == 'change-mail'" v-on:close-modal="closeModal">
                    <h1>Modification de votre adresse e-mail</h1>
                    <label class="mid-part" for="new-mail">Entrez votre nouvel e-mail</label>
                    <input type="text" id="new-mail" name="new-mail" required>
                    <button class="validation" v-on:click="postCodeEmail()">Je valide</button>
                  </modal>
                <div class="btn btn-open" v-on:click="openModal('change-mail')"><p class="clickable">Modifier votre adresse e-mail</p></div>
                </td>
          
            </tr>
            <tr>
                <td><p>Téléphone :</p></td>
                <td><p>0600000000</p></td>
                <td>
                  <td>
                  <modal v-if="modalSelected == 'change-tel'" v-on:close-modal="closeModal">
                    <h1>Modification de votre numéro de téléphone</h1>
                    <label class="mid-part" for="new-phone">Entrez votre nouveau numéro de téléphone</label>
                      <input type="text" id="new-phone" name="new-phone" required>
                    <button class="validation" v-on:click="postCodePhone()">Je valide</button>
                  </modal>
                <div class="btn btn-open" v-on:click="openModal('change-tel')"><p class="clickable">Modifier votre numéro de téléphone</p></div>
                </td>
                
            </tr>
               
            
            <tr>
                <td><p>Membre depuis :</p></td>
                <td><p>11/09/2020</p></td>
            </tr>
            <br><br><br>
            <tr>
              <modal v-if="modalSelected == 'delete-modal'" v-on:close-modal="closeModal">
                <h1>Suppression de compte</h1>
                <div class="mid-part">Êtes-vous sûr de vouloir supprimer votre compte ?</div>
                <div class="foot-part">
                  <button class="yes">Oui, je souhaite supprimer mon compte</button>
                  <button class="no">Non, j'ai changé d'avis</button>
                </div>
              </modal>
              <div class="btn btn-open" v-on:click="openModal('delete-modal')"><p class="clickable">Supprimer mon compte</p></div>
            </tr>
        </table>
    </div>
</template>

<script>
import modal from './modal'
export default {
  data() {
    return {
      modalSelected: ''
    }
  },
  components: {
    'modal': modal
  },
  methods : {
    closeModal : function () {
      this.modalSelected = ''
    },
    openModal : function (modalId) {
      this.modalSelected = modalId
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

table p {
    margin: 10px 50px;
}
.clickable {
    cursor: pointer;
    text-decoration: underline;
}

.mid-part, .validation {
  display: block;
}

.validation {
  margin-top: 20px;
}
</style>