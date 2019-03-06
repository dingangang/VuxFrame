<template>
  <div class="pm-comprehensive-score">
    <div class="pm-comprehensive-score__total">
      <div class="pm-comprehensive-score__pie">
        {{scores.total}}
      </div>
      <p class="mt-default" style="font-size: 0.815rem">综合评分</p>
    </div>
    <ul class="pm-comprehensive-score__sub">
      <li
        v-for="(item,index) in scores.subItems"
        :key="index"
        class="pm-comprehensive-score__subItem"
      >
        <span>{{item.label}}</span>
        <div class="pm-comprehensive-score__progress">
          <div class="x-proress__outer">
            <div
              class="x-proress__inner"
              :style="`width:${parseFloat(item.score) / 5 *100}%`"
            >
            </div>
          </div>
        </div>
        <span
          class="text-success"
          style="flex: 0 0 5rem; text-align:left"
        >{{item.score}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'comprehensive-score',
  props: {
    scores: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.pm-comprehensive-score {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  &__total {
    flex: 0 0 3.75rem;
    text-align: center;
  }
  &__pie {
    line-height: 3.75rem;
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 100%;
    font-size: 1.125rem;
    color: #fff;
    font-family: DINAlternate;
    background: linear-gradient(0deg, #FFC654 0%, #FF6722 100%);;
  }
  &__sub {
    flex: 1;
    padding-left: 1.5rem
  }
  &__subItem {
    display: flex;
    font-size: 0.815rem;
    align-items: baseline
  }
  &__progress {
    flex: 1;
    padding: 0 1.5rem 0 0.5rem;
    .x-proress__outer {
      width: 100%;
      height: 0.5rem;
    }
    .x-proress__inner {
      height: 0.5rem;
      background: linear-gradient(-90deg,
        #ADE95B 0%,
        #FFC654 50%,
        #FF6722 100%);
      border-radius: 12px;
    }
  }
}
</style>
