// 所有接口出口
const requireRouteFilePaths = require.context('./', true, /^.\/.*\/.*[\.ts|\.js]$/)
const apiArr: object[] = requireRouteFilePaths.keys()
  .map((routeFilePath) => requireRouteFilePaths(routeFilePath).default)
  .reduce((prev, next) => prev.concat(next), [])
const allApi: object = {}

apiArr.forEach((item: object) => {
  Object.assign(allApi, item)
})
export default allApi
