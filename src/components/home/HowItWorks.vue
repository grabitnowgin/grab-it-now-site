<template>
  <section class="how-section py-16">
    <v-container>
      <div class="section-header text-center mb-14">
        <v-chip color="secondary" variant="tonal" size="small" class="mb-4">
          <v-icon start size="14">mdi-rocket-launch</v-icon>
          Simple Process
        </v-chip>
        <h2 class="section-title">How GIN Works</h2>
        <p class="section-subtitle">Three simple steps to get your groceries delivered</p>
      </div>
      
      <v-row class="steps-row">
        <v-col cols="12" md="4" v-for="(step, index) in steps" :key="index">
          <div class="step-card card-hover">
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-icon-wrapper">
              <div class="step-icon" :style="{ background: step.gradient }">
                <v-icon size="32" color="white">{{ step.icon }}</v-icon>
              </div>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-connector" v-if="index < 2">
              <v-icon color="primary" size="24">mdi-arrow-right</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: 'mdi-message-text-outline',
    title: 'Send Your List',
    description: 'WhatsApp us your grocery list or just send a voice note — we understand both!',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  {
    icon: 'mdi-package-variant',
    title: 'We Pack With Care',
    description: 'We handpick fresh items from trusted local distributors, just like your neighbourhood store.',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
  },
  {
    icon: 'mdi-bike-fast',
    title: 'Swift Delivery',
    description: 'Your groceries arrive at your doorstep within 60-90 minutes. That\'s a promise!',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
  }
]
</script>

<style scoped>
.how-section {
  background: #FFFFFF;
  position: relative;
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

.step-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  position: relative;
  height: 100%;
}

.step-number {
  position: absolute;
  top: 20px;
  left: 24px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #CBD5E1;
  letter-spacing: 1px;
}

.step-icon-wrapper {
  margin-bottom: 24px;
}

.step-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.step-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 12px;
}

.step-description {
  font-size: 1rem;
  color: #64748B;
  line-height: 1.7;
}

.step-connector {
  position: absolute;
  right: -36px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: white;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: none;
}

@media (min-width: 960px) {
  .step-connector {
    display: block;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 8px;
  }
  
  .step-card {
    padding: 28px 20px;
    margin-bottom: 16px;
  }
  
  .step-icon {
    width: 64px;
    height: 64px;
  }
  
  .step-title {
    font-size: 1.125rem;
  }
  
  .step-description {
    font-size: 0.9rem;
  }
}
</style>
