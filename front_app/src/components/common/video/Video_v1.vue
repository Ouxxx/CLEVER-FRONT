<template>
    <div class="video-root" :style="styleSize">
        <div class="video-background">
            <img :src="image" >
        </div>
        <div class="video-desc">
            <div class="video-desc-title">
                <p>{{ this.title }}</p>
            </div>
            <div class="video-desc-author">
                <p>{{ this.author }}</p>
            </div>
        </div>
        <div class="video-fav">
            <favorite :fav="favorite"  @click-on-star="switchFavorite" />
        </div>
    </div>
</template>

<script>
import favorite from '../button/Button_fav_v1'
export default {
    components: { favorite },
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
        author: {
            type: String,
            required: true
        },
        favorite: {
            type: Boolean,
            required: true
        },
        width: {
            type: Number,
            required: true
        }
    },
    methods : {
        switchFavorite : function () {
            this.$emit('click-on-star')
        }
    },
    computed : {
        styleSize : function () {
            return {
                width : this.width + 'px',
                height : this.width * 9 / 16 + 'px',
            }
        }

    }
}
</script>

<style scoped>

.video-root {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.video-background {
    position: relative;
    width: 100%;
    height: 100%;
    overflow : hidden;
    background-color: black;
}

.video-background img{
    position: absolute;
    max-width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

.video-desc {
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 5px;
    right: 0;
    opacity: 1;
    transition: .5s ease;
    /* margin: 5px; */
}
.video-desc:hover {
    opacity: 0;
}

.video-desc p{
    margin: 0;
    color: white;
}

.video-desc-title p{
    font-size: 1.3em;
    font-weight: bold;
}
.video-fav {
    position: absolute;
    top: 10px;
    right: 10px;
}

</style>
