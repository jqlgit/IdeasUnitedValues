<template>
  <div class="description-container">
    <div data-aos="fade-up" class="description">
      <p> <span>Giving </span> is <span2> {{ displayText }} </span2> <span3 class="cursor">|</span3></p>
    </div>
    <div class="description-image">
      <img data-aos="fade-up" :src="donatingcans" alt="Description Image">
    </div>
  </div>
</template>

<script>
import donatingcans from '@/assets/donatingcans.jpg'

export default {
  data() {
    return {
      donatingcans: donatingcans,
      values: ["Curious", "Thoughtful", "Playful", "Active", "Collaborative", "Unconventional", "Real"],
      displayText: '',
      wordIndex: 0,
      letterIndex: 0,
      isDeleting: false,
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseDelay: 1500,
    }
  },
  mounted() {
    this.type();
  },
  methods: {
    type() {
      console.log("Typing method called");
      const currentWord = this.values[this.wordIndex];
      console.log("Current word: ", currentWord);

      if (this.isDeleting) {
        this.displayText = currentWord.substring(0, this.letterIndex - 1);
        this.letterIndex--;
        console.log("Deleting, letterIndex: ", this.letterIndex);
      } else {
        this.displayText = currentWord.substring(0, this.letterIndex + 1);
        this.letterIndex++;
        console.log("Typing, letterIndex: ", this.letterIndex);
      }

      let speed = this.typingSpeed;

      if (this.isDeleting) {
        speed = this.deletingSpeed;
      }

      if (!this.isDeleting && this.letterIndex === currentWord.length) {
        speed = this.pauseDelay;
        this.isDeleting = true;
        console.log("Word completed, pausing");
      } else if (this.isDeleting && this.letterIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.values.length;
        speed = this.typingSpeed;
        console.log("Switching to next word, wordIndex: ", this.wordIndex);
      }

      setTimeout(() => {
        this.type();
      }, speed);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
.description-container {
  display: flex;
  align-items: center; /* Align items vertically centered */
  justify-content: center; /* Align items horizontally centered */
  margin: 20px;
  padding: 50px;
  padding-top: 250px;
  padding-bottom: 250px;
  justify-content: space-between
}

.description-image {
  position: relative;
  max-width: 100%;
  height: auto;
  border-radius: 15px; /* Optional: to round the image edges */
  box-shadow: 0 0 10px rgba(155, 224, 158, 1); /* Shadow */
  margin-right: 20px; /* Space between image and text */
  transform: translateX(-100%)
}

.description {
  max-width: 60%; /* Adjust as needed */
  padding: 10px;
  padding-right: 40px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 55px;
  font-weight: bold;
  padding-left: 220px;
  text-align: center;
}

.description span {
  color: black;
}

.description span2 {
  color: #9BE09E;
}

.description span3 {
  color: black;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  50.1%, 100% {
    opacity: 0;
  }
}
</style>
