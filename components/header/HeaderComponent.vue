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
      <AuthDialog v-model="authDialog" />
    </header>
    <!-- end: header -->
  </div>
</template>

<script setup lang="ts">
import AuthDialog from '~/components/auth/AuthDialog.vue';

const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
</script>

<style scoped>
/* 전체 배경 */
/* .wrap {
  background: #1b1b1b;
} */

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
