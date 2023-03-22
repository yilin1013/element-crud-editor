<template>
  <div class="preview-container">
    <div class="search-form">
      <el-form :inline="true" :form="form">
        <el-form-item v-for="item in state.formItems" :key="item.name" :label="item.label">
          <el-select v-if="item.searchType === 'select'">
            <el-option
              v-for="item in commonOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-checkbox-group v-else-if="item.searchType === 'checkbox'">
            <el-checkbox
              v-for="item in commonOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-checkbox-group>
          <el-radio-group v-else-if="item.searchType === 'radio'">
            <el-radio
              v-for="item in commonOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-radio-group>
          <el-input v-else v-model="form[item.name]" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-data">
      <el-table>
        <el-table-column
          v-for="item in state.tableColumns"
          :key="item.name"
          :prop="item.name"
          :label="item.name"
        />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'
import type { ITableDate } from '@/typings'
interface IState {
  formItems: ITableDate[]
  tableColumns: ITableDate[]
}
const state = reactive<IState>({
  formItems: [],
  tableColumns: []
})

const form = reactive<any>({})

const commonOptions = [
  { value: 'input', label: 'input' },
  { value: 'checkbox', label: 'checkbox' },
  { value: 'radio', label: 'radio' },
  { value: 'select', label: 'select' }
]
onBeforeMount(() => {
  const crudJson = localStorage.getItem('crudJson')
  if (crudJson) {
    const arr: ITableDate[] = JSON.parse(crudJson) || []
    state.formItems = arr.filter((item) => !item.hiddenInSearch)
    state.tableColumns = arr.filter((item) => !item.hiddenInTable)
  }
})
const onSubmit = () => {
  console.log('form:', form)
}
const onReset = () => {}
</script>
<style lang="less">
@import './index.less';
</style>
