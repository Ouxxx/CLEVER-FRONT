<template>
    <div class="link-root">
        <modal v-if="isModalOpen" @close-modal="closeModal">
            <h1>Ajouter un lien</h1>
            <table class="link-types">
                <td @click="chooseInput('facebook')"><img src="../../../assets/img/icon_discord.png" alt="logo-discord"></td>
                <td @click="chooseInput('instagram')"><img src="../../../assets/img/icon_instagram.png" alt="logo-discord"></td>
                <td @click="chooseInput('twitter')"><img src="../../../assets/img/icon_twitter.png" alt="logo-discord"></td>
                <td @click="chooseInput('spotify')"><img src="../../../assets/img/icon_spotify.png" alt="logo-discord"></td>
                <td @click="chooseInput('twitch')"><img src="../../../assets/img/icon_discord.png" alt="logo-discord"></td>
                <td @click="chooseInput('discord')"><img src="../../../assets/img/icon_discord.png" alt="logo-discord"></td>
            </table>
            
            <div class="link-input" v-show="prefixInput != ''">
                <label for="prefix-input"><p>{{prefixInput}}</p></label>
                <input type="text" v-model="linkTail">
                <div class="validate-click" @click="addToList()"><p>Je valide</p></div>
            </div>
            
        </modal>
        
        <div class="link-list">
            <!-- Ici rajouter le v-for pour afficher la liste -->
            <div class="link-list-elem">
                <div v-for="elem in linkList" :key="elem.link"> <img :src="elem.image">{{' : ' + elem.link}} </div>
            </div>
        </div> 

        <div class="link-button-area">
            <div class="link-button" @click="openModal">
                <p>Ajouter un lien</p>
            </div>
        </div>
    </div>
</template>

<script>
import modal from '../../common/modal/Modal_v1'

export default {
  components: { modal },
    data () {
        return {
            isModalOpen : false,
            prefixInput : '',
            linkTail : '',
            currentType : '',
            // linkList : contient des objets commme celui ci { type , link }
            // chaque element devra etre present dans une div a l'aide d'un v-for
            linkList : [
             ],
            currentImage : ''
        }
    },
    computed : {


    },
    methods : {
        openModal : function () {
            this.isModalOpen = true
        },
        closeModal : function () {
            this.isModalOpen = false
        },
        chooseInput : function (linkType) {
            switch (linkType) {
                case 'facebook':
                    this.prefixInput = 'https://www.facebook.com/';
                    break;
                case 'instagram':
                    this.prefixInput = 'https://www.instagram.com/';
                    break;
                case 'twitch':
                    this.prefixInput = 'https://www.twitch.tv/';
                    break;
                case 'twitter':
                    this.prefixInput = 'https://twitter.com/';
                    break;
                default:
                    this.prefixInput = 'Autre lien ';
            }
            this.currentType=linkType
        },
        addToList: function (){
            this.linkList.push(
                {
                link: this.prefixInput + this.linkTail,
                image: require('@/assets/img/icon_' + this.currentType + '.png')
                }
            )
            console.log(this.prefixInput+this.linkTail+this.currentType)
        }

    }
}
</script>

<style scoped>

.link-root p{
    margin: 0;
}
.link-button {
    cursor: pointer;
}
.link-types {
    border-spacing: 5px;
}
.link-types td{
    cursor: pointer;
}

.link-input label{
    display: inline-block;
    margin-right: 10px;

}

.type-link-logo{
    display: inline-block;
}

.type-link-text {
    display: inline-block;
}

.validate-click {
    cursor: pointer;
}
</style>