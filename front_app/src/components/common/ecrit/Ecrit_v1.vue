<template>
    <div class="ecrit-root" :style="rootSize">
        <div class="ecrit-img">
            <div class="ecrit-background">
                <img :src="image" alt="" :style="imgSize" >
            </div>
            <div class="ecrit-desc">
                <p>{{ this.description }}</p>
            </div>
        </div>
        <div class="ecrit-infos">
            <div class="ecrit-infos-titre">
                <p>{{ this.title }}</p>
            </div>
            <div class="ecrit-infos-divers">
                <p>{{ this.author}}</p>
            </div>
        </div>
            
    </div>    
</template>

<script>
export default {
    props: {
        docid: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
            default: require('@/assets/img/livre_img_default.png')
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            required: true
        }
    },
    computed: {
        rootSize : function () {
            return {
                width : this.width + 'px'
            }
        },
        imgSize : function () {
            return {
                height : this.width * 3 / 2 + 'px',
            }
        }
    }
}
</script>

<style scoped>

.ecrit-root {
    position: relative;
    display: inline-block;
    padding: 4px;
    cursor: pointer;
}

.ecrit-img {
    position: relative;
}

.ecrit-desc {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(5, 7, 21, 0.88);
    opacity: 0;
    transition: .5s ease;
}
.ecrit-desc:hover {
    opacity: 1;
}
.ecrit-desc p{
    color: white;
}
/*
.ecrit-background img{
    width: 200px;
    height: 300px;
}
*/
.ecrit-background img{
    width: 100%;
    height: 100%;
}
.ecrit-infos {
    padding-left: 5px;
}

.ecrit-infos p {
    margin: 0;
}

.ecrit-infos-titre {
    color: white;

}

.ecrit-infos-divers {
    color: rgb(133, 128, 128);
}

</style>
