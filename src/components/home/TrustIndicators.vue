<template>
  <section class="trust-section py-12">
    <v-container>
      <div class="trust-bar">
        <div class="trust-item" v-for="(item, index) in trustItems" :key="index">
          <div class="trust-icon">
            <v-icon size="24" :color="item.color">{{ item.icon }}</v-icon>
          </div>
          <span class="trust-text">{{ item.text }}</span>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const trustItems = [
  { icon: 'mdi-check-decagram', color: '#10B981', text: 'Fresh stock from authorised distributors' },
  { icon: 'mdi-tag-check', color: '#6366F1', text: 'MRP pricing always' },
  { icon: 'mdi-shield-check', color: '#F59E0B', text: 'No hidden charges' },
]
</script>

<style scoped>
.trust-section {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
}

.trust-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.trust-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-text {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

@media (max-width: 768px) {
  .trust-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
