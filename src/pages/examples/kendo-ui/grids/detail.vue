<script>
import { Grid } from '@progress/kendo-vue-grid'
import { products } from '@/api/products'
import DetailComponent from '@/components/DetailComponent.vue'

export default {
  components: {
    Grid,
    DetailComponent,
  },
  data() {
    return {
      cellTemplate: 'myTemplate',
      products,
      products,
      expandedItems: [],
      columns: [
        { field: 'CategoryID', title: 'ID', width: '50px', className: 'text-right', headerCell: this.headerCellFunction },
        { field: 'CategoryName', title: 'Name', className: '', headerCell: 'headerTemplate' },
      ],
      categories: [
        { CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales' },
        { CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings' },
        { CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads' },
        { CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses' },
        { CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal' },
        { CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats' },
        { CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd' },
        { CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish' },
      ],
    }
  },
  methods: {
    expandChange(event) {
      event.dataItem[event.target.$props.expandField] = !event.dataItem.expanded
    },
    getFilteredProducts(catId) {
      const result = filterBy(products, { field: 'Category.CategoryID', operator: 'eq', value: catId })

      return result
    },
    customHandler(e) {
      console.log('customHandler', e)
    },
    headerCellFunction(h, emptyElement, props, listeners) {
      return h('span', {
        onClick: this.customHandler,
      }, [`custom ${props.field}`])
    },
  },
}
</script>

<template>
  <Grid
    ref="grid"
    :style="{ height: '350px' }"
    :data-items="categories"
    :detail="cellTemplate"
    :columns="columns"
    expand-field="expanded"
    @expandchange="expandChange"
  >
    <template #myTemplate="{ props }">
      <DetailComponent :data-item="props.dataItem" />
    </template>

    <template #headerTemplate="{ props }">
      <span @click="customHandler">{{ props.field }}</span>
    </template>
  </Grid>
</template>
