<template>
  <div class="pagination-wrapper">
    <button :disabled="currentPage === 1" @click="goToPage(1)">맨처음</button>
    <button :disabled="currentPage <= maxPageButtons" @click="goToPreviousGroup">이전그룹</button>
    <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">이전</button>
    <button v-for="page in paginationRange" :key="page" :class="{ active: currentPage === page }" @click="goToPage(page)">
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">다음</button>
    <button :disabled="!hasNextGroup" @click="goToNextGroup">다음그룹</button>
    <button :disabled="currentPage === totalPages" @click="goToPage(totalPages)">맨마지막</button>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';

const emit = defineEmits(['page-change']);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  maxPageButtons: {
    type: Number,
    default: 5,
  },
});

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage));

const paginationRange = computed(() => {
  const start = (Math.ceil(currentPage.value / props.maxPageButtons) - 1) * props.maxPageButtons + 1;
  const end = Math.min(totalPages.value, start + props.maxPageButtons - 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const hasNextGroup = computed(() => {
  const nextGroupStart = Math.ceil((currentPage.value + 1) / props.maxPageButtons) * props.maxPageButtons + 1;
  return nextGroupStart <= totalPages.value;
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    emit('page-change', page);
  }
};

const goToPreviousGroup = () => {
  const previousGroupStart = Math.max(1, currentPage.value - props.maxPageButtons);
  currentPage.value = previousGroupStart;
  emit('page-change', previousGroupStart);
};

const goToNextGroup = () => {
  const currentGroupEnd = Math.ceil(currentPage.value / props.maxPageButtons) * props.maxPageButtons;
  let nextGroupStart = currentGroupEnd + 1;

  if (nextGroupStart > totalPages.value) {
    nextGroupStart = totalPages.value;
  }

  currentPage.value = nextGroupStart;
  emit('page-change', nextGroupStart);
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-wrapper button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination-wrapper button.active {
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

.pagination-wrapper button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
