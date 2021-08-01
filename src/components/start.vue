<template>
  <v-container fluid>
    <div class="container-sm">
      <h1>Fotografía: Planos y ángulos</h1>
      <v-btn color="#C5BDBD" elevation="6" to="dashboard" class="btn btn-primary btn-sm" id="button">
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
  font-size: 7vw;
  margin-left: 20px;
  margin-top: 18px;
  text-align: left;
}
#button {
  margin-left: 3%;
  margin-top: 30%;
  width: 21%;
  height: 6%;
  font-size: 1.2vw ;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif
}

</style>

