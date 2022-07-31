<template>
  <div class="bread-crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
  .bread-crumbs {
    height: 30px;
    @include alignCenter;
    font-weight: 400;
    padding: 0 16px !important;
  }
</style>
