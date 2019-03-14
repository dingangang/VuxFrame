<template>
  <div>
    <x-header
      :left-options="{showBack: false}"
      class="pm-header"
    >咨询</x-header>
    <div class="pm-consulation-list">
      <div
        class="pm-consulation-item"
        v-for="(consultationBlock, index) in consultationData"
        :key="index"
      >
        <div class="pm-consulation-list__time">
          <span>{{consultationBlock.timeLabel}}</span>
        </div>
        <card
          class="pm-consulation"
          v-for="consultation in consultationBlock.consultationList"
          :key="consultation.id"
        >
          <div slot="header" class="pm-consulation__hd">
            <div
              class="pm-consulation__title"
              :class="`pm-consulation__title--${consultation.progress.status}`"
            >
              {{consultation.title}}
            </div>
            <div
              class="pm-consulation__status"
              :class="`pm-consulation__status--${consultation.progress.status}`"
            >
              {{consultation.progress.statusText}}
            </div>
          </div>
          <div slot="content" class="pm-consulation__bd vux-1px-t">
            <div
              v-for="(item,i) in consultation.details"
              :key="i"
              class="pm-consulation__line"
            >
              <span
                class="text-weakening"
                style="flex: 0 0 4rem;"
              >{{item.label}}</span>
              <span class="text-right">{{item.text}}</span>
            </div>
          </div>
        </card>
      </div>
    </div>
    <div class="x-consultation-fixed">
      <a
        class="x-consultation-fixed__btn has-color"
      >预约顾问</a>
      <a
        class="x-consultation-fixed__btn"
      >在线咨询</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'consulation-page',
  created() {
    this.$store.commit('updateTabbarIndex', 1)
    this.getConsultationData()
  },
  data() {
    return {
      consultationData: []
    }
  },
  methods: {
    /**
     * 获取咨询页面信息
     */
    getConsultationData() {
      this.axios.get('get-consultation-page-data')
        .then((res) => {
          console.log('咨询页面数据', res)
          this.consultationData = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
}
</script>

<style scoped lang="scss">
.x-consultation-fixed {
  position: fixed;
  right: 0;
  bottom: 4rem;
  display: flex;
  width: 9.875rem;
  height: 2.615rem;
  border-radius: 3rem;
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  &__btn {
    flex: 1;
    text-align: center;
    line-height: 2.49rem;
    color: #3eba45;

    &.has-color {
      background: linear-gradient(90deg, #4eda59 0%, #3eba45 100%);
      border-radius: 3rem 0 0 3rem;
      color: #fff;
    }
  }
}

.pm-consulation-list {
  padding: 0 1rem 3rem;
  background-color: #eff1f3;

  &__time {
    padding-top: $spacing-medium;
    text-align: center;

    > span {
      display: inline-block;
      height: 1.375rem;
      padding: 0 0.375rem;
      line-height: 1.25rem;
      color: #fff;
      border-radius: 4px;
      font-size: 0.75rem;
      background: rgba(0, 0, 0, .15);
    }
  }
}

.pm-consulation {
  padding: 0 0.75rem;
  border-radius: 0.5rem;

  &__hd {
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.94rem;
    font-weight: 600;
  }

  &__bd {
    padding: 0.75rem 0 1rem;
  }

  &__title {
    position: relative;
    padding-left: 0.75rem;

    &--ongoing {
      &::before {
        background: #ff6722;
      }
    }

    &--success {
      &::before {
        background: #3eba45;
      }
    }

    &--done {
      &::before {
        background: $color-text-secondary;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% - 0.1875rem);
      display: inline-block;
      width: 0.375rem;
      height: 0.375rem;
      border-radius: 100%;
    }
  }

  &__status {
    font-weight: normal;

    &--ongoing {
      color: #ff6722;
    }

    &--success {
      color: #3eba45;
    }

    &--done {
      color: $color-text-secondary;
    }
  }

  &__line {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
}

</style>

