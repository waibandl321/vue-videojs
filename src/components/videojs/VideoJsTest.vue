<template>
  <v-card class="position-relative">
    <video
      id="videoPlayer"
      ref="videoPlayer"
      class="video-js"
      @play="handlePlayVideo"
      @pause="handlePauseVideo"
      @ended="handleEndVideo"
      @seeking="handleSeeking"
      @seeked="handleSeeked"
      @volumechange="handleVolumeChange"
      @waiting="handleWaiting"
      @mouseenter.stop="isVideoHoverActive = true"
      @mouseleave="isVideoHoverActive = false"
      @mousemove.prevent
    ></video>
    <div
      v-show="isVideoHoverActive"
      @mouseenter.stop="isVideoHoverActive = true"
      class="overlay-control"
    >
      <v-btn
        fab
        text
        x-large
        @click="handleClickBack"
      >
        <v-icon x-large color="white">mdi-skip-backward</v-icon>
      </v-btn>
      <v-btn
        fab
        text
        x-large
        @click="handleClickPlay"
      >
        <v-icon x-large color="white">mdi-play-box-outline</v-icon>
      </v-btn>
      <v-btn
        fab
        text
        x-large
        @click="handleClickStop"
      >
        <v-icon x-large color="white">mdi-pause-circle-outline</v-icon>
      </v-btn>
      <v-btn
        fab
        text
        x-large
        @click="handleClickNext"
      >
        <v-icon x-large color="white">mdi-skip-forward</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import videojs, { VideoJsPlayer } from 'video.js'
import 'video.js/dist/video-js.css'
import { playerOptions } from '@/utils/videojs'

let player: VideoJsPlayer
const videoPlayer = ref(null)
const isVideoHoverActive = ref(false)

onMounted(() => {
  initVideoPlayer()
})
onBeforeUnmount(() => {
  if (player) {
    player.dispose()
  }
})

function initVideoPlayer () {
  player = videojs(
    'videoPlayer',
    playerOptions
  )
}
function handleClickStop () {
  player.pause()
}
function handleClickPlay () {
  player.play()
}
function handleClickNext () {
  player.currentTime(player.currentTime() + 5)
}
function handleClickBack () {
  player.currentTime(player.currentTime() - 5)
}
function handlePlayVideo (player: Event) {
  console.log('handlePlayVideo', player)
}
function handlePauseVideo (player: Event) {
  console.log('handlePauseVideo', player)
}
function handleEndVideo (player: Event) {
  console.log('handleEndVideo', player)
}
function handleSeeking (player: Event) {
  console.log('handleSeeking', player)
}
function handleSeeked (player: Event) {
  console.log('handleSeeked', player)
}
function handleVolumeChange (player: Event) {
  console.log('handleVolumeChange', player)
}
function handleWaiting (player: Event) {
  console.log('handleWaiting', player)
}
</script>

<style scoped>
.position-relative {
  position: relative;
}
.video-js {
  width: 100%;
}
.overlay-control {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
