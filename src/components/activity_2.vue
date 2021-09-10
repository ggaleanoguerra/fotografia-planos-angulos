<template>
  <div class="container" >

    <div class="buttons">
      <v-btn
        :to="{ name: 'activity_1' }"
        width="48px"
        height="48px"
        dark
        icon
        x-large
        class="previus_activity"
      >
        <v-icon size="48px">arrow_back</v-icon>
      </v-btn>
      <v-btn
        :to="{ name: 'content' }"
        width="48px"
        height="48px"
        dark
        icon
        x-large
        class="back"
      >
        <v-icon size="48px">arrow_forward</v-icon>
      </v-btn>
      <h1>Responde verdadero o falso, según se requiera.</h1>
    </div>
    <div id="h5p-container2"></div>
  </div>
</template>
<script >
import { H5P } from "h5p-standalone";
export default {
  data: () => ({}),
  mounted() {
    const el = document.getElementById("h5p-container2");
    const options = {
      h5pJsonPath: "./actividades/h5p/activity_2",
      frameJs: "./actividades/frame.bundle.js",
      frameCss: "./actividades/styles/h5p.css",
    };

    new H5P(el, options);
  },
};
</script>
<style scoped>
.previus_activity {
  margin-left: 7%;
 
}
#h5p-container2 {
  width: 90%;
  margin-left: 5%;
  
}
.back {
  margin-left: 80%;
}
.buttons{
  background-color: black;
 
   margin-top: -1.1%;
}
h1{
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: -3%;
  font-size: 29px;
}
</style>
