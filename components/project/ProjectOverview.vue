<template>
  <div class="wrapper">
    <div class="project-overview-container">
      <h2>PROJECT</h2>
      <div class="search-container">
        <div class="search-nav">
          <select v-model="seletedStacks" class="filter-option stacks">
            <option disabled value="">기술스택</option>
            <option>자바스크립트</option>
            <option>타입스크립트</option>
            <option>자바</option>
          </select>
          <select v-model="seletedPosition" class="filter-option position">
            <option disabled value="">포지션</option>
            <option>프론트엔드</option>
            <option>백엔드</option>
            <option>데브옵스</option>
          </select>
          <select v-model="selectedProceed" class="filter-option proceed">
            <option disabled value="">진행방식</option>
            <option>온라인</option>
            <option>오프라인</option>
            <option>온오프라인</option>
          </select>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button><i class="fa-solid fa-magnifying-glass"></i> Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const seletedStacks = ref('');
const seletedPosition = ref('');
const selectedProceed = ref('');

// watch(selectedProceed, (newValue) => {
//   console.log('진행방식:', newValue);
// });
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.project-overview-container {
  width: 100%;
  height: 300px;
  padding-top: 100px;
  background: #1b1b1b;
}

.project-overview-container h2 {
  font-size: 6rem;
  font-weight: 700;
  color: #fff;
}

.project-overview-container .search-container {
  display: flex;
  justify-content: space-between;
}

/* search bar */
.search-bar {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 0 0 10px;
  transition: all 0.3s ease;
}

.search-bar input[type='text'] {
  border: none;
  outline: none;
  border-radius: 8px 0 0 8px;
  width: 250px;
}

.search-bar button {
  padding: 5px 20px;
  background-color: #5f2387;
  color: #fff;
  font-weight: 700;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #9e00ff;
  box-shadow: 0 4px 20px rgba(158, 0, 255, 0.6);
}
</style>
