<template>
  <div class="banner-container">
    <img :src="banner" alt="Banner Image" class="banner-image" />
    <div class="banner-text">This is a banner</div>
  </div>
</template>

<script>
import banner from '@/assets/banner.png';

export default {
  data() {
    return {
      banner: banner
    }
  }
}
</script>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  margin: 0; /* Ensure no margin around the container */
  padding: 0; /* Ensure no padding around the container */
  overflow: hidden; /* Prevent any overflow */
  background-color: white; /* Make sure the background is white to blend with the page */
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.banner-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  display: block;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #9BE09E;
  font-size: 55px;
  font-weight: bold;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  white-space: nowrap; /* Prevent text wrapping */
}
</style>


