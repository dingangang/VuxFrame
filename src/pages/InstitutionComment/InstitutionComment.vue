<template>
  <div>
    <x-header class="pm-header">机构评价</x-header>
    <comprehensive-score
      :scores="comprehensive"
      @scores-change="handleScoresChange"
      type="2"
    ></comprehensive-score>
    <div class="p-medium">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="pm-textarea"
        placeholder="请输入评价内容..."
        v-model="textValue"
      ></textarea>
    </div>
    <div class="pm-bottom-group">
      <a
        class="pm-bottom-group__btn has-color"
        :class="`${isSubmitDenied? 'is-disabled':''}`"
        @click.prevent="submit"
      >提交评价</a>
    </div>
  </div>
</template>


<script>
import ComprehensiveScore from '@/components/comprehensive-score/comprehensive-score'

export default {
  name: '',
  created() {},
  data() {
    return {
      comprehensive: {
        total: 0,
        subItems: [
          {
            label: '教学环境',
            score: 0,
          },
          {
            label: '专业水平',
            score: 0,
          },
          {
            label: '教学水平',
            score: 0,
          },
          {
            label: '服务态度',
            score: 0,
          },
        ]
      },
      textValue: '',
    }
  },
  computed: {
    isSubmitDenied() {
      return this.textValue.length === 0
    }
  },
  components: {
    ComprehensiveScore
  },
  methods: {
    /**
     * 处理分数变化
     */
    handleScoresChange(currentScores) {
      this.comprehensive = currentScores
    },
    /**
     * 提交评论
     */
    submit() {
      if (!this.isSubmitDenied) {
        console.log('允许提交')
        this.$vux.toast.show({
          text: '评论成功',
          type: 'sucess',
          onHide: () => {
            console.log('在此时再跳转链接')
          }
        })
      }
    }
  },
}
</script>
