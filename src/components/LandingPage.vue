<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="2">
      <v-toolbar-title class="font-weight-bold">
        <v-icon start>mdi-cart-outline</v-icon>
        GIN (Grab it Now)
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://wa.me/c/918981118301"
        target="_blank"
        color="white"
        variant="outlined"
        class="mr-2"
      >
        <v-icon start>mdi-whatsapp</v-icon>
        Order Now
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="hero-section py-16 bg-grey-lighten-4">
        <v-row justify="center" align="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h3 font-weight-bold mb-4 text-primary">
              Your Neighbourhood Grocery Partner – Delivered Simply on WhatsApp
            </h1>
            <p class="text-h5 mb-6 text-medium-emphasis">
              GIN brings your daily groceries through a simple call or WhatsApp message — no app, no confusion.
            </p>
            <div class="d-flex justify-center gap-4 flex-wrap">
              <v-btn
                color="success"
                size="x-large"
                href="https://wa.me/c/918981118301"
                target="_blank"
                prepend-icon="mdi-whatsapp"
                class="ma-2"
              >
                Order on WhatsApp
              </v-btn>
              <v-btn
                color="primary"
                size="x-large"
                href="tel:8981118301"
                prepend-icon="mdi-phone"
                class="ma-2"
              >
                Call Us
              </v-btn>
            </div>
            <div class="mt-4">
              <v-btn
                variant="text"
                color="secondary"
                href="https://wa.me/c/918981118301"
                target="_blank"
              >
                Check Whatsapp catalog and PDF
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- How GIN Works -->
      <v-container class="py-16">
        <h2 class="text-h4 text-center font-weight-bold mb-12">How GIN Works</h2>
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-card class="h-100 py-6" elevation="2">
              <v-icon size="64" color="primary" class="mb-4">mdi-format-list-bulleted</v-icon>
              <v-card-title class="text-h5">Send Your List</v-card-title>
              <v-card-text>
                Send a WhatsApp message or voice note with your grocery list.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-card class="h-100 py-6" elevation="2">
              <v-icon size="64" color="primary" class="mb-4">mdi-package-variant-closed</v-icon>
              <v-card-title class="text-h5">We Pack With Care</v-card-title>
              <v-card-text>
                We pick from trusted local distributors, like your neighbourhood store.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-card class="h-100 py-6" elevation="2">
              <v-icon size="64" color="primary" class="mb-4">mdi-moped</v-icon>
              <v-card-title class="text-h5">Delivered to Your Door</v-card-title>
              <v-card-text>
                Guaranteed delivery within 60–90 minutes.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- USP Section -->
      <v-container fluid class="bg-primary py-16 text-white">
        <v-container>
          <h2 class="text-h4 text-center font-weight-bold mb-12">What Makes GIN Different</h2>
          <v-row>
            <v-col cols="12" md="6" lg="4" v-for="(usp, index) in usps" :key="index">
              <div class="d-flex align-center mb-4">
                <v-icon color="white" class="mr-4">mdi-check-circle</v-icon>
                <span class="text-h6">{{ usp }}</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- Brand Story -->
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="10" class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-format-quote-open</v-icon>
            <h2 class="text-h4 font-weight-bold mb-6">Our Story</h2>
            <p class="text-h5 font-italic text-medium-emphasis">
              “GIN started from a simple thought — grocery shopping shouldn’t be a headache.
              No complicated apps, no wrong items, no frustration.
              Just send your list to a trusted neighbourhood partner.”
            </p>
            <v-icon size="48" color="primary" class="mt-4">mdi-format-quote-close</v-icon>
          </v-col>
        </v-row>
      </v-container>

      <!-- Service Areas & Delivery Info -->
      <v-container fluid class="bg-grey-lighten-4 py-16">
        <v-container>
          <div class="d-flex align-center mb-6">
            <v-icon color="primary" class="mr-3">mdi-radar</v-icon>
            <h2 class="text-h4 font-weight-bold mb-0">Service Map — South Kolkata Focus</h2>
          </div>
          <v-row align="stretch" dense>
            <v-col cols="12" md="5" lg="4">
              <v-card class="h-100 gradient-panel" elevation="6">
                <v-card-text class="py-6">
                  <div class="text-h5 font-weight-bold mb-3">We are live in these neighbourhoods</div>
                  <div class="text-subtitle-1 text-medium-emphasis mb-4">Hyperlocal coverage for faster drops. Expanding block by block.</div>
                  <div class="d-flex flex-wrap gap-2 mb-4">
                    <v-chip
                      v-for="area in serviceAreaNames"
                      :key="area"
                      color="white"
                      text-color="primary"
                      variant="elevated"
                      class="area-chip"
                    >
                      <v-icon start size="small">mdi-map-marker</v-icon>
                      {{ area }}
                    </v-chip>
                  </div>
                  <v-alert type="success" variant="tonal" border="start" density="comfortable" class="mb-2">
                    Guaranteed delivery within 60–90 minutes inside the highlighted zone.
                  </v-alert>
                  <v-alert type="info" variant="tonal" border="start" density="comfortable">
                    Want your block covered next? Ping us on WhatsApp and we will prioritise it.
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="7" lg="8">
              <v-card class="h-100" elevation="6">
                <v-card-text class="pa-0">
                  <div id="service-map" class="service-map"></div>
                  <div class="map-legend">
                    <div class="legend-item">
                      <span class="legend-dot"></span>
                      <span>Active delivery points</span>
                    </div>
                    <div class="legend-item text-medium-emphasis">
                      <v-icon size="small" class="mr-1">mdi-lock-open-check</v-icon>
                      Inside zone: ₹150 MOV | ₹15 convenience fee below MOV
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- Categories & Brands -->
      <v-container class="py-16">
        <h2 class="text-h4 text-center font-weight-bold mb-8">Categories We Serve</h2>
        <div class="d-flex justify-center flex-wrap gap-4 mb-12">
          <v-chip
            v-for="category in categories"
            :key="category"
            color="primary"
            variant="outlined"
            size="x-large"
            class="ma-2"
          >
            {{ category }}
          </v-chip>
        </div>

        <h2 class="text-h4 text-center font-weight-bold mb-8">Trusted Brands</h2>
        <div class="marquee-container py-8 bg-grey-lighten-5">
          <div class="marquee-content">
            <span v-for="(brand, index) in [...brandsWithLogos, ...brandsWithLogos]" :key="index" class="marquee-item">
              <div class="brand-logo-container">
                <img
                  :src="getLogoUrl(brand)"
                  :alt="brand"
                  :title="brand"
                  @error="(e) => handleImageError(e, brand)"
                  class="brand-logo"
                />
                <div class="brand-fallback" style="display: none;">
                  {{ brand }}
                </div>
              </div>
            </span>
          </div>
        </div>
      </v-container>

      <!-- Features Footer -->
      <v-container fluid class="bg-grey-darken-3 text-white py-8">
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col cols="12" md="4">
              <v-icon color="success" size="large" class="mb-2">mdi-check-decagram</v-icon>
              <div class="text-h6">Fresh stock from authorised distributors</div>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon color="success" size="large" class="mb-2">mdi-tag-check</v-icon>
              <div class="text-h6">MRP followed</div>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon color="success" size="large" class="mb-2">mdi-shield-check</v-icon>
              <div class="text-h6">No hidden charges</div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>

    <v-footer color="primary" dark class="text-center d-flex flex-column py-8">
      <div class="text-h5 font-weight-bold mb-4">GIN (Grab it Now)</div>
      <div class="mb-4">
        <v-btn icon="mdi-whatsapp" variant="text" href="https://wa.me/c/918981118301" target="_blank"></v-btn>
        <v-btn icon="mdi-phone" variant="text" href="tel:8981118301"></v-btn>
      </div>
      <div class="text-body-1">
        Phone: 8981118301
      </div>
      <div class="text-caption mt-4">
        &copy; {{ new Date().getFullYear() }} Grab it Now. All rights reserved.
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// Using logo.dev API which has better coverage for Indian brands
const brandLogos = {
  'ITC Limited': 'https://img.logo.dev/itcportal.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Adani Wilmar': 'https://img.logo.dev/adaniwilmar.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Tata Consumer Products': 'https://img.logo.dev/tataconsum.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Colgate-Palmolive': 'https://img.logo.dev/colgate.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Hindustan Unilever Limited': 'https://img.logo.dev/hul.co.in?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'GSK Consumer Healthcare India': 'https://img.logo.dev/gsk.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Dabur India': 'https://img.logo.dev/dabur.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Patanjali Ayurved': 'https://img.logo.dev/patanjaliayurved.net?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Nestlé India Limited': 'https://img.logo.dev/nestle.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Hindustan Coca-Cola Beverages Pvt Ltd (HCCB)': 'https://img.logo.dev/coca-cola.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'PepsiCo India': 'https://img.logo.dev/pepsico.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Haldiram Snacks': 'https://img.logo.dev/haldirams.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Britannia Industries Limited': 'https://img.logo.dev/britannia.co.in?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Godrej Consumer Products Limited': 'https://img.logo.dev/godrej.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Reckitt Benckiser India': 'https://img.logo.dev/reckitt.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Kimberly-Clark India': 'https://img.logo.dev/kimberly-clark.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Procter & Gamble India': 'https://img.logo.dev/pg.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Johnson & Johnson India': 'https://img.logo.dev/jnj.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Mondelez Ltd.': 'https://img.logo.dev/mondelezinternational.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Parle Products': 'https://img.logo.dev/parleproducts.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Heinz': 'https://img.logo.dev/heinz.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Delmonte': 'https://img.logo.dev/delmonte.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  "L'Oréal India Pvt Ltd": 'https://img.logo.dev/loreal.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Himalaya Wellness Company': 'https://img.logo.dev/himalayawellness.in?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Nivea India Pvt Ltd': 'https://img.logo.dev/nivea.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  '3M': 'https://img.logo.dev/3m.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Marico Ltd': 'https://img.logo.dev/marico.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Emami Ltd': 'https://img.logo.dev/emamiltd.in?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Wipro Consumer Care': 'https://img.logo.dev/wipro.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Bajaj Consumer Care Ltd': 'https://img.logo.dev/bajajconsumercare.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Nissin': 'https://img.logo.dev/nissin.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
  'Reliance Retail Limited': 'https://img.logo.dev/relianceretail.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
}

