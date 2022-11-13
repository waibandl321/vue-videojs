<template>
  <div>
    <v-btn @click="counter.decrement">
      -
    </v-btn>
    <span class="count">
      {{ count }}
    </span>
    <v-btn @click="counter.increment">
      +
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import counterStore from '@/utils/store/store'

const counter = counterStore()
const count = computed(() => counter.count)
</script>
