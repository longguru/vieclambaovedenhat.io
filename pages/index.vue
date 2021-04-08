<template>
  <div class="blog-standard">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-lg-offset-1">
          <Post v-for="post in posts" :key="post._id" :post="post" />
        </div>
      </div>
    </div>
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    </script>
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
    // const querySave = groq`*[_type == 'post' && author._ref == '2a7d74a8-83da-4dd0-9c0f-9f3bce87a51f']{_id, title, slug}`
    const query = groq`*[_type == "post" && author._ref == '2a7d74a8-83da-4dd0-9c0f-9f3bce87a51f']{_id, title, body, slug, 'imageId': mainImage.asset->_id}`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
}
</script>
