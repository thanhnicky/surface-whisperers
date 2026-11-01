import { describe, expect, test } from "bun:test";
import { publishedPost, publishedPosts, type Publication } from "./publication";
const posts: Publication[] = [
  { slug: "private-draft", status: "draft", date: "2026-11-01" },
  { slug: "published-guide", status: "published", date: "2026-11-01" },
];

describe("source-managed article publication", () => {
  test("drafts cannot be listed or read by their public slug", () => {
    expect(publishedPosts(posts).some((post) => post.slug === "private-draft")).toBe(false);
    expect(publishedPost(posts, "private-draft")).toBeUndefined();
  });
  test("published source articles are readable by permanent slug", () => {
    expect(publishedPost(posts, "published-guide")?.status).toBe("published");
  });
});