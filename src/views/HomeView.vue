<template>
  <v-container>
    {{ x.toFixed(2) }}
    <ComponentTest
      @alert-output="emitTest()"
    />
  </v-container>
</template>

<script lang="ts" setup>
import ComponentTest from '@/components/ComponentTest.vue'
function emitTest () {
  alert('HIHIHIHI')
}
const x: string | number = 1
</script>
