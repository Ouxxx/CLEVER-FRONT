<template>
    <div class="desc-soutien-root">
        <div class="avatar">
            <div class="avatar-img" :class="{'news': news }">
                <img  src="../../../assets/testing/avatarY.png">
            </div>
            <div class="avatar-matricule">
                <p class="avatar-p">{{ matricul }}</p>
            </div>
        </div>
        <div class="description">
            <p>{{ description }}</p>
        </div>
        <div class="gestions">
            <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Notifications">
            <img class="button-img" src="../../../assets/img/forms_bouton.png" alt="Supprimer">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        matricul : {
            type: String,
            required: true
        },
        avatar: {
            // TODO:  je ne sais pas comment representer une image ni comment elles sont stocke pour le moment
            type: String
        },
        description: {
            type: String,
            required: true
        },
        news: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            is_new: false,

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
}
.news {
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