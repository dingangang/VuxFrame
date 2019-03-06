<template>
  <div>
    <x-header class="pm-header">机构列表</x-header>
    <tab
      :line-width="1"
    >
      <tab-item
        selected
        @on-item-click="handeTabItemClick"
      >全部</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >机构分类1</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >机构分类2</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >机构分类3</tab-item>
    </tab>
    <div class="tab-panes">
      <div class="tab-pane" v-if="currentTabIndex === 0">
        <ul class="pm-institution-list" style="background: #f8f9fa;">
          <li
            v-for="institution in institutionsList.all"
            :key="institution.id">
            <pm-institution-item
              :institution="institution"
              @load-more="handleLoadMore"
            ></pm-institution-item>
          </li>
        </ul>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 1">
        <ul class="pm-institution-list" style="background: #f8f9fa;">
          <li
            v-for="institution in institutionsList.type1"
            :key="institution.id">
            <pm-institution-item
              :institution="institution"
              @load-more="handleLoadMore"
            ></pm-institution-item>
          </li>
        </ul>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 2">
        <ul class="pm-institution-list" style="background: #f8f9fa;">
          <li
            v-for="institution in institutionsList.type2"
            :key="institution.id">
            <pm-institution-item
              :institution="institution"
              @load-more="handleLoadMore"
            ></pm-institution-item>
          </li>
        </ul>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 3">
        <ul class="pm-institution-list" style="background: #f8f9fa;">
          <li
            v-for="institution in institutionsList.type3"
            :key="institution.id">
            <pm-institution-item
              :institution="institution"
              @load-more="handleLoadMore"
            ></pm-institution-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'organization-page',
  created() {
    this.getSearchData()
  },
  data() {
    return {
      currentTabIndex: 0,
      institutionsList: {
        all: [],
        type1: [],
        type2: [],
        type3: [],
      }
    }
  },
  methods: {
    getSearchData() {
      this.axios.get('/get-institutions-data')
        .then((res) => {
          console.log('机构列表', res)
          this.institutions = res.data.dataset
          switch (this.currentTabIndex) {
            case 0:
              this.institutionsList.all = res.data.dataset
              break
            case 1:
              this.institutionsList.type1 = res.data.dataset
              break
            case 2:
              this.institutionsList.type2 = res.data.dataset
              break
            case 3:
              this.institutionsList.type3 = res.data.dataset
              break
            default:
              console.log('not match')
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理加载更多课程事件
     * @param {Object} 点击的机构对象
     */
    handleLoadMore(institution) {
      console.log('需要加载更多的机构是', institution)
    },
    /**
     * 处理tab页签点击事件
     * @param {Number} index 当前 tabItem序号
     */
    handeTabItemClick(index) {
      console.log('index->>>', `${index}`)
      this.currentTabIndex = index
      // 模拟点击事件加载数据
      this.getSearchData()
    },
  },
}
</script>
