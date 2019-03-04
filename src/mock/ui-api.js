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
  // 获取消息列表
  Mock.mock(/get-messagesdata$/, {
    'messageRead|3-6': [
      {
        id: '@ID',
        title: '@CTITLE(3,15)',
        desc: '@CPARAGRAPH(10,40)',
        time: '@DATE("yyyy/MM/dd HH:mm:ss")',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
      }
    ],
    'messageUnRead|3-6': [
      {
        id: '@ID',
        title: '@CTITLE(3,15)',
        desc: '@CPARAGRAPH(10,40)',
        time: '@DATE("yyyy/MM/dd HH:mm:ss")',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
      }
    ],
  })
  // 获取搜索结果
  Mock.mock(/get-search-data$/, {
    'dataset|2-4': [
      {
        id: '@ID',
        title: '@CWORD(4,7)机构',
        distance: '@FLOAT(0,4,1,1)km',
        'courses|1-2': [
          {
            id: '@id',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
            title: '@CWORD(3,8)',
            desc: '@INTEGER(100,300)人已报名',
            auths: ['12节', '小学', '每周2-5次'],
            price: '￥@FlOAT(10,12,2,2)',
            orginPrice: '￥@FlOAT(12,20,2,2)',
            url: '/somewhere'
          }
        ]
      }
    ]
  })
  // 首页轮播图
  Mock.mock(/index-swiper-data$/, {
    dataset: [
      {
        url: '/somewhere',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=793493291,425094081&fm=26&gp=0.jpg',
      }, {
        url: '/somewhere',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=793493291,425094081&fm=26&gp=0.jpg',
      },
    ]
  })
  // 推荐机构信息
  Mock.mock(/parent\/index\/organization$/, {
    link: '/somewhere',
    'dataset|3-5': [
      {
        id: '@id',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
        title: '@CWORD(3,8)',
        desc: '@CPARAGRAPH(10,25)',
        auths: ['已认证', '某某机构'],
        distance: '@FLOAT(0,7,1,1)km',
        url: '/somewhere'
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
