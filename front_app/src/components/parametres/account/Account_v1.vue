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
            <br><br><br>
            <!--<tr><td><p class="clickable">Supprimer mon compte</p></td></tr>-->
            <div class="modal-delete">
              <button class="modal-btn" @click="showModal()">Supprimer mon compte</button>
              <modal v-show="isModalVisible" @close="closeModal()"></modal>
            </div>
            <div class="modal-container" id="modal">
              <transition name="modal-fade">
                <form class="modal-fade-content">
                  <div class="container">
                    <h1>Suppression de compte</h1>
                    <p>Vous allez supprimer définitivement votre compte, êtes-vous sûr de vouloir le faire ?</p>
                    <div class="selected-btn">
                      <button class="cancelbtn" @click="close" type="button">Non</button>
                      <button class="deletebtn" @click="close" type="button">Oui, je supprime</button>
                    </div>
                  </div>
                </form>
              </transition>
            </div>
    
                  
           
        </table>
    </div>
</template>

<script>

export default {
  data () {
    return {
    isModalVisible: false,
    }
  },

  computed: {
  },

  methods : {
    changePassword () {
        console.log("Vous tentez de changer votre mot de passe.")
    },
    changeEmail () {
        console.log("Vous tentez de changer votre Email.")
    },
    changePhone () {
        console.log("Vous tentez de changer votre numéro de télephone.")
    },
    deleteAccount () {
        console.log("Vous tentez de supprimer votre compte")
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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



/* les boutons */
button {
  background-color: transparent;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  text-decoration: underline;
}

button:hover {
  opacity:1;
}

/* les boutons annulation et supp */
.cancelbtn, .deletebtn {
  float: left;
  width: 50%;
}

/* bouton annulation */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* bouton supp*/
.deletebtn {
  background-color: #f44336;
}

/* container */
.container {
  padding: 16px;
  text-align: center;
}

/* modal */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto 15% auto; 
  border: 1px solid #888;
  width: 80%; 
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) MAIS PROBLEME N'APPARAIT PAS*/
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #1aaa2e;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* adaptation petits ecrans */
@media screen and (max-width: 300px) {
  .cancelbtn, .deletebtn {
    width: 100%;
  }
}

</style>