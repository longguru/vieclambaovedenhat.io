<template>
  <article v-if="post" class="blog-detail">
    <!-- {{ post }} -->
    <SocialHead
      :title="post.title"
      :description="post.body[0].children[0].text"
      :image="post.imageUrl"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-8">
          <div class="row">
            <div class="col-lg-12">
              <div class="post">
                <div class="image">
                  <img
                    :src="post.imageUrl"
                    class="img-responsive"
                    :alt="post.body[0].children[0].text"
                  />
                </div>
                <h1 v-text="post.title"></h1>
                <div class="clearfix">
                  <div class="meta">
                    <ul>
                      <li>
                        <a
                          :href="`https://tuyenbaoveatp.ga${$route.fullPath}/#ung_tuyen`"
                          class="btn btn-default"
                          >Ứng tuyển ngay</a
                        >
                      </li>
                      <li>tìm việc <a href="#">Bảo vệ An Thịnh Phát</a></li>
                      <li>việc làm <a href="#">Bảo vệ Vĩnh Phúc</a></li>
                    </ul>
                  </div>
                  <div class="like-comment-share">
                    <ul>
                      <li class="like">
                        <a href="#" class="like"
                          ><i class="fa fa-heart"></i>292</a
                        >
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-comment"></i> 21</a>
                      </li>
                      <li>
                        <div
                          class="fb-share-button"
                          :data-href="
                            'https://tuyenbaoveatp.ga' + $route.fullPath + '/'
                          "
                          data-layout="button_count"
                          data-size="small"
                        >
                          <a
                            target="_blank"
                            :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftuyenbaoveatp.ga${encodeURI(
                              $route.fullPath + '/'
                            )}&amp;src=sdkpreparse`"
                            class="fb-xfbml-parse-ignore"
                            >Chia sẻ</a
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="description">
                  <block-content
                    v-for="child in post.body"
                    :key="child._id"
                    :blocks="child"
                  />
                  <div>
                    <p>
                      Bằng cách chia sẻ tin tuyển dụng:
                      <em>{{ post.title }}</em> bạn đã giúp mình lưu lại cơ hội
                      việc làm này và giúp người thân, bạn bè của bạn, chúng tôi
                      được kết nối thêm cơ hội việc làm mới. Chúng tôi rất vui
                      được kết nối đến bạn khi bạn chia sẻ ngay.
                    </p>
                  </div>
                  <div
                    class="fb-like"
                    :data-href="
                      'https://tuyenbaoveatp.ga' + $route.fullPath + '/'
                    "
                    data-width=""
                    data-layout="button"
                    data-action="like"
                    data-size="small"
                    data-share="true"
                  ></div>
                  <br />
                  <div
                    class="fb-save"
                    :data-uri="
                      'https://tuyenbaoveatp.ga' + $route.fullPath + '/'
                    "
                    data-size="large"
                  ></div>
                </div>
              </div>
              <div id="ung_tuyen" class="leave-a-reply">
                <h3>Ứng tuyển: {{ post.title }}</h3>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        id="CommentName"
                        type="text"
                        class="form-control"
                        placeholder="Họ và tên"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        id="CommentEmail"
                        type="email"
                        class="form-control"
                        placeholder="Địa chỉ email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        id="CommentWebsite"
                        type="text"
                        class="form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="10"
                        placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn có chưa có kinh nghiệm làm việc (hoặc CV không tốt)."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-default" disabled>
                      Nộp hồ sơ
                    </button>
                    <br />
                    <span
                      >Chức năng đang cập nhật... Mời bạn qua văn phòng công ty
                      để nộp hồ sơ trực tiếp</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=242726457596775&autoLogAppEvents=1"
            nonce="D6wC9xAj"
          ></script>
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
              js.src =
                'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
              fjs.parentNode.insertBefore(js, fjs)
            })(document, 'script', 'facebook-jssdk')
          </script>

          <!-- Your Chat Plugin code -->
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="110994124405341"
          ></div>
          <div
            class="fb-comments"
            :data-href="'https://tuyenbaoveatp.ga' + $route.fullPath + '/'"
            data-width=""
            data-numposts="5"
          ></div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 sidebar"></div>
      </div>
    </div>
  </article>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]{_id, title, body, slug, 'imageId': mainImage.asset->_id, "imageUrl": mainImage.asset->url}`
    const post = await $sanity.fetch(query)
    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.body[0].children[0].text,
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'JobPosting',
            title: this.post.body[1].children[0].text,
            description:
              '<p>' +
              this.post.body
                .map((block) =>
                  block.children.map((child) => child.text).join('<br> ')
                )
                .join('<br> ') +
              '</p>',
            identifier: {
              '@type': 'PropertyValue',
              name: 'Hồ Thị Thắm',
              value: '84978333963',
            },
            datePosted: new Date().toISOString(),
            validThrough: new Date(
              Date.now() + 29 * 24 * 60 * 60 * 1000
            ).toISOString(),
            employmentType: 'CONTRACTOR',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'Công Ty TNHH Dịch Vụ Bảo Vệ An Thịnh Phát',
              sameAs: 'https://tuyenbaoveatp.ga',
              logo: 'https://tuyenbaoveatp.ga/images/logo.png',
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  '38, Tổ 13, Phường Trưng Trắc, Thị Xã Phúc Yên, Phường Trưng Trắc, Phúc Yên, Vĩnh Phúc',
                addressLocality: 'Vĩnh Phúc',
                addressRegion: 'Vĩnh Phúc',
                postalCode: '15906',
                addressCountry: 'VN',
              },
            },
            baseSalary: {
              '@type': 'MonetaryAmount',
              currency: 'VND',
              value: {
                '@type': 'QuantitativeValue',
                minValue: 14.0,
                maxValue: 16.0,
                unitText: 'HOUR',
              },
            },
          },
        },
      ],
    }
  },
}
</script>
