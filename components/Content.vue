<template>
  <div class=" p-6">
    <h1 class="text-4xl font-semibold text-gray-900 mt-4 ml-10">
      Content
    </h1>
    <div class="max-w-7xl mx-auto px-4  flex flex-row">
      <div
        v-for="(component, index) in components"
        :key="index"
        class=" text-2xl max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-80 m-20"
      >
        <div class="flex justify-center md:justify-end -mt-16">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-gray-400" src="https://picsum.photos/100">
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            {{ component.name }}
          </h2>
          <p class="mt-2 text-gray-600">
            Thumbnail: {{ component.thumbnail }}
          </p>
        </div>
        <p class="mt-2 text-gray-600">
          URL: {{ component.url }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    components () {
      return this.$store.state.compStore.components.filter(component =>
        component.category === this.$store.state.compStore.activeCatagory)
    }
  }
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  // computed: {
  //   ...mapState({
  //     components: state => state.compStore.components
  //   }),
  //   ...mapGetters({
  //     getComponents: 'compStore/getComponents'
  //   })
  // },
  // methods: {
  //   ...mapMutations({
  //     setComponents: 'compStore/setComponents'
  //   }),
  //   ...mapActions({
  //     clearComponents: 'compStore/clearComponents'
  //   })
  // }
}
</script>

<style lang="postcss" scoped>

</style>
