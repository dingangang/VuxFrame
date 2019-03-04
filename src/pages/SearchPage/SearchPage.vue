<template>
  <div >
    <x-header>
      <div class="text-large">搜索</div>
    </x-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="searchValue"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>
    <ul class="pm-search-list" style="background: #f8f9fa;">
      <li
        v-for="institution in searchData"
        :key="institution.id">
        <pm-search-item
          :institution="institution"
          @load-more="handleLoadMore"
        ></pm-search-item>
      </li>
    </ul>
  </div>
</template>

<script>
import PmSearchItem from './components/PmSearchItem'

export default {
  name: 'search-page',
  created() {
    this.searchValue = this.$route.params.value
    // 这里模拟取到值进行第一次搜索
    this.getSearchData()
  },
  data() {
    return {
      searchValue: '',
      results: [{ title: '可以放置一些快捷选项', otherData: 123 }],
      searchData: []
    }
  },
  components: {
    PmSearchItem
  },
  methods: {
    resultClick(param) {
      console.log('这是resultClick', param)
    },
    getResult() {
      console.log('这是change事件')
    },
    onFocus() {
      console.log('focus 时触发')
    },
    onCancel() {
      console.log('取消时触发')
    },
    onSubmit() {
      console.log('触发提交事件')
      this.getSearchData()
    },
    getSearchData() {
      this.axios.get('/get-search-data')
        .then((res) => {
          console.log('搜索结果', res)
          this.searchData = res.data.dataset
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
     }
  }
}
</script>

<style scoped>

</style>
