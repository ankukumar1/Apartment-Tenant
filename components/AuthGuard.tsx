"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { storage } from "@/utils/storage";
import { protectedRoutes } from "@/routes/protected";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check if the current path matches any protected route pattern
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isProtectedRoute) {
      const token = storage.getToken();
      if (!token) {
        router.push("/login");
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    } else {
      // Public route
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
