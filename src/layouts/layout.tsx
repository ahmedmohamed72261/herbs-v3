"use client";

import { Navbar } from "@/src/widgets/navbar/navbar";
import { Footer } from "@/src/widgets/footer/footer";
import { Providers } from "@/src/shared/providers";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </Providers>
  );
}
