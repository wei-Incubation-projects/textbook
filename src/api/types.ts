// 假设接口响应通过格式
export interface ApiResp {
  code: number
  message: string
  data: any
  meta?: {
    pageSize: number
    total: number
    current: number
  }
}
