<template>
    <div class="ch-btn-switch" @click="switchValue()">
        <span class="slider" :class="{ 'active-slider' : value }"></span>
        <span class="round" :class="{ 'active-round' : value }"></span>
    </div>
</template>

<style scoped>

.ch-btn-switch {
    position: relative;
    cursor: pointer;
    height: 20px;
    width: 40px;
}
.slider {
    position: absolute;
    top:5px;
    left:5px;
    right: 5px;
    bottom:5px;
    border-radius: 5px;
    background-color: rgb(78, 78, 78);
    transition: .4s;
}
.round {
    position: absolute;
    top:3px;
    left:5px;
    height: 14px;
    width:14px;
    border-radius: 7px;
    background-color: rgb(206, 198, 200);
    transition: .4s;
}

.active-slider {
    background-color: rgb(7, 72, 83);
}

.active-round {
    background-color: rgb(45, 181, 235);
    transform: translateX(16px);
}
</style>

<script>
export default {
    props: {
        defaultValue: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data () {
        return {
            value : this.defaultValue
        }
    },
    methods : {
        switchValue () {
            this.value = !this.value;
            if(this.value) this.$emit('activate-btn')
            else this.$emit('desactivate-btn')
        }
    }
}
</script>
