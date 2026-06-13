import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroFauxWoodMetal from "@/assets/hero-faux-wood-metal.jpg";
import projectIronLouvers from "@/assets/project-iron-louvers.jpg";
import projectCementBoard from "@/assets/project-cement-board.jpg";
import projectSteelGate from "@/assets/project-steel-gate.jpg";
import projectSlatCeiling from "@/assets/project-slat-ceiling.jpg";
import projectCementFacade from "@/assets/project-cement-facade.jpg";
import craftHand from "@/assets/craft-hand.jpg";

const ZALO_URL = "https://zalo.me/0000000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Surface Studio — Thi công sơn giả gỗ trên kim loại và tấm xi măng",
      },
      {
        name: "description",
        content:
          "Chuyên thi công sơn giả gỗ trên sắt, kim loại và trên tấm xi măng (smartboard, conwood, cemboard) cho công trình ngoại thất và kiến trúc hiện đại. Gửi ảnh công trình qua Zalo để được tư vấn và báo giá.",
      },
      {
        property: "og:title",
        content: "Surface Studio — Sơn giả gỗ cho kim loại & tấm xi măng",
      },
      {
        property: "og:description",
        content:
          "Chuyên một nhóm hạng mục: sơn giả gỗ trên sắt và trên tấm xi măng. Gửi ảnh công trình qua Zalo để được tư vấn và báo giá theo hiện trạng thật.",
      },
      { property: "og:image", content: heroFauxWoodMetal },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroFauxWoodMetal },
    ],
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
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-ink">Surface</span>
          <span className="eyebrow text-ink-soft">Studio</span>
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
          <p className="eyebrow">Chuyên sơn giả gỗ — Kim loại & Tấm xi măng</p>
          <h1 className="font-display mt-8 text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-400 leading-[0.98] text-ink">
            Giả gỗ đúng nghề trên đúng <span className="italic text-accent">vật liệu nền.</span>
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Hiệu ứng gỗ trên kim loại và tấm xi măng — cho cổng, lam, hàng rào, mặt dựng.
            Xử lý nền đúng cách, chọn hệ sơn theo vị trí, kiểm soát độ đều vân giữa các tấm.
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
          <p className="eyebrow col-span-12 md:col-span-2">— Định vị</p>
          <p className="font-display col-span-12 mt-4 text-[clamp(1.55rem,3vw,2.5rem)] leading-[1.15] text-ink md:col-span-10 md:mt-0">
            Tập trung vào hai hệ bề mặt:
            <span className="text-ink-soft">
              {" "}
              kim loại và tấm xi măng. Không nhận tràn ra ngoài hai mảng này.
            </span>
          </p>
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
            Hai mảng thi công
            <span className="text-ink-soft"> chuyên sâu.</span>
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
              Cho sắt, hộp, thép hộp ngoại thất. Xử lý nền chống gỉ, dựng vân và lên màu
              gỗ thật — bám đúng bề mặt kim loại, chịu được nắng mưa.
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
              Smartboard, conwood, cemboard và các tấm thay thế gỗ. Hệ sơn chọn theo vị
              trí trong nhà hay ngoài trời, kiểm soát chiều sâu vân và độ đều giữa các tấm.
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
      t: "Khi hạng mục nằm ngoài trời",
      b: "Gỗ thật ngoài trời nhanh xuống màu và cong vênh. Giả gỗ trên sắt hoặc tấm xi măng giữ được hình thức lâu hơn trong cùng điều kiện thời tiết.",
    },
    {
      n: "02",
      t: "Khi đã có kết cấu sắt hoặc tấm xi măng",
      b: "Không cần đổi vật liệu nền. Giữ nguyên cổng, lam, mặt dựng đang có — chỉ thay phần hoàn thiện để có cảm giác gỗ.",
    },
    {
      n: "03",
      t: "Khi muốn giảm bảo trì",
      b: "Bề mặt sơn ổn định, ít phải làm lại định kỳ như gỗ tự nhiên. Phù hợp công trình cần vận hành lâu dài.",
    },
    {
      n: "04",
      t: "Khi cần đồng đều cho kiến trúc hiện đại",
      b: "Vân và tone gỗ được kiểm soát theo bản vẽ. Các mảng lam, mặt dựng, cổng nhìn ăn nhập với nhau thay vì chênh màu từng tấm.",
    },
  ];

  return (
    <section id="vi-sao" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Khi nào chọn giả gỗ</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(1.9rem,3.8vw,2.85rem)] leading-[1.1] text-ink md:col-span-10 md:mt-0">
            Bốn tình huống công trình
            <span className="text-ink-soft"> hợp với giả gỗ hơn gỗ thật.</span>
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
    "Đọc vật liệu nền — sắt khác với tấm xi măng, và mỗi loại tấm cũng khác nhau.",
    "Xử lý nền đúng cách: chống gỉ cho kim loại, xử lý mép và bề mặt cho tấm xi măng.",
    "Chọn hệ sơn theo vị trí ngoài trời, trong nhà, mức độ tiếp xúc nắng mưa.",
    "Kiểm soát chiều sâu vân và độ đều giữa các tấm — không cố ép một công thức cho mọi công trình.",
  ];
  return (
    <section id="nang-luc" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">— Năng lực</p>
            <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,2.85rem)] leading-[1.1] text-ink">
              Cùng một màu gỗ,
              <br />
              hai vật liệu nền,
              <br />
              <span className="italic text-accent">hai kết quả khác nhau.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Năng lực thật nằm ở chỗ chọn đúng hệ sơn cho từng bề mặt, xử lý nền đến nơi
              và kiểm soát độ hoàn thiện giữa các tấm. Không có một công thức dùng được
              cho mọi công trình.
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

