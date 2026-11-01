import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { blogPosts, formatPostDate, getPublishedPost, getPublishedPosts } from "@/content/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPublishedPost(params.slug) ?? (import.meta.env.DEV ? blogPosts.find((item) => item.slug === params.slug) : undefined);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => ({
    meta: [
      { title: post ? `${post.title} | Blog Mộc Diện` : "Bài viết không khả dụng | Mộc Diện" },
      { name: "description", content: post?.excerpt ?? "Bài viết không khả dụng trên Blog Mộc Diện." },
      { property: "og:title", content: post?.title ?? "Bài viết không khả dụng | Mộc Diện" },
      { property: "og:description", content: post?.excerpt ?? "Bài viết không khả dụng trên Blog Mộc Diện." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(post ? [{ property: "article:published_time", content: post.date }] : [{ name: "robots", content: "noindex" }]),
    ],
    scripts: post ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.date, author: { "@type": "Organization", name: post.author }, publisher: { "@type": "Organization", name: "Mộc Diện" }, inLanguage: "vi-VN", articleSection: post.category }) }] : [],
  }),
  notFoundComponent: () => <main className="mx-auto max-w-3xl px-6 pb-20 pt-40"><p className="eyebrow">Blog Mộc Diện</p><h1 className="mt-6 font-display text-4xl">Không tìm thấy bài viết.</h1><Button asChild variant="link" className="mt-8 p-0"><Link to="/blog">← Trở về Blog</Link></Button></main>,
  component: BlogArticle,
});

function BlogArticle() {
  const post = Route.useLoaderData();
  const related = getPublishedPosts().filter((item) => item.slug !== post.slug).slice(0, 2);
  return <main className="mobile-bottom-padding mx-auto max-w-[1320px] px-6 pt-28 md:px-10 md:pt-36">
    <nav aria-label="Đường dẫn bài viết" className="flex flex-wrap gap-2 text-sm text-ink-soft"><Link to="/">Mộc Diện</Link><span>/</span><Link to="/blog">Blog</Link><span>/</span><span>{post.category}</span></nav>
    <header className="mx-auto mb-12 mt-12 max-w-4xl">
      <p className="eyebrow">{post.category}</p>
      <h1 className="mt-5 font-display text-4xl leading-[1.15] md:text-5xl">{post.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
      <p className="mt-6 text-sm text-ink-soft">{post.author} · <time dateTime={post.date}>{formatPostDate(post.date)}</time></p>
    </header>
    <figure><img src={post.cover} alt={post.coverAlt} className="max-h-[620px] w-full object-cover" width={1200} height={800} /><figcaption className="mt-3 text-xs text-ink-soft">Ảnh minh họa bề mặt hoàn thiện.</figcaption></figure>
    <article className="blog-prose mx-auto mt-14 max-w-[720px]"><ReactMarkdown>{post.content}</ReactMarkdown></article>
    <section className="mx-auto mt-16 max-w-[720px] border-y border-rule py-10"><p className="font-display text-3xl">Trao đổi từ hiện trạng công trình.</p><p className="mt-4 text-[15px] leading-relaxed text-ink-soft">Gửi ảnh hạng mục kim loại hoặc tấm xi măng để Mộc Diện tư vấn phương án hoàn thiện phù hợp.</p><Button asChild className="mt-6 h-auto rounded-none bg-accent px-6 py-3 text-accent-foreground hover:bg-ink"><a href="https://zalo.me/0914599988" target="_blank" rel="noopener noreferrer">Gửi ảnh qua Zalo</a></Button></section>
    {related.length > 0 && <section className="mx-auto mt-16 max-w-[720px]"><h2 className="eyebrow">Đọc tiếp</h2>{related.map((item) => <div key={item.slug} className="mt-6 border-b border-rule pb-6"><p className="text-xs text-ink-soft">{item.category}</p><h3 className="mt-3 font-display text-2xl"><Link to="/blog/$slug" params={{ slug: item.slug }} className="hover:text-accent">{item.title}</Link></h3></div>)}</section>}
    <div className="mx-auto mt-10 max-w-[720px]"><Button asChild variant="link" className="p-0"><Link to="/blog">← Tất cả bài viết</Link></Button></div>
  </main>;
}