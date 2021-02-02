<template>
    <div class="picker-root">
        <div class="picker-search">
            <input class="picker-height" type="text" name="search" 
                placeholder="Rechercher un contenu plus rapidement...">
        </div>
        <div class="picker-filters">
            <div class="picker-btn picker-height" :class="{'selected' : selected === 'video', 'on-hover' : isHover === 'video' }" 
                @click="pick('video')"  @mouseover="setHover('video')" @mouseout="setHover('')"><p>Vidéo</p></div>
            <div class="picker-btn picker-height" :class="{'selected' : selected === 'ecrit', 'on-hover' : isHover === 'ecrit' }" 
                @click="pick('ecrit')"  @mouseover="setHover('ecrit')" @mouseout="setHover('')"><p>Ecrit</p></div>
            <div class="picker-btn picker-height" :class="{'selected' : selected === 'image', 'on-hover' : isHover === 'image' }" 
                @click="pick('image')"  @mouseover="setHover('image')" @mouseout="setHover('')"><p>Image</p></div>
        </div>
        <ch-sorter  @sorter="changeSortType" :selected="this.sortType" />
    </div>
</template>

<script>
import chSorter from '../sorter/Sorter_v1'
export default {
    components : { chSorter },
    props : {
        selected: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            isHover : "",
            sortType : ""
        }
    },
    methods : {
        pick : function (docType) {
            if(docType != this.selected){
                this.$emit('picker-selected', docType)
            }
        },
        changeSortType : function (sortType) {
            this.sortType = sortType
            this.$emit('sorter', sortType)
        },
        setHover(elem) {
            this.isHover = elem
        }
    }
}
</script>

<style scoped>

.picker-root{
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 10px 0px;
}
.picker-root p{
    margin: 0;
    line-height: 2.5em;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.picker-search input{
    width: 300px;
    padding: 0 20px;
    outline: none;
    transition: width 0.4s ease-in-out;
}
.picker-search input:focus{
    width: 600px;
    padding: 0 20px;
}

.picker-filters {
    border-right-style: solid;
    border-right-width: 1px;
    cursor: pointer;
}

.picker-btn {
    display: inline-block;
    width: 80px;
    text-align: center;
    background-color: rgba(218,165, 32, 1);
}

.on-hover {
    background-color: rgba(218,165, 32, 0.6);
}
.selected {
    background-color: rgba(105, 68, 12, 0.6);
}

.picker-sorter-img {
    width: 12px;
    height: 12px;
}
.picker-height{
    height: 40px;

}

</style>

