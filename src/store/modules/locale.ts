import { defineStore } from 'pinia'
import { store } from '..'

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

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocale(store)
}
