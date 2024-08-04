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
          <li class="main-nav__item--cta" @click="openAuthDialog">
            <a href="javascript:void(0)">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- end: header -->
    <main>
      <div class="page-container" :style="pageContainerStyle">
        <!-- NuxtPage들 나오는 곳임! -->
        <slot></slot>
      </div>
      <AuthDialog v-model="authDialog" />
    </main>
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
      <a id="goTopBtn" href="#top" class="go-top"><i class="fa-regular fa-circle-up"></i></a>
    </footer>
    <!-- end: footer-->
  </div>
</template>

<script setup lang="ts">
import AuthDialog from '~/components/auth/AuthDialog.vue';

const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);

const pageContainerStyle = computed(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));

const handleScroll = () => {
  const goTopBtn = document.getElementById('goTopBtn');
  if (goTopBtn) {
    window.scrollY > 200 ? goTopBtn.classList.add('show') : goTopBtn.classList.remove('show');
  }
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 전체 배경 */
.wrap {
  background: #1b1b1b;
}

header,
footer {
  position: relative;
  z-index: 1;
}

main {
  position: relative;
  z-index: 0;
}
</style>
