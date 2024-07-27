<template>
  <div class="container">
    <div>{{ studyId }}</div>
    <div>{{ menu }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  studyId: number;
  menu: string;
  title: string;
}
defineProps<Props>();
defineEmits<{ click: [] }>();
</script>

<style scoped>
.container {
  border: 1px solid #000;
}
</style>
