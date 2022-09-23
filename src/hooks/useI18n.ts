import { useI18n } from 'vue-i18n'
// type I18nGlobalTranslation = {
//   (key: string): string
//   (key: string, locale: string): string
//   (key: string, locale: string, list: unknown[]): string
//   (key: string, locale: string, named: Record<string, unknown>): string
//   (key: string, list: unknown[]): string
//   (key: string, named: Record<string, unknown>): string
// }

// type I18nTranslationRestParameters = [string, any]

// @ts-ignore
export function useConfigI18n(namespace?: string) {
  const { t } = useI18n()
  const tFn = (key: string) => {
    if (!key) return ''
    if (!key.includes('.') && !namespace) return key
    return t(key)
  }
  return {
    t: tFn,
  }
}

// Why write this function？
// Mainly to configure the vscode i18nn ally plugin. This function is only used for routing and menus. Please use useI18n for other places

// 为什么要编写此函数？
// 主要用于配合vscode i18nn ally插件。此功能仅用于路由和菜单。请在其他地方使用useI18n
export const t = (key: string) => key
