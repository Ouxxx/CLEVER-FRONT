<template>
    <div class="default-temp-root">
        <ch-sidebar />
        <ch-header>
            <slot name="header-buttons"></slot>
        </ch-header>

        <div class="default-temp-main">
            <div class="default-temp-body">
                <slot></slot>
                <div class="bloc"></div>
            </div>
            <div class="default-temp-right-sidebar">
                <slot name="right-sidebar"></slot>
            </div>
        </div>

        <div class="default-temp-footer">
            <slot name="footer">Footer</slot>
        </div>
    </div>
</template>

<style scoped>
.bloc {
    height: 80vh;
}
.default-temp-root {
    min-height: 100vh;
    background-color: rgb(238, 255, 0);
}
.default-temp-main {
    padding-top: 50px;
    min-height: 70vh;

    background-color: #000A1A;
}
.default-temp-body {
    max-width: 9000px;
}
.default-temp-right-sidebar {

}
.default-temp-footer {
    min-height: 30vh;
    
    background-color: #E0E2E8;
    background-color:#2d325e;
    background-color: #00112B;
    background-color:#232322;



}
</style>

<script>
import chSidebar from '../common/sidebar/Sidebar_v2'
import chHeader from '../common/header/Header_v5'

export default {
    components : {chSidebar, chHeader}
}
</script>