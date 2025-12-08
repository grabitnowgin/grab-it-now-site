<template>
  <section class="brands-section py-16">
    <v-container>
      <div class="section-header text-center mb-10">
        <v-chip color="secondary" variant="tonal" size="small" class="mb-4">
          <v-icon start size="14">mdi-star-check</v-icon>
          Trusted Partners
        </v-chip>
        <h2 class="section-title">Brands You Love</h2>
        <p class="section-subtitle">We stock only authorized products from leading FMCG brands</p>
      </div>
    </v-container>
    
    <div class="marquee-wrapper">
      <div class="marquee-fade marquee-fade-left"></div>
      <div class="marquee-container">
        <div class="marquee-content">
          <div v-for="(brand, index) in [...brandsWithLogos, ...brandsWithLogos]" :key="index" class="brand-card">
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
        </div>
      </div>
      <div class="marquee-fade marquee-fade-right"></div>
    </div>
  </section>
</template>

<script setup>
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
</script>

<style scoped>
.brands-section {
  background: #F8FAFC;
  overflow: hidden;
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

.marquee-wrapper {
  position: relative;
}

.marquee-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}

.marquee-fade-left {
  left: 0;
  background: linear-gradient(90deg, #F8FAFC 0%, transparent 100%);
}

.marquee-fade-right {
  right: 0;
  background: linear-gradient(270deg, #F8FAFC 0%, transparent 100%);
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  padding: 20px 0;
}

.marquee-content {
  display: inline-flex;
  animation: marquee 45s linear infinite;
}

.brand-card {
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #E2E8F0;
  padding: 20px;
  margin: 0 16px;
  transition: all 0.3s ease;
}

.brand-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.brand-logo {
  max-height: 70px;
  max-width: 160px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.brand-fallback {
  font-size: 11px;
  font-weight: 600;
  color: #64748B;
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

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 8px;
  }
  
  .marquee-fade {
    width: 40px;
  }
  
  .brand-card {
    width: 140px;
    height: 70px;
    padding: 12px;
    margin: 0 8px;
  }
  
  .brand-logo {
    max-height: 45px;
    max-width: 100px;
  }
}
</style>
