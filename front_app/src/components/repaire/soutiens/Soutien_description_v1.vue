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
        <div class="dropdown">
            <button class="btn">
                <img class="button-img" src="../../../assets/rendus/MonRepaire/a_ObjetsCommuns/barre3pointsblancs.png" alt="Menu">
            </button>
            <div class="dropdown-content">
                <div class="#">Muter</div>
                <div class="#">Ne plus soutenir</div>
            </div>
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
            // TODO:  je ne sais pas comment representer une image ni comment elles sont stockees pour le moment
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

@media screen and (max-width: 1200px){
    .desc-soutien-root {
        margin: 100px;
        width: 80%;
    }    
}

@media screen and (min-width: 1000px){
    .desc-soutien-root {
        margin: 50px;
        width: 1000px auto;
    }    
}

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
    display: inline-block;
    background-color: none;
    padding: 20px;
}

.button-img {
    width: 8px;
    height: 20px;
}

.media-sort {
    cursor: pointer;
    margin: 0 180px 20px 0px;
    padding-top: 20px;
}

.btn {
    cursor: pointer;
    background-color:transparent;
    color: white;
    padding: 12px;
    font-size: 15px;
    border: none;
    outline: none;
}

.dropdown {
  position: absolute;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:transparent;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content div {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content div:hover {
    background-color: rgba(105, 68, 12, 0.6);
    color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.btn:hover {
  background-color: rgba(218,165, 32, 0.6);
}

</style>