// For brands without reliable logo URLs, we'll show stylized text chips
const brandsWithLogos = Object.keys(brandLogos)

const getLogoUrl = (brand) => {
  return brandLogos[brand] || null
}

const handleImageError = (event, brand) => {
  // Hide the image and show a text fallback
  event.target.style.display = 'none'
  event.target.nextElementSibling.style.display = 'flex'
}

const serviceAreas = [
  { name: 'Prince Anwar Shah Road', coords: [22.5013, 88.365] },
  { name: 'Golfreen', coords: [22.4887, 88.3625] },
  { name: 'Golf Garden', coords: [22.5004, 88.3588] },
  { name: 'Bijoygarh', coords: [22.4889, 88.3707] },
  { name: 'Jadavpur', coords: [22.4986, 88.3738] },
  { name: 'Santoshpur', coords: [22.4842, 88.3955] },
]

const serviceAreaNames = serviceAreas.map((area) => area.name)

let mapInstance = null

const initMap = () => {
  if (mapInstance) return

  mapInstance = L.map('service-map', { zoomControl: false, scrollWheelZoom: false })
    .setView([22.4943, 88.373], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(mapInstance)

  serviceAreas.forEach((area) => {
    L.marker(area.coords, { title: area.name }).addTo(mapInstance).bindPopup(`<strong>${area.name}</strong>`)
  })

  L.control.zoom({ position: 'topright' }).addTo(mapInstance)

  setTimeout(() => {
    mapInstance.invalidateSize()
  }, 200)
}

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
})

