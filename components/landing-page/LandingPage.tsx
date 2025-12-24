import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  Wallet,
  ShieldCheck,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-primary/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute top-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display">
              AptManager
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black hover:bg-slate-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span>v1.0 is now live</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl font-display mb-6">
            Manage Properties with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Unmatched Elegance
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
            The all-in-one platform for effortless apartment and tenant
            management. Experience a new standard of efficiency and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all flex items-center gap-2 group cursor-pointer">
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all backdrop-blur-sm cursor-pointer">
              View Demo
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="container mx-auto mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Users className="h-6 w-6 text-secondary" />}
            title="Tenant Portal"
            description="Give tenants a seamless experience with a dedicated portal for payments and requests."
          />
          <FeatureCard
            icon={<Wallet className="h-6 w-6 text-accent" />}
            title="Automated Payments"
            description="Collect rent automatically with integrated payment gateways and smart reminders."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6 text-primary" />}
            title="Secure Data"
            description="Your data is encrypted and backed up daily. Security is our top priority."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white font-display">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
