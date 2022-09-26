import { defineStore } from 'pinia'

interface LoadRoutesState {
  isDynamicAddedRoute: boolean
}
export const useLoadRoutes = defineStore('loadRoutes', {
  state: (): LoadRoutesState => ({
    isDynamicAddedRoute: true,
  }),
  getters: {
    getisDynamicAddedRoute: ({ isDynamicAddedRoute }) => isDynamicAddedRoute,
  },
  actions: {
    setisDynamicAddedRoute(isDynamicAddedRoute: boolean) {
      this.isDynamicAddedRoute = isDynamicAddedRoute
    },
  },
})
