<script setup lang="ts">
import { RouterView } from "vue-router";
import Layout from "./components/layout/index.vue";
</script>

<template>
  <Layout>
    <template #main>
      <RouterView />
    </template>
  </Layout>
</template>
