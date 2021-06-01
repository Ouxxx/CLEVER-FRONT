<template>
    <div class="default-temp-root">
        <ch-sidebar />
        <ch-header>
            <slot name="header-buttons"></slot>
        </ch-header>

        <div class="default-temp-main">
            <div class="default-tempp-body">
                <slot></slot>
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
.default-temp-root {
    min-height: 100vh;
    background-color: blueviolet;
}
.default-temp-main {
    padding-top: 50px;
    min-height: 70vh;

    background-color: darkslategrey;
}
.default-tempp-body {

}
.default-temp-right-sidebar {

}
.default-temp-footer {
    position: relative;
    bottom: 0px;
    background-color: olive;
}
</style>

<script>
import chSidebar from '../common/sidebar/Sidebar_v2'
import chHeader from '../common/header/Header_v5'

export default {
    components : {chSidebar, chHeader}
}
</script>