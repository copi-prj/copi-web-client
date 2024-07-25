<template>
  <div class="wrap">
    <!-- start: header -->
    <header class="main-header">
      <h1>
        <a href="/" class="main-header__domain"> COP<span>i</span> </a>
      </h1>
      <nav class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="/project">PROJECT</a>
          </li>
          <li class="main-nav__item">
            <a href="/study">STUDY</a>
          </li>
          <li class="main-nav__item">
            <a href="/">COMMUNITY</a>
          </li>
          <li class="main-nav__item">
            <a href="/">Sign in</a>
          </li>
          <li class="main-nav__item--cta">
            <a href="/">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- end: header -->
    <div class="page-container" :style="pageContainerStyle">
      <!-- NuxtPage들 나오는 곳임! -->
      <slot></slot>
    </div>
    <!-- start: footer-->
    <footer>
      <ul>
        <li>COPi</li>
        <li><a href="/">COP<span>i</span>소개</a></li>
        <li><a href="/">이용약관</a></li>
        <li><a href="/">개인정보처리방침</a></li>
        <li><a href="/">광고상품소개</a></li>
      </ul>
      <div class="copyright">©COPI. ALL RIGHTS RESERVED</div>
      <a href="#top" class="go-top">위로</a>
    </footer>
    <!-- end: footer-->
  </div>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
</script>

<style scoped></style>
