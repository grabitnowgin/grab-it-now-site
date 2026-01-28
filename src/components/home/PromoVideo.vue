<template>
  <section class="promo-video-section" ref="sectionRef">
    <v-container>
      <!-- Section Header -->
      <div class="section-header text-center mb-8">
        <div class="badge-wrapper mb-4">
          <v-chip
            color="primary"
            variant="flat"
            size="small"
            class="px-4"
          >
            <v-icon start size="16">mdi-play-circle</v-icon>
            Watch & Learn
          </v-chip>
        </div>
        <h2 class="section-title">
          See How Easy It Is
        </h2>
        <p class="section-subtitle mt-3">
          Watch our quick guide and start ordering fresh groceries in minutes
        </p>
      </div>

      <!-- Video Container -->
      <div class="video-wrapper">
        <div class="video-card">
          <!-- Decorative Elements -->
          <div class="deco-circle deco-1"></div>
          <div class="deco-circle deco-2"></div>
          
          <!-- Video Frame -->
          <div class="video-frame">
            <!-- YouTube Player will be injected here -->
            <div id="gin-youtube-player"></div>
            
            <!-- Unmute Overlay - shown when autoplaying muted -->
            <Transition name="fade">
              <div 
                v-if="isMuted && isPlaying" 
                class="unmute-overlay"
                @click="unmute"
              >
                <div class="unmute-content">
                  <div class="unmute-icon-wrapper">
                    <v-icon size="40" color="white">mdi-volume-off</v-icon>
                  </div>
                  <p class="unmute-text">Tap to unmute</p>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Video Info Bar -->
          <div class="video-info">
            <div class="video-title">
              <v-icon size="20" color="primary" class="mr-2">mdi-youtube</v-icon>
              <span>How to order groceries from Grab It Now (GIN)</span>
            </div>
            <div class="video-meta">
              <v-chip size="x-small" variant="tonal" color="primary" class="mr-2">
                <v-icon start size="12">mdi-clock-outline</v-icon>
                Quick Guide
              </v-chip>
              <v-chip size="x-small" variant="tonal" color="secondary">
                <v-icon start size="12">mdi-translate</v-icon>
                English & বাংলা
              </v-chip>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Below Video -->
      <div class="video-cta text-center mt-8">
        <p class="cta-text mb-4">Ready to experience hassle-free grocery shopping?</p>
        <v-btn
          color="primary"
          size="large"
          rounded="pill"
          elevation="0"
          href="https://wa.me/918017689492"
          target="_blank"
          class="cta-btn"
        >
          <v-icon start>mdi-whatsapp</v-icon>
          Start Ordering Now
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
let player = null
let observer = null

const isMuted = ref(true)
const isPlaying = ref(false)
const hasAutoPlayed = ref(false)

// Load YouTube IFrame API
const loadYouTubeAPI = () => {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve()
      return
    }
    
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(tag, firstScript)
    
    // Handle if API already loaded elsewhere
    if (window.onYouTubeIframeAPIReady) {
      const existingCallback = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        existingCallback()
        resolve()
      }
    } else {
      window.onYouTubeIframeAPIReady = () => {
        resolve()
      }
    }
  })
}

// Initialize YouTube player
const initPlayer = async () => {
  await loadYouTubeAPI()
  
  player = new window.YT.Player('gin-youtube-player', {
    videoId: 'hBe6lKM3CKE',
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
      origin: window.location.origin
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  })
}

const onPlayerReady = () => {
  // Set up intersection observer after player is ready
  setupIntersectionObserver()
}

const onPlayerStateChange = (event) => {
  // YT.PlayerState: PLAYING = 1, PAUSED = 2, ENDED = 0
  if (event.data === 1) {
    isPlaying.value = true
  } else {
    isPlaying.value = false
  }
}

// Intersection Observer for scroll-triggered autoplay
const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Video is 50% visible - autoplay if haven't already
          if (!hasAutoPlayed.value && player && player.playVideo) {
            // Must start muted (browser policy)
            player.mute()
            isMuted.value = true
            player.playVideo()
            hasAutoPlayed.value = true
          }
        } else if (!entry.isIntersecting && player && isPlaying.value) {
          // Video scrolled out of view - pause
          if (player.pauseVideo) {
            player.pauseVideo()
          }
        }
      })
    },
    {
      threshold: [0.5] // Trigger when 50% visible
    }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
}

// Unmute function - called when user clicks overlay
const unmute = () => {
  if (player && player.unMute) {
    player.unMute()
    player.setVolume(100)
    isMuted.value = false
  }
}

onMounted(() => {
  initPlayer()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (player && player.destroy) {
    player.destroy()
  }
})
</script>

<style scoped>
.promo-video-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  background: linear-gradient(135deg, #10B981 0%, #6366F1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.video-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 20px 40px -10px rgba(16, 185, 129, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.8) inset;
  position: relative;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.deco-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
  top: -100px;
  right: -50px;
}

.deco-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  bottom: -75px;
  left: -30px;
}

.video-frame {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 16px;
  overflow: hidden;
  background: #0f172a;
}

.video-frame iframe,
.video-frame :deep(iframe) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Unmute Overlay Styles */
.unmute-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.unmute-overlay:hover {
  background: rgba(0, 0, 0, 0.5);
}

.unmute-content {
  text-align: center;
}

.unmute-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(16, 185, 129, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  animation: pulse 2s infinite;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
}

.unmute-text {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 30px rgba(16, 185, 129, 0.6);
  }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.video-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px 8px;
  flex-wrap: wrap;
  gap: 12px;
}

.video-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
}

.video-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.video-cta {
  position: relative;
  z-index: 2;
}

.cta-text {
  color: #64748b;
  font-size: 1rem;
}

.cta-btn {
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0 32px !important;
  height: 52px !important;
  box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.4);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px -10px rgba(16, 185, 129, 0.5);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .promo-video-section {
    padding: 60px 0;
  }

  .section-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }

  .video-card {
    padding: 12px;
    border-radius: 16px;
  }

  .video-frame {
    border-radius: 12px;
  }

  .video-info {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 4px 4px;
  }

  .video-title {
    font-size: 0.875rem;
  }

  .video-title span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .cta-btn {
    width: 100%;
    max-width: 300px;
  }

  .deco-1, .deco-2 {
    display: none;
  }

  .unmute-icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .unmute-icon-wrapper .v-icon {
    font-size: 32px !important;
  }

  .unmute-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .promo-video-section {
    padding: 48px 0;
  }

  .video-card {
    padding: 8px;
    border-radius: 12px;
  }

  .video-frame {
    border-radius: 8px;
  }
}
</style>
