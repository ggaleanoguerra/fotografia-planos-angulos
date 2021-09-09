<template>
  <v-container fluid >
    <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
<iframe
        width="960"
        height="600"
        src="https://www.youtube.com/embed/A-O_rwRDw6w"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        id="video"
        class="embed-responsive-item"
      ></iframe>
      </div>
      
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
#video{
  border-radius: 10px;
  margin-left: 8%;
  margin-top: 2%;
}
</style>