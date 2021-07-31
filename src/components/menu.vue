<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        class="left-menu"
        color="#0f111e"
        style="opacity: 0.7"
      >
        <div class="name">
          <h1 class="text">FOTOGRAFÍA | PLANOS Y ÁNGULOS</h1>
        </div>
        <div class="icon_1">
          <v-btn
            color="white"
            elevation="2"
            large
            rounded
            :to="{ name: 'inicio' }"
          >
            <v-icon medium color="red">home</v-icon>
            <span style="color: white">Inicio</span>
          </v-btn>
        </div>
        <div class="icon_2">
          <v-btn
            color="white"
            elevation="2"
            large
            rounded
            :to="{ name: 'contenido' }"
          >
            <v-icon medium color="red">verified</v-icon>
            <span>Contenido </span>
          </v-btn>
        </div>
        <div class="icon_2">
          <v-btn
            color="white"
            elevation="2"
            large
            rounded
            :to="{ name: 'actividades' }"
          >
            <v-icon medium color="red">verified</v-icon>
            <span>Actividades </span></v-btn
          >
        </div>
        <div class="icon_2">
          <v-btn
            color="white"
            elevation="2"
            large
            rounded
            :to="{ name: 'evaluacion' }"
          >
            <v-icon medium color="red">verified</v-icon>
            <span>Evaluación </span></v-btn
          >
        </div>

        <div class="icon_2">
          <v-btn
            color="white"
            elevation="2"
            large
            rounded
            :to="{ name: 'creditos' }"
          >
            <v-icon medium color="red">verified</v-icon>
            <span>Créditos </span></v-btn
          >
        </div>
        <div class="name2">
          <a
            href="https://www.unicordoba.edu.co/"
            style="text-decoration: none"
          >
            <h1 class="text">UNIVERSIDAD DE CÓRDOBA</h1>
            <img src="../images/unicor.png" class="image" />
          </a>
        </div>
      </v-navigation-drawer>

      <v-app-bar
        app
        src="../images/welcome.jpg"
        width="100%"
        permanent
        style="opacity: 0.9"
      >
        <v-icon @click="drawer = !drawer" medium color="white"
          >view_headline</v-icon
        >

        <v-toolbar-title class="welcome_title">Bienvenidos</v-toolbar-title>
      </v-app-bar>

      <v-main class="content">
        <transition name="router-anim" enter-active-class="animated zoomIn">
          <router-view></router-view>
        </transition>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: false }),
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.content {
  background-image: url(../assets/backgrounds/slide_1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

.welcome_title {
  margin-left: 1%;
  color: white;
  font-size: 28px;
}
.icon_1 {
  margin-top: 6%;
  margin-left: 10%;
}
.icon_2 {
  margin-top: 15%;
  margin-left: 6%;
}
.name {
  height: 110px;
  background: rgb(15, 17, 30);
  background: linear-gradient(103deg, rgb(4, 5, 10) 0%, rgb(30, 43, 70) 100%);

  text-align: center;
}
.text {
  color: white;
  font-size: 14.6px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.name2 {
  background: rgb(15, 17, 30);
  background: linear-gradient(
    103deg,
    rgba(15, 17, 30, 1) 0%,
    rgba(43, 62, 102, 1) 100%
  );
  height: 120px;
  text-align: right;
  margin-top: 125px;
}
.image {
  height: 68px;
  width: 68px;
  margin-right: 190px;
}
</style>