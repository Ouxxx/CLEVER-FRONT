<template>
   <div class="profile-management-root">
        
        <div class="banner">
           <banner></banner>
        </div>
        <div class="profile-main">
            <div class="introduce-profile content-block-property">
                <div class="flexbox">
                    <autosizeTextarea name="y" v-model="form.body" placeholder="coucou from parent" />

                    <div class="logo-bar">
                        <img class="instagram logo" src="@/assets/img/instagram.png" alt="instagram">
                        <img class="linkedin logo" src="@/assets/img/linkedin.png" alt="linkedin">
                        <img class="twitter logo" src="@/assets/img/twitter.png" alt="twitter">
                    </div>
                </div>
            </div>

            <div style="color: white">Lien Facebook : <input /> </div>
            <div style="color: white">Lien Insta : <input /> </div>
            <div style="color: white">Lien blabla : <input /> </div>
            <div v-if="linkFacebook" style="color: white">Lien Facebook : <input /> </div>

        </div>

    </div> 
</template>

<script>
import banner from '../../common/banner/Banner_v1'
import autosizeTextarea from '../../common/autosize_textarea/autosize_textarea_v1'

export default {
    components : {banner, autosizeTextarea},
    data () {
        return {
            form: {
                body: ''
            },
            linkFacebook : ''
        }
    }
}
    

</script>

<style scoped>

.test {
    color: white;
}

/* Body */

/*commun*/

.content-block-property {
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-top: 20px;
    background-color: rgba(27,37,48,.8);
}

/*introduce*/

.flexbox {
    display: flex;
    max-width: 900px;
    margin: 0 auto;
}

.logo-bar {
    display: inline;
}

.logo {
    display: block;
    margin-top:5px;
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    border-radius:50%;
    width:30px;
    height:30px;
    cursor: pointer;
}

</style>