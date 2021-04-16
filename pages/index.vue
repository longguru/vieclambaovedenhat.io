<template>
  <div class="blog-standard">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-lg-offset-1">
          <Post v-for="post in posts" :key="post._id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Post from '~/components/Post'
export default {
  components: {
    Post,
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "post" && author._ref == '121d8857-aac4-4d4b-811b-211d704479ba']{_id, title, body, slug, 'imageId': mainImage.asset->_id}`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
}
</script>
