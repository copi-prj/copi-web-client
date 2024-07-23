<template>
  <div class="row q-col-gutter-lg">
    <div
      v-for="{
        projectId,
        menu,
        title,
        proceed,
        position,
        technologyStack,
        deadLine,
        username,
        hits,
        commentsCount,
        path,
      } in projects"
      :key="projectId"
      class="col-12 col-md-4 col-sm-6"
    >
      <NuxtLink v-slot="{ navigate }" custom :to="path">
        <div @click="navigate">
          <ProjectCard
            :project-id="projectId"
            :menu="menu"
            :title="title"
            :proceed="proceed"
            :position="position"
            :technology-stack="technologyStack"
            :dead-line="deadLine"
            :username="username"
            :hits="hits"
            :comments-count="commentsCount"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects();
</script>

<style scoped></style>
