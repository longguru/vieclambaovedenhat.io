<template>
  <div class="post">
    <!-- {{ post }} -->
    <div v-if="post.imageId" class="image">
      <SanityImage :asset-id="post.imageId" auto="format">
        <template #default="{ src }">
          <img :src="src" class="img-responsive" :alt="post.title" />
        </template>
      </SanityImage>
    </div>
    <h1>{{ post.title }}</h1>
    <div class="meta clearfix">
      <ul>
        <li>tìm việc <a href="">Tuyển bảo vệ Đệ Nhất</a></li>
        <li>việc làm <a href=""> Bảo Vệ Hà Nội</a></li>
        <li>ngày {{ new Date().toLocaleDateString() }}</li>
        <li><a href="">17 Hồ sơ</a></li>
        <li>Quan tâm 299</li>
      </ul>
      <div class="share-this">
        <i class="fa fa-share-alt"></i>
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fvieclambaovedenhat.ga%2F${post.slug.current}%2F&display=popup&ref=plugin&src=share_button`"
          >Chia sẻ việc làm</a
        >
      </div>
    </div>
    <div class="description">
      <block-content
        v-if="post.body.length"
        :key="post.body[0]._id"
        :blocks="post.body[0]"
      />
    </div>
    <div class="button">
      <NuxtLink :to="post.slug.current">Đọc tiếp... </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
      default() {
        return { title: '', body: [], slug: { current: '' } }
      },
    },
  },
}
</script>
