<template>
    <div class="post-root" v-bind:class="{'post-root-closed':isClosed}">
        <div class="container">
            <div class="img-container"> 
                <img class="img-post" v-bind:class="{'img-closed':isClosed}" :src="postImage" alt="img-thread"> 
            </div>
            <div class="block-right-container" v-bind:class="{'block-right-container-closed':isClosed}">
                <p class="text-post" v-bind:class="{'text-post-closed':isClosed}">{{this.postText}}</p>
                <p v-show="isClosed">...</p>
                <div class="button-post" v-on:click="switchButton" v-bind:class="{'button-post-hover':isHover}" 
                v-on:mouseover="setHover(true)" v-on:mouseout="setHover(false)">
                    <p class="button-post-p" v-bind:class="{'button-post-p-hover':isHover}">{{buttonText}}</p>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    props : {
        postText : {
            type: String,
            require: true
        },
        postImage : {
            type: String,
            default: require('@/assets/img/banner_example.jpg')
        }
    },
    data () {
        return {
            isClosed : true,
            buttonText : 'Voir plus',
            isHover : false,
        }
    },
    methods: {
        switchButton : function () {
            this.isClosed= !this.isClosed
            if (this.isClosed) {
                this.buttonText = "Voir plus"
            } else  {
                this.buttonText = "Voir moins"
            }
        },
        setHover : function (x) {
            this.isHover = x
        }
    }
}
</script>

<style scoped>
.post-root {
    background: rgb(241,241,241);
    margin: 5px;
    border-radius: 5px;
    max-width:2000px;
}

.post-root-closed {
    display: inline-block;
    height: 150px;
}

.post-root p {
    margin: 0;
}

.container {
    display: flex;
}

.img-container {
    width: 50%;
}

.img-post {
    vertical-align: bottom;
    padding: 10px;
    width: 100%;
}

.img-closed {
    width: 150px;
    height:150px;
}

.block-right-container {
    width: 50%;
    padding:10px;
}

.block-right-container-closed {
    width: auto;
}

.text-post {
    color: black;
}


.text-post-closed {
    overflow: hidden;
    height: 55px;
    width: 250px;
}

.button-post {
    display: inline-block;
    bottom: 0;
    margin-top: 10px;
    padding: 3px 10px;
    text-align: center;
    line-height: 2em;
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0,0.4);
    border-radius: 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.button-post-hover {
    background-color: rgba(0,0,0,0.6);
}


.button-post-p-hover {
    color: rgb(168, 135, 75);
}

</style>