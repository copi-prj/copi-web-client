<template>
  <div>
    <div v-for="{ studyId, menu, title } in studies" :key="studyId">
      <NuxtLink v-slot="{ navigate }" custom :to="`/study/${studyId}`">
        <div @click="navigate">
          <StudyCard :study-id="studyId" :menu="menu" :title="title" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { studies } = useStudies();
</script>

<style scoped></style>
