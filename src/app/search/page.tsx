import { getCategories } from '@/@@/api/categories'
import { getClasses } from '@/@@/api/classes'
import { getGyms } from '@/@@/api/gyms'
import { Search } from '@/@@/components/search-page/Search'

export default async function SearchPage() {
  const classes = await getClasses()
  const gyms = await getGyms()
  const categories = await getCategories()

  return (
    <Search
      classes={classes.data}
      gyms={gyms.data}
      categories={categories.data}
    />
  )
}
