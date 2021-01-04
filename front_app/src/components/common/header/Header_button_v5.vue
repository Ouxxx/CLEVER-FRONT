<template>
    <div class="ch-header-button" :class="{'ch-header-button-selected': selected}"
            @click="$emit('button-selected')" @mouseover="setIsOver(true)" @mouseout="setIsOver(false)">
        <p class="ch-header-p" :class="{'ch-header-p-selected' : selected, 'ch-header-p-over' : isOver}">{{ buttonName }}</p>
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

.ch-header-button {
    display: inline-block;
    cursor: pointer;
    padding: 0 15px;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.ch-header-button-selected {
    background: linear-gradient(rgba(194, 190, 190, 0.1), rgb(255,255,255,0));
}

.ch-header-p{
    color:rgb(167, 167, 167);
}
.ch-header-p-selected{
    color: white;
}
.ch-header-p-over {
    color: white;
}

</style>




