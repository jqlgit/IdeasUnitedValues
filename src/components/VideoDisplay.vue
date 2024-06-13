<template>
  <div class="video-container">
    <video controls>
      <source src="@/assets/vid.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoDisplay'
}
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
video {
  max-width: 80%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(155, 224, 158, 1);
  animation: expand 1.5s ease-out forwards; /* Add animation */
  transform: scale(0.5);
}

@keyframes expand {
  from {
    transform: scale(0.5); /* Start scale */
  }
  to {
    transform: scale(1); /* End scale */
  }
}
</style>
