import type { TeamMember, ApiResponse } from "@/src/shared/types";
import teamData from "@/src/mock/team.json";

export const teamService = {
  async getAll(): Promise<ApiResponse<TeamMember[]>> {
    return { success: true, data: teamData as TeamMember[], timestamp: new Date().toISOString() };
  },
};
