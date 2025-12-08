import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#10B981',      // Modern emerald green
          secondary: '#6366F1',    // Indigo accent
          accent: '#F59E0B',       // Amber for highlights
          success: '#22C55E',      // Bright green
          info: '#3B82F6',         // Blue
          warning: '#F97316',      // Orange
          error: '#EF4444',        // Red
          surface: '#FFFFFF',
          background: '#F8FAFC',   // Subtle cool gray
          'on-surface': '#1E293B', // Slate for text
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      fontWeight: 600,
    },
    VCard: {
      rounded: 'xl',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})
