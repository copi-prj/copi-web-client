<template>
  <div id="star-container">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        top: `${star.top}%`,
        left: `${star.left}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        boxShadow: `0.1px 0.1px ${star.size}px rgba(255, 255, 255)`,
        animationDuration: `${star.duration}s`,
      }"
    ></div>
    <HeaderComponent />
    <main>
      <div class="page-container" :style="pageContainerStyle">
        <!-- NuxtPage들 나오는 곳임! -->
        <slot></slot>
      </div>
      <AuthDialog v-model="authDialog" />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AuthDialog from '~/components/auth/AuthDialog.vue';

const authDialog = ref(false);

const pageContainerStyle = computed(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

const stars = ref<Star[]>([]);

const generateStars = () => {
  const numStars = 250;
  const starArray: Star[] = [];

  for (let i = 0; i < numStars; i++) {
    const star: Star = {
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1 + 1, // 별의 크기(1~2px 사이의 랜덤 값)
      opacity: Math.random() * 0.5 + 0.2, // 별의 불투명도(0.2~0.7 사이의 랜덤 값)
      duration: Math.random() * 4 + 1, // 별의 깜박임 애니메이션 지속 시간(1~4초 사이의 랜덤 값)
    };
    starArray.push(star);
  }

  stars.value = starArray;
};

onMounted(() => {
  generateStars();
  window.addEventListener('resize', generateStars);
});

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
header,
footer {
  position: relative;
  z-index: 1; /* 헤더와 푸터가 star-container 위에 표시되도록 설정 */
}

main {
  position: relative;
  z-index: 0;
}

/* star background */
#star-container {
  position: relative;
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #0e151d 0%, #090a0f 100%);
  z-index: 0;
}

.star {
  background: white;
  position: absolute;
  border-radius: 50%;
  animation: twinkle infinite;
}

.star::before,
.star::after {
  content: '';
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: twinkle infinite;
}

.star::before {
  color: white;
  transform: rotate(30deg);
}

.star::after {
  color: white;
  transform: rotate(60deg);
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
</style>
