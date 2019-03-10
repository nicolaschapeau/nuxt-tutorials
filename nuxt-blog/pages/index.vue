<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest posts !</h1>
    </section>
    <post-list />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'

export default {
  components: {
    PostList
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
</style>
