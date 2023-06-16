<template>
  <div id="index">
    <h1>MY PAGE Two</h1>
    <button @click="goToPageIndex">index</button>
    <button @click="goToPageOne">pageOne</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPageOne = () => {
  router.push('/pageOne');
};

const goToPageIndex = () => {
  router.push('/');
};
</script>

<style scoped>
#index {
  min-height: 100vh;
  background: blue;
}
</style>
