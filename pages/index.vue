<template>
  <div>
    <div>루트화면</div>
    <div>
      <div class="text-h6">Studies Pagination</div>
      <PaginationDefault :items="studies" :items-per-page="6" :max-page-buttons="5" />

      <div class="text-h6">Projects Pagination</div>
      <PaginationDefault :items="projects" :items-per-page="6" :max-page-buttons="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { studies } = useStudies();
const { projects } = useProjects();
</script>

<style scoped></style>
