<template>
  <footer class="app-footer" role="contentinfo" aria-label="GIN Grocery Delivery Footer">
    <v-container>
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo-wrapper d-flex align-center mb-4">
            <picture>
              <source srcset="/GIN.webp" type="image/webp" />
              <img src="/GIN.png" alt="GIN - Grab It Now Grocery Delivery Logo" class="logo-icon" loading="lazy" width="48" height="48" />
            </picture>
            <div class="ml-3">
              <span class="logo-text">GIN</span>
              <span class="logo-subtext">Grab it Now</span>
            </div>
          </div>
          <p class="footer-tagline">Your neighbourhood grocery partner delivering happiness through WhatsApp.</p>
          
          <!-- Hidden text for SEO -->
          <address class="visually-hidden" itemscope itemtype="https://schema.org/LocalBusiness">
            <span itemprop="name">GIN - Grab It Now</span>
            <span itemprop="description">Grocery delivery service in South Kolkata</span>
            <span itemprop="telephone">+91 8981118301</span>
            <span itemprop="email">grabitnow.gin@gmail.com</span>
            <span itemprop="areaServed">South Kolkata, West Bengal, India</span>
          </address>
        </div>
        
        <nav class="footer-contact" aria-label="Contact information">
          <h4 class="footer-heading">Get in Touch</h4>
          <div class="contact-links">
            <a href="https://wa.me/918981118301" target="_blank" rel="noopener noreferrer" class="contact-item" aria-label="Contact GIN via WhatsApp">
              <v-icon size="20" aria-hidden="true">mdi-whatsapp</v-icon>
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:8981118301" class="contact-item" aria-label="Call GIN at 8981118301">
              <v-icon size="20" aria-hidden="true">mdi-phone</v-icon>
              <span>8981118301</span>
            </a>
          </div>
        </nav>
        
        <div class="footer-cta">
          <h4 class="footer-heading">Ready to Order?</h4>
          <v-btn
            href="https://wa.me/c/918981118301"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-btn"
            size="large"
            aria-label="Start shopping groceries on WhatsApp"
          >
            <v-icon start>mdi-whatsapp</v-icon>
            Start Shopping
          </v-btn>
        </div>
      </div>
      
      <v-divider class="my-8" color="rgba(255,255,255,0.1)"></v-divider>
      
      <div class="footer-legal">
        <p class="enterprise-name">A unit of M/S MAA KALI ENTERPRISE</p>
        <p class="fssai-info">
          <v-icon size="16" class="mr-1" aria-hidden="true">mdi-certificate</v-icon>
          <abbr title="Food Safety and Standards Authority of India">FSSAI</abbr> License No: 12825019001955
        </p>
      </div>
      
      <div class="footer-bottom">
        <span class="copyright">&copy; {{ new Date().getFullYear() }} Grab it Now. All rights reserved.</span>
        <span class="made-with">Made with <span aria-label="love">💚</span> in Kolkata</span>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.app-footer {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  padding: 64px 0 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
}

@media (max-width: 960px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
  }
  
  .logo-wrapper {
    justify-content: center;
  }
  
  .footer-tagline {
    margin: 0 auto;
  }
  
  .contact-links {
    align-items: center;
  }
  
  .footer-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 100%;
    max-width: 280px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
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
  color: white;
  letter-spacing: -0.5px;
}

.logo-subtext {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 8px;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 300px;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: #10B981;
}

.cta-btn {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
  color: white !important;
  font-weight: 600;
  border-radius: 12px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.made-with {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.footer-legal {
  text-align: center;
  margin-bottom: 24px;
}

.enterprise-name {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.fssai-info {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

@media (max-width: 600px) {
  .footer-bottom {
    justify-content: center;
  }
  
  .footer-legal {
    margin-bottom: 20px;
  }
  
  .enterprise-name,
  .fssai-info {
    font-size: 0.75rem;
  }
}
</style>
