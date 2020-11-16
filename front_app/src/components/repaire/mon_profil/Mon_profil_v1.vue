<template>
    <div class="repaire-root">

        <banner />
    
        <div class="introduce-repaire content-block-property">
                <div class="flexbox">
                    <textarea class="input-text" value="text-input" rows=15 cols=200px>
                    </textarea>
                    <div class="logo-bar">
                        <img class="instagram logo" src="@/assets/img/instagram.png" alt="instagram">
                        <img class="linkedin logo" src="@/assets/img/linkedin.png" alt="linkedin">
                        <img class="twitter logo" src="@/assets/img/twitter.png" alt="twitter">
                    </div>
                </div>
        </div>
        
        <div class="dropdown-thread ">

            <div class="thread-repaire content-block-property">

                <div class="one-thread">
                    <div class="container">
                        <img class="img-thread" src="@/assets/img/example-home.png" alt="img-thread">
                    </div>
                    <div class="input-thread" v-bind:class="{'post-close': isPostClose}" style="color:red">
                        sfsqjkdfsdjq
                        fdsdfksqdqs
                        <br>
                        qfsfqsdsf
                        <br>
                        fdsdfksqdqsfdsfsqd
                        <br>
                        fdsdfksqdqsfdsfsqdf
                        <br>
                        dfsqsdf
                        <br>
                        sfdqsdffsd
                        <br>
                        fdsfqsddfqsq
                        <br>
                        fdsdfksqdqsfdsfsqd
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        ssdfjsdfjkkldf
                        br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        dffkjfsqdjkqsfd
                        f

                        fsdqqsdf
                    </div>
                    <button class="open-up"  v-on:click="openUp">{{buttonText}}
                    </button>
                </div>
            </div>
        </div>

        <div class="contents-hero">
            <div class="contents-repaire content-block-property">
            </div>
        </div>
   
    </div>
</template>

<script>

import banner from '../../common/banner/Banner_v1'
//import postOne from './postOne'

export default {
    components: {banner },
    data () {
        return {
            hover: false,
            bannerUrl : '@/assets/img/banner_example.jpg',
            bannerBackground : {
                background : 'url(' + require('@/assets/img/banner_example.jpg') + ')' 
            },
            buttonText : "+",
            isPostClose : true,
        }
    },
    methods:{
        openUp : function () {
            this.isPostClose = !this.isPostClose
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

.repaire-root {
    position: relative;
    background-color: rgb(7,15,24);
    min-height: 100vh;
    padding-bottom: 30px;
    
}

/* Body */

.content-block-property {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: aliceblue;
}

.introduce-repaire {
    display: inline-block;
}

.logo-bar {
    margin-right:20px;
    margin-left:10px;
}

.logo {
    display: block;
    margin-top:5px;
    overflow:hidden;
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    border-radius:50px;
    width:30px;
    height:30px;
    cursor: pointer;
}

.input-text {
    float: left;
    margin-left: 50px;
    width: 95%;
    height:90%;
    resize: none;
}

.flexbox {
    display:flex;
}

.one-thread {
    display: flex;
    margin-left: 50px;
    border: dotted;
    width: 400px; 
}

.container {
    background: rgb(231, 231, 231);
    width: auto;
}

.input-thread {
    resize: none;
    width: 300px;
}

.open-up {
    cursor: pointer;
    width: 20%;
}

.post-close{
    overflow: hidden;
    height:20px;
}

.dropdown-thread {
    position: relative;
    height: 200px;
}

.contents-hero {
    position: relative;
    
}

.img-thread {
    height: 100px;
    width: 100px;
}

</style>