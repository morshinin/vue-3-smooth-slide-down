<script setup lang="ts">
import { ref } from 'vue'
import { Vue3SmoothSlideDown } from './components';

const show = ref(false)

function showElement() {
  show.value = !show.value
}
</script>

<template>
  <main>
    <button @click="showElement">Click me</button>
    <div class="body">
      <div class="primary">
        <Vue3SmoothSlideDown v-model="show">
          <div class="body_slide1">
            <div>Fuck</div>
            <div>Fuck 2</div>
            <div>Fuck 3</div>
            <div>Fuck 3</div>
            <div>Fuck 3</div>
          </div>
        </Vue3SmoothSlideDown>
      </div>
    </div>

  </main>
</template>

<style>
.body {
  display: flex;
  gap: 50px;
}

.body_slide1 {
  padding: 20px;
  background-color: gold;
}

.body_slide2 {
  padding: 20px;
  background-color: crimson;
}
</style>
