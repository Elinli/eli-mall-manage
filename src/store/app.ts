import { defineStore } from 'pinia'
interface NavbarItem {
  path: string
  title: string
  meta: any
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
    getNavbar: ({ navbar }) => navbar,
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
    setNavbar(navbarItem: any, type?: string) {
      if (type === 'delete') {
        this.navbar = this.navbar.filter((barItem) => barItem.path !== navbarItem.path)
      } else {
        console.log(this.navbar)
        const isExist = this.navbar.some((item) => item.path === navbarItem.path)
        if (!isExist) this.navbar.push(navbarItem)
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: sessionStorage,
      },
    ],
  },
})
