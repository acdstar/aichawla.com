# AIChawla — aichawla.com

A Jekyll site for GitHub Pages. Bold/dark industrial theme, full-screen nav overlay,
bento-grid homepage, and a `_posts` folder for blogging.

## 1. Put this on GitHub

You mentioned you already have a repo with both a `main` and `master` branch from
an earlier attempt — pick **one** and delete the other to avoid confusion:

```bash
# from inside this folder
git init
git add .
git commit -m "Initial AIChawla Jekyll site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main --force
```

If your existing GitHub repo still has a `master` branch, delete it from
GitHub → your repo → **Branches** → delete `master`, so `main` is the only one.

## 2. Turn on GitHub Pages

1. Go to your repo on GitHub → **Settings → Pages**
2. Under "Build and deployment", set **Source** to **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Save. GitHub will build and give you a URL like `https://<username>.github.io/<repo>/`
   within a minute or two.

No GitHub Actions, no build step required — GitHub Pages runs Jekyll for you
automatically on every push.

## 3. Connect your domain (aichawla.com, registered at Ambition Host)

**On GitHub:**
- Repo → **Settings → Pages → Custom domain** → enter `aichawla.com` → Save
- This repo already includes a `CNAME` file with `aichawla.com` in it, which does the same thing —
  GitHub will pick either up.
- Tick **Enforce HTTPS** once it becomes available (can take a few minutes to an hour after DNS is set).

**On Ambition Host (your domain's DNS):**
Add these records in your domain's DNS management panel:

| Type  | Host/Name | Value                  |
|-------|-----------|-------------------------|
| A     | @         | 185.199.108.153         |
| A     | @         | 185.199.109.153         |
| A     | @         | 185.199.110.153         |
| A     | @         | 185.199.111.153         |
| CNAME | www       | `<your-username>.github.io` |

These four A-record IPs are GitHub Pages' standard servers. DNS changes can take
anywhere from a few minutes to a few hours to propagate.

## 4. Preview locally (optional but recommended)

Requires Ruby installed.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Changes to files auto-rebuild.

## 5. Add a new blog post

Create a file in `_posts/` named exactly:

```
YYYY-MM-DD-your-post-title.md
```

With this at the top:

```yaml
---
title: "Your Post Title"
date: 2026-07-20 09:00:00 +0530
excerpt: "One or two sentences shown in the blog list."
---
```

Write the rest in Markdown below it. Commit and push — that's the entire workflow,
no build tools needed on your end once the repo is set up.

## 6. Things to personalize before launch

- `_config.yml` — set your real `email`, `linkedin_url`, and `twitter_url`
- `about/index.md`, `projects/index.md`, `training/index.md`, `rcai-framework/index.md`,
  `media/index.md`, `book/index.md` — replace all bracketed `[...]` placeholder text
- `contact/index.md` — the contact form posts to Formspree (formspree.io, free tier).
  Sign up, create a form, and replace `YOUR_FORM_ID` in that file with your real form ID —
  GitHub Pages is static hosting and can't process form submissions on its own.
- `assets/images/` — swap the placeholder SVGs (`hero.svg`, `training.svg`, `projects.svg`,
  `rcai.svg`, `media.svg`, `book.svg`, `blog.svg`, `portrait-placeholder.svg`) for your
  real photos. Keep the same filenames and they'll drop right in, or update the paths
  in `index.html` and each page if you rename them.

## File map

```
_config.yml         site settings (title, email, social links)
_layouts/            default.html, home.html, page.html, post.html
_includes/           header.html, nav-overlay.html, footer.html
_posts/              your blog posts live here
assets/css/style.css all site styling
assets/images/       placeholder graphics — swap for real photos
index.html           homepage (hero + bento grid)
about/ projects/ training/ rcai-framework/ media/ book/ blog/ contact/
                     one folder per page, each with an index.md
```
