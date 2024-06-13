<template>
  <div class="activityDescription-container">
    <div class="activityDescription-image">
      <img data-aos="fade-right" :src="cans">
    </div>
    <div data-aos="fade-left" class="activityDescription-text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis nobis rem voluptates asperiores fugit quam expedita nisi ea tempore beatae, fugiat doloremque possimus odio consequatur et aperiam, quidem sapiente alias cum doloribus reiciendis! Laborum repellat doloribus aut vel quis ipsum sapiente, rem, eos ullam beatae, autem eaque hic tenetur sit consequatur cumque recusandae eveniet incidunt? Ratione aspernatur, nostrum eos quam optio ab atque cupiditate aliquam quas animi amet, exercitationem maxime rem vero ipsum. Nesciunt porro est fugiat temporibus distinctio nam magni nihil at pariatur ea explicabo, natus quam beatae dolorum. Optio molestias aperiam minima repellendus, et corporis dolor, architecto explicabo exercitationem neque quos! Voluptatum obcaecati modi aspernatur labore vel? Quibusdam exercitationem mollitia nostrum magnam repudiandae, in recusandae fugiat, a repellendus, assumenda unde facere incidunt sed natus praesentium! Accusantium ipsum cupiditate quo aliquam aut pariatur, odio minus, harum illo sed autem! Quae natus odio blanditiis ipsam optio? Ipsa a ullam, dignissimos hic quasi esse molestias expedita aut deserunt vel eius, nihil vitae eligendi doloremque eaque! Porro iste provident neque necessitatibus nesciunt, error at pariatur aperiam harum optio libero veritatis dignissimos aspernatur, tenetur impedit eligendi quos! Labore praesentium reiciendis voluptatum architecto, explicabo consequatur similique dolorem? Illum tempora vel ab veniam qui molestiae. Animi quasi velit repellendus deserunt repudiandae asperiores maxime veritatis, omnis cumque officia, architecto quis quo maiores! Vero laborum sapiente placeat accusamus tempore libero error necessitatibus at ex dolorum. Suscipit quis maiores neque temporibus quasi, magnam voluptas doloremque nihil quia fugiat sunt commodi dolores voluptatum delectus deserunt soluta, aspernatur corrupti nam iure rem blanditiis? Voluptatum sed fugit cum nobis dolor. Sint recusandae dolore quasi? Unde asperiores nulla, itaque iusto excepturi blanditiis repellendus illo aut, quidem, officiis repellat quam. Neque nesciunt praesentium hic possimus cupiditate autem maxime minus qui, pariatur error ea dolore ex illo consectetur in fugit. Optio, placeat maxime.
    </div>
  </div>
</template>

<script>
import cans from '@/assets/cans.jpg'
export default {
  data() {
    return {
      cans: cans
    }
  }
}
</script>

<style scoped>
.activityDescription-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 95%;
  justify-content: space-between;
  padding-bottom: 150px;
}

.activityDescription-image {
  padding: 20px;
}

.activityDescription-text {
  padding: 20px;
  flex: 1;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(155, 224, 158, 1);
}

img {
  max-width: 100%;
  height: auto;
}
</style>

