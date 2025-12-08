<template>
  <section class="categories-section py-16">
    <v-container>
      <div class="section-header text-center mb-12">
        <v-chip color="accent" variant="tonal" size="small" class="mb-4">
          <v-icon start size="14">mdi-shape</v-icon>
          Product Range
        </v-chip>
        <h2 class="section-title">Categories We Serve</h2>
        <p class="section-subtitle">Everything your household needs, delivered to your door</p>
      </div>
      
      <div class="categories-grid">
        <div 
          v-for="category in categories" 
          :key="category.name"
          class="category-card card-hover"
        >
          <div class="category-icon" :style="{ background: category.gradient }">
            <v-icon size="32" color="white">{{ category.icon }}</v-icon>
          </div>
          <span class="category-name">{{ category.name }}</span>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Staples', icon: 'mdi-grain', gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
  { name: 'Personal Care', icon: 'mdi-face-woman-shimmer', gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)' },
  { name: 'Home Care', icon: 'mdi-spray-bottle', gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' },
  { name: 'Beverages', icon: 'mdi-cup', gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
  { name: 'Snacks', icon: 'mdi-cookie', gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' },
  { name: 'Household', icon: 'mdi-home-variant', gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' },
  { name: 'Baby Care', icon: 'mdi-baby-carriage', gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)' },
]
</script>

<style scoped>
.categories-section {
  background: white;
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 20px;
  background: #F8FAFC;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  cursor: pointer;
}

.category-card:hover {
  background: white;
  border-color: #10B981;
}

.category-icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.category-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1E293B;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 8px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .category-card {
    padding: 20px 12px;
  }
  
  .category-icon {
    width: 56px;
    height: 56px;
  }
  
  .category-name {
    font-size: 0.85rem;
  }
}
</style>
