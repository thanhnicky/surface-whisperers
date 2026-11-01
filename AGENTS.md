# Architecture rules
- Keep Blog posts as typed source metadata plus imported Markdown under `src/content/blog`; this supports the owner's local Windsurf/GitHub publishing workflow without an admin or database.
- Public Blog routes are `/blog` and `/blog/$slug`; use `blog.index.tsx` and `blog.$slug.tsx` with no content parent layout so articles render independently.
- Shared site chrome lives in `src/components/SiteChrome.tsx` and is rendered around the root Outlet; homepage content stays in its existing route and homepage anchors are resolved through the router from other pages.
- Render Markdown with react-markdown and no raw HTML plugin; source content remains readable without introducing arbitrary HTML execution.