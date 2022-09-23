<template>
  <el-button class="language icon-button" v-click-outside="onClickOutside" ref="buttonRef" text>
    <eli-svg-icon name="language" width="20px" height="20px" />
  </el-button>

  <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="hover" virtual-triggering>
    <ul class="language-box">
      <li
        :class="[
          'language-item',
          localeStore.getLocale.toLowerCase() === item.locale.toLowerCase() ? 'is-active' : '',
        ]"
        @click="toggleLanguage(item)"
        v-for="item in languages"
        :key="item.locale"
        >{{ item.label }}
      </li>
    </ul>
  </el-popover>
</template>
<script lang="ts" setup>
  import { ClickOutside as vClickOutside } from 'element-plus'
  import { useLocale } from '../../../store/modules/locale'

  const buttonRef = ref()
  const popoverRef = ref()
  const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
  }
  interface Language {
    locale: string
    label: string
  }
  const localeStore = useLocale()
  const languages = ref<Array<Language>>([
    { locale: 'en', label: 'English' },
    { locale: 'zh-CN', label: '简体中文' },
  ])
  function toggleLanguage(item: Language) {
    const { locale } = item
    localeStore.setLocale(locale)
    location.reload()
  }
</script>
