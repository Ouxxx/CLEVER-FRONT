<template>
    <div class="header-root">
        <div class="header-left" >
            <img src="../../../assets/img/logoCH.png" alt="Logo CH" @click="goHome()">
        </div>
        <div class="header-center" >
            <input type="text" v-model="search" >
        </div>
        <div class="header-right" >
            <div v-if="$store.getters.getToken">
                <div class="header-avatar" >
                    <div class="header-avatar-img" >
                        <img src="../../../assets/img/avatar-circle-user.png" alt="avatar" >
                    </div>
                    <div class="header-avatar-register" >
                        <p>{{$store.getters.getId}}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="header-connexion">
                    <p>Connexion</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            search: ''
        }
    },
    methods: {
        goHome () {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

.header-root {
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

</style>


