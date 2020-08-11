<template>
    <div class="banner-root">

        <div class="banner-background">
            <img src="@/assets/testing/banner2.jpg">
        </div>
        <div class="banner-avatar">
            <div class="avatar-img">
                <img src="@/assets/testing/avatarX.png">
            </div>
            <div class="avatar-matricule">
                <p class="avatar-p">{{ $store.getters.getId }}</p>
            </div>
        </div>
            
        <div class="banner-shop">
            <div class="shop-img">
                <img src="@/assets/img/icon_write.png">
            </div>
        </div>

        <div class="banner-fans">
            <div class="fans-img">
                <img src="@/assets/img/icon_support.png">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props : {
        userBanner : {
            type: String
        },
        userAvatar : {
            type: String
        }
    }
    
}
</script>

<style scoped>
.banner-root {
    position: relative;
    height: 300px
}

.banner-background{
    position: absolute;
}

.banner-background img{
    width: 100%;
    height: 300px;
}

.banner-avatar {
    position: absolute;
    top: 80px;
    left: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));*/
}

.avatar-img{
    display: table-cell;
    border-radius: 50%;
    padding: 5px;
}

.avatar-img img{
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 50%;
    border-style: solid;
    border-color: rgb(22,24,35);
    border-width: 5px;
}

.avatar-p{
    text-align: center;
    border-radius: 5px;
    border-style: solid;
    background-color: rgb(22,24,35);
    color: rgba(218,165, 32, 1);
}

.banner-shop {
    position: absolute;
    top: 20px;
    right: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));*/
}

.shop-img img{
    width: 50px;
    height: 50px;
    padding: 5px;
}

.banner-fans {
    position: absolute;
    bottom: 20px;
    right: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));*/
}

.fans-img img{
    width: 50px;
    height: 50px;
    padding: 5px;
}


</style>
