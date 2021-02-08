<template>
    <div class="shares-root">
        <modal v-if="true" ></modal>
        <div class="shares-item">
            <img src="@/assets/test.png" alt="">
        </div>
        <div class="shares-item">
            <img src="@/assets/testp.png" alt="">
        </div>
    </div>
</template>

<script>
import modal from '../modal/Modal_v2'
export default {
    components : { modal },
    data() {
        return {
            
        }
    }
    
}
</script>

<style scoped>

.shares-root {
    display: inline-flex
}

.shares-item {
    flex-grow: 1;
    padding: 5px;
    background-color: aqua;
}

img {
    /* width : 40px; */
    background-color: blueviolet
}

</style>