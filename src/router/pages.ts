// 主包
const mainPackage = {
  index: '/pages/index/index',
  mine: '/pages/mine/mine'
}

// 分包
const subPackage = {
  subIndex: '/package-sub/pages/index/index'
}

const pages = {
  ...mainPackage,
  ...subPackage
}

export default pages
