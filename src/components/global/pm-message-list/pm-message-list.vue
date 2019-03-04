<template>
  <ul class="pm-message-list">
    <li
      v-for="message in messages"
      :key="message.id"
      class="pm-message-item"
    >
      <div class="pm-message-item__title">{{message.title}}</div>
      <div class="pm-message-item__bd vux-1px-tb">
        <div>
          <div>{{message.desc}}</div>
          <div>{{message.time}}</div>
        </div>
        <div>
          <img :src="message.src" alt="image">
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'pm-message-list',
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.pm-message-item {
  margin: 0 1rem;
  &__title {
    font-size: 1rem;
    color: $color-text-main;
    line-height: 2.4rem
  }
}
</style>
