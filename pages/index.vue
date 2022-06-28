<template>
  json data: {{ data }}
</template>

<script setup>
const { data } = await useAsyncData('test', () => $fetch('/api/test'))
</script>
