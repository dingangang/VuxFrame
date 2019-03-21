/*eslint-disable */
/**
 * ui-api mock生成数据，仅在开发环境使用
 */
if (process.env.NODE_ENV === 'development') {
  const Mock = require('mockjs')

  // 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
  Mock.setup({
    timeout: '300-600'
  })

  Mock.mock(/test$/, {
    msg: 'hello from mockjs.'
  })

}
