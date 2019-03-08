<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest posts !</h1>
    </section>
    <section class="featured-posts">
      <post-preview id="1" thumbnail="https://i.ytimg.com/vi/pegZ1w5W9N4/maxresdefault.jpg" title="Title 1" preview-text="first post"/>
      <post-preview id="2" thumbnail="https://newevolutiondesigns.com/images/freebies/nature-hd-background-preview-1.jpg" title="Title 2" preview-text="second post"/>
      <post-preview id="3" thumbnail="http://www.rose-erz.de/web/Wassersport%20Weyers/img/image-4.jpg" title="Title 3" preview-text="third post"/>
      <post-preview id="4" thumbnail="http://www.staroceans.org/w3c/img_mountains.jpg" title="Title 4" preview-text="fourth post"/>
    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: white;
  background-color: #333;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 300;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
