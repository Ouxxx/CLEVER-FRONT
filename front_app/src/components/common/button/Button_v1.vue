<template>
    <div class="ch-btn-switch" :class="{ 'active' : value }" @click="switchValue()">
    </div>
</template>


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
<style scoped>

.ch-btn-switch {
    cursor: pointer;
    color: rgb(255, 0, 0, 0.9);
    padding-top: 10px;
    padding-bottom: 10px;
}
.ch-btn-switch p:hover {
    text-decoration: underline;
}

.active {
    color: greenyellow;
}
.ch-btn-switch p{
    display: inline;
    user-select: none;
}

</style>