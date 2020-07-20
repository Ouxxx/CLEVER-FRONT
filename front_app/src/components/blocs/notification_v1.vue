<template>
<div class="notification-root" :class="[ err == null || err ? 'notification-root-error' : '']">
    <p class="notification-p" :class="[ err == null || err ? 'notification-p-error' : '']">
        {{ err == null || err + ':' + message }}
    </p>
</div>    
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        isErr:{
            type: String,
            required: false
        }
    },

    computed : {
        err: function () {
            return !(this.isErr == false)
        }
    }
}
</script>

<style scoped>

.notification-root {
    margin: 10px 60px 0;
    padding: 0 15px;
    border-style: solid;
    border-radius: 7px;
    border-color: rgb(0,139,139); 
    border-width: 2px;
    background-color: rgb(0,139,139,0.2); 
}

.notification-root-error{
    border-color: red;
    background-color: rgb(255,0,0,0.2);
}

.notification-p {
    color: rgb(0,139,139);
    margin: 5px
}

.notification-p-error {
    color: red;
}


</style>