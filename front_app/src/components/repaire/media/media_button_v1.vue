<template>
    <div class="media-button" :class="{'media-button-selected': selected}"
            @click="$emit('med-button-selected')" @mouseover="setIsOver(true)" @mouseout="setIsOver(false)">
        <p class="media-button-p" :class="{'media-button-p-selected' : selected, 'media-button-p-over' : isOver}">{{ buttonName }}</p>
    </div>
</template>

<script>
export default {
    props: {
        buttonName: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            isOver : false
        }
    },
    methods: {
        setIsOver(over) {
            this.isOver = over
        }
    }
}
</script>

<style scoped>

.media-button {
    display: inline-block;
    cursor: pointer;
    padding: 0 15px;
}
.media-button-selected {
    background: linear-gradient(rgba(194, 190, 190, 0.1), rgb(255,255,255,0));
}

.media-button-p{
    color:rgb(167, 167, 167);
}
.media-button-p-selected{
    color: white;
}
.media-button-p-over {
    color: white;
}

</style>