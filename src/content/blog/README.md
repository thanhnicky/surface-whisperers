# Publishing Blog posts with Windsurf / Devin

Posts live in source control, not a database. No administration interface or login is needed.

## Add an article
1. Create a UTF-8 `.md` file in this folder. Use `##` headings for sections; the page renders the article title as its only H1. Standard Markdown paragraphs, lists, links, quotes and images are supported; raw HTML is not rendered.
2. Import its content using `import content from "./your-file.md?raw"` in `index.ts`.
3. Add one `BlogPost` entry with a unique, permanent lowercase Vietnamese-without-diacritics hyphenated `slug`, title, excerpt, category, actual publication date (`YYYY-MM-DD`), author, imported cover image, descriptive coverAlt, content and status.
4. Use `status: "draft"` while reviewing. Drafts are not linked or readable through the public article route. Source is public: never put confidential information in drafts.
5. Change to `status: "published"` when approved. The listing, category filters, article page, related articles and metadata update automatically. Commit/push through your normal GitHub workflow and redeploy using the hosting workflow.

Categories: `Case study`, `Kinh nghiệm`, `Hướng dẫn kỹ thuật`. Do not fabricate project details, metrics, testimonials or clients. For case studies use approved real project facts and images.

## Images
Add article images to `src/assets` and import cover images in `index.ts`. Markdown body images can use locally served `/blog/...` files in `public/blog` with useful alt text. Do not use local computer paths or external hotlinked images. Bundled relative images are not added to social image metadata.

## Notes
- Keep an existing published slug stable to preserve public URLs.
- SEO title/description and BlogPosting structured data use article metadata automatically.
- The two initial articles are editorial starter content, not claims about completed projects; review technical guidance before publication on your production site.
- No GitHub connection, deployment or automatic publishing setup is performed by this code.