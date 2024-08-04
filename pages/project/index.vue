<template>
  <div class="project-index">
    <ProjectOverview />
    <div class="project-card-view">
      <div
        v-for="{ projectId, menu, title, proceed, position, technologyStack, startDate, endDate, username, hits, commentsCount, path } in projects"
        :key="projectId"
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
              :start-date="startDate"
              :end-date="endDate"
              :username="username"
              :hits="hits"
              :comments-count="commentsCount"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects();
</script>

<style scoped>
.project-index {
  background: #1b1b1b;
}

.project-card-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
