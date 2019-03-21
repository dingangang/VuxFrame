<template>
  <div class="page">
    <x-header>我是标题</x-header>
    <div>
      <pm-component :type="1"></pm-component>
      <pm-component :type="2"></pm-component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  created() {
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
