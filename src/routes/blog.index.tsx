import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { blogCategories, formatPostDate, getPublishedPosts, type BlogCategory } from "@/content/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog — Kinh nghiệm & kỹ thuật sơn giả gỗ | Mộc Diện" },
    { name: "description", content: "Bài viết về sơn giả gỗ kim loại và tấm xi măng: kinh nghiệm chọn màu, chuẩn bị nền, hướng dẫn kỹ thuật và case study công trình." },
    { property: "og:title", content: "Blog Mộc Diện — Kinh nghiệm & kỹ thuật sơn giả gỗ" },
    { property: "og:description", content: "Góc nhìn về vật liệu, màu sắc và quá trình thi công sơn giả gỗ kim loại, tấm xi măng." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BlogIndex,
});

function BlogIndex() {
  const [category, setCategory] = useState<BlogCategory | "Tất cả">("Tất cả");
  const published = getPublishedPosts();
  const usedCategories = blogCategories.filter((item) => published.some((post) => post.category === item));
  const posts = published.filter((post) => category === "Tất cả" || post.category === category);
  return <main className="mobile-bottom-padding mx-auto max-w-[1320px] px-6 pt-32 md:px-10 md:pt-40">
    <p className="eyebrow">Mộc Diện / Blog</p>
    <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
      <h1 className="font-display text-5xl leading-[1.1] md:col-span-7 md:text-6xl">Ghi chép về<br /><em className="text-accent">bề mặt & vật liệu.</em></h1>
      <p className="max-w-md text-[16px] leading-relaxed text-ink-soft md:col-span-5">Kinh nghiệm, góc nhìn kỹ thuật và câu chuyện công trình. Từ nền kim loại đến tấm xi măng, từ mẫu màu đến bề mặt hoàn thiện.</p>
    </div>
    <div role="group" aria-label="Chủ đề bài viết" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-rule py-5">
      {(["Tất cả", ...usedCategories] as const).map((item) => <Button key={item} variant="link" onClick={() => setCategory(item)} aria-pressed={category === item} className={`h-auto rounded-none p-0 text-[14px] ${category === item ? "text-accent underline underline-offset-8" : "text-ink-soft"}`}>{item}</Button>)}
    </div>
    <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
      {posts.map((post) => <article key={post.slug} className="group min-w-0">
        <Link to="/blog/$slug" params={{ slug: post.slug }} aria-label={post.title} className="block overflow-hidden"><img src={post.cover} alt={post.coverAlt} width={1200} height={800} className="aspect-[3/2] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.02]" /></Link>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft"><span>{post.category}</span><time dateTime={post.date}>{formatPostDate(post.date)}</time></div>
        <h2 className="mt-4 font-display text-3xl leading-tight"><Link to="/blog/$slug" params={{ slug: post.slug }} className="transition-colors hover:text-accent">{post.title}</Link></h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Button asChild variant="link" className="mt-5 h-auto p-0"><Link to="/blog/$slug" params={{ slug: post.slug }}>Đọc bài viết →</Link></Button>
      </article>)}
    </div>
    {posts.length === 0 && <p role="status" className="border-b border-rule py-20 text-center text-ink-soft">Chưa có bài viết trong chủ đề này.</p>}
  </main>;
}