const usps = [
  'No app, no complexity — just WhatsApp.',
  'Human connection, not corporate facelessness.',
  'You choose your own brands (no forcing alternatives).',
  'Transparent pricing.',
  'Neighbourhood-based trust and accountability.',
  'Easy for senior citizens — just send a voice note.'
]

const categories = [
  'Staples',
  'Personal Care',
  'Home Care',
  'Beverages',
  'Snacks',
  'Household',
  'Baby Care'
]

const brands = [
  'ITC Limited', 'Adani Wilmar', 'LT Foods Ltd.', 'KRBL Limited', 'Tata Consumer Products',
  'Colgate-Palmolive', 'Hindustan Unilever Limited', 'GSK Consumer Healthcare India', 'Dabur India',
  'Patanjali Ayurved', 'Jyothy Labs', 'Nimyle Herbal', 'Nestlé India Limited',
  'Hindustan Coca-Cola Beverages Pvt Ltd (HCCB)', 'PepsiCo India', 'Haldiram Snacks',
  'Britannia Industries Limited', 'Godrej Consumer Products Limited', 'Reckitt Benckiser India',
  'Kimberly-Clark India', 'Procter & Gamble India', 'Johnson & Johnson India', 'Ganesh Grains Limited',
  'Emami agrotech Ltd', "Doctors' Choice", 'Shree Hari Industries', 'Reliance Retail Limited',
  'SAJ Food Products Pvt. Ltd.', 'Mondelez Ltd.', 'Parle Products', 'Nissin', 'CG Foods (Wai Wai)',
  'Bambino Agro Industries', 'Weikfield', 'Smith & Jones', 'Heinz', 'Delmonte', 'Pou Chong',
  "Ching's", 'DRUK', 'Margo', 'Joy Personal Care', 'Bio Veda Action Research Co', 'Wipro Consumer Care',
  'Honasa Consumer Ltd', 'Bajaj Consumer Care Ltd', 'Marico Ltd', 'Emami Ltd', "L'Oréal India Pvt Ltd",
  'Himalaya Wellness Company', "Dey's Medical Ltd", 'Lotus Herbals Pvt Ltd', 'Nivea India Pvt Ltd', '3M'
]
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.marquee-content {
  display: inline-block;
  animation: marquee 60s linear infinite;
}

.marquee-item {
  display: inline-block;
  margin: 0 10px;
}

.brand-logo-container {
  width: 180px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px;
  margin: 8px 16px;
}

.brand-logo {
  max-height: 70px;
  max-width: 140px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: auto;
}

.brand-fallback {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  white-space: normal;
  max-width: 100px;
  align-items: center;
  justify-content: center;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover for better user experience */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

.service-map {
  height: 420px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.map-legend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-top: 1px solid #eee;
  background: linear-gradient(90deg, rgba(3, 169, 244, 0.08), rgba(3, 169, 244, 0));
}

.legend-item {
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 8px;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1976d2;
  box-shadow: 0 0 0 6px rgba(25, 118, 210, 0.15);
  display: inline-block;
}

.gradient-panel {
  background: linear-gradient(180deg, #1976d2, #42a5f5);
  color: white;
  border: none;
  box-shadow: 0 10px 30px rgba(25, 118, 210, 0.25);
}

.gradient-panel .v-alert {
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
}

.area-chip {
  font-weight: 700;
  letter-spacing: 0.2px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
</style>
