<template>
  <div class="editor-container">
    <el-button @click="toPreview">预览</el-button>
    <el-form :form="form">
      <el-table :data="form.dynamicData" style="width: 100%" size="large">
        <el-table-column prop="name" label="字段名">
          <template #default="scope"><el-input v-model="scope.row.name" /> </template>
        </el-table-column>
        <el-table-column prop="label" label="字段名称">
          <template #default="scope"> <el-input v-model="scope.row.label" /> </template>
        </el-table-column>
        <el-table-column prop="hiddenInSearch" label="查询隐藏">
          <template #default="scope"> <el-switch v-model="scope.row.hiddenInSearch" /> </template>
        </el-table-column>
        <el-table-column prop="searchType" label="查询类型">
          <template #default="scope">
            <el-select v-model="scope.row.searchType">
              <el-option
                v-for="item in commonOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="hiddenInTable" label="列表隐藏">
          <template #default="scope"> <el-switch v-model="scope.row.hiddenInTable" /> </template>
        </el-table-column>
        <el-table-column prop="sortable" label="是否排序">
          <template #default="scope"> <el-switch v-model="scope.row.sortable" /> </template>
        </el-table-column>
        <el-table-column prop="ellipsis" label="是否自动缩略">
          <template #default="scope"> <el-switch v-model="scope.row.ellipsis" /> </template>
        </el-table-column>
      </el-table>
    </el-form>

    <el-button @click="addRow">增加一行</el-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { ITableDate } from '@/typings'
const router = useRouter()
interface IStateForm {
  dynamicData: ITableDate[]
}
const newRow = (i: number): ITableDate => {
  return {
    name: `name${i + 1}`,
    label: `字段名称${i + 1}`,
    hiddenInSearch: false,
    hiddenInTable: false,
    sortable: false,
    ellipsis: false,
    searchType: 'input'
  }
}
const form = reactive<IStateForm>({
  dynamicData: Array.from({ length: 3 }).map((_, i) => newRow(i))
})
const commonOptions = [
  { value: 'input', label: 'input' },
  { value: 'checkout', label: 'checkout' },
  { value: 'radio', label: 'radio' },
  { value: 'select', label: 'select' }
]

const addRow = () => {
  form.dynamicData.push(newRow(form.dynamicData.length))
}

const toPreview = () => {
  localStorage.setItem('crudJson', JSON.stringify(form.dynamicData))
  router.push('/preview')
}

onMounted(() => {
  // state.tableData = []
})
</script>
<style lang="less">
@import './index.less';
</style>
