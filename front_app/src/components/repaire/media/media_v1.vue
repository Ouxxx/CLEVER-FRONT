<template>
    <div class="allcontainers">
        <div class="container">
            <img src="../../../assets/img/livre_img_default.png" alt="" class="image">
            <div class="overlay">
                <div class="text">TO DO : Description du contenu à raccorder</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.allcontainers {
   
}
.container {
  position: relative;
  width: 50%;
}

.image, .image2 {
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