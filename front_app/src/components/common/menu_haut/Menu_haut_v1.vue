<template>
    <div class="menuhaut-root">
        <slot></slot>
    </div>
</template>

<style scoped>
.menuhaut-root {
    position: relative;
    background-color: rgb(22,24,35);
    border-bottom-style: solid;
    border-color:rgb(71, 71, 71);
    border-width: 1px;
    width: 100%;
    padding-left: 40px;
}
</style>