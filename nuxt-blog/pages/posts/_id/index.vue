<template>
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">{{ loadedPost.title }}</h2>
      <div class="post-details">
        <div class="post-detail">Last updated on : {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by : {{ loadedPost.author }} </div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Send me your review about the post. <a href="mailto:mail@gmail.com">Mail</a></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'First Post (ID: ' + context.route.params.id + ')',
          previewText: 'This is our first post !',
          author: 'Nicolas C',
          updatedDate: new Date(),
          content: 'This is the content of the post',
          thumbnailLink:
            'http://papers.co/wallpaper/papers.co-ny87-rain-road-street-city-nature-25-wallpaper.jpg'
        }
      })
    }, 1000)
  }
}
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
