#!/bin/bash

echo "🚀 Setting up Atomic Design structure for Pooddy..."

# Create all folders
mkdir -p src/components/atoms
mkdir -p src/components/molecules
mkdir -p src/components/organisms
mkdir -p src/components/templates
mkdir -p src/pages
mkdir -p src/data
mkdir -p src/utils

# Create Atoms
touch src/components/atoms/Button.jsx
touch src/components/atoms/Badge.jsx
touch src/components/atoms/PriceTag.jsx
touch src/components/atoms/FloatingEmoji.jsx

# Create Molecules
touch src/components/molecules/HeroTitle.jsx
touch src/components/molecules/HeroSubtitle.jsx
touch src/components/molecules/HeroCTA.jsx
touch src/components/molecules/ScrollIndicator.jsx
touch src/components/molecules/ProductCard.jsx
touch src/components/molecules/SectionTitle.jsx
touch src/components/molecules/StatCard.jsx
touch src/components/molecules/FeatureCard.jsx

# Create Organisms
touch src/components/organisms/HeroSection.jsx
touch src/components/organisms/StatsSection.jsx
touch src/components/organisms/ProductsSection.jsx
touch src/components/organisms/WhyChooseSection.jsx
touch src/components/organisms/CTASection.jsx
touch src/components/organisms/Footer.jsx

# Create Templates & Pages
touch src/components/templates/MainLayout.jsx
touch src/pages/HomePage.jsx

# Create Data & Utils
touch src/data/config.js
touch src/data/products.js
touch src/utils/whatsapp.js

echo "✅ Folder structure created!"
echo ""
echo "📝 Next steps:"
echo "1. Copy code dari dokumentasi ke setiap file"
echo "2. Update nomor WhatsApp di src/data/config.js"
echo "3. Run: npm run dev"
echo "4. Test di browser"
echo ""
echo "🎉 Happy coding!"