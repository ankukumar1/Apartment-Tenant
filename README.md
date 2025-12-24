# Apartment Tenant Manager

A premium, modern web application for managing apartments and tenants, built with Next.js and Tailwind CSS.

![Project Status](https://img.shields.io/badge/status-development-orange)

## 🚀 Features

-   **Premium UI/UX**: Glassmorphism design system with dynamic backgrounds and smooth animations.
-   **Authentication Pages**:
    -   **Login**: Secure login form with "Remember me" functionality.
    -   **Registration**: Full registration flow with form validation (Zod + React Hook Form).
-   **Landing Page**: Elegant landing page showcasing features and pricing tiers.
-   **Responsive Design**: Fully responsive layout that looks great on all devices.
-   **Local Storage Utility**: Helper functions for ensuring safe, SSR-compatible local storage access.

## 🛠 Tech Stack

-   **Framework**: [Next.js 15+](https://nextjs.org/) (App Directory)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Form Handling**: [React Hook Form](https://react-hook-form.com/)
-   **Validation**: [Zod](https://zod.dev/)
-   **Language**: TypeScript

## 📂 Project Structure

```
├── app/
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home/Landing page (wrapper)
├── components/
│   └── landing-page/   # Landing page components
├── utils/
│   └── storage.ts      # LocalStorage helper utilities
└── public/             # Static assets
```

## ⚡ Getting Started

First, clone the repository and install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

The application follows a "Premium Dark" theme:
-   **Background**: Deep dark blue (`#0b0e14`)
-   **Primary**: Indigo (`#6366f1`)
-   **Secondary**: Cyan (`#06b6d4`)
-   **Accent**: Rose (`#f43f5e`)
-   **Font**: Inter (Sans) & Outfit (Display)

## 📄 License

This project is for educational purposes.
