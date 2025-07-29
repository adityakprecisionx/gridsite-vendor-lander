# GridSite Vendor Portal

A modern, responsive landing page for vendors interested in partnering with GridSite's ComputeComplete platform. Built with Next.js, TypeScript, and ShadCN UI.

## Overview

This landing page serves as a comprehensive portal for data center buildout vendors to:

1. **Learn about GridSite and ComputeComplete** - Understand the platform's value proposition and how it solves coordination challenges in data center development
2. **Discover partnership benefits** - Explore the advantages of joining GridSite's vendor ecosystem
3. **Apply for vendor qualification** - Complete a detailed survey to assess capabilities and fit

## Features

### 🎯 **Hero Section**
- Compelling headline and value proposition
- Clear call-to-action buttons
- Professional GridSite branding

### 📚 **Educational Content**
- Problem vs. Solution comparison
- Detailed explanation of ComputeComplete
- Visual breakdown of current challenges vs. GridSite's approach

### 💎 **Value Propositions**
- Six key benefits for vendors:
  - Scalability & Duplicability
  - Faster Project Completion
  - Streamlined Communication
  - Referral Fees
  - Preferred Partner Status
  - Growth Opportunities

### 📋 **Comprehensive Vendor Survey**
- Company and contact information
- Vendor type and capabilities assessment
- Regional coverage and availability
- Quality assessment (completed projects, reviews)
- Platform integration preferences
- Requirements and expectations

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Form Handling**: React state management
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gridsite-vendor-lander
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main vendor landing page
├── components/
│   └── ui/                  # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       ├── checkbox.tsx
│       ├── badge.tsx
│       └── separator.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## Form Data Structure

The vendor survey collects the following information:

```typescript
interface VendorFormData {
  // Basic Information
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  
  // Vendor Capabilities
  vendorType: string;
  capabilities: string[];
  regions: string[];
  availability: string;
  
  // Quality Assessment
  completedProjects: string;
  customerReviews: string;
  
  // Platform Integration
  platformIntegrations: string;
  referenceDesigns: string;
  requirements: string;
  
  // Terms
  agreeToTerms: boolean;
}
```

## Customization

### Styling
- Colors and themes can be modified in `src/app/globals.css`
- Component styling uses Tailwind CSS classes
- ShadCN UI components can be customized via CSS variables

### Content
- All text content is in `src/app/page.tsx`
- Form fields and options can be easily modified
- Add new sections by extending the component structure

### Form Handling
- Currently logs form data to console
- Integrate with your backend API by modifying the `handleSubmit` function
- Add form validation as needed

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Build the project: `npm run build`
- Deploy the `out` directory to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to GridSite Technologies.

## Support

For questions or support, contact the GridSite team at [contact@gridsiteinc.com](mailto:contact@gridsiteinc.com)
