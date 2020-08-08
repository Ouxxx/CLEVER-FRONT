<template>
    <div class="desc-soutien-root">
        <div class="avatar">
            <div class="avatar-img">
                <img  src="../../assets/testing/avatarY.png">
            </div>
            <div class="avatar-matricule">
                <p class="avatar-p">100.A.1</p>
            </div>
        </div>
        <div class="description">
            <p>
                Caesarem adhibitis interrogationibus adhibitis inde aulaeum agenda equitum quidve diluere quaesitum 
                cuius interrogationibus subinde defensi aurem reginae notarii essent praedoctis.
            </p>
        </div>
        <div class="gestions">
            <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Notifications">
            <img class="button-img" src="../../assets/img/forms_bouton.png" alt="Supprimer">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

            soutiens : []
        }
    }
    
}
</script>

<style scoped>

.desc-soutien-root {
    display: table;
    height: 100px;
}

.avatar {
    display: table-cell;
    padding: 20px;
}

.avatar-img{
    display: table-cell;
    border-radius: 50%;
    padding: 5px;
   /* background: radial-gradient(rgba(0,139,139,1) 50%, rgba(0,139,139,0.3) 60%, rgba(0,139,139,0.1) 70%, rgba(0,139,139,0) 100%); */
   background: radial-gradient(rgba(218,165, 32,1) 50%, rgba(218,165, 32,0) 75%);
}

.avatar-img img{
    vertical-align: middle;
    width: 100px;
    height: 100px;
    padding: 3px;
    border-radius: 50%;
}

.avatar-p {
    text-align: center;
    color: rgba(218,165, 32, 1);
    font-weight:bold;
    
}


.description {
    display: table-cell;
    width: 100%;
}

.description p{
    vertical-align: text-top;
    color: rgba(218,165, 32, 1);
    margin-left: 10px;
}

.gestions {
    display: table-cell;
    padding: 20px;
}

.button-img {
    width: 40px;

}

</style>