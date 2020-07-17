<template>
    <div class="ch-topbar-button" :class="{'ch-topbar-button-selected': selected}"
    @click="selectButton()">
        <p class="ch-topbar-p" :class="{'ch-topbar-p-selected' : selected}">{{ buttonName }}</p>
    </div>
</template>

<script>
export default {
    props: {
        buttonName: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            selected: false,
        }
    },
    methods : {
        selectButton () {
            this.selected = !this.selected
        }
    }
}
</script>

<style scoped>
.ch-topbar-button {
    display: inline-block;
    padding: 10px 15px 10px 15px;
    text-decoration: none;
    background: linear-gradient(0turn, transparent 15%, #e66465 80%, transparent 10%) no-repeat;
    background-size: 0 100%;
    cursor: pointer;
    
}

.ch-topbar-button-selected:focus {
    cursor: pointer;
}

.ch-topbar-p {
    color:rgb(189, 178, 28)
}
.ch-topbar-p:hover {
    color: white;
}
.ch-topbar-p-selected{
    
    color: white;
    text-decoration: none;
    background: linear-gradient(0turn, transparent 15%, #e66465 20%, transparent 10%) no-repeat;
    background-size: 100% 100%;

}
</style>




