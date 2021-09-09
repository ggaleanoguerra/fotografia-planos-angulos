<template>
  <div class="container">

    <div class="buttons">
      <v-btn
        :to="{ name: 'activity_2' }"
        width="48px"
        height="48px"
        dark
        icon
        x-large
        class="next_activity"
      >
        <v-icon size="48px">arrow_back</v-icon>
      </v-btn>
      <v-btn
        :to="{ name: 'activity_2' }"
        width="48px"
        height="48px"
        dark
        icon
        x-large
        class="back"
      >
        <v-icon size="48px">arrow_forward</v-icon>
      </v-btn>
      <h1>Arrastra la imagen que corresponda al plano general</h1>
    </div>
    <div id="h5p-container"></div>
  </div>
  
</template>
<script >
import { H5P } from "h5p-standalone";
export default {
  data: () => ({}),
  mounted() {
   const el = document.getElementById('h5p-container');
const options = {
    h5pJsonPath: './actividades/h5p/activity_1',
    frameJs: './actividades/frame.bundle.js',
    frameCss: './actividades/styles/h5p.css',
};  

new H5P(el, options);
  },
};
</script>
<style scoped>
.next_activity{
  margin-left: 7%;
  
}

.back {
  margin-left: 80%;
}
.buttons{
  background-color: #0f111e;
  opacity: 0.7;
  margin-top: -1.1%;
}
#h5p-container {
  width: 100%;
  
}
h1{
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: -3.3%;
  font-size: 29px;
}
</style>