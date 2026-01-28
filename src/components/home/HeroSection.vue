<template>
  <section class="hero-section" aria-label="Welcome to GIN - Fast Grocery Delivery in South Kolkata">
    <div class="hero-bg" aria-hidden="true"></div>
    <v-container class="hero-content">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10" xl="8" class="text-center">
          <div class="hero-badge mb-6">
            <v-chip color="primary" variant="flat" size="small" class="badge-chip">
              <v-icon start size="14">mdi-lightning-bolt</v-icon>
              Delivering in South Kolkata
            </v-chip>
          </div>
          
          <h1 class="hero-title mb-6">
            Your Neighbourhood<br>
            <span class="gradient-text">Grocery Partner</span>
          </h1>
          
          <p class="hero-subtitle mb-10">
            Skip the apps. Just WhatsApp your list or send a voice note.<br class="d-none d-md-block" aria-hidden="true">
            We deliver within 60-90 minutes — like your friendly local store, but faster.
          </p>
          
          <div class="hero-actions d-flex justify-center flex-wrap ga-4" role="group" aria-label="Order options">
            <v-btn
              href="https://wa.me/c/918981118301"
              target="_blank"
              size="x-large"
              class="hero-btn-primary pulse-glow"
              aria-label="Order groceries on WhatsApp"
            >
              <v-icon start>mdi-whatsapp</v-icon>
              Order on WhatsApp
            </v-btn>
            <v-btn
              href="tel:8981118301"
              size="x-large"
              variant="outlined"
              class="hero-btn-secondary"
              aria-label="Call us to place your order"
            >
              <v-icon start>mdi-phone-outline</v-icon>
              Call Us
            </v-btn>
          </div>
          
          <div class="hero-trust mt-12" role="list" aria-label="Our service highlights">
            <div class="trust-items d-flex justify-center flex-wrap ga-6">
              <div class="trust-item" role="listitem">
                <v-icon color="primary" size="20" aria-hidden="true">mdi-clock-fast</v-icon>
                <span>60-90 min delivery</span>
              </div>
              <div class="trust-item">
                <v-icon color="primary" size="20">mdi-currency-inr</v-icon>
                <span>MRP pricing</span>
              </div>
              <div class="trust-item">
                <v-icon color="primary" size="20">mdi-shield-check</v-icon>
                <span>Trusted brands only</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Decorative elements -->
    <div class="hero-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #D1FAE5 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: flex;
  justify-content: center;
}

.badge-chip {
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0 16px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #1E293B;
}

.gradient-text {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: #64748B;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0 32px !important;
  height: 56px !important;
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.35);
  transition: all 0.3s ease;
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.45);
}

.hero-btn-secondary {
  border: 2px solid #10B981 !important;
  color: #10B981 !important;
  font-weight: 600;
  padding: 0 32px !important;
  height: 56px !important;
  transition: all 0.3s ease;
}

.hero-btn-secondary:hover {
  background: rgba(16, 185, 129, 0.08) !important;
  transform: translateY(-3px);
}

.trust-items {
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(16, 185, 129, 0.1);
  display: inline-flex;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #475569;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
    letter-spacing: -1px;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    padding: 0 8px;
  }
  
  .hero-btn-primary,
  .hero-btn-secondary {
    width: 100%;
    padding: 0 20px !important;
    height: 52px !important;
    font-size: 0.95rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
  }
  
  .trust-items {
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    width: 100%;
  }
  
  .trust-item {
    font-size: 0.875rem;
  }
  
  .circle-1, .circle-2, .circle-3 {
    display: none;
  }
}

/* Decorative circles */
.hero-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05));
}

.circle-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: -100px;
}

.circle-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
