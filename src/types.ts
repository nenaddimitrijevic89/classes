export type TCategory = {
  id: number;
  title: string;
  slug: ECategorySlug;
  classes: TClass[];
};

export type TClass = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  categories: TCategory[];
  timetables: TTimetable[];
  featuredImage: {
    url: string;
  };
};

export type TTimetable = {
  id: number;
  name: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  gym: string;
  dayOfWeek: number;
  capacity: number;
};

export type TOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TGym = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  legendId: string;
  details: string;
  markerLeft: number;
  markerTop: number;
  slug: string;
};

export enum ECategorySlug {
  AERIAL = "aerial",
  FIGHT = "fight",
  RIDE = "ride",
  STRENGTH = "strength",
  HOLISTIC = "holistic",
  RHYTHM = "rhythm",
  SWEAT = "sweat",
  SKILL = "skill",
  MIND = "mind",
}
