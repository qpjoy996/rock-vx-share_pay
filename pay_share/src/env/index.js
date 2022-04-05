const evnList = {
  dev: {
    baseUrl:''
  },
  test: {
    baseUrl: ''
  },
  prod: {
    domain:'http://share.go4.so',
    baseUrl: ''
  }
}
// 每次手工修改项目环境变量
let currentEnv = 'dev';
// 根据当前浏览器环境动态设置环境变量
let params = {
  'dev-share.go4.so': 'dev',
  'test-share.go4.so': 'test',
  'share.go4.so': 'prod',
}
currentEnv = params[location.hostname]

export default evnList[currentEnv];