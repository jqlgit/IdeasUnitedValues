<template>
  <div id="app">
    <Banner />
    <Titles />
    <VideoDisplay />
    <Description />
    <ActivityDescription />
    <ActivityDescription />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import VideoDisplay from './components/VideoDisplay.vue'
import Titles from './components/Titles.vue'
import Description from "./components/Description.vue"
import ActivityDescription from './components/ActivityDescription.vue'

export default {
  name: 'App',
  components: {
    Banner,
    VideoDisplay,
    Titles,
    Description,
    ActivityDescription
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0; /* Ensure no margin around the app */
  padding: 0; /* Ensure no padding around the app */
}
</style>

