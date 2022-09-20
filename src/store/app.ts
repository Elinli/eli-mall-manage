import { defineStore } from 'pinia'
interface NavbarItem {
  path: string
  title: string
}
interface AppState {
  theme: string
  loginStatus: boolean
  isCollapse: boolean
  fullscreen: boolean
  lockScreen: boolean
  navbar: Array<NavbarItem>
}
export const useApp = defineStore('app', {
  state: () =>
    ({
      theme: 'light',
      loginStatus: false,
      isCollapse: true,
      fullscreen: false,
      lockScreen: false,
      navbar: [],
    } as AppState),
  getters: {
    getTheme(state) {
      return state.theme + ' theme'
    },
    getIsCollapse: ({ isCollapse }) => isCollapse,
    getFullscreen: ({ fullscreen }) => fullscreen,
    getLockScreen: ({ lockScreen }) => lockScreen,
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
    setLockScreen(lockScreen: boolean) {
      this.lockScreen = lockScreen
    },
    setNavbar(navbar: []) {
      this.navbar = navbar
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
