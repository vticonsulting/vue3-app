<script>
import { Grid, filterGroupByField, sortGroupByField } from '@progress/kendo-vue-grid'
import { process } from '@progress/kendo-data-query'
import { products } from '@/api/products'

export default {
  components: {
    Grid,
  },
  data() {
    return {
      columnMenu: true,
      columns: [
        { field: 'ProductName', title: 'Name' },
        { field: 'Discontinued', filter: 'boolean' },
      ],
      take: 10,
      skip: 0,
      gridData: [],
      sort: [],
      filter: null,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const dataState = {
        take: this.take,
        skip: this.skip,
        filter: this.filter,
        sort: this.sort,
      }
      this.gridData = process(products, dataState)
    },
    createAppState(dataState) {
      this.take = dataState.take
      this.skip = dataState.skip
      this.sort = dataState.sort
      this.filter = dataState.filter
      this.getData()
    },
    dataStateChange(event) {
      this.createAppState(event.data)
    },
    filterChange(event) {
      const isColumnActive = filterGroupByField(event.event.field, event.filter)
      // @ts-expect-error
      const changedColumn = this.columns.find((column) => {
        return column.field === event.event.field
      })

      if (changedColumn)
        changedColumn.headerClassName = isColumnActive ? 'active' : ''

      this.filter = event.filter
      this.getData()
    },
    sortChange(event) {
      const isColumnActive = sortGroupByField(event.event.field, event.sort)
      // @ts-expect-error
      this.columns.find((column) => {
        return column.field === event.event.field
      }).headerClassName = isColumnActive ? 'active' : ''

      this.sort = event.sort
      this.getData()
    },
    expandChange(event) {
      event.dataItem[event.target.$props.expandField] = event.value
      //
      // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
      //
      //   Vue.set(
      //     event.dataItem,
      //     event.target.$props.expandField,
      //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
      //   )
      //
    },
  },
}
</script>

<template>
  <Grid
    :data-items="gridData"
    :take="take"
    :skip="skip"
    :sortable="true"
    :sort="sort"
    :filter="filter"
    :pageable="true"
    :column-menu="true"
    :columns="columns"
    @datastatechange="dataStateChange"
    @filterchange="filterChange"
    @sortchange="sortChange"
  />
</template>

<style>
th.k-header.active > div > div {
  color: #fff;
  background-color: #ff6358;
}
</style>
