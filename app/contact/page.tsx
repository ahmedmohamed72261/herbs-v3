import type { Metadata } from "next";
import { ContactPageClient } from "@/src/features/contact/contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for inquiries about our products, partnerships, or any questions about our botanical ingredients.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
