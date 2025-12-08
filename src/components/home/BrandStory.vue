<template>
  <section class="story-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="story-card">
            <div class="quote-icon">
              <v-icon size="48" color="primary">mdi-format-quote-open</v-icon>
            </div>
            
            <blockquote class="story-quote">
              GIN started from a simple thought — grocery shopping shouldn't be a headache. 
              No complicated apps, no wrong items, no frustration. 
              Just send your list to a trusted neighbourhood partner.
            </blockquote>
            
            <div class="story-author">
              <div class="author-avatar">
                <v-icon size="24" color="white">mdi-account</v-icon>
              </div>
              <div class="author-info">
                <span class="author-name">The GIN Team</span>
                <span class="author-role">Your Neighbourhood Partners</span>
              </div>
            </div>
            
            <div class="story-decoration">
              <div class="decoration-line"></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.story-section {
  background: #F8FAFC;
}

.story-card {
  background: white;
  border-radius: 32px;
  padding: 60px 48px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #E2E8F0;
}

.quote-icon {
  margin-bottom: 24px;
  opacity: 0.3;
}

.story-quote {
  font-size: 1.5rem;
  font-weight: 500;
  color: #334155;
  line-height: 1.8;
  margin: 0 0 32px 0;
  font-style: italic;
}

.story-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-info {
  text-align: left;
}

.author-name {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #1E293B;
}

.author-role {
  display: block;
  font-size: 0.875rem;
  color: #64748B;
}

.story-decoration {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #10B981, #6366F1);
  border-radius: 0 0 4px 4px;
}

@media (max-width: 768px) {
  .story-card {
    padding: 40px 24px;
    border-radius: 24px;
  }
  
  .story-quote {
    font-size: 1.125rem;
    line-height: 1.7;
  }
  
  .author-avatar {
    width: 40px;
    height: 40px;
  }
  
  .author-name {
    font-size: 0.9rem;
  }
  
  .author-role {
    font-size: 0.8rem;
  }
}
</style>
