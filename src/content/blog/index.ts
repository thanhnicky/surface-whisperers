import metalCover from "@/assets/hero-faux-wood-metal.jpg";
import cementCover from "@/assets/project-cement-board.jpg";
import metalContent from "./kiem-tra-be-mat-truoc-khi-son.md?raw";
import cementContent from "./chon-mau-gia-go-cho-tam-xi-mang.md?raw";
import { publishedPost, publishedPosts } from "./publication";

export const blogCategories = ["Case study", "Kinh nghiệm", "Hướng dẫn kỹ thuật"] as const;
export type BlogCategory = (typeof blogCategories)[number];
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: string;
  cover: string;
  coverAlt: string;
  content: string;
  status: "draft" | "published";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kiem-tra-be-mat-truoc-khi-son-gia-go-kim-loai",
    title: "Trước khi sơn giả gỗ kim loại: cần kiểm tra những gì?",
    excerpt: "Từ lớp sơn cũ, mối hàn đến vị trí đọng nước — những điểm cần xem xét trước khi chọn phương án hoàn thiện cổng và lam sắt.",
    category: "Hướng dẫn kỹ thuật",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: metalCover,
    coverAlt: "Bề mặt lam kim loại với hiệu ứng vân gỗ, ảnh minh họa",
    content: metalContent,
    status: "published",
  },
  {
    slug: "chon-mau-gia-go-cho-tam-xi-mang",
    title: "Chọn màu giả gỗ cho tấm xi măng: nhìn từ tổng thể kiến trúc",
    excerpt: "Cách cân nhắc sắc độ, hướng vân và ánh sáng khi duyệt mẫu cho mặt dựng, lam và trần tấm xi măng.",
    category: "Kinh nghiệm",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: cementCover,
    coverAlt: "Tấm xi măng hoàn thiện hiệu ứng gỗ, ảnh minh họa",
    content: cementContent,
    status: "published",
  },
];

export function getPublishedPosts() {
  return publishedPosts(blogPosts);
}

export function getPublishedPost(slug: string) {
  return publishedPost(blogPosts, slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}