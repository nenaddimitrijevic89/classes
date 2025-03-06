import { Search } from "@/@@/components/search-page/Search";
import { getAllClasses, getCategories, getGyms } from "@/@@/lib/api";

export default async function SearchPage() {
  const classes = await getAllClasses();
  const gyms = await getGyms();
  const categories = await getCategories();

  return (
    <Search
      classes={classes.data}
      gyms={gyms.data}
      categories={categories.data}
    />
  );
}
