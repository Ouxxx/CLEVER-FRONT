<template>
    <div class="banner-root" @mouseover="setBannerHover(true)" @mouseout="setBannerHover(false)">
    
        <div class="banner-background">
            <img src="@/assets/testing/banner2.jpg">
        </div>
        <div class="dark-background" v-if="iseditabled">
            <div class="banner-img" v-show="bannerHover && !avatarHover">
                <div class="banner-img-edition">
                    <img src="@/assets/img/plus.png" alt="img2">
                </div>
                
            </div>
            
        </div>
        <div class="banner-avatar" @mouseover="setAvatarHover(true)" @mouseout="setAvatarHover(false)">
            <div class="avatar-img">
                <div class="dark-background-avatar" v-if="iseditabled" v-show="avatarHover">
                     <img class="avatar-img-edition" src="@/assets/img/plus.png" alt="img2">
                </div>
                <img class="fixed-img" src="@/assets/testing/avatarX.png" alt="img1">
            </div>
            <div class="avatar-matricule">
                <p class="avatar-p">{{ $store.getters.getId }}</p>
            </div>
        </div>
            
        <!-- TO DO : Shop not implemented
            
            <div class="banner-shop">
            <div class="shop-img">
                <img src="@/assets/img/shopTest.png">
            </div>
        </div> -->

        <div class="banner-fans">
            <div class="fans-img">
                <img src="@/assets/img/fanTest.png">
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
        },
        iseditabled : {
            type: Boolean,
            default : false
        }
    },
    data () {
        return {
            bannerHover : false,
            avatarHover : false,
        }
    },
    methods : {
        setBannerHover : function (b){
            this.bannerHover=b
        },
        setAvatarHover : function (b){
            this.avatarHover=b
        }
    }
    
}
</script>

<style scoped>

.banner-root {
    position: relative;
    height: 350px;
}

/* Banner */

.banner-background{
    position: absolute;
}

.banner-background img{
    width: 100%;
    height: 350px;
}

.dark-background {
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.banner-img {
    display:flex;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.4)
}

.banner-img-edition{
    margin:auto;
}

.show-button-edition {
    background-color: rgb(0, 0, 0, 0.4);
    cursor: pointer;
}

/* Avatar */


.banner-avatar {
    position: absolute;
    top: 100px;
    left: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));*/
}

.fixed-img {
    display: table-cell;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 5px;
    border-style: solid;
    border-color: rgb(22,24,35);
    border-width: 5px;
}

.avatar-img-edition {
    display: table-cell;
    border-radius: 50%;
    width: 100px;
    height: 100px; 
    padding: 15px;
}

.dark-background-avatar {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.8);
    cursor: pointer;
}

.avatar-p{
    text-align: center;
    border-radius: 5px;
    border-style: solid;
    background-color: rgb(22,24,35);
    color: rgba(218,165, 32, 1);
}

.avatar-img-edition {
    cursor:pointer;
}



/* ----------



.banner-shop {
    position: absolute;
    top: 20px;
    right: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));
} 

 .shop-img img{
    width: 40px;
    height: 40px;
    padding: 5px;
} */

.banner-fans {
    position: absolute;
    bottom: 20px;
    right: 10%;
    /*background: linear-gradient(rgb(22,24,35,0), rgb(22,24,35, 0.8), rgb(22,24,35,0));*/
}

.fans-img img{
    width: 28px;
    height: 30px;
    padding: 5px;
}

</style>
