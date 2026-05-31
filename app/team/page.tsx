import type { Metadata } from "next";
import { TeamPageClient } from "@/src/features/team/team-page-client";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our leadership team of industry experts dedicated to sourcing and delivering the world's finest botanical ingredients.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
