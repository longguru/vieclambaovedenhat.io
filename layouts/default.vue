<template>
  <div>
    <Navigation />
    <!-- <InnerBanner /> -->
    <Nuxt />
    <Footer />
    <a href="#" class="scrollup">Scroll</a>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous"
    ></script> -->
    <!-- <script src="/js/app.js" />
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
    </script> -->
  </div>
</template>

<script>
// import InnerBanner from '~/components/InnerBanner'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
export default {
  components: {
    // InnerBanner,
    Navigation,
    Footer,
  },
}
</script>
