export type TCategory = {
  id: number;
  title: string;
  slug: string;
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
