import { defineStore } from 'pinia'

interface LoadRoutesState {
  loadDynamicRoutes: boolean
}
export const useLoadRoutes = defineStore('loadRoutes', {
  state: () =>
    ({
      loadDynamicRoutes: true,
    } as LoadRoutesState),
  getters: {
    getLoadDynamicRoutes: ({ loadDynamicRoutes }) => loadDynamicRoutes,
  },
  actions: {
    setLoadDynamicRoutes(loadDynamicRoutes: boolean) {
      this.loadDynamicRoutes = loadDynamicRoutes
    },
  },
})