function Projects() {
  const metalItems = [
    {
      img: projectIronLouvers,
      title: "Lam sắt hiệu ứng gỗ",
      meta: "Mặt tiền biệt thự — Quận 2",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectSteelGate,
      title: "Cửa sắt hiệu ứng gỗ",
      meta: "Nhà phố — Bình Thạnh",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
  ];
  const cementItems = [
    {
      img: projectCementFacade,
      title: "Mặt dựng tấm xi măng giả gỗ",
      meta: "Nhà phố hiện đại — Thủ Đức",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
    {
      img: projectCementBoard,
      title: "Conwood ngoại thất quán café",
      meta: "Quán café — Thủ Đức",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectSlatCeiling,
      title: "Lam trần tấm xi măng",
      meta: "Showroom — phía Nam",
      ratio: "aspect-[4/5]",
      span: "md:col-span-6",
    },
    {
      img: craftHand,
      title: "Cận cảnh dựng vân tay",
      meta: "Chi tiết bề mặt hoàn thiện",
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
              Hạng mục đã thi công
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-ink-soft md:block">
            Một phần các công trình đã làm cho chủ đầu tư, nhà thầu và đơn vị thiết kế.
          </p>
        </div>

        {renderGroup(metalItems, "I — Kim loại giả gỗ", "Sắt ngoại thất", 0)}
        {renderGroup(cementItems, "II — Tấm xi măng giả gỗ", "Smartboard · Conwood · Cemboard", metalItems.length)}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Gửi ảnh hạng mục qua Zalo.",
      body: "Ảnh hiện trạng sắt hoặc tấm xi măng cần làm, kèm bối cảnh công trình và tone gỗ mong muốn nếu có.",
    },
    {
      n: "02",
      title: "Đọc vật liệu nền.",
      body: "Xem loại nền, tình trạng bề mặt, vị trí trong nhà hay ngoài trời và mức độ hoàn thiện cần đạt.",
    },
    {
      n: "03",
      title: "Tư vấn hướng làm & báo giá.",
      body: "Đề xuất hệ sơn, quy trình xử lý nền và mức hoàn thiện. Báo giá theo từng hạng mục thực tế.",
    },
    {
      n: "04",
      title: "Khảo sát & triển khai.",
      body: "Khi đã thống nhất phương án, vào việc theo tiến độ công trình — phối hợp được với nhà thầu chủ trì.",
    },
  ];
  return (
    <section id="quy-trinh" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Quy trình</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink md:col-span-10 md:mt-0">
            Từ ảnh công trình đến báo giá
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
        </div>
      </div>
    </section>
  );
}

function WhyPhoto() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="eyebrow text-center">— Vì sao gửi ảnh trước</p>
        <p className="font-display mt-8 text-balance text-center text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.3] text-ink">
          Sắt và tấm xi măng không cùng một quy trình.
          <span className="text-ink-soft">
            {" "}
            Xem ảnh trước giúp đề xuất đúng hệ sơn và báo giá sát công trình thật.
          </span>
        </p>
        <p className="mt-8 text-center text-[15px] leading-relaxed text-ink-soft">
          Không cần điền form. Một vài tấm ảnh hạng mục là đủ để bắt đầu cuộc trao đổi.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Có nhận thi công giả gỗ trên sắt ngoài trời không?",
      a: "Có. Đây là một trong hai mảng chính. Quy trình bao gồm xử lý nền chống gỉ và chọn hệ sơn chịu được nắng mưa dài hạn.",
    },
    {
      q: "Có làm trên smartboard, conwood, cemboard không?",
      a: "Có. Cả ba loại tấm đều nằm trong mảng tấm xi măng. Hệ sơn và cách xử lý mép sẽ khác nhau tùy loại tấm và vị trí sử dụng.",
    },
    {
      q: "Có làm theo ảnh mẫu hoặc tone gỗ khách gửi không?",
      a: "Có. Gửi ảnh tone gỗ tham chiếu qua Zalo, chúng tôi pha mẫu và điều chỉnh cho phù hợp với vật liệu nền của công trình.",
    },
    {
      q: "Có cần khảo sát trực tiếp không hay gửi ảnh là đủ?",
      a: "Phần lớn công trình có thể bắt đầu bằng ảnh. Khi khối lượng lớn hoặc bề mặt phức tạp, sẽ khảo sát trực tiếp trước khi chốt phương án.",
    },
    {
      q: "Có nhận hạng mục nhỏ không?",
      a: "Có. Từ một cánh cổng, vài mảng lam đến mặt dựng nguyên căn. Báo giá tính theo hạng mục cụ thể, không có mức tối thiểu cứng.",
    },
    {
      q: "Làm việc với nhà thầu và kiến trúc sư như thế nào?",
      a: "Phối hợp được theo tiến độ và hồ sơ kỹ thuật của đơn vị chủ trì. Nhận outsource phần hoàn thiện bề mặt cho các mảng kim loại và tấm xi măng.",
    },
    {
      q: "Báo giá phụ thuộc vào những yếu tố nào?",
      a: "Loại vật liệu nền, tình trạng bề mặt, vị trí trong nhà hay ngoài trời, mức độ hoàn thiện vân và tone gỗ, khối lượng tổng. Báo giá tách theo từng phần.",
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
              Câu hỏi thường gặp
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
            <p className="eyebrow">— Bắt đầu</p>
            <h2 className="font-display mt-8 max-w-3xl text-balance text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink">
              Công trình của bạn là <span className="italic text-accent">sắt</span> hay <span className="italic text-accent">tấm xi măng?</span>
            </h2>
            <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
              Gửi ảnh hạng mục cần hoàn thiện hiệu ứng gỗ qua Zalo — chúng tôi xem hiện
              trạng, đề xuất hướng làm và báo giá theo công trình thật.
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
                Đọc hiện trạng · Báo giá theo hạng mục
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
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-ink">Surface</span>
              <span className="eyebrow">Studio</span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Chuyên thi công sơn giả gỗ trên kim loại và trên tấm xi măng cho công
              trình ngoại thất và kiến trúc hiện đại.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow">Hạng mục</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink">
              <li>Sơn giả gỗ trên sắt, kim loại</li>
              <li>Sơn giả gỗ trên tấm xi măng</li>
              <li>Smartboard · Conwood · Cemboard</li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow">Khu vực</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink">
              <li>TP.HCM</li>
              <li>Khu vực phía Nam</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">Liên hệ</p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[14px] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Zalo →
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-[12px] text-ink-soft">
          <p>© {new Date().getFullYear()} Surface Studio. Sơn giả gỗ chuyên sâu.</p>
          <p className="eyebrow">Đọc nền — Chọn hệ sơn — Hoàn thiện</p>
        </div>
      </div>
    </footer>
  );
}

function StickyZalo() {
  return (
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Gửi ảnh qua Zalo"
      className="fixed bottom-6 right-6 z-40 hidden bg-accent px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-foreground shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] transition-colors hover:bg-ink md:inline-flex"
    >
      Gửi ảnh · Zalo
    </a>
  );
}

function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-background/95 backdrop-blur md:hidden">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-accent px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-foreground"
      >
        Gửi ảnh công trình qua Zalo
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
    <div ref={rootRef} className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <PositioningStrip />
        <Services />
        <WhyFauxWood />
        <Capability />
        <Projects />
        <Process />
        <WhyPhoto />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyZalo />
      <MobileCTABar />
    </div>
  );
}
