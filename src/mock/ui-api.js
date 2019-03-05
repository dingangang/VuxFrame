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
  // 课程详情
  Mock.mock(/get-lesson-detail-info$/, {
    isCollected: '@BOOLEAN',
    lessonInfo: {
      title: '@CTITLE(6,20)',
      remainingTime: '报名截止还剩：@INTEGER(1,3)天@INTEGER(0,23)时@INTEGER(0,59)分',
      price: '￥@INTEGER(10,30,1,1)',
      originPrice: '￥@INTEGER(10,30,1,1)',
      enrolledNumber: '@INTEGER(40, 129)'
    },
    schedule: {
      title: '课程表',
      infos: [
        {
          label: '课时数量',
          text: '1节课'
        },
        {
          label: '每节时长',
          text: '90分钟'
        },
        {
          label: '上课时间',
          text: '请直接致电预约上课时间'
        },
        {
          label: '班级人数',
          text: '20人'
        },
        {
          label: '教学地点',
          text: '宝安区松平岗平安路十号没新村大厦二楼小白鸽少儿舞蹈团'
        },
      ],
      suffix: '此课程支持试听课，详情请电话咨询。'
    },
    lessonDetailSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551789348071&di=78e1820fcad0b12a164a3d1363dda706&imgtype=0&src=http%3A%2F%2Fimg7.qiyipic.com%2Fappstore%2F20160831%2Ffc%2F04%2Fappstore_57c6d988d2999d715fb3fc04_1x1.jpg',
    trainingInstitutions: {
      dataset: [
        {
          id: '@id',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
          title: '@CWORD(3,18)',
          desc: '@CPARAGRAPH(10,35)',
          auths: ['已认证', '扬琴培训'],
          distance: '@FLOAT(0,7,1,1)km',
          url: '/somewhere'
        }
      ]
    }
  })
  // 课程信息
  Mock.mock(/get-lessons-data$/, {
    'dataset|3-5': [
      {
        id: '@ID',
        url: '/lesson-details',
        title: '@CTITLE(8,35)',
        auths: ['训练营'],
        desc: '@INTEGER(2,8)节课，@INTEGER(999,3000)人报名',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551774685030&di=47634909ab391b56e0d3c911faef09c3&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fthumb180%2F59a9b7eagw1f6cc9ki5l6j209p09s74l.jpg'
      }
    ]

  })
  // 获取消息详情
  Mock.mock(/get-message-details$/, {
    title: '@CTITLE(8,20)',
    time: '@DATE("yyyy/MM/dd HH:mm:ss")',
    abstract: '摘要：@CPARAGRAPH(4,7)',
    desc: '@CPARAGRAPH(30,60)',
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551763314540&di=6c451e3a7e5cb98cd293b49a7524be0b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F08%2F20170108155535_j8k4r.thumb.224_0.jpeg',
  })
  // 获取消息列表
  Mock.mock(/get-messagesdata$/, {
    'messageRead|3-10': [
      {
        id: '@ID',
        url: '/message-details',
        title: '@CTITLE(3,15)',
        desc: '@CPARAGRAPH(10,40)',
        time: '@DATE("yyyy/MM/dd HH:mm:ss")',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551685802612&di=a3b4ba1e7474961ef82e8c16fbed729d&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F850093905%2FTB2kWivmRNkpuFjy0FaXXbRCVXa_%2521%2521850093905.jpg_150x150.jpg',
      }
    ],
    'messageUnread|3-6': [
      {
        id: '@ID',
        url: '/message-details',
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
            originPrice: '￥@FlOAT(12,20,2,2)',
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
