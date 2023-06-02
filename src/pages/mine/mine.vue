<template>
  <view class="u-page">
    <view class="login">
      <u-gap height="10"></u-gap>
      <u-row span="2">
        <u--image
          :showLoading="true"
          src="https://cdn.uviewui.com/uview/album/1.jpg"
          width="80px"
          height="80px"
          shape="circle"
        ></u--image>
      </u-row>
      <u-gap height="10"></u-gap>
      <u-row span="2">
        <u--text mode="link" text="登录/注册" href="https://www.uviewui.com"></u--text>
      </u-row>
      <u-gap height="10"></u-gap>
    </view>

    <u-list>
      <u-list-item v-for="(item, index) in indexList" :key="index">
        <u-cell
          icon="integral-fill"
          :title="item.title"
          :isLink="true"
          center
          size="large"
        ></u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script setup lang="ts">
const img = ref('src/static/logo.png')
const indexList = ref([
  {
    title: '我的题库'
  },
  {
    title: '我的笔记'
  },
  {
    title: '我的收藏'
  },
  {
    title: '我的订单'
  },
  {
    title: '客服咨询'
  },
  {
    title: 'APP下载'
  },
  {
    title: '关于我们'
  }
])
</script>

<style lang="scss" scoped>
.u-page {
  width: 100%;
  height: 100vh;

  .login {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
