<template>
    <div class="video-box-root" :style="styleRoot">
        <div class="video-box-container">
            <div class="video-box-left">
                <ch-video :docid="docid" :title="title" :author="author" :image="image" :favorite="favorite" :width="videoWidth"
                    @click-on-star="switchFavorite(docid)" />
            </div>
            <div class="video-box-right">
                <div class="video-box-descr">
                    <p>petite description </p>

                </div>
                <!-- <div class="video-honor-tags"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import chVideo from '../video/Video_v1'

var container;
export default {
    components: { chVideo },
    props: {
        docid: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        categorie: {
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
    data () {
        return {
            videoWidth : 0, // initialisé dans le mounted
            marginSize : 4
        }
    },
    methods : {
        switchFavorite : function () {
            this.$emit('click-on-star')
        },
        onResize : function () {
            this.videoWidth = container.offsetWidth * 45/100;
        }
    },
    computed : {
        ...mapGetters([ 'getCategorieByName' ]),
        styleRoot : function () {
            var color = this.getCategorieByName(this.categorie).colorRef;
            return {
                'width' : this.width - 2 * this.marginSize + 'px',
                'margin-right' : this.marginSize + 'px',
                'margin-left' : this.marginSize + 'px',
                'background-color' : 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + 0.1 + ')',
                'border-color' : 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + 0.6 + ')'
            }
        }
    },
    mounted () {
        container = document.getElementsByClassName('video-box-root')[0];
        this.videoWidth = container.offsetWidth * 45/100;
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onResize)
    }

}
</script>

<style scoped>
.video-box-root {
    margin : 5px;
    position: relative;
    display: inline-block;
    padding: 4px;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
}
.video-box-container {
    display: flex;

}
.video-box-right {
    padding: 0 10px
}

</style>
