<template>
    <table class="sidebar-button-root" @click="move()">
        <tr>
            <td>
                <slot></slot>
            </td>
            <td>
                <p class="button-name">{{ name }}</p>
            </td>
        </tr>
    </table>

</template>

<style scoped>
.sidebar-button-root {
    padding-right: auto
}

.button-name {
    display: inline-block;
    color: aliceblue;
    font-family: sans-serif;
    margin: 0; 
}
</style>


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
        enable: {
            default: true
        }

    },
    data () {
        return {
            
        }
    },
    methods: {
        move () {
            console.log(this)
            if(this.moveTo === ''){
                //this.$router.go(0)
            }else{
                this.$router.push(this.moveTo)
            }
        }
    }
}
</script>



