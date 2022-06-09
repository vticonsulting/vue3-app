<script>
import { Grid } from '@progress/kendo-vue-grid'
import { products } from '@/api/products'

export default {
  components: {
    Grid,
  },
  data() {
    return {
      gridWidth: 0,
      products,
    }
  },
  computed: {
    columns() {
      return [
        { field: 'ProductID', title: 'ID', width: this.setPercentage(10) },
        { field: 'ProductName', title: 'Name', width: this.setPercentage(21.9) },
        { field: 'Category.CategoryName', title: 'CategoryName', width: this.setPercentage(25) },
        { field: 'UnitPrice', title: 'Price', width: this.setPercentage(15) },
        { field: 'UnitsInStock', title: 'In stock' },
      ]
    },
  },
  created() {
    window.addEventListener('resize', this.myEventHandler)
  },
  unmounted() {
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted() {
    this.gridWidth = this.$refs.divWrapper.offsetWidth
  },
  methods: {
    setPercentage(percentage) {
      return Math.round(this.gridWidth / 100) * percentage
    },
    myEventHandler(e) {
      this.gridWidth = this.$refs.divWrapper.offsetWidth
    },
  },
}
</script>

<template>
  <div ref="divWrapper" style="width:70%">
    <Grid style="height: 400px" :data-items="products" :columns="columns" />
  </div>
</template>
