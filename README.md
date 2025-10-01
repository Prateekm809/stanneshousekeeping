# St. Anne’s Housekeeping Website – 2024

The official website for [St. Anne’s Housekeeping](https://stanneshousekeeping.com), London’s premium housekeeping, cleaning and serviced apartment care company. This repo powers the public-facing site and future online booking system.

---

## ✨ Overview
St. Anne’s Housekeeping has provided discreet, hotel-standard housekeeping across Central London since 2008. The website is the digital gateway for potential and existing clients to explore services, request quotes, and manage bookings. This build focuses on speed, accessibility, SEO and a luxury user experience.

---

## 🏗️ Tech Stack
- **Framework**: Next.js 14 with App Router  
- **Styling**: Tailwind CSS with custom theme + Animate.css  
- **Icons**: React Icons / FontAwesome  
- **CMS**: Headless WordPress (blog/news only)  
- **Forms & Leads**: Serverless API routes with email notifications  
- **Deployment**: Vercel + Cloudflare CDN  
- **Analytics & SEO**: Google Tag Manager, schema-rich JSON-LD, Core Web Vitals optimized  

---

## 📚 Features
- **Responsive, mobile-first design**  
- **Multi-service pages** (Housekeeping, Commercial Cleaning, Serviced Apartment Cleaning, Deep Cleaning, Carpet Cleaning, End of Tenancy, Window Cleaning)  
- **Integrated quote request** with conditional logic (no login required)  
- **SEO-optimized blog** for tips, guides and long-tail keywords  
- **Accessibility** (WCAG 2.2 AA)  
- **Security best practices** (CSP, HTTPS, rate limiting)  
- **GDPR-ready** consent & cookie management  

---

## 🧭 Roadmap
- [ ] Add self-service client portal for bookings & payments  
- [ ] Build out API for admin to manage leads and service requests  
- [ ] Automate reviews/testimonials feed from Google and Trustpilot  
- [ ] Expand schema markup for all service areas  

---

## ⚙️ Local Development
Clone the repo and install dependencies:

```bash
git clone https://github.com/yourorg/stanneshousekeeping.com.git
cd stanneshousekeeping.com
npm install
npm run dev
