export type HookCategory =
  | "Development Tools"
  | "Code Quality"
  | "Multi-Agent"
  | "Notifications"
  | "Language Support"
  | "Testing"
  | "Monitoring";

export interface Hook {
  id: string;
  name: string;
  description: string;
  category: HookCategory;
  repoUrl: string;
  author: string;
}
