<template>
    <div>
        <img @click="switchFavorite" :src="isFav" >
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props : {
        fav: {
            type: Boolean,
            required: true
        }
    },
    methods : {
        switchFavorite : function () {
            this.$emit('click-on-star')
        }
    },
    computed : {
        ...mapGetters([ 'getLogoByName' ]),
        isFav : function () {
            return this.fav ? this.getLogoByName('Star-full').path : this.getLogoByName('Star-empty').path;
        }
    }
    
}
</script>