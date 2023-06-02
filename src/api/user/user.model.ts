import type { ApiResp } from '../types'

export interface GetUserListParm {
  position: number
}

export interface GetUserListResp extends ApiResp {
  data: GetUserListData[]
}

export interface GetUserListData {
  name: string
  position: number
}
