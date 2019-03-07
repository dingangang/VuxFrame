<template>
  <div
    class="pm-comprehensive-score"
    :class="`pm-comprehensive-score--type${type}`"
  >
    <slot>
      <template v-if="type === '1'">
        <div class="pm-comprehensive-score__total">
          <div class="pm-comprehensive-score__pie">
            {{scores.total}}
          </div>
          <p class="mt-step" style="font-size: 0.815rem;">综合评分</p>
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
              style="flex: 0 0 5rem; text-align:left;"
            >{{item.score}}</span>
          </li>
        </ul>
      </template>
      <template v-if="type === '2'">
        <div class="pm-comprehensive-score__total">
          <div class="pm-comprehensive-score__pie">
            {{scores.total}}
          </div>
          <p class="mt-step" style="font-size: 0.815rem;">综合评分</p>
        </div>
        <ul class="pm-comprehensive-score__sub">
          <li
            v-for="(item,index) in scores.subItems"
            :key="index"
            class="pm-comprehensive-score__subItem"
          >
            <span>{{item.label}}</span>
            <rater
              class="pm-rater"
              v-model="item.score"
              active-color="#ff9a00"
              :margin="5"
            ></rater>
          </li>
        </ul>
      </template>
    </slot>
  </div>
</template>

<script>
import { Rater } from 'vux'

export default {
  name: 'comprehensive-score',
  created() {
  },
  props: {
    scores: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      currentScores: this.scores
    }
  },
  components: {
    Rater
  },
  watch: {
    'currentScores.subItems': {
      handler: function() {
        this.currentScores.total = (this.currentScores.subItems
          .reduce((total, item) => {
            console.log('total', total)
            console.log('item', item)
            return total + item.score
          }, 0) / 4).toFixed(1)
        this.$emit('scores-change', this.currentScores)
      },
      deep: true
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
    background: linear-gradient(0deg, #ffc654 0%, #ff6722 100%);
  }

  &__sub {
    flex: 1;
    padding-left: 1.5rem;
  }

  &__subItem {
    display: flex;
    font-size: 0.815rem;
    align-items: baseline;
  }

  &__progress {
    flex: 1;
    padding: 0 1.5rem 0 0.5rem;

    .x-proress__outer {
      width: 100%;
      height: 0.5rem;
      background: #f5f5f5;
    }

    .x-proress__inner {
      height: 0.5rem;
      background:
        linear-gradient(
          -90deg,
          #ade95b 0%,
          #ffc654 50%,
          #ff6722 100%
        );
      border-radius: 12px;
    }
  }

  &--type2 {
    align-items: center;

    .pm-comprehensive-score__subItem {
      font-size: 0.875rem;
      line-height: 2.5rem;
    }
  }
}
</style>
