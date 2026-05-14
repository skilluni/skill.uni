export type UserRole   = "student" | "admin";
export type ClassGrade = "9" | "10" | "11" | "12";
export type Board      = "ICSE" | "ISC";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string | null;
  grade: ClassGrade;
  board: Board;
  school_name?: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
}

export interface Course {
  grade: string;
  board: string;
  title: string;
  description: string;
  color: "blue" | "coral" | "green" | "purple";
  chapters: number;
  lectures: number;
}