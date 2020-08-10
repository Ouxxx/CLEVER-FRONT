<template>
<div class="root-component">
    <div class="banner-block" v-bind:style="bannerBackground">
        <button class="button-ex">Button</button>
    </div>
</div>
    
</template>

<script>
export default {
    data () {
        return {
            bannerUrl : require('@/assets/testing/img_test.jpg'),
            bannerBackground : {
                /* REPONSE: ne fonctionne pas car bannerUrl n'est pas encore défini */
                background : 'url(' + this.bannerUrl + ')' 
            }
        }

        /* code qui fonctionne mais pas dynamique
        return {
            bannerBackground : {
                background : 'url(' + require('@/assets/testing/img_test.jpg') + ')' 
            }
        }
        */
    }
}
</script>

<style scoped>

.root-component{
    background-color: brown;
}
.banner-block{
    width: 100%;
    height: 300px;
}
.button-ex{
margin: 50px;
}
</style>