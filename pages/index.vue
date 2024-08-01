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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
  const numStars = 100;
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
</script>

<style scoped>
#star-container {
  position: relative;
  width: 100%;
  height: 100vh;
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
