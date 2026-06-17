import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroFauxWoodMetal from "@/assets/hero-faux-wood-metal.jpg";
import projectIronLouvers from "@/assets/project-iron-louvers.jpg";
import projectCementBoard from "@/assets/project-cement-board.jpg";
import projectSteelGate from "@/assets/project-steel-gate.jpg";
import projectSlatCeiling from "@/assets/project-slat-ceiling.jpg";
import projectCementFacade from "@/assets/project-cement-facade.jpg";
import craftHand from "@/assets/craft-hand.jpg";

const ZALO_URL = "https://zalo.me/0914599988";
const PHONE_NUMBER = "0914599988";
const PHONE_URL = `tel:${PHONE_NUMBER}`;

/*
 * FUTURE GEO PAGE SLUG STRUCTURE
 * ===============================
 * Recommended URL structure for location/service landing pages:
 *
 * 1. Contractor + City:
 *    /nha-thau-son-gia-go-tphcm
 *    /nha-thau-son-gia-go-binh-duong
 *    /nha-thau-son-gia-go-dong-nai
 *
 * 2. Service + City:
 *    /son-gia-go-tren-kim-loai-tphcm
 *    /son-gia-go-tren-tam-xi-mang-tphcm
 *    /son-gia-go-cong-sat-tphcm
 *    /son-gia-go-lam-sat-tphcm
 *
 * 3. Metal Faux Wood + City:
 *    /son-gia-go-kim-loai-tphcm
 *    /son-gia-go-sat-tphcm
 *    /cong-sat-gia-go-tphcm
 *    /lam-sat-gia-go-tphcm
 *
 * 4. Cement Board Faux Wood + City:
 *    /son-gia-go-tam-xi-mang-tphcm
 *    /son-gia-go-smartboard-tphcm
 *    /son-gia-go-conwood-tphcm
 *    /son-gia-go-cemboard-tphcm
 *    /mat-dung-tam-xi-mang-gia-go-tphcm
 *
 * Implementation notes:
 * - Use hyphenated Vietnamese slugs for better local SEO
 * - Keep city names consistent (tphcm, binh-duong, dong-nai, etc.)
 * - Link from homepage footer/service section to these pages when created
 * - Add breadcrumb navigation on GEO pages
 * - Include local schema markup on each GEO page
 */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sơn giả gỗ trên kim loại và tấm xi măng | Mộc Diện — Nhà thầu TP.HCM",
      },
      {
        name: "description",
        content:
          "Nhà thầu thi công sơn giả gỗ chuyên sâu trên kim loại và tấm xi măng tại TP.HCM",
      },
      {
        property: "og:title",
        content: "Sơn giả gỗ trên kim loại và tấm xi măng | Mộc Diện TP.HCM",
      },
      {
        property: "og:description",
        content:
          "Mộc Diện chuyên thi công sơn giả gỗ trên sắt và tấm xi măng cho công trình ngoại thất. Phục vụ TP.HCM và các tỉnh lân cận. Gửi ảnh công trình qua Zalo để được tư vấn và báo giá.",
      },
      { property: "og:image", content: heroFauxWoodMetal },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroFauxWoodMetal },
      { name: "geo.region", content: "VN-HCM" },
      { name: "geo.placename", content: "Thành phố Hồ Chí Minh" },
      { rel: "canonical", href: "https://mocdienstudio.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mộc Diện",
          "description": "Chuyên thi công sơn giả gỗ trên kim loại và tấm xi măng cho công trình ngoại thất",
          "url": "https://mocdienstudio.com",
          "telephone": "+84914599888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Đường XTT26-1, Ấp 2, Xã Bà Điểm",
            "addressLocality": "Hóc Môn",
            "addressRegion": "TP.HCM",
            "addressCountry": "VN"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Thành phố Hồ Chí Minh"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Đồng Nai"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Long An"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Bình Dương"
            }
          ],
          "priceRange": "300,000 đ/m2 - 500,000 đ/m2",
          "openingHours": "Mo-Su 08:00-17:00",
          "serviceType": [
            "Sơn giả gỗ trên kim loại",
            "Sơn giả gỗ trên tấm xi măng",
            "Thi công cổng sắt giả gỗ",
            "Thi công lam sắt giả gỗ",
            "Thi công mặt dựng tấm xi măng giả gỗ"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84914599888",
            "contactType": "customer service",
            "areaServed": "VN",
            "availableLanguage": "Vietnamese"
          },
          "sameAs": [
            "https://zalo.me/0914599988"
          ]
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Có đến xem hiện trạng công trình không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Khảo sát trực tiếp khi khối lượng lớn, bề mặt phức tạp, hoặc theo yêu cầu của nhà thầu chủ trì. Phần lớn công trình có thể bắt đầu bằng ảnh hiện trạng."
              }
            },
            {
              "@type": "Question",
              "name": "Có làm theo bản vẽ hoặc mẫu màu gửi không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Nhận bản vẽ, ảnh mẫu hoặc tone gỗ tham chiếu. Pha mẫu và điều chỉnh cho phù hợp với vật liệu nền và yêu cầu kiến trúc của công trình."
              }
            },
            {
              "@type": "Question",
              "name": "Những loại sắt và tấm xi măng nào phù hợp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kim loại: sắt hộp, thép, cổng, lam, hàng rào. Tấm xi măng: smartboard, conwood, cemboard cho lam, mặt dựng, trần, vách trang trí."
              }
            },
            {
              "@type": "Question",
              "name": "Làm việc với nhà thầu chủ trì như thế nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Làm việc theo tiến độ công trình, nhận gia công phần hoàn thiện bề mặt. Phối hợp với các đội thi công khác, bảo vệ công trình trong quá trình làm việc."
              }
            },
            {
              "@type": "Question",
              "name": "Báo giá thay đổi khi hiện trạng khác như thế nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Báo giá dựa trên thông tin hiện trạng ban đầu. Khi hiện trạng thực tế khác, điều chỉnh báo giá theo hạng mục cụ thể trước khi triển khai."
              }
            },
            {
              "@type": "Question",
              "name": "Có nhận hạng mục nhỏ hoặc gia công không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Từ một cánh cổng, vài mảng lam đến mặt dựng nguyên căn. Nhận gia công phần hoàn thiện bề mặt cho nhà thầu chủ trì."
              }
            },
            {
              "@type": "Question",
              "name": "Xử lý nền cho sắt và tấm xi măng khác nhau như thế nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kim loại: xử lý chống gỉ đa lớp. Tấm xi măng: xử lý mép và bề mặt tấm. Hệ sơn chọn theo vị trí ngoài trời, trong nhà, mức độ tiếp xúc nắng mưa."
              }
            }
          ]
        })
      }
    ]
  }),
  component: Index,
});

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#hang-muc", label: "Hạng mục" },
    { href: "#vi-sao", label: "Vì sao giả gỗ" },
    { href: "#nang-luc", label: "Năng lực" },
    { href: "#du-an", label: "Dự án" },
    { href: "#bang-mau", label: "Bảng màu" },
    { href: "#du-toan", label: "Dự toán" },
    { href: "#quy-trinh", label: "Quy trình" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-2 md:px-10 md:py-3">
        <a href="#top">
          <img src="/logo-mocdien.png" alt="Mộc Diện" className="h-9 w-auto md:h-11" />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-ink/80 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-accent px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-ink md:inline-flex"
        >
          Gửi ảnh qua Zalo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36">
      <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-x-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-5 md:pt-16">
          <h1 className="eyebrow">SƠN GIẢ GỖ CHUYÊN SÂU</h1>
          <img src="/logo-mocdien-text.png" alt="Mộc Diện" className="mt-8 w-full max-w-[600px] h-auto" />
          <p className="mt-4 text-[clamp(1.3rem,2.5vw,1.8rem)] font-display leading-[1.1] text-ink-soft">
            Đúng vật liệu — Đúng quy trình — Đúng thẩm mỹ
          </p>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Thi công sơn giả gỗ cho hạng mục kim loại và tấm xi măng. Xử lý nền theo từng loại vật liệu,
            chọn hệ sơn theo vị trí sử dụng, phối hợp tiến độ theo công trình.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent px-7 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-ink"
            >
              Gửi ảnh công trình qua Zalo
            </a>
            <a
              href="#hang-muc"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink"
            >
              <span className="border-b border-ink/40 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                Xem hai mảng thi công
              </span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </a>
          </div>
          <p className="mt-4 text-[13px] text-ink-soft md:hidden">
            Hoặc gọi <a href={PHONE_URL} className="underline decoration-rule underline-offset-2 hover:text-accent hover:decoration-accent transition-colors">0914 59 99 88</a>
          </p>
        </div>

        <div className="col-span-12 mt-12 md:col-span-7 md:mt-0">
          <figure className="relative">
            <img
              src={heroFauxWoodMetal}
              alt="Cận cảnh lam sắt hoàn thiện hiệu ứng gỗ óc chó dưới nắng chiều"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="eyebrow mt-4 flex items-center justify-between">
              <span>Lam sắt · Hiệu ứng gỗ óc chó</span>
              <span>Ngoại thất</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function PositioningStrip() {
  return (
    <section className="mt-28 md:mt-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="rule" />
        <div className="grid grid-cols-12 gap-x-6 py-12 md:py-20">
          <p className="eyebrow col-span-12 md:col-span-2">— Mộc Diện trong công trình</p>
          <div className="col-span-12 mt-4 md:col-span-10 md:mt-0">
            <h2 className="font-display text-[clamp(1.55rem,3vw,2.5rem)] leading-[1.15] text-ink">
              Nhà thầu thi công sơn giả gỗ cho hạng mục kim loại và tấm xi măng
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Mộc Diện làm việc trực tiếp với tổng thầu, chủ đầu tư và đơn vị chủ trì để thi công hoàn thiện giả gỗ cho hạng mục công trình. Phương án thi công được xác định theo loại nền vật liệu, vị trí sử dụng và yêu cầu hoàn thiện cụ thể của từng công trình.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 text-[14px] text-ink md:grid-cols-3">
              <li>• Làm việc trực tiếp theo hạng mục và tiến độ công trình</li>
              <li>• Thi công đúng theo từng loại nền: kim loại và tấm xi măng</li>
              <li>• Phối hợp theo yêu cầu kỹ thuật và hoàn thiện của dự án</li>
            </ul>
          </div>
        </div>
        <div className="rule" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="hang-muc" className="mt-24 md:mt-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Hạng mục</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink md:col-span-10 md:mt-0">
            2 nhóm hạng mục Mộc Diện tập trung thi công.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-24 md:mt-24">
          {/* 01 — Metal */}
          <div className="col-span-12 md:col-span-7">
            <figure>
              <img
                src={projectIronLouvers}
                alt="Lam sắt hiệu ứng gỗ ngoài trời"
                loading="lazy"
                width={1440}
                height={1080}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:flex-col md:justify-end md:pb-2">
            <p className="font-display text-6xl text-ink-soft md:text-7xl">01</p>
            <h3 className="font-display mt-4 text-3xl text-ink md:text-4xl">
              Sơn giả gỗ trên kim loại
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Cho sắt, hộp, thép hộp ngoại thất. Xử lý nền chống gỉ, dựng vân tay, lên màu từng lớp
              để bám đúng bề mặt kim loại và chịu được nắng mưa dài hạn.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-ink">
              <li>Cổng sắt</li>
              <li>Hàng rào</li>
              <li>Lam sắt</li>
              <li>Cửa sắt</li>
              <li>Khung, kết cấu</li>
              <li>Pergola</li>
            </ul>
          </div>

          {/* 02 — Cement board */}
          <div className="col-span-12 md:col-span-5 md:row-start-2 md:flex md:flex-col md:justify-end md:pb-2">
            <p className="font-display text-6xl text-ink-soft md:text-7xl">02</p>
            <h3 className="font-display mt-4 text-3xl text-ink md:text-4xl">
              Sơn giả gỗ trên tấm xi măng
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Smartboard, conwood, cemboard và các tấm thay thế gỗ. Hệ sơn chọn theo vị trí,
              xử lý mép tấm, kiểm soát chiều sâu vân và độ đều giữa các tấm.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-ink">
              <li>Lam ngoài trời</li>
              <li>Mặt dựng</li>
              <li>Trần</li>
              <li>Vách trang trí</li>
              <li>Bảng hiệu</li>
              <li>Mảng nhấn kiến trúc</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-7 md:row-start-2">
            <figure>
              <img
                src={projectCementFacade}
                alt="Mặt dựng tấm xi măng sơn giả gỗ cho công trình ngoại thất"
                loading="lazy"
                width={1440}
                height={1080}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyFauxWood() {
  const reasons = [
    {
      n: "01",
      t: "Hạng mục nằm ngoài trời",
      b: "Gỗ thật ngoài trời nhanh xuống màu và cong vênh. Giả gỗ trên sắt hoặc tấm xi măng giữ được hình thức lâu hơn trong cùng điều kiện thời tiết.",
    },
    {
      n: "02",
      t: "Đã có kết cấu sắt hoặc tấm xi măng",
      b: "Không cần đổi vật liệu nền. Giữ nguyên cổng, lam, mặt dựng đang có — chỉ thay phần hoàn thiện để có cảm giác gỗ.",
    },
    {
      n: "03",
      t: "Muốn giảm bảo trì",
      b: "Bề mặt sơn ổn định, ít phải làm lại định kỳ như gỗ tự nhiên. Phù hợp công trình cần vận hành lâu dài.",
    },
    {
      n: "04",
      t: "Cần đồng đều cho kiến trúc hiện đại",
      b: "Vân và tone gỗ được kiểm soát theo bản vẽ. Các mảng lam, mặt dựng, cổng nhìn ăn nhập với nhau thay vì chênh màu từng tấm.",
    },
  ];

  return (
    <section id="vi-sao" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Khi nào dùng giả gỗ</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(1.9rem,3.8vw,2.85rem)] leading-[1.1] text-ink md:col-span-10 md:mt-0">
            4 trường hợp nên chọn giả gỗ thay vì gỗ thật.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-0 md:mt-20">
          {reasons.map((r, i) => (
            <div
              key={r.n}
              className={`col-span-12 md:col-span-6 border-t border-rule py-10 md:py-12 ${
                i >= 2 ? "md:border-t" : ""
              }`}
            >
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6">
                <span className="font-display text-sm tracking-wider text-ink-soft">{r.n}</span>
                <div>
                  <h3 className="font-display text-[22px] leading-snug text-ink md:text-2xl">
                    {r.t}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                    {r.b}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capability() {
  const principles = [
    "Đọc vật liệu nền — sắt hộp, thép, smartboard, conwood, cemboard: mỗi loại yêu cầu xử lý nền khác nhau.",
    "Xử lý nền theo hiện trạng: chống gỉ đa lớp cho kim loại, xử lý mép và bề mặt cho tấm xi măng.",
    "Chọn hệ sơn theo vị trí: ngoài trời chịu nắng mưa, trong nhà, mức độ tiếp xúc ẩm, vị trí tường.",
    "Kiểm soát độ hoàn thiện: chiều sâu vân, độ đều giữa các tấm, phối hợp màu theo bản vẽ kiến trúc.",
    "Phối hợp tiến độ: làm việc với nhà thầu chủ trì, thi công theo giai đoạn công trình, bảo vệ công trình.",
  ];
  return (
    <section id="nang-luc" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">— Năng lực</p>
            <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,2.85rem)] leading-[1.1] text-ink">
              Thi công theo từng loại nền, <span className="italic text-accent">không làm theo một công thức chung.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Mỗi công trình có hiện trạng khác nhau. Đọc vật liệu nền, xử lý lớp nền đến nơi,
              chọn hệ sơn theo vị trí, phối hợp tiến độ với nhà thầu chủ trì.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ol className="space-y-0">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-rule py-7 last:border-b"
                >
                  <span className="font-display text-sm tracking-wider text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalFoundation() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="rule" />
        <div className="grid grid-cols-12 gap-x-6 py-12 md:py-20">
          <p className="eyebrow col-span-12 md:col-span-2">— Nền tảng kỹ thuật</p>
          <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
            <h2 className="font-display text-[clamp(1.55rem,3vw,2.5rem)] leading-[1.15] text-ink">
              Vật liệu rõ ràng, thi công có cơ sở kỹ thuật
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Mộc Diện sử dụng sơn giả gỗ cao cấp Lotus cho các hạng mục kim loại và tấm xi măng. Trong quá trình thi công, đội ngũ bám theo hướng dẫn kỹ thuật từ chuyên gia Lotus để lựa chọn hệ sơn, xử lý nền và hoàn thiện hiệu ứng phù hợp với từng loại bề mặt.
            </p>
            <img 
              src="/logo-lotus.jpg" 
              alt="Lotus" 
              className="mt-8 h-8 w-auto opacity-60 md:hidden"
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 text-[14px] text-ink md:grid-cols-3">
              <li>• Sử dụng hệ sơn giả gỗ cao cấp Lotus</li>
              <li>• Có hướng dẫn kỹ thuật từ đội ngũ chuyên gia Lotus</li>
              <li>• Thi công theo đúng đặc tính từng loại nền và vị trí sử dụng</li>
            </ul>
          </div>
          <div className="hidden md:col-span-2 md:flex md:items-end md:justify-end md:pb-2">
            <img 
              src="/logo-lotus.jpg" 
              alt="Lotus" 
              className="h-10 w-auto opacity-50"
            />
          </div>
        </div>
        <div className="rule" />
      </div>
    </section>
  );
}

function Projects() {
  const metalItems = [
    {
      img: projectIronLouvers,
      title: "Lam sắt hiệu ứng gỗ",
      meta: "Mặt tiền biệt thự — Quận 2",
      details: "Sắt hộp · Ngoại thất · Hiệu ứng gỗ óc chó",
      cue: "Xử lý chống gỉ đa lớp, phối hợp màu theo kiến trúc mặt tiền",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectSteelGate,
      title: "Cửa sắt hiệu ứng gỗ",
      meta: "Nhà phố — Bình Thạnh",
      details: "Sắt · Ngoại thất · Cổng chính",
      cue: "Công thức sơn chịu nắng mưa, độ bền dài hạn",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
  ];
  const cementItems = [
    {
      img: projectCementFacade,
      title: "Mặt dựng tấm xi măng giả gỗ",
      meta: "Nhà phố hiện đại — Thủ Đức",
      details: "Smartboard · Ngoại thất · Mặt tiền",
      cue: "Xử lý mép tấm, kiểm soát độ đều giữa các panel",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
    {
      img: projectCementBoard,
      title: "Conwood ngoại thất quán café",
      meta: "Quán café — Thủ Đức",
      details: "Conwood · Ngoại thất · Mảng trang trí",
      cue: "Tone gỗ ấm, phù hợp không gian thương mại",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectSlatCeiling,
      title: "Lam trần tấm xi măng",
      meta: "Showroom — phía Nam",
      details: "Cemboard · Trong nhà · Trần",
      cue: "Hệ sơn trong nhà, vân nhẹ và đều",
      ratio: "aspect-[4/5]",
      span: "md:col-span-6",
    },
    {
      img: craftHand,
      title: "Cận cảnh dựng vân tay",
      meta: "Chi tiết bề mặt hoàn thiện",
      details: "Kỹ thuật dựng vân · Kiểm soát độ đều",
      cue: "Dựng vân tay thủ công, kiểm soát độ sâu theo vật liệu",
      ratio: "aspect-[4/5]",
      span: "md:col-span-6",
    },
  ];

  const renderGroup = (
    items: typeof metalItems,
    eyebrow: string,
    title: string,
    startIndex: number,
  ) => (
    <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-16">
      <div className="col-span-12 flex items-baseline justify-between border-t border-rule pt-6">
        <p className="eyebrow">{eyebrow}</p>
        <p className="font-display text-[18px] text-ink md:text-[20px]">{title}</p>
      </div>
      {items.map((it, i) => (
        <figure key={i} className={`group col-span-12 ${it.span}`}>
          <div className="overflow-hidden">
            <img
              src={it.img}
              alt={it.title}
              loading="lazy"
              width={1280}
              height={1600}
              className={`${it.ratio} w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
            />
          </div>
          <figcaption className="mt-5 flex items-baseline justify-between gap-4">
            <div>
              <p className="font-display text-xl text-ink">{it.title}</p>
              <p className="mt-1 text-[13px] text-ink-soft">{it.meta}</p>
              <p className="mt-1 text-[12px] text-ink-soft/70">{it.details}</p>
              <p className="mt-1 text-[12px] text-ink-soft/50 italic">{it.cue}</p>
            </div>
            <span className="eyebrow">{String(startIndex + i + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section id="du-an" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-8">
          <div>
            <p className="eyebrow">— Dự án</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink">
              Các hạng mục đã làm
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-ink-soft md:block">
            Một số hạng mục Mộc Diện đã thực hiện trên kim loại và tấm xi măng.
          </p>
        </div>

        {renderGroup(metalItems, "I — Kim loại giả gỗ", "Sắt ngoại thất", 0)}
        {renderGroup(cementItems, "II — Tấm xi măng giả gỗ", "Smartboard · Conwood · Cemboard", metalItems.length)}
      </div>
    </section>
  );
}

function ColorPalette() {
  const [activeTab, setActiveTab] = useState<"metal" | "cement">("metal");
  const [expanded, setExpanded] = useState(false);

  const metalColors = [
    { name: "Gỗ óc chó đậm", desc: "Tone trầm, hợp lam sắt ngoại thất", image: "https://picsum.photos/seed/mocdien-walnut-dark/400/300" },
    { name: "Gỗ teak ấm", desc: "Vân rõ, hợp cổng và hàng rào", image: "https://picsum.photos/seed/mocdien-teak-warm/400/300" },
    { name: "Gỗ sồi nâu nhạt", desc: "Tông ấm, phù hợp nhà phố hiện đại", image: "https://picsum.photos/seed/mocdien-oak-light/400/300" },
    { name: "Gỗ lim trầm", desc: "Độ tương phản vân vừa phải", image: "https://picsum.photos/seed/mocdien-lim-dark/400/300" },
    { name: "Gỗ cà phê", desc: "Tone trung tính, dễ phối", image: "https://picsum.photos/seed/mocdien-coffee/400/300" },
    { name: "Gỗ cánh gián", desc: "Vân mềm, hợp pergola", image: "https://picsum.photos/seed/mocdien-gian/400/300" },
    { name: "Gỗ nâu đỏ", desc: "Tone ấm, hợp cổng biệt thự", image: "https://picsum.photos/seed/mocdien-red-brown/400/300" },
    { name: "Gỗ mun nhạt", desc: "Độ sâu vân tốt", image: "https://picsum.photos/seed/mocdien-mun-light/400/300" },
    { name: "Gỗ hổ phách", desc: "Tone sáng, hợp hàng rào", image: "https://picsum.photos/seed/mocdien-amber/400/300" },
    { name: "Gỗ walnut ánh xám", desc: "Phong cách hiện đại", image: "https://picsum.photos/seed/mocdien-walnut-grey/400/300" },
  ];

  const cementColors = [
    { name: "Sồi sáng hiện đại", desc: "Hợp mặt dựng và lam ngoài trời", image: "https://picsum.photos/seed/mocdien-cement-oak/400/300" },
    { name: "Teak vàng nhạt", desc: "Tone sáng, hợp mảng nhấn kiến trúc", image: "https://picsum.photos/seed/mocdien-cement-teak/400/300" },
    { name: "Walnut trung tính", desc: "Đều màu, dễ phối tổng thể", image: "https://picsum.photos/seed/mocdien-cement-walnut/400/300" },
    { name: "Nâu hạt dẻ", desc: "Phù hợp phong cách hiện đại tối giản", image: "https://picsum.photos/seed/mocdien-cement-chestnut/400/300" },
    { name: "Gỗ óc chó mềm", desc: "Vân nhẹ, hợp trần", image: "https://picsum.photos/seed/mocdien-cement-walnut-soft/400/300" },
    { name: "Cedar ấm", desc: "Tone ấm, hợp vách trang trí", image: "https://picsum.photos/seed/mocdien-cement-cedar/400/300" },
    { name: "Ash nâu xám", desc: "Phong cách tối giản", image: "https://picsum.photos/seed/mocdien-cement-ash/400/300" },
    { name: "Gỗ mật ong", desc: "Tone vàng ấm", image: "https://picsum.photos/seed/mocdien-cement-honey/400/300" },
    { name: "Nâu đất kiến trúc", desc: "Hợp mặt dựng", image: "https://picsum.photos/seed/mocdien-cement-earth/400/300" },
    { name: "Driftwood xám ấm", desc: "Tone xám ấm, hiện đại", image: "https://picsum.photos/seed/mocdien-cement-driftwood/400/300" },
  ];

  const currentColors = activeTab === "metal" ? metalColors : cementColors;
  const displayColors = expanded ? currentColors : currentColors.slice(0, 6);

  const handleTabChange = (tab: "metal" | "cement") => {
    setActiveTab(tab);
    setExpanded(false);
  };

  return (
    <section id="bang-mau" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Bảng màu</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.05] text-ink">
              Tone màu giả gỗ tiêu biểu
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Cùng một hệ giả gỗ, cảm giác hoàn thiện trên kim loại và tấm xi măng có thể khác nhau theo nền vật liệu, vị trí sử dụng và cách dựng vân. Dưới đây là một số tone tham khảo để dễ hình dung trước khi trao đổi phương án.
            </p>
          </div>
          <div className="col-span-12 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
            <div className="flex gap-4 border-b border-rule pb-4">
              <button
                onClick={() => handleTabChange("metal")}
                className={`px-4 py-2 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                  activeTab === "metal"
                    ? "text-accent border-b-2 border-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Kim loại / sắt
              </button>
              <button
                onClick={() => handleTabChange("cement")}
                className={`px-4 py-2 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                  activeTab === "cement"
                    ? "text-accent border-b-2 border-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Tấm xi măng
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {displayColors.map((color, i) => (
                <figure key={i} className="group">
                  <div className="overflow-hidden bg-secondary/30">
                    <img
                      src={color.image}
                      alt={color.name}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="font-display text-[15px] text-ink">{color.name}</p>
                    <p className="mt-1 text-[12px] text-ink-soft">{color.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            {currentColors.length > 6 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-8 text-[13px] font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {expanded ? "Thu gọn" : "Xem thêm bảng màu"}
              </button>
            )}

            <div className="mt-10 border-t border-rule pt-8">
              <p className="text-[13px] text-ink-soft">
                Gửi ảnh công trình qua Zalo để được tư vấn tone phù hợp với hiện trạng và yêu cầu kiến trúc.
              </p>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[13px] font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Gửi ảnh qua Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CostEstimator() {
  const [environment, setEnvironment] = useState<"indoor" | "outdoor" | "">("");
  const [material, setMaterial] = useState<"metal" | "cement" | "">("");
  const [area, setArea] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const pricingData = {
    indoor: {
      min: 320000,
      max: 370000,
      process: "Sơn 3 lớp",
      layers: "1 lớp lót + 2 lớp phủ vân gỗ",
    },
    outdoor: {
      min: 400000,
      max: 460000,
      process: "Sơn 4 lớp",
      layers: "1 lớp lót + 2 lớp phủ vân gỗ + 1 lớp phủ trong suốt bảo vệ",
    },
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN").format(amount);
  };

  const handleCalculate = () => {
    if (environment && material && area && parseFloat(area) > 0) {
      setShowResult(true);
    }
  };

  const currentPricing = environment ? pricingData[environment] : null;
  const areaNum = parseFloat(area) || 0;
  const minTotal = currentPricing ? areaNum * currentPricing.min : 0;
  const maxTotal = currentPricing ? areaNum * currentPricing.max : 0;

  return (
    <section id="du-toan" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Dự toán sơ bộ</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.05] text-ink">
              Ước tính chi phí cho hạng mục của bạn
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Chọn môi trường sử dụng và nhập diện tích để tham khảo khoảng ngân sách thường gặp trước khi gửi ảnh hiện trạng.
            </p>
          </div>
          <div className="col-span-12 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-medium text-ink mb-2">
                  Môi trường sử dụng
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setEnvironment("indoor"); setShowResult(false); }}
                    className={`px-4 py-3 text-[13px] font-medium border transition-colors ${
                      environment === "indoor"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-rule text-ink-soft hover:border-ink/40"
                    }`}
                  >
                    Trong nhà
                  </button>
                  <button
                    type="button"
                    onClick={() => { setEnvironment("outdoor"); setShowResult(false); }}
                    className={`px-4 py-3 text-[13px] font-medium border transition-colors ${
                      environment === "outdoor"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-rule text-ink-soft hover:border-ink/40"
                    }`}
                  >
                    Ngoài trời
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-2">
                  Loại hạng mục
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setMaterial("metal"); setShowResult(false); }}
                    className={`px-4 py-3 text-[13px] font-medium border transition-colors ${
                      material === "metal"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-rule text-ink-soft hover:border-ink/40"
                    }`}
                  >
                    Kim loại / sắt
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMaterial("cement"); setShowResult(false); }}
                    className={`px-4 py-3 text-[13px] font-medium border transition-colors ${
                      material === "cement"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-rule text-ink-soft hover:border-ink/40"
                    }`}
                  >
                    Tấm xi măng
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-2">
                  Diện tích cần thi công (m²)
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => { setArea(e.target.value); setShowResult(false); }}
                  placeholder="25"
                  min="1"
                  step="0.1"
                  className="w-full px-4 py-3 text-[15px] border border-rule bg-background text-ink placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition-colors"
                />
                <p className="mt-2 text-[12px] text-ink-soft">
                  Nếu chưa có số chính xác, hãy nhập diện tích ước lượng.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                disabled={!environment || !material || !area || parseFloat(area) <= 0}
                className="w-full px-6 py-4 text-[13px] font-medium uppercase tracking-[0.1em] bg-accent text-accent-foreground transition-colors hover:bg-ink disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Xem dự toán sơ bộ
              </button>

              {showResult && currentPricing && (
                <div className="mt-8 border-t border-rule pt-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.1em] text-ink-soft">
                          Quy trình áp dụng
                        </p>
                        <p className="mt-1 text-[15px] text-ink">{currentPricing.process}</p>
                        <p className="mt-1 text-[13px] text-ink-soft">{currentPricing.layers}</p>
                      </div>
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.1em] text-ink-soft">
                          Diện tích
                        </p>
                        <p className="mt-1 text-[15px] text-ink">{areaNum} m²</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-rule">
                      <p className="text-[12px] uppercase tracking-[0.1em] text-ink-soft">
                        Khoảng chi phí tham khảo
                      </p>
                      <p className="mt-3 font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] text-accent">
                        {formatCurrency(minTotal)} – {formatCurrency(maxTotal)} đ
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-[13px] text-ink-soft leading-relaxed">
                        Kết quả trên dùng để tham khảo ban đầu. Chi phí thực tế có thể thay đổi theo hiện trạng nền, độ khó bề mặt, tone màu và khối lượng cụ thể. Mộc Diện sẽ xem ảnh để đề xuất đúng phương án và báo giá sát thực tế hơn.
                      </p>
                    </div>

                    <div className="pt-4">
                      <a
                        href={ZALO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-accent px-6 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-ink"
                      >
                        Gửi ảnh công trình để chốt phương án
                      </a>
                      <p className="mt-3 text-[13px] text-ink-soft">
                        Chỉ cần vài ảnh hiện trạng, Mộc Diện sẽ xem và tư vấn hướng làm phù hợp.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Tiếp nhận hồ sơ hoặc ảnh hiện trạng",
      body: "Ảnh hạng mục, bản vẽ hoặc thông tin hiện trạng vật liệu nền. Khảo sát trực tiếp khi khối lượng lớn hoặc bề mặt phức tạp.",
    },
    {
      n: "02",
      title: "Xem loại nền và vị trí thi công",
      body: "Xác định loại nền (sắt, thép, smartboard, conwood, cemboard), tình trạng bề mặt, vị trí trong nhà hay ngoài trời.",
    },
    {
      n: "03",
      title: "Đề xuất phương án và làm mẫu",
      body: "Chọn hệ sơn theo vị trí, pha mẫu tone gỗ, điều chỉnh cho phù hợp với vật liệu nền và yêu cầu kiến trúc.",
    },
    {
      n: "04",
      title: "Báo giá và thống nhất tiến độ",
      body: "Báo giá theo hạng mục cụ thể. Phối hợp với nhà thầu chủ trì, thi công theo giai đoạn công trình.",
    },
    {
      n: "05",
      title: "Thi công và bàn giao",
      body: "Xử lý nền, dựng vân tay, hoàn thiện từng lớp. Bảo vệ công trình, bàn giao theo tiến độ thống nhất.",
    },
  ];
  return (
    <section id="quy-trinh" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Quy trình</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink md:col-span-10 md:mt-0">
            Từ tiếp nhận hạng mục đến bàn giao
          </h2>
        </div>

        <div className="mt-16">
          {steps.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-x-6 border-t border-rule py-10 last:border-b md:py-14"
            >
              <p className="font-display col-span-12 text-5xl text-ink-soft md:col-span-3 md:text-7xl">
                {s.n}
              </p>
              <h3 className="font-display col-span-12 mt-3 text-2xl text-ink md:col-span-4 md:mt-0 md:text-3xl">
                {s.title}
              </h3>
              <p className="col-span-12 mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft md:col-span-5 md:mt-0">
                {s.body}
              </p>
            </div>
          ))}
          <div className="mt-12 border-t border-rule pt-8">
            <p className="text-[14px] tracking-[0.05em]" style={{ color: "#96774C" }}>
              Thi công hoàn thành — bề mặt được bảo hành 5 năm cho bong tróc và phai màu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyPhoto() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="eyebrow text-center">— Vì sao cần gửi ảnh</p>
        <p className="font-display mt-8 text-balance text-center text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.3] text-ink">
          Sắt và tấm xi măng không cùng một quy trình.
          <span className="text-ink-soft">
            {" "}
            Xem ảnh trước giúp đề xuất đúng hệ sơn và báo giá sát hiện trạng.
          </span>
        </p>
        <p className="mt-8 text-center text-[15px] leading-relaxed text-ink-soft">
          Không cần điền form. Chỉ cần vài ảnh hiện trạng là có thể bắt đầu trao đổi phương án.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Có đến xem hiện trạng công trình không?",
      a: "Có. Khảo sát trực tiếp khi khối lượng lớn, bề mặt phức tạp, hoặc theo yêu cầu của nhà thầu chủ trì. Phần lớn công trình có thể bắt đầu bằng ảnh hiện trạng.",
    },
    {
      q: "Có làm theo bản vẽ hoặc mẫu màu gửi không?",
      a: "Có. Nhận bản vẽ, ảnh mẫu hoặc tone gỗ tham chiếu. Pha mẫu và điều chỉnh cho phù hợp với vật liệu nền và yêu cầu kiến trúc của công trình.",
    },
    {
      q: "Những loại sắt và tấm xi măng nào phù hợp?",
      a: "Kim loại: sắt hộp, thép, cổng, lam, hàng rào. Tấm xi măng: smartboard, conwood, cemboard cho lam, mặt dựng, trần, vách trang trí.",
    },
    {
      q: "Làm việc với nhà thầu chủ trì như thế nào?",
      a: "Làm việc theo tiến độ công trình, nhận gia công phần hoàn thiện bề mặt. Phối hợp với các đội thi công khác, bảo vệ công trình trong quá trình làm việc.",
    },
    {
      q: "Báo giá thay đổi khi hiện trạng khác như thế nào?",
      a: "Báo giá dựa trên thông tin hiện trạng ban đầu. Khi hiện trạng thực tế khác, điều chỉnh báo giá theo hạng mục cụ thể trước khi triển khai.",
    },
    {
      q: "Có nhận hạng mục nhỏ hoặc gia công không?",
      a: "Có. Từ một cánh cổng, vài mảng lam đến mặt dựng nguyên căn. Nhận gia công phần hoàn thiện bề mặt cho nhà thầu chủ trì.",
    },
    {
      q: "Xử lý nền cho sắt và tấm xi măng khác nhau như thế nào?",
      a: "Kim loại: xử lý chống gỉ đa lớp. Tấm xi măng: xử lý mép và bề mặt tấm. Hệ sơn chọn theo vị trí ngoài trời, trong nhà, mức độ tiếp xúc nắng mưa.",
    },
    {
      q: "Có bảo hành sau khi thi công không?",
      a: "Có. Mộc Diện bảo hành 5 năm cho bong tróc và phai màu với hạng mục được thi công đúng quy trình — từ xử lý nền đến lớp hoàn thiện cuối. Điều kiện cụ thể được xác nhận theo từng hạng mục trước khi thi công.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— FAQ</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.05] text-ink">
              Thắc mắc thường gặp
            </h2>
          </div>
          <div className="col-span-12 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
            <ul className="border-t border-rule">
              {items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <li key={i} className="border-b border-rule">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-[18px] text-ink md:text-[20px]">
                        {it.q}
                      </span>
                      <span
                        className={`shrink-0 text-2xl text-ink-soft transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-accent" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mt-32 md:mt-48">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 border-t border-rule pt-24 md:pt-32">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <p className="eyebrow">— Liên hệ</p>
            <h2 className="font-display mt-8 max-w-3xl text-balance text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink">
              Hạng mục của bạn là kim loại hay tấm xi măng?
            </h2>
            <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
              Chỉ cần gửi vài ảnh hiện trạng qua Zalo — chúng tôi xem và trao đổi hướng làm ngay.
            </p>
            <p className="mt-8 text-[14px] tracking-[0.05em]" style={{ color: "#96774C" }}>
              Thi công đúng quy trình — bảo hành 5 năm cho bong tróc và phai màu.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent px-8 py-5 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-ink"
              >
                Gửi ảnh qua Zalo
              </a>
              <p className="text-[13px] text-ink-soft">
                Xem hiện trạng · Báo giá theo hạng mục
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-rule pt-16 pb-12 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <img src="/logo-mocdien.png" alt="Mộc Diện" className="h-14 w-auto" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Mộc Diện là nhà thầu thi công sơn giả gỗ trên kim loại và tấm xi măng cho công trình.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow">Hạng mục</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink">
              <li>Sơn giả gỗ kim loại</li>
              <li>Sơn giả gỗ tấm xi măng</li>
              <li>Smartboard · Conwood · Cemboard</li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow">Khu vực</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink">
              <li>TP.HCM</li>
              <li>Và các tỉnh lân cận</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">Liên hệ</p>
            <div className="mt-5 space-y-3">
              <p className="text-[14px] text-ink">
                Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM
              </p>
              <a
                href={PHONE_URL}
                className="block text-[14px] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                0914 59 99 88
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Zalo
              </a>
              <a
                href="https://mocdienstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                mocdienstudio.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-[12px] text-ink-soft">
          <p>© {new Date().getFullYear()} Mộc Diện. Sơn giả gỗ chuyên sâu.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar flex md:hidden">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[0.65] flex items-center justify-center bg-accent px-4 text-[13px] font-medium uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-ink"
        aria-label="Gửi ảnh công trình qua Zalo cho Mộc Diện"
      >
        Gửi ảnh qua Zalo
      </a>
      <a
        href={PHONE_URL}
        className="flex-[0.35] flex items-center justify-center bg-secondary px-4 text-[13px] font-medium uppercase tracking-[0.12em] text-secondary-foreground transition-colors hover:bg-ink-soft"
        aria-label="Gọi Mộc Diện qua số 0914 59 99 88"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Gọi ngay
      </a>
    </div>
  );
}

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>("figure, blockquote");
    if (!els) return;
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition = "opacity 700ms ease, transform 700ms ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-background">
      <Header />
      <main className="mobile-bottom-padding">
        <Hero />
        <PositioningStrip />
        <Services />
        <WhyFauxWood />
        <Capability />
        <TechnicalFoundation />
        <Projects />
        <ColorPalette />
        <CostEstimator />
        <Process />
        <WhyPhoto />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
