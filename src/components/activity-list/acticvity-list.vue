<template>
  <ul class="pm-activity-list">
    <li
      class="pm-activity-item vux-1px-b"
      v-for="item in list"
      :key="item.id"
    >
      <div class="pm-activity-item__title">{{item.title}}</div>
      <div class="pm-activity-item__status">
        <span>活动时间：{{item.activityTime}}</span>
        <span
          class="pm-activity-item__statu"
          :class="`pm-activity-item__statu--${item.status}`"
        >
          {{
            item.status === 'on'
            ? '正在进行'
            : '已结束'
          }}
        </span>
      </div>
      <div class="pm-activity-item__img">
        <img :src="item.src" width="100%" alt="img">
      </div>
      <div class="pm-activity-item__desc">
        {{item.desc}}
      </div>
      <div class="pm-activity-item__location vux-1px-b">
        <span>{{item.location}}</span>
        <span>{{item.distance}}</span>
      </div>
      <div class="pm-activity-item__ft">
        <span>
          <i class="icon icon-time mr-step"></i>{{item.time}}
        </span>
        <a
          @click.prevent="go('/activity-details', item.id)"
        >
          查看详情 <i class="icon icon-into"></i>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'activity-list',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    go(url, id) {
      this.$router.push({ path: `${url}/${id}` })
    },
  },
}
</script>

<style scoped lang="scss">
.pm-activity-list {
  background: $color-bg-card;
  padding-top: 0.75rem;
}

.pm-activity-item {
  background: #fff;

  &__title {
    padding: 0.75rem 1rem 0.25rem;
    font-size: $font-size-small;
    line-height: 1.41rem;
    font-weight: 600;

    @include line-clamp();
  }

  &__status {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 0.815rem;
    color: $color-text-weakening;
  }

  &__statu {
    height: 1.25rem;
    line-height: 1.125rem;
    width: 4rem;
    text-align: center;

    &--on {
      color: $color-text-tip;
      border: 1px solid $color-text-tip;
      background: rgba(255, 103, 34, .1);
    }

    &--off {
      color: $color-text-disabled;
      border: 1px solid $color-text-disabled;
      background: rgba(204, 204, 204, .1);
    }
  }

  &__img {
    padding: 0.5rem 1rem 0.8rem;

    > img {
      border-radius: 4px;
      max-height: 8.5rem;
    }
  }

  &__desc {
    padding: 0 1rem;
    line-height: 1.15rem;

    @include line-clamp(3);
  }

  &__location {
    margin: 0 1rem;
    padding: 0.5rem 0;
    line-height: 1.3rem;
    color: $color-text-weakening;
    font-size: 0.815rem;
  }

  &__ft {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 0.815rem;
    color: $color-text-weakening;
    line-height: 2.69rem;
  }

  & + .pm-activity-item {
    margin-top: 0.75rem;
  }
}
</style>
