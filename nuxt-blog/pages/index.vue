<template>
  <div class="home-page">
    <section class="intro">
    </section>
    <section class="intro__text">
      <h1>Get the latest posts !</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background-image: url('~assets/images/home__background.jpeg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.intro:after {
  content: '';
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
}

.intro__text {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: -300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.intro__text h1 {
  position: relative;
  font-size: 3rem;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 300;
  z-index: 5;
}

@media (min-width: 768px) {
  .intro__text h1 {
    font-size: 3rem;
  }
}
</style>
