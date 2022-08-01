import { defineStore } from 'pinia'
interface AppState {
  theme: string
  loginStatus: boolean
  isCollapse: boolean
  fullscreen: boolean
}
export const useApp = defineStore('app', {
  state: () =>
    ({
      theme: 'light',
      loginStatus: false,
      isCollapse: true,
      fullscreen: false,
    } as AppState),
  getters: {
    getTheme(state) {
      return state.theme + ' theme'
    },
    getIsCollapse: ({ isCollapse }) => isCollapse,
    getFullscreen: ({ fullscreen }) => fullscreen,
  },
  actions: {
    modifyTheme(theme: string) {
      this.theme = theme
    },
    checkLogin(loginStatus: boolean) {
      this.loginStatus = loginStatus
    },
    setIsCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse
    },
    setFullscreen(fullscreen: boolean) {
      this.fullscreen = fullscreen
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage,
      },
    ],
  },
})
