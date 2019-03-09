<template>
  <div class="user-center">
    <div class="user-center__header">
      <div class="user-center__profile">
        <div class="user-center__src">
          <img :src="userBasicInfo.headerSrc" alt="header">
        </div>
        <div class="user-center__info">
          <div class="text-medium">{{userBasicInfo.name}}</div>
          <div>{{userBasicInfo.grade}}</div>
        </div>
      </div>
      <div>
        <a
          class="user-center__archives"
          @click.prevent="linkToUserFiles"
        >学生档案 <i class="icon icon-white_into"></i> </a>
      </div>
    </div>
    <div class="user-center__entryBlock">
      <div class="user-center__entry">
        <a>
          <img src="@/assets/images/img12.png" alt="img">
          <p>订单</p>
        </a>
        <a>
          <img src="@/assets/images/img13.png" alt="img">
          <p>请假</p>
        </a>
        <a>
          <img src="@/assets/images/img14.png" alt="img">
          <p>会员</p>
        </a>
      </div>
    </div>
    <div class="pm-user-form">
      <group class="pm-group">
        <cell-box is-link link="/somewhere">
          私人顾问
        </cell-box>
        <cell-box is-link link="/somewhere">
          我的积分
        </cell-box>
        <cell-box is-link link="/somewhere">
          我的课程
        </cell-box>
        <cell-box is-link link="/somewhere">
          我的收藏
        </cell-box>
        <cell-box is-link link="/somewhere">
          我的错题本
        </cell-box>
        <cell-box is-link link="/somewhere">
          修改密码
        </cell-box>
        <cell-box is-link link="/somewhere">
          关于我们
        </cell-box>
      </group>

      <div class="text-center m-medium">
        <a
          class="pm-sign-out-btn"
          @click="handleSignOut"
        >退出登录</a>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'user-center',
  created() {
    // 激活我的样式
    this.selectIcon()

    this.getUserBaseInfo()
  },
  data() {
    return {
      userBasicInfo: {
        id: '',
        name: '',
        grade: '',
        headerSrc: ''
      }
    }
  },
  computed: {
    ...mapState({
      /**
       * 请明确制定role的值
       * 这里暂定
       * 0：家长
       * 1：学生
       */
      role: state => state.role,
      userId: state => state.userId
    })
  },
  methods: {
    /**
     * 跳转到用户档案
     */
    linkToUserFiles() {
      this.$router.push('/user-files')
    },
    /**
     * 图标选中预处理
     */
    selectIcon() {
      switch (this.role) {
        case 0 :
          this.$store.commit('updateTabbrIndex', 3)
          return
        case 1 :
          this.$store.commit('updateTabbrIndex', 4)
          return
        default :
          console.log('not match')
      }
    },
    /**
     * 获取用户基本信息
     */
    getUserBaseInfo() {
      this.axios.get('/get-user-basic-info')
        .then((res) => {
          console.log('用户基本信息', res)
          this.userBasicInfo = res.data.userBasicInfo
          console.log('这里模拟下从store拿到用户id ----> ', this.userId, '模拟接口id仅做占位使用')
          this.userBasicInfo.id = this.userId
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理退出按钮点击事件
     */
    handleSignOut() {
      // !! 注意在回调中的this指向
      const $vm = this
      this.$vux.confirm.show({
        content: '确定退出吗？',
        // 组件除show外的属性
        onCancel () {
          console.log('操作取消了')
          console.log('this ->>', $vm)
        },
        onConfirm () {
          console.log('退出成功回调')
          console.log('this ->>', $vm)
          $vm.$vux.toast.show({
            text: '退出成功'
          })
        }
      })
    }
  },
}
</script>


<style scoped lang="scss">
.user-center {
  background-color: #f8f9fa;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    padding: 1rem;
    background: url('../../assets/images/bg05.png') no-repeat;
    background-size: cover;
  }

  &__profile {
    display: flex;
    justify-content: space-between;
  }

  &__archives {
    display: inline-block;
    padding: 0 0.625rem;
    height: 1.5rem;
    line-height: 1.375rem;
    font-size: 0.815rem;
    background: rgba(255, 255, 255, .2);
    color: rgba(255, 255, 255, .42);
    border-radius: 0.875rem;
  }

  &__info {
    color: #fff;
    line-height: 1.9rem;
    padding-left: 1rem;
  }

  &__src {
    > img {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 100%;
    }
  }

  &__entryBlock {
    position: relative;
    height: 5.5rem;
    margin: 0 1rem;
  }

  &__entry {
    position: absolute;
    top: -2rem;
    height: 6.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    > a {
      text-align: center;

      > img {
        width: 2.75rem;
        height: 2.75rem;
        margin-bottom: $spacing-step;
      }
    }
  }
}

.pm-sign-out-btn {
  display: inline-block;
  height: 3rem;
  line-height: 2.875rem;
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: $font-size-small;
  color: $color-text-secondary;
}
</style>
