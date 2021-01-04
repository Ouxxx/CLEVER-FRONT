<template>
    <table class="sidebar-button-root" @click="move()"  @mouseover="setIsOver(true)" @mouseout="setIsOver(false)">
        <tr>
            <td>
                <slot></slot>
            </td>
            <td>
                <p class="button-name" :class="{'sidebar-button-selected-p': selected, 'sidebar-p-over' : isOver}">{{ name }}</p>
            </td>
        </tr>
    </table>

</template>

<script>
export default {
    props:{
        name : {
            type: String,
            required: true
        },
        moveTo: {
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
            isOver: false            
        }
    },
    methods: {
        move () {
            if(this.moveTo != '' && this.moveTo != this.$route.fullPath){
                console.log('this.moveTo = ' + this.moveTo)
                console.log(this)
                this.$router.push(this.moveTo)
            }
        },
        setIsOver (over) {
            this.isOver = over
        }

    }
}
</script>

<style scoped>
.sidebar-button-root {
    padding-right: auto;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.button-name {
    display: inline-block;
    color: aliceblue;
    font-family: sans-serif;
    margin: 0; 
}

.sidebar-p-over {
    color: rgba(218,165, 32, 0.6);

}

.sidebar-button-selected-p {
    color: rgba(218,165, 32, 1);
}
</style>






