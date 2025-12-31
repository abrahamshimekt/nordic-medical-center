# Nordic Medical Centre Website

A modern, trustworthy healthcare website for Nordic Medical Centre (ኖርዲክ ሜዲካል ሴንተር | ቦሌ) located in Bole, Addis Ababa, Ethiopia.

## 🏥 About

Nordic Medical Centre is a leading medical center providing high-quality, patient-focused healthcare services through experienced doctors, professional nurses, and modern medical facilities — open 24 hours a day.

## ✨ Features

- **Modern Design**: Clean, Scandinavian-inspired medical design
- **Responsive**: Mobile-first, fully responsive layout
- **Bilingual**: English and Amharic (አማርኛ) language support
- **SEO Optimized**: Meta tags and structured content for search engines
- **Fast Loading**: Optimized for performance
- **Accessible**: WCAG compliant design patterns

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd "nordic medical center"
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nordic medical center/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with header and footer
│   ├── page.tsx             # Homepage with all sections
│   └── contact/
│       └── page.tsx         # Contact page with appointment form
├── components/
│   ├── Header.tsx           # Navigation header with language toggle
│   ├── Footer.tsx           # Site footer
│   └── WhatsAppButton.tsx   # Floating WhatsApp contact button
├── context/
│   └── LanguageContext.tsx  # Language toggle context (EN/አማርኛ)
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors

- **Nordic Blue**: Primary brand color (#0c8fe9)
- **Nordic Dark**: Deep blue for text and backgrounds (#072849)
- **Medical Teal**: Accent color for highlights (#14b8a6)
- **Frost White**: Light backgrounds (#f8fafc)

### Typography

- **Outfit**: Primary font for body text
- **Space Grotesk**: Display font for headings
- **Noto Sans Ethiopic**: Amharic text support

## 📱 Pages

### Homepage
- Hero section with CTAs
- About Nordic Medical Centre
- Medical services overview
- Why choose us section
- Opening hours (24/7)
- Patient reviews
- Location & directions
- Call-to-action section

### Contact Page
- Contact information cards
- Online appointment booking form
- Embedded Google Map
- Emergency contact section
- Payment & insurance info

## 🔧 Customization

### Updating Contact Information

Edit the phone number and address in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`
- `app/page.tsx`
- `app/contact/page.tsx`

### Adding New Services

Add new service objects to the `services` array in `app/page.tsx`.

### Modifying Colors

Update the color palette in `tailwind.config.ts` and `app/globals.css`.

## 📦 Built With

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 🌐 SEO

The website is optimized for search engines with:
- Semantic HTML structure
- Meta titles and descriptions
- Open Graph tags
- Responsive images
- Fast loading times

Target keywords:
- Medical center Addis Ababa
- Bole clinic
- 24-hour medical center Ethiopia
- Healthcare Addis Ababa

## 📞 Contact

**Nordic Medical Centre**
- 📍 XQMH+VCQ, Bole Sub City, Kebele 01, H.No-1244, Addis Ababa, Ethiopia
- 📞 +251 92 910 5653
- 🌐 nordicmedicalcentre.com
- ⏰ Open 24 Hours, 7 Days a Week

---

© 2025 Nordic Medical Centre. All rights reserved.


