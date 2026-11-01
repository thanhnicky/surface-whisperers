import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ZALO_URL = "https://zalo.me/0914599988";
const PHONE_URL = "tel:0914599988";

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
        <Link to="/" hash="top" aria-label="Trang chủ Mộc Diện">
          <img src="/logo-mocdien.png" alt="Mộc Diện" className="h-9 w-auto md:h-11" />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to="/"
              hash={item.href.slice(1)}
              className="text-[14px] font-medium tracking-wide text-ink/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-accent px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-ink md:inline-flex"
        >
          Gửi ảnh qua Zalo
        </a>
      </div>
    </header>
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
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-[13px] text-ink-soft">
          <p>© {new Date().getFullYear()} Mộc Diện. Sơn giả gỗ chuyên sâu.</p>
          <Button asChild variant="link" className="h-auto p-0 text-ink-soft"><Link to="/blog">Blog · Kinh nghiệm & kỹ thuật</Link></Button>
        </div>
      </div>
    </footer>
  );
}


function MapSection() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-6 py-12 md:px-10 md:py-16">
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.434389108234!2d106.5773316!3d10.8545282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcaf568c71e9e59%3A0xbc3e5ed5c04a5eed!2zTeG7mWMgRGnhu4duIHwgTmjDoCBUaOG6p3UgVGhpIEPDtG5nIFPGoW4gR2nhuqMgR-G7lw!5e0!3m2!1svi!2s!4v1782559699180!5m2!1svi!2s"
            className="h-[300px] w-full md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}


function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar flex md:hidden">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[0.65] flex items-center justify-center bg-accent px-4 text-[14px] font-medium uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-ink"
        aria-label="Gửi ảnh công trình qua Zalo cho Mộc Diện"
      >
        Gửi ảnh qua Zalo
      </a>
      <a
        href={PHONE_URL}
        className="flex-[0.35] flex items-center justify-center bg-secondary px-4 text-[14px] font-medium uppercase tracking-[0.12em] text-secondary-foreground transition-colors hover:bg-ink-soft"
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


export function SiteHeader() { return <Header />; }
export function SiteFooter() {
  const isHome = useRouterState({ select: (state) => state.location.pathname === "/" });
  return <><Footer />{isHome && <MapSection />}<MobileStickyBar /></>;
}
