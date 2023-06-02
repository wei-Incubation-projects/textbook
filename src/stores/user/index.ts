import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: ''
    },
    token: ''
  }),
  getters: {
    // 示例返回大写字符
    capName(state) {
      return state.userInfo.name.toUpperCase()
    }
  },
  actions: {
    async setUserInfo() {
      // 这里可以发起请求
      //   const userInfo = await getUserInfo()
      //   this.userInfo = userInfo
    }
  }
})
