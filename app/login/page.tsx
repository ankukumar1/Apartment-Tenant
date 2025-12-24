"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { storage } from "@/utils/storage";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
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
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Save to local storage
    storage.setToken("fake-jwt-token");
    storage.setUser({ email: data.email });

    console.log("Logged in:", data);
    router.push("/dashboard");
    // Add real login logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md p-8">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-surface/50 border border-white/10 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-primary/10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Sign in to manage your apartment
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className={`block w-full pl-10 pr-3 py-2.5 bg-background/50 border ${
                    errors.password ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-gray-600 rounded bg-background/50 peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Remember me
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg text-white font-semibold text-sm shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Sign up
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
