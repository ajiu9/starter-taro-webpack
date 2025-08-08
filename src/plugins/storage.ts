import type { StorageLike } from 'comuse-core'
import { getStorageSync, removeStorageSync, setStorageSync } from '@tarojs/taro'

export const wxStorage: StorageLike = {
  getItem(key) {
    try {
      const v = getStorageSync(key)
      if (v === undefined || v === null) return null
      return typeof v === 'string' ? v : JSON.stringify(v)
    }
    catch {
      return null
    }
  },
  setItem(key, value) {
    try {
      setStorageSync(key, value)
    }
    catch {}
  },
  removeItem(key) {
    try {
      removeStorageSync(key)
    }
    catch {}
  },
}
