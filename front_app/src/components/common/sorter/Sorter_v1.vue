<template>
    <div class="sorter-root">
        <div class="sorter-button" @click="openClose()">
            <div class="sorter-button-value"><p>{{value}}</p></div>
            <div class="sorter-button-cross"><p>{{cross}}</p></div>
        </div>
        
        <div v-show="isOpen" class="sorter-choices">
            <div class="sorter-choice" :class="{'on-hover' : isHover === 'date', 'selected' : selected === 'Date' }"
                    @click="choose('Date')" @mouseover="setHover('date')" @mouseout="setHover('')"><p>Date</p></div>
            <div class="sorter-choice" :class="{'on-hover' : isHover === 'matricule', 'selected' : selected === 'Matricule' }"
                    @click="choose('Matricule')" @mouseover="setHover('matricule')" @mouseout="setHover('')"><p>Matricule</p></div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        selected: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            value : "Trier par",
            isOpen : false,
            isHover : "",
            cross : '>'
        }
    },
    methods: {
        choose (value) {
            this.value = value
            this.$emit('sorter', value)
            this.openClose()
        },
        openClose () {
            this.isOpen = !this.isOpen
        },
        setHover(elem) {
            this.isHover = elem
        }
    }

}
</script>

<style scoped>
.sorter-root {
    display: inline-block;
    cursor: pointer;
    height: 40px;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.sorter-root p {
    line-height: 2.5em;
    margin: 0;
}
.sorter-button {
    background-color: rgba(218,165, 32, 1);
}
.sorter-choices {
    position: absolute;
    width: 100%;
    border-top-style: solid;
    border-width: 1px;
    z-index: 2020;
}

.sorter-button-cross {
    display: inline-block;
    line-height: 2.5em;
    text-align: center;
    height: 40px;
    width: 40px;
    transform: rotate(90deg);
    font-weight: bold;
}
.sorter-button-value{
    display: inline-block;
    padding: 0 10px;
    width: 90px;


}
.sorter-choice {
    background-color: rgba(218,165, 32, 1);
    height: 40px;
    padding: 0 10px;
}

.on-hover {
    background-color: rgba(218,165, 32, 0.6);
}
.selected {
    background-color: rgba(105, 68, 12, 0.6);
}


</style>

