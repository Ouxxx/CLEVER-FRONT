<template>
    <div class="header-root z-index-h2">
        <div class="header-top">
            <div class="header-left" >
                <img src="../../../assets/img/logoCH.png" alt="Logo CH" @click="goToHomePage()">
            </div>
            <div class="header-center" >
                <input type="text" v-model="search" @keyup="onKeyUp" >
            </div>
            <div class="header-right" >
                <div v-if="$store.getters.getToken">
                    <!-- <button class="exit-button" @click="goToWelcomePage()">A bientôt</button> -->
                    <div class="header-avatar" @click="showOptions(true)">
                        <div class="header-avatar-img" >
                            <img src="../../../assets/img/avatar-circle-user.png" alt="avatar" >
                        </div>
                        <div class="header-avatar-register" >
                            <p>{{$store.getters.getId}}</p>
                        </div>
                    </div>
                    <headerModal v-if="isModalOpen" @header-modal-cancel="showOptions(false)" @header-modal-submit="disconnect()" />
                </div>
                <div v-else>
                    <div class="header-connexion" @click="goToWelcomePage()">
                        <p>Connexion</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import headerModal from './Header_modal_v5'
export default {
    components: { headerModal },
    data () {
        return {
            search: '',
            isModalOpen : false
        }
    },
    methods: {
        ...mapMutations([ 'cleanUser' ]),
        goToHomePage () {
            this.$router.push('/home')
        },
        goToWelcomePage () {
            this.$router.push('/')
        },
        showOptions ( b ) {
            this.isModalOpen = b;
        },
        disconnect() {
            this.cleanUser();
            this.goToWelcomePage();
        },
        onKeyUp (event) {
            console.log(event.key);
            if(event.key == 'Enter'){
                this.$router.push('/search')
            }
        }
    }
}
</script>

<style scoped>

.header-root {
    position: fixed;
    width: 100%;
}

.header-top {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(22,24,35);
    border-bottom-style: solid;
    border-color:rgb(71, 71, 71);
    border-width: 1px;
}

.header-left img{
    height: 40px;
    cursor: pointer;
}

.header-center {
    flex: 1 1 auto;
    text-align: center;
}
.header-center input{
    width: 70%;
    font-size: 1.2em;
    padding: 5px 0px 5px 5px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-radius: 6px;
}

.exit-button {
    float: left;
    margin-top: 10px;
    margin-right: 20px;
    cursor: pointer;
    border-color: #f44336;
    color: white;
    background-color: rgb(4, 32, 78);
}

.exit-button:hover {
    background: #f44336;
    color: whitesmoke;
}


.header-right {
    padding: 0 10px;
}

.header-avatar {
    display: flex;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
}

.header-avatar-img img{
    width: 40px;
}

.header-avatar-register p{
    padding: 0 10px;
    color : rgb(189, 178, 28);
}

.header-connexion {
    cursor: pointer;
    padding: 0 10px;
    color: white;
}

.header-bottom {
    position: relative;
    background-color: rgb(22,24,35);

    width: 100%;
    padding-left: 40px;
}
</style>