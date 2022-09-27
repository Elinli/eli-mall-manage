import { useI18n } from 'vue-i18n'
// type I18nGlobalTranslation = {
//   (key: string): string
//   (key: string, locale: string): string
//   (key: string, locale: string, list: unknown[]): string
//   (key: string, locale: string, named: Record<string, unknown>): string
//   (key: string, list: unknown[]): string
//   (key: string, named: Record<string, unknown>): string
// }

type I18nTranslationRestParameters = [string, any]

// @ts-ignore
export function useConfigI18n(namespace?: string) {
  const { t } = useI18n()
  function tFn(key: string, ...args: any) {
    if (!key) return ''

    if (!key.includes('.') && !namespace) return key

    return t(key, ...(args as I18nTranslationRestParameters))
  }
  return {
    t: tFn,
  }
}

export const t = (key: string) => key
