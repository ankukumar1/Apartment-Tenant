"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Building } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { storage } from "@/utils/storage";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);
    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Save to local storage
    storage.setToken("fake-jwt-token");
    storage.setUser({ name: data.name, email: data.email });

    console.log("Registered:", data);
    router.push("/dashboard");
    // Add real registration logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[60%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md p-8">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-surface/50 border border-white/10 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-primary/10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-tr from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg mb-4">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Join us to manage your properties efficiently
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all outline-none`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all outline-none`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.password ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all outline-none`}
                  placeholder="Create a password"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-300"
              >
                Confirm Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                </div>
                <input
                  id="confirm-password"
                  type="password"
                  {...register("confirmPassword")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all outline-none`}
                  placeholder="Repeat your password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-secondary to-primary hover:opacity-90 rounded-lg text-white font-semibold text-sm shadow-lg shadow-secondary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© 2024 Apartment Tenant Manager. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
