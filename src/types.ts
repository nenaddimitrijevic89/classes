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
};
