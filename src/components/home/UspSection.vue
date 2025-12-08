<template>
  <section class="usp-section py-16">
    <v-container>
      <div class="section-header text-center mb-14">
        <v-chip color="white" variant="flat" size="small" class="mb-4">
          <v-icon start size="14">mdi-star-shooting</v-icon>
          Why Choose Us
        </v-chip>
        <h2 class="section-title text-white">What Makes GIN Different</h2>
        <p class="section-subtitle">We're not just another delivery service — we're your neighbourhood partner</p>
      </div>
      
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(usp, index) in usps" :key="index">
          <div class="usp-card">
            <div class="usp-icon">
              <v-icon size="24" color="white">{{ usp.icon }}</v-icon>
            </div>
            <div class="usp-content">
              <h4 class="usp-title">{{ usp.title }}</h4>
              <p class="usp-description">{{ usp.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Background decoration -->
    <div class="usp-decoration">
      <div class="decoration-blob blob-1"></div>
      <div class="decoration-blob blob-2"></div>
    </div>
  </section>
</template>

<script setup>
const usps = [
  {
    icon: 'mdi-whatsapp',
    title: 'Just WhatsApp',
    description: 'No app downloads, no signups. Just message us like you would a friend.'
  },
  {
    icon: 'mdi-account-heart',
    title: 'Human Connection',
    description: 'Real people handling your orders, not faceless algorithms.'
  },
  {
    icon: 'mdi-tag-check',
    title: 'Your Brands, Your Choice',
    description: 'We never substitute without asking. You get exactly what you want.'
  },
  {
    icon: 'mdi-currency-inr',
    title: 'Transparent Pricing',
    description: 'MRP only. No hidden fees, no surge pricing, no surprises.'
  },
  {
    icon: 'mdi-home-heart',
    title: 'Neighbourhood Trust',
    description: 'We\'re from your area. Accountability comes naturally.'
  },
  {
    icon: 'mdi-microphone',
    title: 'Voice Note Friendly',
    description: 'Perfect for seniors. Just speak your list — we\'ll handle the rest.'
  }
]
</script>

<style scoped>
.usp-section {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
}

.usp-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  height: 100%;
}

.usp-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  border-color: rgba(16, 185, 129, 0.3);
}

.usp-icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.usp-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  margin-bottom: 6px;
}

.usp-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
}

/* Background decoration */
.usp-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.decoration-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: rgba(16, 185, 129, 0.15);
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: rgba(99, 102, 241, 0.15);
  bottom: -100px;
  left: -100px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
    padding: 0 8px;
  }
  
  .usp-card {
    padding: 20px;
  }
  
  .usp-icon {
    width: 42px;
    height: 42px;
    min-width: 42px;
  }
  
  .usp-title {
    font-size: 1rem;
  }
  
  .usp-description {
    font-size: 0.875rem;
  }
}
</style>
