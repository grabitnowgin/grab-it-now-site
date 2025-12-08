<template>
  <section class="map-section py-16">
    <v-container>
      <div class="section-header text-center mb-12">
        <v-chip color="primary" variant="tonal" size="small" class="mb-4">
          <v-icon start size="14">mdi-map-marker-radius</v-icon>
          Service Coverage
        </v-chip>
        <h2 class="section-title">We're Live in South Kolkata</h2>
        <p class="section-subtitle">Hyperlocal coverage for faster deliveries. Expanding block by block.</p>
      </div>
      
      <v-row align="stretch">
        <v-col cols="12" lg="4">
          <div class="info-panel">
            <div class="panel-header">
              <div class="panel-icon">
                <v-icon size="28" color="white">mdi-map-marker-multiple</v-icon>
              </div>
              <h3 class="panel-title">Active Neighbourhoods</h3>
            </div>
            
            <div class="areas-grid">
              <div 
                v-for="area in serviceAreaNames" 
                :key="area"
                class="area-tag"
              >
                <v-icon size="16" color="primary">mdi-check-circle</v-icon>
                <span>{{ area }}</span>
              </div>
            </div>
            
            <div class="panel-alerts">
              <div class="alert-item success">
                <v-icon size="20" color="success">mdi-clock-fast</v-icon>
                <span>60–90 min delivery guaranteed in this zone</span>
              </div>
              <div class="alert-item info">
                <v-icon size="20" color="info">mdi-message-question</v-icon>
                <span>Want your area covered? WhatsApp us!</span>
              </div>
            </div>
            
            <v-btn
              href="https://wa.me/c/918981118301"
              target="_blank"
              block
              size="large"
              class="request-btn mt-4"
            >
              <v-icon start>mdi-whatsapp</v-icon>
              Request Your Area
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="12" lg="8">
          <div class="map-container">
            <div id="service-map" class="service-map"></div>
            <div class="map-overlay">
              <div class="map-legend">
                <div class="legend-item">
                  <span class="legend-dot pulse"></span>
                  <span>Active delivery points</span>
                </div>
                <div class="legend-divider"></div>
                <div class="legend-item">
                  <v-icon size="16" color="primary">mdi-currency-inr</v-icon>
                  <span>₹150 MOV • ₹15 fee below MOV</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix Leaflet default marker icon paths for Vite bundler
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const serviceAreas = [
  { name: 'Prince Anwar Shah Road', coords: [22.5013, 88.365] },
  { name: 'Golfreen', coords: [22.4887, 88.3625] },
  { name: 'Golf Garden', coords: [22.5004, 88.3588] },
  { name: 'Bijoygarh', coords: [22.4889, 88.3707] },
  { name: 'Jadavpur', coords: [22.4986, 88.3738] },
  { name: 'Santoshpur', coords: [22.4842, 88.3955] },
]

const serviceAreaNames = serviceAreas.map((area) => area.name)

// Custom marker icon
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="marker-pin"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#10B981"/><circle cx="12" cy="12" r="4" fill="white"/></svg></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

let mapInstance = null

const initMap = () => {
  if (mapInstance) return

  mapInstance = L.map('service-map', { 
    zoomControl: false, 
    scrollWheelZoom: false,
    attributionControl: false
  }).setView([22.4943, 88.373], 13)

  // Standard OpenStreetMap tiles with color
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(mapInstance)

  // Add markers with custom icon
  serviceAreas.forEach((area) => {
    L.marker(area.coords, { icon: customIcon, title: area.name })
      .addTo(mapInstance)
      .bindPopup(`<div style="font-weight:600;font-size:14px;padding:4px 0;">${area.name}</div>`, {
        closeButton: false,
        className: 'custom-popup'
      })
  })

  // Draw coverage area polygon
  const polygonCoords = [
    [22.51, 88.35],
    [22.51, 88.40],
    [22.48, 88.40],
    [22.48, 88.35],
  ]
  L.polygon(polygonCoords, {
    color: '#10B981',
    weight: 2,
    fillColor: '#10B981',
    fillOpacity: 0.1,
    dashArray: '8, 8'
  }).addTo(mapInstance)

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
</script>

<style scoped>
.map-section {
  background: #F8FAFC;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1E293B;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748B;
}

.info-panel {
  background: white;
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #E2E8F0;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.panel-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.panel-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1E293B;
}

.areas-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

.area-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #F0FDF4;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #166534;
  border: 1px solid #BBF7D0;
}

.panel-alerts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
}

.alert-item.success {
  background: #F0FDF4;
  color: #166534;
  border: 1px solid #BBF7D0;
}

.alert-item.info {
  background: #EFF6FF;
  color: #1E40AF;
  border: 1px solid #BFDBFE;
}

.request-btn {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
  color: white !important;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
}

.map-container {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #E2E8F0;
}

.service-map {
  height: 500px;
  width: 100%;
}

.map-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.95) 100%);
  padding: 40px 20px 16px;
}

.map-legend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10B981;
}

.legend-dot.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
}

.legend-divider {
  width: 1px;
  height: 20px;
  background: #E2E8F0;
}

/* Custom marker styles */
:deep(.custom-marker) {
  background: none;
  border: none;
}

:deep(.marker-pin) {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

:deep(.custom-popup .leaflet-popup-content-wrapper) {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

:deep(.leaflet-control-zoom) {
  border: none !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
  border-radius: 12px !important;
  overflow: hidden;
}

:deep(.leaflet-control-zoom a) {
  background: white !important;
  color: #1E293B !important;
  border: none !important;
}

:deep(.leaflet-control-zoom a:hover) {
  background: #F1F5F9 !important;
}

@media (max-width: 960px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .info-panel {
    padding: 24px;
    margin-bottom: 20px;
  }
  
  .panel-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .areas-grid {
    grid-template-columns: 1fr;
  }
  
  .area-tag {
    padding: 10px 14px;
    font-size: 0.85rem;
  }
  
  .alert-item {
    font-size: 0.85rem;
    padding: 12px 14px;
  }
  
  .service-map {
    height: 350px;
  }
  
  .map-legend {
    flex-direction: column;
    gap: 12px;
  }
  
  .legend-divider {
    display: none;
  }
  
  .legend-item {
    font-size: 0.8rem;
  }
}
</style>
