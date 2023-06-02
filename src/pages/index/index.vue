<template>
  <view class="u-page">
    <u--text
      suffixIcon="arrow-leftward"
      iconStyle="font-size: 18px"
      :text="title"
      size="20"
      align="center"
      lineHeight="50"
    ></u--text>
    <u-line></u-line>
    <u-row justify="space-between" customStyle="margin-bottom: 10px">
      <u-col span="3.5">
        <u--text text="做题记录" size="20" lineHeight="50" align="center"></u--text>
      </u-col>
      <u-col span="2">
        <u--text text="更多"></u--text>
      </u-col>
    </u-row>

    <view class="record">
      <u-empty mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png"> </u-empty>
    </view>

    <u-grid :border="false">
      <u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
        <u-icon
          :customStyle="{ paddingTop: 20 + 'rpx' }"
          :name="baseListItem.name"
          :size="44"
        ></u-icon>
        <text class="grid-text">{{ baseListItem.title }}</text>
      </u-grid-item>
    </u-grid>

    <u-row justify="space-between" customStyle="margin-bottom: 10px">
      <u-col span="3.5">
        <u--text text="我的题库" size="20" lineHeight="80" align="center"></u--text>
      </u-col>
      <u-col span="3">
        <u--text text="选择题库"></u--text>
      </u-col>
    </u-row>

    <view class="list">
      <u-empty mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png"> </u-empty>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('职业药师')
const baseList = ref([
  {
    name: 'phone',
    title: '笔记'
  },
  {
    name: 'lock',
    title: '收藏'
  },
  {
    name: 'star',
    title: '订单'
  }
])
</script>

<style lang="scss" scoped>
.u-page {
  .record {
    width: 92%;
    margin: 0 auto;
    background-color: $u-warning-light;
    border-radius: 20rpx;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
