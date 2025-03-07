import { Categories } from '../components/Categories'
import { getCategories } from '../lib/api'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return <Categories categories={categories.data} />
}
