<template>
    <div class='media-root'>
        
            <div class="media-functions">
                <input type="text" name="search" placeholder="Rechercher un contenu plus rapidement">
                <div class="media-sort">
                    <select class="media-select" v-model="sorting">
                        <option value="date">Date</option>
                        <option value="matricul">Matricule</option>
                    </select>
                </div>
            </div>

            <div class="container">
                <img class="image" :src='image' alt="">
                <div class="overlay">
                    <div class="text" >
                        <p>{{ this.description }}</p>
                    </div>
                </div>
            </div>
       

    </div>
</template>

<script>
export default {
    data () {
        return {
            sorting : 'date'
        }
    },
    
    props: {
        image: {
            type: String,
            required: false,
            default: require('@/assets/img/livre_img_default.png')
        },
        description:{
            type: String,
            required: true,
            default: 'coucou momo !'
        }
    }
    
}
</script>

<style scoped>

@media screen and (max-width: 1200px){
    .media-root {
        margin: 100px auto 0;
        width: 80%;
    }    
}

@media screen and (min-width: 1200px){
    .media-root {
        margin: 100px auto;
        width: 1000px;
    }    
}

.media-functions {
    display: flex;
    margin: 20px 40px;
    
}

input[type=text] {
    text-align: center;
    width: 280px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width: 100%;
}

.media-select {
    float:right;
    background-color: transparent;
    color : rgba(218,165, 32, 1);
    border-style: solid;
    border-color: rgba(218,165, 32, 1);
    font-size: 1.1em;
    padding: 5px;
}

.container {
  position: relative;
  width: 50%;
}

.image {
  width: 200px;
  height: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0%;
  transition: .5s ease;
  background-color:rgba(5, 7, 21, 0.88);
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>