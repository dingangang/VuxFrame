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
        <a class="user-center__archives">学生档案 <i class="icon icon-white_into"></i> </a>
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
    <div class="user-form">

    </div>
  </div>
</template>


<script>
export default {
  name: 'user-center',
  created() {
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
  methods: {
    /**
     * 获取学生基本信息
     */
    getUserBaseInfo() {
      this.axios.get('/get-user-basic-info')
        .then((res) => {
          console.log('用户基本信息', res)
          this.userBasicInfo = res.data.userBasicInfo
        })
        .catch((err) => {
          console.error(err)
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
      border-radius: 100%
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
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);
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

.user-form {
  background: #fff;
}

</style>
