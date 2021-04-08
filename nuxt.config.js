export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tuyenbaoveatp.io',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700',
      },
      {
        rel: 'stylesheet',
        href: '/fonts/font-awesome/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/stylesheet.css',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'http://tuyenbaoveatp.ga',
          logo: 'http://tuyenbaoveatp.ga/images/logo.png',
        },
      },
      {
        src:
          'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
      },
      {
        src:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
      },
      {
        src: '/js/app.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/sanity-blocks.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/sanity',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://tuyenbaoveatp.ga',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    routes: [
      {
        _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
        slug: {
          _type: 'slug',
          current: '/',
        },
        title: 'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
      },
      {
        _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
        slug: {
          _type: 'slug',
          current:
            'vinh-yen-tuyen-gap-5-nhan-vien-bao-ve-nha-may-kcn-khai-quang',
        },
        title: 'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
      },
      {
        _id: '44384eba-45a7-4089-bbc7-54ac22c5a78e',
        slug: {
          _type: 'slug',
          current: 'tuyen-bao-ve-tai-vinh-tuong-bao-ve-sieu-thi-bigc-vinh-phuc',
        },
        title: 'Tuyển bảo vệ tại vĩnh tường - Bảo vệ Siêu Thị BigC Vĩnh Phúc',
      },
      {
        _id: '5f563ca5-d9a8-4cb8-a0dd-96418cc9b224',
        slug: {
          _type: 'slug',
          current:
            'cong-ty-bao-ve-tai-vinh-phuc-tuyen-20-bao-ve-kdt-times-gadern',
        },
        title: 'Công ty bảo vệ tại Vĩnh Phúc tuyển 20 bảo vệ KĐT Times Gadern',
      },
      {
        _id: '68d0919d-a50e-47dc-996b-7faaa3a36d4e',
        slug: {
          _type: 'slug',
          current: 'vinh-yen-tuyen-03-chi-huy-doi-bao-ve-tai-kcn-khai-quang',
        },
        title: 'Vĩnh Yên - Tuyển 03 chỉ huy đội bảo vệ tại KCN Khai Quang',
      },
      {
        _id: 'f3c39e0b-8346-4af5-bc4c-0e9d51b5db6d',
        slug: {
          _type: 'slug',
          current:
            'tuyen-bao-ve-tai-vinh-phuc-tim-viec-lam-bao-ve-chinh-thuc-thoi-vu',
        },
        title:
          'Tuyển bảo vệ tại vĩnh phúc, tìm việc làm bảo vệ chính thức thời vụ',
      },
    ].map((item) => '/' + item.slug.current),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://tuyenbaoveatp.ga',
  },
  generate: {
    dir: 'docs',
  },
}
