import type { Metadata } from "next";
import { CertificatesPageClient } from "@/src/features/certificates/certificates-page-client";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Our certifications and compliance programs demonstrate our commitment to quality, safety, and sustainability across all operations.",
};

export default function CertificatesPage() {
  return <CertificatesPageClient />;
}
