# Ziheng Zhu Personal Website

This is the source for <https://ziheng.ac.cn/>, built with Hugo Blox and deployed with GitHub Pages.

## Local Setup

Install the same Hugo Extended version used by CI:

```powershell
# Windows example with Chocolatey
choco install hugo-extended --version=0.136.5
```

Go is required for Hugo modules. The project version is declared in `go.mod`.

## Preview

```powershell
hugo server --gc --disableFastRender
```

Open <http://localhost:1313/> for English and <http://localhost:1313/zh/> for Chinese.

## Build

```powershell
hugo --gc --minify
npx -y pagefind --site public
```

Production builds intentionally do not use `--buildFuture`, so future-dated papers stay out of the public site until their `date` arrives.

## Content Notes

- English content lives in `content/en`; Chinese content lives in `content/zh`.
- Keep publication metadata synchronized across languages, including DOI, authors, `featured_order`, and `projects`.
- Use `projects` only when a publication clearly belongs to an existing project page such as `GISPO`, `CISPO`, or `ERAM`.
- Keep placeholder/template content as `draft: true` or remove it before publishing.
- Large images should be resized before commit. Avatars do not need to exceed about 800 px wide; article cards should generally stay below about 1600 px wide.

## Deployment

GitHub Actions builds from `main` using `.github/workflows/pages.yml`. The workflow copies `web/CNAME` into `public/CNAME` so the deployed site resolves to `ziheng.ac.cn`.
