<template>
  <section class="featured-posts">
    <post-preview id="1" :is-admin="isAdmin" thumbnail="https://i.ytimg.com/vi/pegZ1w5W9N4/maxresdefault.jpg" title="Title 1" preview-text="first post"/>
    <post-preview id="2" :is-admin="isAdmin" thumbnail="https://newevolutiondesigns.com/images/freebies/nature-hd-background-preview-1.jpg" title="Title 2" preview-text="second post"/>
    <post-preview id="3" :is-admin="isAdmin" thumbnail="http://www.rose-erz.de/web/Wassersport%20Weyers/img/image-4.jpg" title="Title 3" preview-text="third post"/>
    <post-preview id="4" :is-admin="isAdmin" thumbnail="http://www.staroceans.org/w3c/img_mountains.jpg" title="Title 4" preview-text="fourth post"/>
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
