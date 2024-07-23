<template>
  <div class="my-card" @click="$emit('click')">
    <div class="text-h6 ellipsis">{{ menu }}</div>
    <div class="text-subtitle2 ellipsis text-grey-8">
      {{ title }}
    </div>
    <div>projectId: {{ projectId }}</div>
    <div>position: {{ position }}</div>
    <div>technologyStack: {{ technologyStack }}</div>
    <div>deadLine: {{ deadLine }}</div>
    <div>username: {{ username }}</div>
    <div>hits: {{ hits }}</div>
    <div>commentsCount: {{ commentsCount }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  projectId: number;
  menu: string;
  title: string;
  proceed: string[];
  position: string[];
  technologyStack: string[];
  deadLine: string;
  username: string;
  hits: string;
  commentsCount: string;
}
defineProps<Props>();

defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.my-card {
  border: 1px solid blue;
}
</style>
