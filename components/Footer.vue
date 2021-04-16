<template>
  <div class="footer-06">
    <div class="container">
      <!-- Row 1 Starts -->
      <div class="row row1">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <h2 class="mau-trang">{{ name }} - Tuyển dụng bảo vệ</h2>
        </div>
        <!-- Social Icons Starts -->
        <div class="col-lg-3 col-md-3 col-sm-3">
          <ul class="social-icons">
            <li>
              <a href=""><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/baovedenhat.ga/"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <!-- Social Icons Ends -->
      </div>
      <!-- Row 1 Ends -->
      <!-- Row 2 Starts -->
      <div class="row row2">
        <!-- Tags Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 clearfix tags">
          <h3>Từ khóa tìm kiếm</h3>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h3>Tin tuyển dụng mới nhất</h3>
          <ul>
            <li v-for="job in jobs" :key="job._id">
              <a
                :title="job.title"
                :href="website + '/' + job.slug.current + '/'"
                >{{ job.title }}</a
              >
            </li>
          </ul>
        </div>
        <!-- Recent Posts Ends -->
        <!-- From Blog Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 from-blog">
          <h3>Xin làm bảo vệ</h3>
          <ul>
            <li class="clearfix">
              <div class="picture">
                <img src="~/assets/images/blog/footer/1.jpg" alt="" />
              </div>
              <div class="info">
                <div class="caption">
                  <a href="#">Tôi ở Vĩnh Phúc xin làm bảo vệ được không?</a>
                </div>
                <div class="date">
                  Ngày đăng {{ new Date().toLocaleDateString() }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- From Blog Ends -->
        <!-- About Us Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 about">
          <h3>Tuyển dụng bảo vệ</h3>
          <div class="description">
            <strong
              >{{ name }}, Mã số thuế: {{ mst }}, Địa chỉ: {{ diaChi }}:</strong
            ><br />
            <strong>Cần tuyển dụng</strong>
            <em>nhân viên an ninh bảo vệ</em> tòa nhà, siêu thị, nhà máy làm
            việc tại KCN Khai Quang, Vĩnh Yên, KCN Bình Xuyên, Vĩnh Phúc hoặc
            KCN Bá Thiện, Vĩnh Phúc. Khu vực Phúc Yên. KCN Quang Minh, Mê Linh,
            Hà Nội
          </div>
          <div class="call-mobile">
            <a id="callnowbutton" href="tel:0978333963">097 833 39 63</a
            ><i class="fa fa-phone"></i>
          </div>
          <!-- Your Chat Plugin code -->
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="110994124405341"
          ></div>
        </div>
        <!-- About Us Ends -->
      </div>
      <!-- Row 2 Ends -->
    </div>
    <!-- Messenger Plugin chat Code -->
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-CZH7G1972Z"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-CZH7G1972Z')
    </script>
  </div>
</template>
<script>
export default {
  data() {
    return {
      website: 'https://tuyenbaoveatp.ga',
      name: 'Công Ty TNHH Dịch Vụ Bảo Vệ Đệ Nhất Việt Nam',
      mst: '0108032166',
      namThanhLap: '2012',
      diaChi:
        'Tầng 3, Số Nhà 13/E, Khu Tập Thể Tổng Cục 2, Tổ Dân Phố 6, Đường Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành Phố Hà Nội (TP.HN)',
      jobs: [
        {
          _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
          slug: {
            _type: 'slug',
            current:
              'vinh-yen-tuyen-gap-5-nhan-vien-bao-ve-nha-may-kcn-khai-quang',
          },
          title:
            'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
        },
      ],
      tuKhoas: [
        'tuyển bảo vệ',
        'việc làm bảo vệ',
        'tìm việc làm bảo vệ',
        'tuyển bảo vệ hà nội',
        'việc làm bảo vệ tại hà nội',
        'tìm việc bảo vệ',
        'làm bảo vệ',
        'tuyển nhân viên bảo vệ',
        'tuyển dụng bảo vệ',
        'tuyển bảo vệ nội bộ',
        'tìm việc làm bảo vệ nội bộ',
        'cần tuyển bảo vệ ca đêm',
        'cần tuyển bảo vệ',
        'tuyển bảo vệ ca 8 tiếng tại hà nội',
        'tuyển bảo vệ trường học',
        'bảo vệ nội bộ',
        'tuyển bảo vệ lương cao',
        'tim viec lam bao ve',
        'bao ve noi bo',
        'nhân viên bảo vệ',
      ],
    }
  },
}
</script>
