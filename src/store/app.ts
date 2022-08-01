import { defineStore } from 'pinia'
// import { useUser } from './user';
// const userStore = useUser();
export const useApp = defineStore('app', {
  state: () => ({
    theme: 'light',
    loginStatus: false,
    isCollapse: true,
  }),
  getters: {
    getTheme(state) {
      return state.theme + ' theme'
    },
    getIsCollapse: ({ isCollapse }) => isCollapse,
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
