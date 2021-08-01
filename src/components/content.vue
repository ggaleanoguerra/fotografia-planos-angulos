<template>
  <v-container fluid >
    <div class="container">
      <iframe
        width="960"
        height="600"
        src="https://www.youtube.com/embed/A-O_rwRDw6w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
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
.video{
  border-radius: 10px;
  margin-left: 8%;
  margin-top: 2%;
}
</style>