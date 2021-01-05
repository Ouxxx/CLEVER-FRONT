<template>
    <div class="link-root">
        <modal v-if="isModalOpen" @close-modal="closeModal">
            <h1>Ajouter un lien</h1>
            <table class="link-types">
                <td @click="chooseInput('Facebook')"><img src="@/assets/img/icon_discord.png" alt="logo-discord"></td>
                <td @click="chooseInput('Instagram')"><img src="@/assets/img/icon_instagram.png" alt="logo-discord"></td>
                <td @click="chooseInput('Twitter')"><img src="@/assets/img/icon_twitter.png" alt="logo-discord"></td>
                <td @click="chooseInput('Spotify')"><img src="@/assets/img/icon_spotify.png" alt="logo-discord"></td>
                <td @click="chooseInput('Twitch')"><img src="@/assets/img/icon_discord.png" alt="logo-discord"></td>
                <td @click="chooseInput('Discord')"><img src="@/assets/img/icon_discord.png" alt="logo-discord"></td>
            </table>
            
            <div class="link-input" v-show="prefixInput != ''">
                <label for="prefix-input"><p>{{prefixInput}}</p></label><input type="text">
                <div><p>Je valide</p></div>
            </div>
            
        </modal>
        <div class="link-list">
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
            linkList : []
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
                case 'Facebook':
                    this.prefixInput = 'https://www.facebook.com/';
                    break;
                case 'Instagram':
                    this.prefixInput = 'https://www.instagram.com/';
                    break;
                case 'Twitch':
                    this.prefixInput = 'https://www.twitch.tv/';
                    break;
                case 'Twitter':
                    this.prefixInput = 'https://twitter.com/';
                    break;
                default:
                    this.prefixInput = 'Autre lien ';
            }
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
</style>