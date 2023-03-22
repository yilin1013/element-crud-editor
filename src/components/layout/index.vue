<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const onBack = () => {
  router.back()
}
</script>
<template>
  <el-container class="layout-container">
    <el-container class="layout-header-content">
      <el-page-header @back="onBack" class="layout-header">
        <template #breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: './page-header.html' }"> homepage </el-breadcrumb-item>
            <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
            <el-breadcrumb-item>route 2</el-breadcrumb-item>
          </el-breadcrumb>
        </template>
        <template #content><div>Page name</div></template>
        <template #extra>
          <div class="flex">
            <el-avatar
              class="mr-3"
              :size="32"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span class="text-large font-600 mr-3"> Title </span>
          </div>
        </template>
      </el-page-header>

      <el-main>
        <el-scrollbar><slot name="main"></slot></el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
@import './index.less';
/* @import "./base.css"; */
</style>
