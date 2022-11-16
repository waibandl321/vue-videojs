import videojs from 'video.js'
export const playerOptions: videojs.PlayerOptions = {
  autoplay: true,
  controls: true,
  playbackRates: [0.5, 1, 1.5, 2],
  playsinline: true,
  liveui: true,
  sources: [
    {
      src: 'https://media.video-ac.com/video/public/f948bd0f_cc8c_4ab9_b560_1d3d9e258c8a-10732/f948bd0f_cc8c_4ab9_b560_1d3d9e258c8a_960x540.mp4',
      type: 'video/mp4'
    }
  ]
}

export function handlePlayVideo (player: Event) {
  console.log('handlePlayVideo', player)
}
export function handlePauseVideo (player: Event) {
  console.log('handlePauseVideo', player)
}
export function handleEndVideo (player: Event) {
  console.log('handleEndVideo', player)
}
export function handleSeeking (player: Event) {
  console.log('handleSeeking', player)
}
export function handleSeeked (player: Event) {
  console.log('handleSeeked', player)
}
export function handleVolumeChange (player: Event) {
  console.log('handleVolumeChange', player)
}
export function handleWaiting (player: Event) {
  console.log('handleWaiting', player)
}
