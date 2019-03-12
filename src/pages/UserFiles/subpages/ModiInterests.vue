<template>
  <div>
    <x-header
      @on-click-back="handleBackClick"
      :left-options="{preventGoBack: true}"
      class="pm-header"
    >学生档案</x-header>
    <div class="tabs">
      <div class="tab-panes" v-show="step===0">
        <div
          class="text-right text-weakening"
          style="padding-right: 1rem;font-size:0.94rem; min-height:1.3rem;"
          @click="step=1"
        >
          跳过
        </div>
        <div class="pm-interests__title">
          请选择你关注的学习阶段
        </div>
        <checker
          v-model="currentLevel"
          radio-required
          default-item-class="pm-interests__btn" selected-item-class="pm-interests__btn--selected"
          class="text-center"
        >
          <checker-item
            class="mb-medium"
            value="primarySchool"
          >小学</checker-item>
          <checker-item
            class="mb-medium"
            value="middleSchool"
          >初中</checker-item>
          <checker-item
            class="mb-medium"
            value="highSchool"
          >高中</checker-item>
        </checker>
        <div class="pm-confirm-btn text-center">
          <a
            @click="handleComfirm"
          >下一步</a>
        </div>
      </div>
      <div class="tab-panes" v-show="step===1">
        <div
          class="text-right text-weakening"
          style="padding-right: 1rem;font-size:0.94rem; min-height:1.3rem;"
        >
        </div>
        <div class="pm-interests__title">
          请选择年级
        </div>
        <checker
          v-model="currentGrade"
          default-item-class="
            pm-interests__btn
            x-half-size"
          selected-item-class="pm-interests__btn--selected"
          class="text-center"
        >
          <checker-item
            class="mb-medium"
            v-for="(item,index) in levels[currentLevel]"
            :key="index"
            :value="item.value"
          >{{item.label}}</checker-item>
        </checker>
        <div
          class="pm-confirm-btn text-center"
          :class="currentGrade.length === 0?
          'pm-confirm-btn--disabled': ''"
        >
          <a
            @click="handleComfirm"
          >下一步</a>
        </div>
      </div>
      <div class="tab-panes" v-show="step===2">
        <div class="pm-interests__title">
          已了解孩子的情况，以下<br />是否还有您感兴趣的内容
        </div>
        <checker
          v-model="selectedInterests"
          default-item-class="
            pm-interests__btn
            x-half-size"
          selected-item-class="pm-interests__btn--selected"
          class="text-center"
          type="checkbox"
        >
          <checker-item
            class="mb-medium"
            v-for="(item,index) in interests"
            :key="index"
            :value="item.value"
          >{{item.label}}</checker-item>
        </checker>
        <div
          class="pm-confirm-btn text-center"
          :class="currentGrade.length === 0?
          'pm-confirm-btn--disabled': ''"
        >
          <a
            @click="handleComfirm"
          >下一步</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modi-interests',
  data() {
    return {
      step: 0,
      currentLevel: 'primarySchool',
      currentGrade: '',
      selectedInterests: [],
      levels: {
        primarySchool: [
          {
            label: '一年级',
            value: 'grade1'
          },
          {
            label: '二年级',
            value: 'grade2'
          },
          {
            label: '三年级',
            value: 'grade3'
          },
          {
            label: '四年级',
            value: 'grade4'
          },
          {
            label: '五年级',
            value: 'grade5'
          },
          {
            label: '六年级',
            value: 'grade6'
          },
        ],
        middleSchool: [
          {
            label: '初一',
            value: 'grade7'
          },
          {
            label: '初二',
            value: 'grade8'
          },
          {
            label: '初三',
            value: 'grade9'
          },
        ],
        highSchool: [
          {
            label: '高一',
            value: 'grade10'
          },
          {
            label: '高二',
            value: 'grade11'
          },
          {
            label: '高三',
            value: 'grade12'
          },
        ]
      },
      interests: [
        {
          label: '瑜伽',
          value: 1
        },
        {
          label: '英语口语',
          value: 2
        },
        {
          label: '词汇语法',
          value: 3
        },
        {
          label: '思维导图',
          value: 4
        },
        {
          label: '书法',
          value: 5
        },
        {
          label: '儿童脑力',
          value: 6
        },
        {
          label: '考研',
          value: 7
        },
        {
          label: '出国留学',
          value: 8
        },
      ]
    }
  },
  methods: {
    /**
     * 此处都在一个页面内，返回标签逻辑修改
     */
    handleBackClick() {
      if (this.step === 1 || this.step === 2) {
        this.step = this.step - 1
      } else {
        console.log('修改返回')
        this.$router.back(-1)
      }
    },
    /**
     * 确认提交
     */
    handleComfirm() {
      if (this.step === 1 && this.currentGrade.length === 0) {
        return
      }
      if (this.step === 0 || this.step === 1) {
        this.step = this.step + 1
      } else {
        console.log('选择的学段->>', this.currentLevel)
        console.log('选择的年级->>', this.currentGrade)
        console.log('选择的额外兴趣->>', this.selectedInterests)
        console.log('确认提交并返回')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.pm-interests {
  &__title {
    margin: 3rem 0 2.5rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.15rem;
  }

  &__btn {
    display: inline-block;
    text-align: center;
    height: 3.25rem;
    width: 18.16rem;
    line-height: 3.125rem;
    border: 2px solid #e5e5e5;
    font-size: 1rem;
    border-radius: 4px;
    color: $color-text-weakening;

    &.x-half-size {
      width: 8.56rem;
      margin: 0 0.5rem;
    }

    &--selected {
      color: #3eba45;
      border-color: #3eba45;
      background: rgba(62,186,69,0.10);
    }
  }
}
</style>
