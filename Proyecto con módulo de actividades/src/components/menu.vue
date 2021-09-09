<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        color="#0f111e"
        style="opacity: 0.7"
        width="300"
      >
        <div class="name">
          <a
            href="https://fotografia-planos-y-angulos.netlify.app/"
            style="text-decoration: none"
            target="_blank"
          >
          <h1 class="text">FOTOGRAFÍA | PLANOS Y ÁNGULOS</h1>
          </a>
        </div>
        <div class="icon_1">
          <v-btn color="blue" outlined large rounded :to="{ name: 'start' }">
            <v-icon medium color="white">home</v-icon>
            <span style="color: white; margin-left: 10px">Inicio</span>
          </v-btn>
        </div>
        <div class="icon_2">
          <v-btn
            color="blue"
            outlined
            large
            rounded
            :to="{ name: 'content' }"
            
          >
            <v-icon medium color="white">video_library</v-icon>
            <span style="color: white; margin-left: 10px">Contenido </span>
          </v-btn>
        </div>
        <div class="icon_2">
          <v-btn
            color="blue"
            outlined
            large
            rounded
            :to="{ name: 'activity_1' }"
            
          >
            <v-icon medium color="white">create</v-icon>
            <span style="color: white; margin-left: 10px"
              >Actividades
            </span></v-btn
          >
        </div>
        <div class="icon_2">
          <v-btn
            color="blue"
            outlined
            large
            rounded
            :to="{ name: 'evaluation' }"
           
          >
            <v-icon medium color="white">check</v-icon>
            <span style="color: white; margin-left: 10px"
              >Evaluación
            </span></v-btn
          >
        </div>

        <div class="icon_2">
          <v-btn color="blue" outlined large rounded :to="{ name: 'credits' }"
         >
            <v-icon medium color="white">person_outline</v-icon>
            <span style="color: white; margin-left: 10px"
              >Créditos
            </span></v-btn
          >
        </div>
        <div class="name2">
          <a
            href="https://www.unicordoba.edu.co/"
            style="text-decoration: none"
            target="_blank"
          >
            <h1 class="text" id="text">UNIVERSIDAD DE CÓRDOBA</h1>
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
        <span style="color: white; font-weight: bold; font-size: 18px"
          >Menú</span
        >

        <v-toolbar-title class="container-lg"></v-toolbar-title>
      </v-app-bar>

      <v-main class="container-xl">
       
          <router-view></router-view>
          
      
        
      </v-main>
      
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: false })
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.container-xl {
  background-image: url(../assets/backgrounds/slide_1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

.container-lg {
  margin-left: 1%;
  color: white;
  font-size: 2.2vw;
}
.icon_1 {
  margin-top: 11%;
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
  font-size: 15px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-weight: bold;
}
.name2 {
  background: rgb(15, 17, 30);
  background: linear-gradient(
    103deg,
    rgba(15, 17, 30, 1) 0%,
    rgba(43, 62, 102, 1) 100%
  );
  height: 110px;
  margin-top: 100px;
}
#text {
  margin-left: -15px;
  text-align: right;
  font-family: Helvetica, Arial, sans-serif;
}
.image {
  height: 73px;
  width: 73px;
  margin-right: 210px;
}
.container-lg {
  text-align: center;
  font-weight: bold;
}
</style>