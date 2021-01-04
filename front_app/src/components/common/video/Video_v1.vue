<template>
    <div class="video-root" :style="styleSize">
        <div class="video-background">
            <img :src="image" alt="">
        </div>
        <div class="video-desc">
            <div class="video-desc-title">
                <p>{{ this.title }}</p>
            </div>
            <div class="video-desc-author">
                <p>{{ this.author }}</p>
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
            default: require('@/assets/img/video_img_default.jpg')
        },
        title: {
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
    padding: 4px;
    cursor: pointer;
}

/*
.video-background img:hover {
    position: relative;
    z-index: 1;
    transform: scale(1.2);
    cursor: pointer;
}
*/

.video-background img{
    width: 100%;
    height: 100%;
}

.video-desc {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    transition: .5s ease;
    margin: 5px;
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

</style>
