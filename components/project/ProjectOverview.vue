<template>
  <div class="wrapper">
    <div class="project-overview-container">
      <h2>PROJECT</h2>
      <div class="search-container">
        <div class="search-nav">
          <!-- <SelectComponent v-model="selectedStacks" :options="stackOptions" placeholder="기술스택" />
          <SelectComponent v-model="selectedPosition" :options="positionOptions" placeholder="포지션" />
          <SelectComponent v-model="selectedProceed" :options="proceedOptions" placeholder="진행방식" /> -->
          <div ref="selectContainer" class="select-container">
            <button class="select-toggle-btn" @click="toggleMenu">{{ selectedOption }}</button>
            <ul v-show="menuVisible" class="selectMenu">
              <li v-for="option in options" :key="option" @click="selectOption(option)">
                <button :class="{ active: option === selectedOption }">{{ option }}</button>
              </li>
            </ul>
          </div>
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
const options = ref(['자바스크립트', '타입스크립트', '자바']);
const selectedOption = ref('기술스택');

const menuVisible = ref(false);
const selectContainer = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  menuVisible.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target as Node)) {
    menuVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

// const seletedStacks = ref('');
// const seletedPosition = ref('');
// const selectedProceed = ref('');

// watch(selectedProceed, (newValue) => {
//   console.log('진행방식:', newValue);
// });

// interface Option {
//   value: string;
//   text: string;
// }

// const selectedStacks = ref<string>('');
// const selectedPosition = ref<string>('');
// const selectedProceed = ref<string>('');

// const stackOptions: Option[] = [
//   { value: '', text: '기술스택' },
//   { value: 'javascript', text: '자바스크립트' },
//   { value: 'typescript', text: '타입스크립트' },
//   { value: 'java', text: '자바' },
// ];

// const positionOptions: Option[] = [
//   { value: '', text: '포지션' },
//   { value: 'frontend', text: '프론트엔드' },
//   { value: 'backend', text: '백엔드' },
//   { value: 'devops', text: '데브옵스' },
// ];

// const proceedOptions: Option[] = [
//   { value: '', text: '진행방식' },
//   { value: 'online', text: '온라인' },
//   { value: 'offline', text: '오프라인' },
//   { value: 'hybrid', text: '온오프라인' },
// ];
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

/* select */
.select-container {
  position: relative;
  display: inline-block;
}

.select-toggle-btn {
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s;
}

.select-toggle-btn:hover {
  background-color: #e0e0e0;
}

.selectMenu {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 350px;
  background-color: white;
  border: 1px solid #ccc;
}

.selectMenu button {
  background: none;
  padding: 10px 20px;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
}

.selectMenu button:hover {
  background-color: #e0e0e0;
}

.selectMenu button.active {
  background-color: #9856c4;
  color: white;
}

/* search bar */
.search-bar {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 0 0 10px;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.search-bar input[type='text'] {
  border: none;
  outline: none;
  border-radius: 8px 0 0 8px;
  width: 250px;
}

.search-bar button {
  padding: 5px 20px;
  background-color: #9856c4;
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
