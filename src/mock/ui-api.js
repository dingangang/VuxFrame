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
  // 推荐机构信息
  Mock.mock(/parent\/index\/organization$/, {
    link: '/somewhere',
    'dataset|3-5': [
      {
        id: '@id',
        src: '/static/images/bg04.png',
        title: '@CWORD(3,8)',
        desc: '@CPARAGRAPH(10,25)',
        auths: ['已认证', '某某机构'],
        distance: '@FLOAT(0,7,1,1)'
      }
    ]
  })
  // 热门活动
  Mock.mock(/parent\/index\/hot-activities$/, {
    'link': '/somewhere',
    'dataset|3-5': [
      {
        id: '@id',
        title: '@CWORD(3,7)',
        subTitle: '@CWORD(3,7)',
        link: '/somewhere',
        src: '/static/images/bg04.png'
      }
    ]
  })

  // 轮播消息信息
  Mock.mock(/parent\/index\/marqueeData$/, {
      'dataset|5': [
        {
          id:'@ID',
          text: '@CWORD(3,10)'
        }
      ]
  })

  // app入口
  Mock.mock(/parent\/index\/app-entries$/, {
    'dataset|10': [
      {
        id: '@ID',
        'name|+1': ['小学', '中学','高中','奥数','书法',
        '思维训练', '艺术培养', '家庭教育', '少儿英语', '更多课程'],
        'icon|+1': ['home_elementary', 'home_middle', 'home_high', 'home_olymp', 'home_calligraphy', 'home_thinking', 'home_art', 'home_family', 'home_english', 'home_more'],
        link: 'somewhere-router'
      }
    ]
  })
}
