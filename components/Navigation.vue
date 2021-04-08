<template>
  <nav class="navigation-02 yamm navbar navbar-inverse fill-black normal">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-02"
          aria-expanded="false"
          aria-controls="navbar-02"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <nuxt-link class="navbar-brand" to="/">
          <strong class="mau-trang mt-5">AN THỊNH PHÁT TUYỂN DỤNG</strong>
        </nuxt-link>
        <!-- <a class="navbar-brand" href="/">
          <img
            src="~/assets/images/tuyen-dung-bao-ve.png"
            width="150"
            height="50"
            alt=""
          /> 
          <strong>AN THỊNH PHÁT TUYỂN DỤNG</strong>
        </a>-->
      </div>
      <div id="navbar-02" class="navbar-collapse collapse">
        <ul class="nav navbar-nav right">
          <li><nuxt-link to="/">Trang chủ</nuxt-link></li>
          <li><nuxt-link to="/gioi-thieu">Giới thiệu</nuxt-link></li>
          <li><a href="#">Tin tuyển dụng</a></li>
          <li><a href="#">Liên hệ</a></li>
          <li>
            <a
              class="btn btn-primary"
              target="_blank"
              href="https://zalo.me/0978333963"
              >Tư vấn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
