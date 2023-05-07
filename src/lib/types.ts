type Categoies = 'svelteKit' | 'svelte'

export type Post = {
  title: string
  description: string
  date: string
  categories: Categoies
  published: boolean
  slug: string
}