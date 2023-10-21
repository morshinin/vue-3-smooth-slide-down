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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum voluptatibus quo neque, eum, commodi aut vero, soluta deleniti molestiae dolores sint autem repellat eos fugiat hic tempore? Hic, nisi.
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
