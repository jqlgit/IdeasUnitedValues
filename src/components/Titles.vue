<template>
  <div class="title-container">
    <div data-aos="fade-left" class="title">
      <img :src="logo" class="img">
       "Can"
    </div>
  </div>
</template>

<script>
import iUGives from '@/assets/iUGives.jpg'
export default {
  data() {
    return {
      logo: iUGives
    }
  }
}
</script>

<style>
.title {
  color: black;
  font-size: 175px;
  font-weight: bold;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  padding-top: 100px;
  padding-bottom: 100px;
}
.img {
  max-width: 100%;
}
</style>