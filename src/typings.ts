export interface ITableDate {
  label: string
  name: string
  hiddenInSearch: boolean
  hiddenInTable: boolean
  sortable: boolean
  ellipsis: boolean
  searchType: 'input' | 'checkbox' | 'radio' | 'select' | ''
  options?: { key: string | number; value: string }
}
