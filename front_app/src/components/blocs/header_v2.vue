<template>
    <table class="header-table">
        <tr class="header-tr" >
            <td class="header-td td-logo">
                <img class="header-logo-img" src="../../assets/img/logoCH.png" alt="CHlogo"
                        @click="goHome()" >
            </td>
            <td class="header-td td-search" >
                <input class="search-input" type="text" v-model="search" >
            </td>
            <td class="header-td td-avatar">
                <img class="header-avatar-img" 
                        src="../../assets/img/forms_bouton.png" alt="avatar">
            </td>
        </tr>
    </table>
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
.header-table {
    background-color: transparent;
    height: 50px;
    width: 100%;
    padding: 0;
}
.header-tr {
    padding: 0;
}
.header-td {
    padding: 0;
}
.header-logo-img {
    height: 40px;
}
.search-input {
    font-size: 1.2em;
    width: 80%;
    max-width: 700px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    margin-left: 30px;
    border-style: solid;
    border-color: black;
    border-radius: 6px;
}
.header-user-infos{
    width: 100%;
    height: 40px;
}
.header-username-p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2em;
    text-align: center;

    font-weight: bold;
    color: #ffffff;
}
.td-logo {
    width: 200px;
}

.td-avatar {
    width: 50px;
}

.header-avatar-img {
    height: 40px;
}
</style>


