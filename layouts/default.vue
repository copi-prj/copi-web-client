<template>
  <div class="main-header-container">
    <!-- start: header -->
    <header class="main-header">
      <h1>
        <a href="/" class="main-header__connect"> Connect </a>
      </h1>
      <nav class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="/project" class="nav-link">Project</a>
          </li>
          <li class="main-nav__item">
            <a href="/study" class="nav-link">Study</a>
          </li>
          <li class="main-nav__item">
            <a href="/" class="nav-link">Community</a>
          </li>
          <li class="main-nav__item">
            <a href="/" class="nav-link">Sign in</a>
          </li>
          <li class="main-nav__item">
            <a href="/" class="nav-link">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- end: header -->
    <div class="page-container" :style="pageContainerStyle">
      <!-- NuxtPage들 나오는 곳임! -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));
</script>

<style scoped></style>
