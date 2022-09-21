import { defineStore } from 'pinia'

export const useLocale = defineStore('locale', {
  state: () => ({
    locale: 'zh-CN',
  }),
  getters: {
    getLocale({ locale }) {
      return locale
    },
  },
  actions: {
    setLocale(locale: string) {
      this.locale = locale
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'locale',
        storage: sessionStorage,
        paths: ['locale'],
      },
    ],
  },
})
