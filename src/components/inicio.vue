<template>
  <v-container fluid>
    <div class="main">
      <h1>Fotografía: Planos y ángulos</h1>
      <v-btn color="#C5BDBD" elevation="6" x-large to="dashboard" class="boton">
        COMENZAR
        <v-icon right class="icon"> camera_alt </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
<style scoped>
div {
  background-image: url("https://images3.alphacoders.com/693/693141.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
h1 {
  color: white;
  font-family: "Great Vibes";
  font-size: 8vw;
  margin-left: 80px;
  margin-top: 4px;
  text-align: left;
}
.boton {
  margin-left: 10%;
  margin-top: 30%;
  width: 22%;
  
  text-align: center;
}

.main background-image {
  width: 100%;
  height: auto;
}
</style>

