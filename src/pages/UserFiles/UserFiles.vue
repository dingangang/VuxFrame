<template>
  <div style="background: #f8f9fa;">
    <x-header class="pm-header pm-header--bg">用户档案</x-header>
    <group class="pm-group">
      <cell-box
        is-link
        link="/somewhere"
        style="height: 4.5rem;"
      >
        <flexbox
          justify="space-between"
        >
          <flexbox-item>用户头像</flexbox-item>
          <flexbox-item
            class="pm-user-header">
            <img
              :src="userBasicInfo.headerSrc" alt="img">
          </flexbox-item>
        </flexbox>
      </cell-box>
      <cell title="昵称" is-link>
        <span
          v-if="userBasicInfo.name.length > 0"
          class="text-main"
        >
          {{userBasicInfo.name}}
        </span>
        <span v-else class="text-disabled">{{userBasicInfo.name}}</span>
      </cell>
      <cell title="学员ID"><span class="text-main">{{userBasicInfo.id}}</span></cell>
    </group>

    <group class="pm-group">
      <cell title="真实姓名" is-link>
        <span
          v-if="userBasicInfo.realName.length > 0"
          class="text-main"
        >
          {{userBasicInfo.realName}}
        </span>
        <span v-else class="text-disabled">真实姓名更方便与老师沟通</span>
      </cell>
      <cell title="性别" is-link>
        <span
          v-if="userBasicInfo.sex.length > 0"
          class="text-main"
        >
          {{userBasicInfo.sex}}
        </span>
        <span v-else class="text-disabled">请选择性别</span>
      </cell>
      <cell title="生日" is-link>
        <span
          v-if="userBasicInfo.birthDay.length > 0"
          class="text-main"
        >
          {{userBasicInfo.birthDay}}
        </span>
        <span v-else class="text-disabled">有机会获得神秘惊喜</span>
      </cell>
    </group>

    <group class="pm-group">
      <cell-box
        is-link
        class="pm-big-cellbox"
      >
        <div>
          <span class="text-main">学习阶段及兴趣标签</span>
        </div>
        <div class="pm-big-cellbox__title">
          {{userBasicInfo.grade}}
        </div>
        <ul class="pm-big-cellbox__interests">
          <li
            v-for="(item,index) in userBasicInfo.interests"
            :key="index"
          >
            {{item}}
          </li>
        </ul>
      </cell-box>
    </group>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'user-files',
  created() {
    this.getUserBaseInfo()
  },
  data() {
    return {
      userBasicInfo: {
        id: '',
        name: '',
        grade: '',
        headerSrc: '',
        realName: '',
        sex: '',
        birthDay: '',
        interests: []
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
     * 获取用户基本信息
     */
    getUserBaseInfo() {
      this.axios.get('/get-user-files-basic-info')
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
  },
}
</script>


<style scoped lang="scss">
.pm-user-header {
  text-align: right;
  padding-right: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }
}

</style>
