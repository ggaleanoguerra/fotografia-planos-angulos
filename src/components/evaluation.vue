<template>
  <div class="app">
    <h1>Evaluación.</h1>

    <div id="h5p-container3" class="container"></div>
  </div>
</template>
<script >
import { H5P } from "h5p-standalone";
export default {
  data: () => ({}),
  mounted() {
    const el = document.getElementById("h5p-container3");
    const options = {
      h5pJsonPath: "./actividades/h5p/evaluacion",
      frameJs: "./actividades/frame.bundle.js",
      frameCss: "./actividades/styles/h5p.css",
    };

    new H5P(el, options);
  },
};
</script>
<style scoped>
.app {
  background-color: #0f111e;
  opacity: 1;
  height: 100%;
  margin-top: 3%;
}

h1 {
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: -3%;
  font-size: 29px;
  background-color: black;
  opacity: 1;
  height: 40px;
}
</style>