import { defineStore } from 'pinia'
// import { useUser } from './user';
// const userStore = useUser();
export const useApp = defineStore('app', {
  state: () => ({
    theme: 'light',
    loginStatus: false,
    count: 0,
    isCollapse: true,
  }),
  getters: {
    getTheme(state) {
      return state.theme + ' theme'
    },
    getIsCollapse: ({ isCollapse }) => isCollapse,
  },
  actions: {
    increamentCount() {
      this.count++
    },
    modifyTheme(theme: string) {
      this.theme = theme
    },
    checkLogin(loginStatus: Boolean) {
      this.loginStatus = loginStatus
    },
    setIsCollapse(isCollapse: Boolean) {
      this.isCollapse = isCollapse
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage,
        paths: ['count'],
      },
    ],
  },
})
