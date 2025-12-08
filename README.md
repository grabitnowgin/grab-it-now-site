# GIN (Grab it Now) - Grocery Delivery Website

This is the website for GIN (Grab it Now), a grocery delivery service that operates via WhatsApp.

## Project Setup

### Install Dependencies
`ash
npm install
` 

### Run Development Server
`ash
npm run dev
` 

### Build for Production
`ash
npm run build
` 

### Deploy to GitHub Pages
To deploy the website to www.grabitnowmart.in (hosted on GitHub Pages):

1. Ensure you have configured your GitHub repository settings to use the custom domain www.grabitnowmart.in.
2. Run the deployment script:
   `powershell
   ./deploy.ps1
   ` 
   Or manually:
   `ash
   npm run build
   npm run deploy
   ` 

## Technologies Used
- Vue.js 3
- Vite
- Vuetify (Material Design Component Framework)
