<template>
  <div id="app" class="app">
    <h1>Créditos</h1>
    <v-carousel
      next-icon="arrow_forward"
      prev-icon="arrow_back"
      hide-delimiters
      id="credits"
      class="container-xl"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-footer color="black" class="footer">
      <v-row justify="center" no-gutters>
        <v-col class="dark py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Limav ®</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/HXtnLRJ/man-teacher-in-the-classroom-vector-illustration-design.jpg",
        },
        {
          src: "https://i.ibb.co/m5nQKvC/Carlos.jpg",
        },
        {
          src: "https://i.ibb.co/XZvzxBm/Cuadro.jpg",
        },
        {
          src: "https://i.ibb.co/3sbh2RT/Jose.jpg",
        },
        {
          src: "https://i.ibb.co/wRptm36/Gabriel.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.app {
  background-color: #0f111e;
  opacity: 1;
  height: 100%;
}
#credits {
  margin-top: 3%;
  width: 33%;

  border-radius: 3%;
}
h1 {
  color: white;
  text-align: center;
  font-weight: bold;

  font-size: 40px;
  background-color: black;
}
.footer {
  margin-top: 1.7%;
}
</style>
