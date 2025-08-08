<script setup lang="ts">
import { useStorage } from 'comuse-core'
import IconItem from '../../components/Icon.vue'
import { wxStorage } from '../../plugins/storage'

const name = useStorage('name', 'ajiu9', wxStorage, {
  listenToStorageChanges: false,
  initOnMounted: false,
})
</script>

<template>
  <view>
    <view class="mt-4 p-4 bg-gray-100">
      <view class="text-lg font-bold mb-2">
        图标
      </view>
      <view class="mb-4">
        <view class="flex justify-around items-center">
          <IconItem name="carbon-home" :size="24" color="#1677ff"></iconitem>
          <IconItem name="carbon-account" :size="32" color="#52c41a"></iconitem>
          <text class="i-carbon-home text-blue-500 text-2xl"></text>
        </view>
      </view>
    </view>
    <nut-divider></nut-divider>
    <view class="p-4">
      <view class="text-lg">
        useStorage
      </view>
    </view>
    <nut-input v-model="name" placeholder="ajiu9" type="text"></nut-input>
  </view>
</template>
