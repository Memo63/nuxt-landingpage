<template>
  <div class=" bg-indigo-700 md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64 mt-10">
      <div class="mt-5 flex-1 flex flex-col">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="text-white border-2 mx-4 p-2  rounded-lg uppercase border-red-100 text-2xl my-6 hover:bg-purple-700"
          :class="{'bg-purple-700': category===$store.state.compStore.activeCatagory}"
          @click="
            setIndex(category)"
        >
          {{ category }}
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      categories: []
    }
  },

  // computed: {
  //   components () {
  //     return this.$store.state.state.compStore.components
  //   }
  // },

  mounted () {
    this.getCategories(this.categories)
    this.removeDuplicates()
  },

  methods: {
    getCategories (array) {
      return this.$store.state.compStore.components.map(component => array.push(component.category)
      )
    },
    // console.log(array)
    // return array
    // getCategories (array) {
    //   for (let i = 0; i < this.$store.state.compStore.components.length; i++) {
    //     array.push(this.$store.state.compStore.components[i].category)
    //   }
    //   console.log(array)
    //   return array
    // },
    removeDuplicates () {
      this.categories = [...new Set(this.categories)]
    },
    setIndex (categoryName) {
      // this.$store.dispatch('activeCategory', this.$store.state.components[ind].category)
      // console.log(categoryName)
      // console.log(this.categories)
      this.$store.commit('compStore/setActiveCategory', categoryName)
    }
  }

}
</script>

<style lang="postcss" scoped>

</style>
