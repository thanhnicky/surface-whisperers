import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroSurface from "@/assets/hero-surface.jpg";
import projectIronLouvers from "@/assets/project-iron-louvers.jpg";
import projectCementBoard from "@/assets/project-cement-board.jpg";
import projectWoodPaneling from "@/assets/project-wood-paneling.jpg";
import projectSteelGate from "@/assets/project-steel-gate.jpg";
import projectSlatCeiling from "@/assets/project-slat-ceiling.jpg";
import aestheticSamples from "@/assets/aesthetic-samples.jpg";
import craftHand from "@/assets/craft-hand.jpg";

const ZALO_URL = "https://zalo.me/0000000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Thi Công Hoàn Thiện Bề Mặt — Sơn Gỗ, Sơn Giả Gỗ, Hiệu Ứng Gỗ Trên Sắt" },
      {
        name: "description",
        content:
          "Thi công sơn gỗ, sơn giả gỗ trên tấm xi măng và hiệu ứng gỗ trên sắt cho các công trình có yêu cầu cao về hoàn thiện và thẩm mỹ.",
      },
      { property: "og:title", content: "Studio Thi Công Hoàn Thiện Bề Mặt" },
      {
        property: "og:description",
        content:
          "Sơn gỗ, sơn giả gỗ trên tấm xi măng, hiệu ứng gỗ trên sắt. Gửi ảnh công trình qua Zalo để nhận tư vấn và báo giá.",
      },
      { property: "og:image", content: heroSurface },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroSurface },
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
        <nav className="hidden items-center gap-8 md:flex">
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
          <p className="eyebrow">Studio Thi Công Hoàn Thiện Bề Mặt</p>
          <h1 className="font-display mt-8 text-[clamp(2.6rem,6vw,4.75rem)] font-400 leading-[0.98] text-ink">
            Bề mặt đẹp
            <br />
            bắt đầu từ tay nghề
            <br />
            <span className="italic text-accent">biết nhìn vật liệu.</span>
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Thi công sơn gỗ, sơn giả gỗ trên tấm xi măng và hiệu ứng gỗ trên sắt — cho các công
            trình cần hoàn thiện đúng và đẹp.
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
                Xem hạng mục thi công
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 mt-12 md:col-span-7 md:mt-0">
          <figure className="relative">
            <img
              src={heroSurface}
              alt="Cận cảnh bề mặt gỗ óc chó hoàn thiện dưới ánh sáng chiều"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="eyebrow mt-4 flex items-center justify-between">
              <span>Walnut · Hand-finished</span>
              <span>01 / 06</span>
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
          <p className="eyebrow col-span-12 md:col-span-2">— Cách làm việc</p>
          <p className="font-display col-span-12 mt-4 text-[clamp(1.55rem,3vw,2.5rem)] leading-[1.15] text-ink md:col-span-10 md:mt-0">
            Không làm theo một công thức cho mọi công trình.
            <span className="text-ink-soft"> Mỗi bề mặt được đọc trước khi được sơn.</span>
          </p>
        </div>
        <div className="rule" />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      title: "Sơn gỗ hoàn thiện",
      body: "Cho đồ gỗ nội thất, cửa, lam, vách, trần và các chi tiết hoàn thiện trong nhà ở, showroom, công trình thương mại.",
      image: projectWoodPaneling,
      ratio: "aspect-[3/4]",
    },
    {
      n: "02",
      title: "Sơn giả gỗ trên tấm xi măng",
      body: "Smartboard, conwood, cemboard và các vật liệu thay thế gỗ — xử lý để bề mặt có chiều sâu, vân thật, dùng được ngoài trời.",
      image: projectCementBoard,
      ratio: "aspect-[4/3]",
    },
    {
      n: "03",
      title: "Hiệu ứng gỗ trên sắt",
      body: "Cổng, hàng rào, lam trang trí, kết cấu sắt ngoại thất — tạo bề mặt giống gỗ thật, bám bền, chịu được nắng mưa.",
      image: projectIronLouvers,
      ratio: "aspect-[3/4]",
    },
  ];

  return (
    <section id="hang-muc" className="mt-24 md:mt-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Hạng mục</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink md:col-span-10 md:mt-0">
            Chúng tôi thi công
            <br className="hidden md:block" />
            <span className="text-ink-soft"> ba nhóm bề mặt.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-20 md:mt-24">
          {/* 01 — left image, right text */}
          <div className="col-span-12 md:col-span-5">
            <figure>
              <img
                src={services[0].image}
                alt={services[0].title}
                loading="lazy"
                width={1080}
                height={1440}
                className={`${services[0].ratio} w-full object-cover`}
              />
            </figure>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:flex md:flex-col md:justify-end md:pb-4">
            <p className="font-display text-6xl text-ink-soft md:text-7xl">{services[0].n}</p>
            <h3 className="font-display mt-4 text-3xl text-ink md:text-4xl">{services[0].title}</h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              {services[0].body}
            </p>
          </div>

          {/* 02 — full width image, text below right */}
          <div className="col-span-12">
            <figure>
              <img
                src={services[1].image}
                alt={services[1].title}
                loading="lazy"
                width={1920}
                height={1080}
                className={`${services[1].ratio} w-full object-cover`}
              />
            </figure>
            <div className="mt-8 grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-5 md:col-start-7">
                <p className="font-display text-6xl text-ink-soft md:text-7xl">{services[1].n}</p>
                <h3 className="font-display mt-4 text-3xl text-ink md:text-4xl">
                  {services[1].title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  {services[1].body}
                </p>
              </div>
            </div>
          </div>

          {/* 03 — right image, left text */}
          <div className="col-span-12 md:col-span-6 md:flex md:flex-col md:justify-end md:pb-4">
            <p className="font-display text-6xl text-ink-soft md:text-7xl">{services[2].n}</p>
            <h3 className="font-display mt-4 text-3xl text-ink md:text-4xl">{services[2].title}</h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              {services[2].body}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <figure>
              <img
                src={services[2].image}
                alt={services[2].title}
                loading="lazy"
                width={1080}
                height={1440}
                className={`${services[2].ratio} w-full object-cover`}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const groups = [
    "Chủ đầu tư và chủ nhà có công trình cần hoàn thiện chỉn chu.",
    "Xưởng nội thất cần một đội sơn gỗ làm việc được lâu dài.",
    "Kiến trúc sư, đơn vị thiết kế và nhà thầu cần outsource hạng mục hoàn thiện bề mặt.",
  ];
  return (
    <section className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Dành cho</p>
          <div className="col-span-12 mt-4 md:col-span-10 md:mt-0">
            <ul className="divide-y divide-rule border-y border-rule">
              {groups.map((g, i) => (
                <li key={i} className="flex items-baseline gap-6 py-8 md:gap-10 md:py-12">
                  <span className="font-display text-xl text-ink-soft md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-balance text-[clamp(1.4rem,2.6vw,2.15rem)] leading-[1.2] text-ink">
                    {g}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capability() {
  const principles = [
    "Đọc vật liệu nền trước khi đề xuất hệ sơn.",
    "Chọn quy trình theo điều kiện sử dụng, trong nhà hay ngoài trời.",
    "Xử lý để bề mặt bám đúng, đều màu và giữ được lâu.",
    "Mỗi công trình một phương án — không áp một công thức cho tất cả.",
  ];
  return (
    <section id="nang-luc" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">— Năng lực</p>
            <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,2.85rem)] leading-[1.1] text-ink">
              Năng lực không chỉ
              <br />
              nằm ở thi công.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Cùng một màu sơn, đặt lên gỗ thật, tấm xi măng hay sắt sẽ cho ba kết quả khác nhau.
              Việc của chúng tôi là đọc đúng bề mặt trước khi chọn quy trình.
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

function Aesthetic() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="relative">
        <img
          src={aestheticSamples}
          alt="Các mẫu màu gỗ hoàn thiện xếp trên nền giấy ấm"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-[70vh] max-h-[640px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="mt-16 grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Thẩm mỹ</p>
          <div className="col-span-12 md:col-span-10">
            <blockquote className="font-display text-[clamp(1.75rem,3.6vw,2.85rem)] leading-[1.15] text-ink">
              Một bề mặt đẹp không nằm ở màu sơn.
              <span className="italic text-accent"> Nó nằm ở độ mịn, chiều sâu, độ đều</span> và
              cảm giác vật liệu khi chạm vào.
            </blockquote>
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Với các hạng mục giả gỗ và hiệu ứng gỗ, kỹ thuật là điều kiện cần. Mắt thẩm mỹ là điều
              kiện đủ. Chúng tôi nhận những công trình cần cả hai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    {
      img: projectIronLouvers,
      title: "Lam sắt hiệu ứng gỗ",
      meta: "Mặt tiền biệt thự — Quận 2",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectCementBoard,
      title: "Tấm xi măng giả gỗ",
      meta: "Ngoại thất quán café — Thủ Đức",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
    {
      img: projectSteelGate,
      title: "Cửa sắt hiệu ứng gỗ",
      meta: "Nhà phố — Bình Thạnh",
      ratio: "aspect-[4/3]",
      span: "md:col-span-7",
    },
    {
      img: projectWoodPaneling,
      title: "Vách gỗ phòng khách",
      meta: "Căn hộ duplex",
      ratio: "aspect-[4/5]",
      span: "md:col-span-5",
    },
    {
      img: projectSlatCeiling,
      title: "Trần lam gỗ",
      meta: "Showroom nội thất",
      ratio: "aspect-[4/5]",
      span: "md:col-span-6",
    },
    {
      img: craftHand,
      title: "Xử lý bề mặt thủ công",
      meta: "Xưởng nội thất đối tác",
      ratio: "aspect-[4/5]",
      span: "md:col-span-6",
    },
  ];

  return (
    <section id="du-an" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-8">
          <div>
            <p className="eyebrow">— Dự án</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink">
              Hạng mục thực tế
              <span className="text-ink-soft">.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-ink-soft md:block">
            Một phần các công trình đã thi công cho chủ đầu tư, xưởng nội thất và nhà thầu.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-16">
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
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Gửi ảnh qua Zalo.",
      body: "Ảnh hiện trạng bề mặt và bối cảnh công trình. Càng rõ, tư vấn càng sát.",
    },
    {
      n: "02",
      title: "Đọc hiện trạng.",
      body: "Chúng tôi xem vật liệu nền, tình trạng bề mặt và yêu cầu hoàn thiện.",
    },
    {
      n: "03",
      title: "Báo giá theo hạng mục.",
      body: "Tính theo vật liệu, khối lượng và mức độ hoàn thiện — minh bạch từng phần.",
    },
    {
      n: "04",
      title: "Khảo sát & triển khai.",
      body: "Khi phương án đã thống nhất, đội thi công vào việc theo tiến độ công trình.",
    },
  ];
  return (
    <section id="quy-trinh" className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <p className="eyebrow col-span-12 md:col-span-2">— Quy trình</p>
          <h2 className="font-display col-span-12 mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] text-ink md:col-span-10 md:mt-0">
            Tiếp nhận và báo giá
            <span className="text-ink-soft">.</span>
          </h2>
        </div>

        <div className="mt-16">
          {steps.map((s, i) => (
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
          Mỗi bề mặt một tình trạng. Mỗi vật liệu một quy trình.
          <span className="text-ink-soft">
            {" "}
            Mỗi mức độ hoàn thiện một mức giá khác nhau.
          </span>
        </p>
        <p className="mt-8 text-center text-[15px] leading-relaxed text-ink-soft">
          Xem ảnh trước giúp tư vấn sát với công trình thật và đưa ra báo giá đúng — thay vì một
          con số chung chung.
        </p>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 border-y border-rule py-16 md:py-24">
          <p className="eyebrow col-span-12 md:col-span-2">— Đã phục vụ</p>
          <div className="col-span-12 md:col-span-10">
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.15rem)] leading-[1.25] text-ink">
              Đã thi công cho các xưởng nội thất, đơn vị thiết kế và chủ đầu tư
              <span className="text-ink-soft"> tại TP.HCM và khu vực phía Nam.</span>
            </p>
            <div className="mt-10 grid grid-cols-2 gap-y-4 text-[13px] text-ink-soft md:grid-cols-4">
              <span>Xưởng nội thất</span>
              <span>Đơn vị thiết kế</span>
              <span>Nhà thầu xây dựng</span>
              <span>Chủ đầu tư cá nhân</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Bên bạn có nhận thi công theo ảnh công trình không?",
      a: "Có. Khách gửi ảnh hiện trạng qua Zalo, chúng tôi xem và tư vấn hướng xử lý trước khi báo giá.",
    },
    {
      q: "Có làm trên tấm xi măng, smartboard, conwood không?",
      a: "Có. Đây là một trong ba nhóm hạng mục chính. Quy trình sẽ khác nhau tùy vật liệu và vị trí trong nhà hay ngoài trời.",
    },
    {
      q: "Có thi công hiệu ứng gỗ trên sắt ngoài trời không?",
      a: "Có. Sử dụng hệ sơn phù hợp cho sắt ngoại thất, đảm bảo độ bám và độ bền màu khi chịu nắng mưa.",
    },
    {
      q: "Có nhận công trình nhỏ không?",
      a: "Có. Chúng tôi nhận từ hạng mục nhỏ như cửa, vách, lam đến các công trình lớn hơn — tùy phương án phù hợp.",
    },
    {
      q: "Có làm việc trực tiếp với xưởng nội thất và nhà thầu không?",
      a: "Có. Phối hợp được theo tiến độ và hồ sơ kỹ thuật của đơn vị chủ trì.",
    },
    {
      q: "Khi nào cần khảo sát trực tiếp thay vì xem ảnh?",
      a: "Khi công trình lớn, bề mặt phức tạp, hoặc yêu cầu hoàn thiện cần xem trực tiếp để tư vấn chính xác.",
    },
    {
      q: "Gửi ảnh qua Zalo cần chụp những gì?",
      a: "Ảnh tổng thể bề mặt cần sơn, ảnh cận cảnh tình trạng hiện tại, và nếu có thể, ảnh bối cảnh tổng thể của công trình.",
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
              <span className="text-ink-soft">.</span>
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
            <h2 className="font-display mt-8 text-balance text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink">
              Bắt đầu từ
              <span className="italic text-accent"> hiện trạng thật </span>
              của công trình.
            </h2>
            <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
              Gửi ảnh hạng mục cần sơn qua Zalo — chúng tôi xem, tư vấn quy trình và báo giá sát
              với thực tế. Không cần điền form.
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
                Tư vấn theo hiện trạng · Báo giá sát thực tế
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
              Studio thi công hoàn thiện bề mặt. Sơn gỗ, sơn giả gỗ trên tấm xi măng và hiệu ứng gỗ
              trên sắt.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow">Hạng mục</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink">
              <li>Sơn gỗ hoàn thiện</li>
              <li>Sơn giả gỗ trên tấm xi măng</li>
              <li>Hiệu ứng gỗ trên sắt</li>
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
          <p>© {new Date().getFullYear()} Surface Studio. Hoàn thiện bề mặt.</p>
          <p className="eyebrow">Đọc bề mặt — Chọn quy trình — Hoàn thiện</p>
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
  // Subtle fade-in on scroll for figures
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
        <ForWho />
        <Capability />
        <Aesthetic />
        <Projects />
        <Process />
        <WhyPhoto />
        <Clients />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyZalo />
      <MobileCTABar />
    </div>
  );
}
