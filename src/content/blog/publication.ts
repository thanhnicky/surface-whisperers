export interface Publication { slug: string; date: string; status: "draft" | "published" }

export function publishedPosts<T extends Publication>(posts: T[]): T[] {
  return posts.filter((post) => post.status === "published").sort((a, b) => b.date.localeCompare(a.date));
}

export function publishedPost<T extends Publication>(posts: T[], slug: string): T | undefined {
  return publishedPosts(posts).find((post) => post.slug === slug);
}