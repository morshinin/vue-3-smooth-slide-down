# Vue 3 Smooth Slide Down

Simple component for smooth slide down effect.

## Installation

```sh
npm i vue-3-smooth-slide-down
```

## Usage

```vue
<script setup>
import { Vue3SmoothSlideDown } from 'vue-3-smooth-slide-down'
import { ref } from 'vue'

const show = ref(false)

function showElement() {
  show.value = !show.value
}
</script>

<template>
  <main>
    <button @click="showElement">Click me</button>
    <Vue3SmoothSlideDown v-model="show">
        <!-- Your content here -->
    </Vue3SmoothSlideDown>
  </main>
</template>
```