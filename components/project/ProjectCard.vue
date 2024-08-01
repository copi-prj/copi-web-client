<template>
  <div class="project-card" @click="$emit('click')">
    <!-- <div class="menu">{{ menu }}</div> -->
    <!-- <div>projectId: {{ projectId }}</div> -->
    <div class="card-header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="card-body">
      <div class="position">{{ position }}</div>
      <div class="stacks">{{ technologyStack }}</div>
      <div class="projectRecruitmentDeadline">모집마감일 {{ endDate }}</div>
    </div>
    <div class="card-footer">
      <div>
        <i class="fa-solid fa-user"></i>
        <span> {{ username }} </span>
      </div>
      <div>
        <i class="fa-solid fa-eye"></i>
        <span> {{ hits }} </span>
        <i class="fa-solid fa-comment"></i>
        <span> {{ commentsCount }} </span>
      </div>
    </div>
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
  startDate: string;
  endDate: string;
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
.project-card {
  width: 550px;
  height: 250px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  margin-bottom: 40px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.project-card:hover {
  box-shadow: 2px 2px 10px rgba(217, 2, 255, 0.863);
}

.project-card .card-header {
  /* border: 1px solid #000; */
  height: 70px;
}

.project-card .card-header .menu {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6c6c6c;
  margin-bottom: 0.5rem;
}

.project-card .card-header .title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.project-card .card-body {
  /* border: 1px solid #000; */
  height: 120px;
  padding: 0.3rem 1.2rem;
  display: flex;
  flex-direction: column;
}
.project-card .card-body .stacks {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.project-card .card-body .projectRecruitmentDeadline {
  align-self: end;
}

/*
.project-card .card-body .stacks .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-right: 1.9rem;
  margin-bottom: 0.5rem;
}

.project-card .technology-stack .icon img {
  width: 20px;
  height: 20px;
} */

.project-card .card-footer {
  /* border: 1px solid #000; */
  height: 35px;
  padding: 0 1.2rem;
}

.project-card .card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #6c6c6c;
  margin-bottom: 0.5rem;
}

.project-card .card-footer i {
  padding: 0.5rem;
}
</style>
