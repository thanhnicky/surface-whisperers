import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { publishedPost, publishedPosts, type Publication } from "./publication";
const posts: Publication[] = [
  { slug: "private-draft", status: "draft", date: "2026-11-01" },
  { slug: "published-guide", status: "published", date: "2026-11-01" },
];

describe("source-managed article publication", () => {
  test("drafts cannot be listed or read by their public slug", () => {
    assert.equal(publishedPosts(posts).some((post) => post.slug === "private-draft"), false);
    assert.equal(publishedPost(posts, "private-draft"), undefined);
  });
  test("published source articles are readable by permanent slug", () => {
    assert.equal(publishedPost(posts, "published-guide")?.status, "published");
  });
});