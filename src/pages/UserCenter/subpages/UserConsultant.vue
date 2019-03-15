<template>
  <div>
    <x-header class="pm-header">私人顾问</x-header>
    <div class="pm-user-consultant">
      <flexbox
        justify="space-between"
        class="vux-1px-b pm-user-consultant__header"
      >
        <flexbox-item>
          <div class="pm-user-consultant__basic">
            <div class="text-large ">{{consultantData.name}}
              <span class="text-weakening text-small">{{consultantData.phone}}</span>
            </div>
            <div class="mt-step">
              <span class="text-default text-secondary">{{consultantData.education}}</span>
              <span
                class="x-v-divider"
              ></span>
              <span class="text-default text-secondary">{{consultantData.type}}</span>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item class="text-right">
          <img
            class="pm-user-consultant__src"
            :src="consultantData.headerSrc"
            alt="img"
          />
        </flexbox-item>
      </flexbox>
      <div class="vux-1px-b pb-medium">
        <div class="x-left-label mt-medium mb-medium">工作经历</div>
        <p
          v-for="(item,index) in consultantData.workExperience"
          :key="index"
          class="text-secondary"
          style="font-size: 0.94rem; line-height: 1.3rem"
        >
          {{item}}
        </p>
      </div>
      <div>
        <div class="x-left-label mt-medium mb-medium">自我介绍</div>
        <p
          class="text-secondary"
          style="font-size: 0.94rem; line-height: 1.3rem"
        >
          {{consultantData.selfIntroduce}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-consultant',
  created() {
    this.getConsultantData()
  },
  data() {
    return {
      consultantData: {
        name: '张老师',
        phone: '13888888888',
        education: '经济学硕士',
        type: '高级顾问',
        headerSrc: '',
      }
    }
  },
  methods: {
    getConsultantData() {
      this.axios.get('/get-user-consultant-data')
        .then((res) => {
          console.log('顾问信息', res)
          this.consultantData = res.data.consultantData
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
}
</script>

<style scoped lang="scss">
.pm-user-consultant {

  padding: 0 1rem;

  &__header {
    width: 100%;
    padding: 1rem 0 1.5rem;
  }

  &__basic {
  }

  &__src {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 100%;
  }
}
</style>
