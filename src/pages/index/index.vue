<script setup lang="ts">
import { ref } from 'vue'
// import Counter from '../../components/Counter.vue'
import IconItem from '../../components/Icon.vue'
// import './index.scss'

const date = ref('2022-02-01')
const startDate = ref('2022-01-11')
const endDate = ref('2022-11-30')

const choose = (param) => {
  console.log(param)
  date.value = param[3]
}

const formData = ref({
  name: '',
  age: '',
  tel: '',
  addr: '',
  info: '',
})

const val1 = ref(0)
const val2 = ref('a')
const options1 = ref([
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
])
const options2 = ref([
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
])

const onChange = (value) => {
  console.log('排序方式改变:', value)
}
</script>

<template>
  <view class="index">
    <div>test</div>
    <!-- <Counter /> -->

    <view class="text-[#123456] bg-amber-100">
      tailwindcss
    </view>
    <view class="index bg-[#123456]">
      <view class="text-[55rpx] text-[#fff]">
        Hello world!
      </view>
    </view>

    <!-- Iconify 示例 -->
    <view class="mt-4 p-4 bg-gray-100 rounded">
      <view class="text-lg font-bold mb-2">
        Iconify 图标示例
      </view>

      <!-- 使用Icon组件 -->
      <view class="mb-4">
        <Text class="text-sm text-gray-600 mb-1">
          使用Icon组件:
        </Text>
        <view class="flex justify-around items-center">
          <IconItem name="mdi-home" :size="24" color="#1677ff" />
          <IconItem name="mdi-account" :size="32" color="#52c41a" />
          <IconItem name="mdi-heart" :size="48" color="#f5222d" />
          <IconItem name="mdi-star" :size="16" color="#faad14" />
        </view>
      </view>

      <!-- 使用Tailwind CSS类 -->
      <view class="mb-2">
        <text class="text-sm text-gray-600 mb-1">
          使用Tailwind CSS类:
        </text>
        <view class="flex justify-around items-center">
          <view class="i-mdi-home text-blue-500 text-2xl" />
          <!-- <view class="i-mdi-account text-green-500 text-2xl" /> -->
          <!--  <view class="i-mdi-heart text-red-500 text-2xl" />
          <view class="i-mdi-star text-yellow-500 text-2xl" /> -->
        </view>
      </view>
    </view>

    <nut-menu>
      <nut-menu-item v-model="val1" :options="options1" />
      <nut-menu-item v-model="val2" :options="options2" @change="onChange" />
    </nut-menu>

    <nut-cell title="Title" desc="Description"></nut-cell>
    <nut-cell title="Title" sub-title="Subtitle" desc="Description"></nut-cell>

    <nut-skeleton width="200px" height="15px" animated></nut-skeleton>

    <nut-form>
      <nut-form-item label="姓名">
        <nut-input v-model="formData.name" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item label="年龄">
        <nut-input v-model="formData.age" placeholder="请输入年龄" type="text" />
      </nut-form-item>
      <nut-form-item label="联系电话">
        <nut-input v-model="formData.tel" placeholder="请输入联系电话" type="text" />
      </nut-form-item>
      <nut-form-item label="地址">
        <nut-input v-model="formData.addr" placeholder="请输入地址" type="text" />
      </nut-form-item>
      <nut-form-item label="备注">
        <nut-textarea v-model="formData.info" placeholder="请输入备注" type="text" />
      </nut-form-item>
    </nut-form>
  </view>
</template>
