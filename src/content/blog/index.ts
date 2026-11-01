import metalCover from "@/assets/hero-faux-wood-metal.jpg";
import cementCover from "@/assets/project-cement-board.jpg";
import galvanizedCover from "@/assets/son-gia-go-cho-cong-biet-thu-dep-moc-dien.jpg";
import processCover from "@/assets/cong-hang-rao-gia-go-mocdien-hcm.jpg";
import fadeCover from "@/assets/son-gia-go-ngoai-troi-mocdien-hcm.jpg";
import pricingCover from "@/assets/thi-cong-son-gia-go-cua-sat-moc-dien-129.jpg";
import metalContent from "./kiem-tra-be-mat-truoc-khi-son.md?raw";
import cementContent from "./chon-mau-gia-go-cho-tam-xi-mang.md?raw";
import galvanizedContent from "./son-gia-go-tren-sat-ma-kem-bong-troc.md?raw";
import processContent from "./quy-trinh-thi-cong-son-gia-go-chuyen-nghiep.md?raw";
import fadeContent from "./son-gia-go-ngoai-troi-chay-mau.md?raw";
import pricingContent from "./bao-gia-thi-cong-son-gia-go-gom-nhung-gi.md?raw";
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
    slug: "son-gia-go-tren-sat-ma-kem-bong-troc",
    title: "Sơn giả gỗ trên sắt mạ kẽm hay bong tróc — nguyên nhân và quy trình xử lý nền chuẩn",
    excerpt: "Vì sao nền mạ kẽm dễ làm màng sơn bong, ba lỗi xử lý thường gặp và quy trình chuẩn gồm tẩy dầu, sơn lót chuyên cho kẽm cùng thời gian khô đúng kỹ thuật.",
    category: "Hướng dẫn kỹ thuật",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: galvanizedCover,
    coverAlt: "Cổng biệt thự hoàn thiện sơn giả gỗ trên nền kim loại do Mộc Diện thi công",
    content: galvanizedContent,
    status: "published",
  },
  {
    slug: "quy-trinh-thi-cong-son-gia-go-chuyen-nghiep",
    title: "Quy trình thi công sơn giả gỗ chuyên nghiệp gồm những bước nào?",
    excerpt: "Từ khảo sát nền, xử lý bề mặt, lót pha màu nền đến tạo vân và phủ bóng bảo vệ — các bước một hệ sơn giả gỗ ngoài trời cần có, và câu hỏi nên hỏi trước khi thuê.",
    category: "Hướng dẫn kỹ thuật",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: processCover,
    coverAlt: "Cổng hàng rào sơn giả gỗ do Mộc Diện thi công tại TP.HCM",
    content: processContent,
    status: "published",
  },
  {
    slug: "son-gia-go-ngoai-troi-chay-mau",
    title: "Vì sao sơn giả gỗ ngoài trời hay cháy màu sau 1-2 năm — và cách nhận biết đơn vị dùng đúng hệ sơn",
    excerpt: "Bốn nguyên nhân khiến màu vân phai sớm — sai hệ sơn, thiếu lớp phủ bóng, nền xử lý sai, điều kiện phơi — cùng cách kiểm tra đơn vị thi công trước khi thuê.",
    category: "Kinh nghiệm",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: fadeCover,
    coverAlt: "Công trình sơn giả gỗ ngoài trời do Mộc Diện thi công tại TP.HCM",
    content: fadeContent,
    status: "published",
  },
  {
    slug: "bao-gia-thi-cong-son-gia-go-gom-nhung-gi",
    title: "Báo giá thi công sơn giả gỗ gồm những gì? Giá tham khảo theo m² và cách so sánh đúng",
    excerpt: "Khung giá sơn giả gỗ theo m² cho hạng mục trong nhà và ngoài trời, phần công việc một báo giá đầy đủ phải liệt kê, và vì sao các đơn vị chênh nhau tới 30-40%.",
    category: "Kinh nghiệm",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: pricingCover,
    coverAlt: "Thi công sơn giả gỗ cửa sắt trọn gói do Mộc Diện thực hiện",
    content: pricingContent,
    status: "published",
  },
  {
    slug: "kiem-tra-be-mat-truoc-khi-son-gia-go-kim-loai",
    title: "Trước khi sơn giả gỗ kim loại: cần kiểm tra những gì?",
    excerpt: "Từ lớp sơn cũ, mối hàn đến vị trí đọng nước — những điểm cần xem xét trước khi chọn phương án hoàn thiện cổng và lam sắt.",
    category: "Hướng dẫn kỹ thuật",
    date: "2026-11-01",
    author: "Mộc Diện",
    cover: metalCover,
    coverAlt: "Bề mặt lam kim loại trước khi thi công sơn giả gỗ ngoại thất",
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
    coverAlt: "Chọn màu sơn giả gỗ cho mặt dựng tấm xi măng theo tổng thể kiến trúc",
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