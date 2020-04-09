<template>
    <div class="header-root">
        <div class="header-home">

            <div class="header-elem">
                <img class="header-logo-img" src="../../assets/img/logoCH.png" alt="CHlogo"
                        @click="goHome()" >
            </div>

            <div class="header-elem header-search" >
                <input class="header-search-input header-search-width" type="text" v-model="search" >
            </div>

            <div class="header-elem header-avatar">
                <img class="header-avatar-img" 
                        src="../../assets/img/forms_bouton.png" alt="avatar">
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
    position: fixed;
    background-color: rgb(22,24,35);
    width: 100%;
}

.header-root img {
    height: 40px;
}

.header-home {
    position: relative;
}

.header-elem {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
}


.header-search {
    margin-left: 40px;
}

.header-search-input {
    font-size: 1.2em;
    padding: 5px 0px 5px 5px;
    border-style: solid;
    border-color: black;
    border-radius: 6px;
}

@media screen and (min-width: 1200px) {
    .header-search-width {
        width: 900px;
    }
}

@media screen and (max-width: 1200px) {
    .header-search-width {
        width: 600px;
    }
}

@media screen and (max-width: 900px) {
    .header-search-width {
        width: 300px;
    }
}

@media screen and (max-width: 600px) {
    .header-search-width {
        width: 100px;
    }
}

.header-avatar{
    float: right;
}


</style>


