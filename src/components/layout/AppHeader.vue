<template>
  <v-app-bar app elevation="0" class="app-header glass" height="72">
    <v-container class="d-flex align-center">
      <div class="logo-wrapper d-flex align-center">
        <picture>
          <source srcset="/GIN.webp" type="image/webp" />
          <img src="/GIN.png" alt="GIN Logo" class="logo-icon" loading="eager" />
        </picture>
        <div class="ml-3">
          <span class="logo-text">GIN</span>
          <span class="logo-subtext d-none d-sm-inline">Grab it Now</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="tel:8981118301"
        variant="text"
        class="mr-2 d-none d-md-flex"
        color="primary"
      >
        <v-icon start size="small">mdi-phone</v-icon>
        8981118301
      </v-btn>
      <v-btn
        href="https://wa.me/c/918981118301"
        target="_blank"
        color="primary"
        class="cta-btn"
        size="large"
      >
        <v-icon start>mdi-whatsapp</v-icon>
        <span class="d-none d-sm-inline">Order Now</span>
        <span class="d-inline d-sm-none">Order</span>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.app-header {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
}

.logo-wrapper {
  cursor: pointer;
}

.logo-icon {
  height: 44px;
  width: 44px;
  object-fit: contain;
  border-radius: 12px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.logo-subtext {
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748B;
  margin-left: 8px;
}

.cta-btn {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 0 24px !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
}

@media (max-width: 600px) {
  .logo-icon {
    height: 38px;
    width: 38px;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
  
  .logo-subtext {
    display: none;
  }
  
  .cta-btn {
    padding: 0 16px !important;
    font-size: 0.875rem;
  }
}
</style>
