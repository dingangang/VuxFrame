<template>
  <div>
    <x-header class="pm-header">视频</x-header>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"

      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"

      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
  </div>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  name: 'player-page',
  created() {},
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  props: {
    videoSrc: {
      type: String,
      required: true
    },
    resourceType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: this.resourceType,
          src: this.videoSrc
        }],
        poster: '../../static/images/test.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerPause(player) {
      console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      console.log('player ended', player)
    },
    onPlayerWaiting(player) {
      console.log('player waiting', player)
    },
    onPlayerPlaying(player) {
      console.log('player playing', player)
    },
    onPlayerLoadeddata(player) {
      console.log('player loadeddata', player)
    },
    onPlayerTimeupdate(player) {
      console.log('player timeupdate', player)
    },
    onPlayerCanplay(player) {
      console.log('player canplay', player)
    },
    onPlayerCanplaythrough(player) {
      console.log('player canplaythrough', player)
    },

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style scoped>

</style>
