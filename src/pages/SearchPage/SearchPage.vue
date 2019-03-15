<template>
  <div >
    <x-header class="pm-header">
      <div>搜索</div>
    </x-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="params.seachText"
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
        <pm-institution-item
          :institution="institution"
          @load-more="handleLoadMore"
          :loadType="institution.loadType"
        ></pm-institution-item>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'search-page',
  created() {
    this.params.seachText = this.$route.params.value
 
    // 这里模拟取到值进行第一次搜索
    this.getSearchData(this.params);
    this.getResults();
  },
  data() {
    return { 
      results: [],
      searchData: [],
      params:{
        latitude:0,
        longitude:0,
        seachText:'',
        status:'1',
        schoolId:null
      }

      
    }
  },
  methods: {
    resultClick(param) { 
      let that=this; 
      let params=this.params;
      params.schoolId=param.otherData;  
      this.pageParams(params);
      this.getSchoolCourse(params,function(datas){
            that.searchData=datas;  
            that.initParam();
      }); 
       
    },
    //这是change事件
    getResult() {
      console.log('这是change事件')
    },
    //focus 时触发
    onFocus() {
      console.log('focus 时触发')
      
    },
    //取消时触发
    onCancel() {
      console.log('取消时触发')
    },
    //触发提交事件
    onSubmit() { 
      this.getSearchData(this.params) 
      
    },
    initParam(){
      this.params.schoolId=null;
    },
    //分页参数组装
    pageParams(params){
        params.seachText='';
        params.pageNum=0;
        params.paramSize=10;
    },
    //快捷选择机构(需分页)
    getResults(){
        let that=this; 
        let params=this.params;  
        this.pageParams(params);
        this.getSchoolCourse(params,function(datas){
          for (let i = 0; i < datas.length; i++) {
            const e = datas[i];
            that.results.push({title:e.name,otherData:e.id}); 
          }
        });
    },
    //搜索机构课程（按名称搜索不分页）
    getSearchData(params) {  
      if(params!=null&&this.params.seachText.trim()!=''){
        let that=this; 
        this.getSchoolCourse(params,function(datas){
            that.searchData=datas;  
          }); 
        }
    },
    //查询机构课程
    getSchoolCourse(params,callBack){ 
       this.$fetch('api/school/indexSearch',params).then((res) => {  
         res.data.forEach(e=>{
           e.loadType=0;
           e.url='institution-details';
           e.courseList.forEach(c=>{
             c.url='lesson-details';
           })
         }) 
        callBack(res.data);
        }).catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理加载更多课程事件
     * @param {Object} 点击的机构对象
     */
    handleLoadMore(institution) { 
      let ids=[];
      institution.courseList.forEach(e => {
   
        ids.push(e.id)
      });
      let papram={
        schoolId:institution.id,
        ids:ids.join(",")
      }
      this.loadType=1;
     this.$fetch('api/school/searchSchoolCourse',papram).then((res) => { 
        if(res.data!=null&&res.data.length>0){
          res.data.forEach(e=>{
                 e.url='lesson-details';
            institution.courseList.push(e)
          }) 
          institution.loadType=0;
        }else{
            institution.loadType=2;
        }
    
        }).catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
