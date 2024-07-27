<template>
  <div>
    <div v-for="{ studyId, menu, title } in paginatedStudies" :key="studyId">
      <NuxtLink v-slot="{ navigate }" custom :to="`/study/${studyId}`">
        <div @click="navigate">
          <StudyCard :study-id="studyId" :menu="menu" :title="title" />
        </div>
      </NuxtLink>
    </div>
    <PaginationComponent :items="studies" :items-per-page="itemsPerPage" :max-page-buttons="5" @page-change="handlePageChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStudies } from '@/composables/useStudies';

const { studies } = useStudies();
const currentPage = ref(1);
const itemsPerPage = 6;

const paginatedStudies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return studies.slice(start, end);
});

function handlePageChange(page: number) {
  currentPage.value = page;
}
</script>

<style scoped></style>
