<template>
    <div class="ch-menu-button" :class="{'ch-menu-button-selected': selected}"
            @click="$emit('button-selected')" @mouseover="setIsOver(true)" @mouseout="setIsOver(false)">
        <p class="ch-menu-p" :class="{'ch-menu-p-selected' : selected, 'ch-menu-p-over' : isOver}">{{ buttonName }}</p>
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
            console.log('isOver =' + this.isOver)
        }
    }
}
</script>

<style scoped>

.ch-menu-button {
    display: inline-block;
    cursor: pointer;
    padding: 0 15px;
}
.ch-menu-button-selected {
    background: linear-gradient(rgb(255,255,255,0.10), rgb(255,255,255,0));
}

.ch-menu-p{
    color:rgb(167, 167, 167);
}
.ch-menu-p-selected{
    color: white;
}
.ch-menu-p-over {
    color: white;
}

</style>




