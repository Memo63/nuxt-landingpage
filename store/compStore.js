export const state = () => ({
  activeCatagory: '',
  components: [
    {
      thumbnail: '….png',
      name: 'Bloks',
      category: 'bloks',
      url: '/bloks'
    },
    {
      thumbnail: '….png',
      name: 'Navbar',
      category: 'navigation',
      url: '/navbars'
    },
    {
      thumbnail: '….png',
      name: 'Tabs',
      category: 'navigation',
      url: '/tabs'
    },
    {
      thumbnail: '',
      name: 'Page Headings',
      category: 'headings',
      url: '/page-headings'

    },
    {
      thumbnail: '',
      name: 'Section Headings',
      category: 'headings',
      url: '/section-headings'

    },
    {
      thumbnail: '',
      name: 'Test',
      url: '/test-url',
      category: 'test'
    }
  ]
})

export const getters = {
  getComponents (state) {
    return state.components
  },
  getActiveComponents (state) {
    if (!state.activeCatagory) { return state.components }
    return state.components.filter(component =>
      component.category === state.activeCatagory
    )
  }
}

export const mutations = {
  setComponents (state, payload) {
    state.components = payload
  },
  setActiveCategory (state, payload) {
    state.activeCatagory = payload
  }
}

export const actions = {
  clearComponents ({ commit }) {
    commit('setComponents', [])
  },
  activeCategory ({ commit }, payload) {
    commit('setActiveCategory', payload)
  }
}
