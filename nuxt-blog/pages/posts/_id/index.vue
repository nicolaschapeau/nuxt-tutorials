<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">Title of the post</h2>
      <div class="post-details">
        <div class="post-detail">Last updated on : </div>
        <div class="post-detail">Written by : </div>
      </div>
      <p>Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>Send me your review about the post. <a href="mailto:mail@gmail.com">Mail</a></p>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
