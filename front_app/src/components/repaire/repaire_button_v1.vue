<template>
    <div class="ch-topbar-button" :class="{'ch-topbar-button-selected': selected}"
            @click="$emit('button-selected')" @mouseover="setIsOver(true)" @mouseout="setIsOver(false)">
        <p class="ch-topbar-p" :class="{'ch-topbar-p-selected' : selected, 'ch-topbar-p-over' : isOver}">{{ buttonName }}</p>
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
.ch-topbar-button {
    display: inline-block;
    cursor: pointer;
    padding: 0 15px;
    
    /* 
    text-decoration: none;
    background: linear-gradient(0turn, transparent 15%, #e66465 80%, transparent 10%) no-repeat;
    background-size: 0 100%;
    */
}



.ch-topbar-p{
    color:rgb(167, 167, 167);
}
.ch-topbar-p-selected{
    color: white;
    /*
    text-decoration: none;
    background: linear-gradient(0turn, transparent 15%, #e66465 20%, transparent 10%) no-repeat;
    background-size: 100% 100%;
    */
}
.ch-topbar-p-over {
    color: white;
}



/*
.ch-topbar-button-selected:focus {
     cursor: pointer; 
}
*/

.ch-topbar-button-selected {
    background: linear-gradient(rgb(255,255,255,0.10), rgb(255,255,255,0));
    /* cursor: pointer; */
}

/*
.ch-topbar-p {
    color:rgb(189, 178, 28)
}
Le hover il faut le mettre sur le bouton.
.ch-topbar-p:hover {
    color: white;
}
*/

</style>




