<template>
  <div v-if="modelValue" class="auth-dialog">
    <div class="dialog-content">
      <p>모달창 띄울꺼다!!!!!!!!!</p>
      <button @click="closeDialog">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.auth-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 요소의 정확한 중앙이 부모 요소의 중앙과 일치하게 */
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dialog-content {
  text-align: center;
}

button {
  margin-top: 10px;
}
</style>
