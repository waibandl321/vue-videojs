<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      message: 'Hello World'
    }
  }
})
</script>
