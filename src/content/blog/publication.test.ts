import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

// Import the registry with its Vite-only media and raw Markdown imports replaced.
const source = readFileSync(new URL("./index.ts", import.meta.url), "utf8").replace(
  /^import (\w+) from "[^"\n]+(?:\.jpg|\.md\?raw)";$/gm,
  'const $1 = "fixture";',
);
const registry = await import(`data:text/javascript;base64,${Buffer.from(source.replace(/export type BlogCategory[^\n]+\n/, '').replace(/export interface BlogPost \{[\s\S]*?\n\}/, '').replace(' as const', '').replace(': BlogPost[]', '').replace('slug: string', 'slug').replace('date: string', 'date')).toString('base64')}`);

describe("source-managed article publication", () => {
  test("drafts cannot be listed or read by their public slug", () => {
    registry.blogPosts.push({ slug: "private-draft", status: "draft", date: "2026-11-01" });
    expect(registry.getPublishedPosts().some((post: { slug: string }) => post.slug === "private-draft")).toBe(false);
    expect(registry.getPublishedPost("private-draft")).toBeUndefined();
    registry.blogPosts.pop();
  });
  test("published source articles are readable by permanent slug", () => {
    expect(registry.getPublishedPost("chon-mau-gia-go-cho-tam-xi-mang")?.status).toBe("published");
  });
});