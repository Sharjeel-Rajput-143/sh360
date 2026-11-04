# SH360 landing page

Landing page for ads (Meta / Instagram). Visitors browse Electrical, Plumbing, Cleaning, EV Charger and
Maintenance services; each service has a **Get Quote** button that opens WhatsApp (+92 305 1987143) with the
selected service and its details pre-filled.

Built with Next.js (App Router) + TypeScript. No database or API keys needed.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content

| What | Where |
| --- | --- |
| Brand name, WhatsApp number, phone | `lib/site.ts` |
| Services, categories (tabs) and videos | the `/admin` panel (stored in `data/catalog.json`) |
| Colors, spacing, layout (light + dark theme) | `app/globals.css` |

Service images can be a remote Unsplash URL or your own photo in `public/products/` (e.g. `"/products/elec-1.jpg"`).

## Owner panel (/admin)

Only the owner can log in. Customers never see it. From the panel you can add, edit, delete and re-order:

- **Services** in any category (photo upload or image link),
- **Categories** (these are the site navigation: navbar, hero tabs, category tiles, footer), so a new "Painting" tab appears everywhere with its own services,
- **Videos** (upload to YouTube, paste the link; they show in the "See our work" section).

Data lives in `data/catalog.json` (photos in `data/uploads/`).

### Website name

**Website** in the sidebar (or under **More** on a phone) changes the name shown in the top bar, footer, browser tab, link
previews and the first line of every WhatsApp message. It is saved with the rest of the site data. The logo picture is a file
(`public/` and `app/icon.png`), so it does not change with the name.

### On phones

Phones (up to 760px wide) get a **bottom navigation bar** on both the website and the owner panel, so everything is within
thumb reach. Website: Home, Services (all categories and sections), Search, Saved, WhatsApp. Owner panel: Dashboard, Products,
Categories, Videos, More (Website, Account, View website, Log out). Tablets and desktops keep the top bar / sidebar.

### Login

The owner login is built in (default username `Waqar`, inherited from the template; change it below).
The password is stored only as a hash in `lib/credentials.ts`. Open `/admin` to sign in. The login comes from the first of
these that exists:

1. **A password set from the panel** (saved as hashes in `data/auth.json`). Wins over everything below.
2. `ADMIN_USERNAME` / `ADMIN_PASSWORD` environment variables.
3. The built-in login.

**Important for this repo:** this GitHub repo is public, like the other sites built from this template. Set your own
`ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables in Vercel before going live, and never save a password from the
panel while the repo is public — `data/auth.json` would commit password hashes to a public repo. Env vars keep the login out
of the repo entirely.

Set `SESSION_SECRET` (random text, 32+ characters) in the hosting settings so login cookies can't be forged.

**Change password.** Signed in, open **Account** in the sidebar: enter the current password and a new one (10+ characters).
Other devices are signed out.

**Forgot password.** The login page has a **Forgot password?** link. It asks for the username, the **recovery key** and a new
password. The owner creates the recovery key once from **Account → Recovery key** (it is shown only once, so write it down).
Each recovery key works once; resetting the password shows a fresh one. There is no email step, so a lost password *and* lost
recovery key means someone with hosting access has to reset the login: delete `data/auth.json` (on Vercel: delete it from the
GitHub repo) to go back to the environment variables / built-in login, or set a new password in `ADMIN_PASSWORD`.

### Saving on Vercel

Vercel can't write files, so on Vercel the panel saves by committing `data/catalog.json` to this GitHub repo, which redeploys the site (live about a minute after each save). Add:

| Variable | What |
| --- | --- |
| `GITHUB_TOKEN` | A fine-grained token with **Contents: Read and write** on this repo only |
| `GITHUB_REPO` | Optional. Defaults to `Sharjeel-Rajput-143/sh360` |
| `GITHUB_BRANCH` | Optional, defaults to `main` |

Without them, Vercel shows the panel read-only. Running the site yourself (`npm run dev` / `npm start`) saves straight to the file.


## Ad tips

- Deep link to a category: `https://your-site.com/?tab=electrical` (`electrical`, `plumbing`, `cleaning`, `ev-charger` or `maintenance`).
- `utm_*` / `fbclid` parameters are added to the WhatsApp message as `Came from: ...`.
- If the Meta Pixel is installed, every Get Quote click fires a `Contact` event.

## Deploy on Vercel

Import the repo in Vercel (no settings needed). Optional env var `NEXT_PUBLIC_SITE_URL` = your live URL.

> Saving from the owner panel on Vercel needs the `GITHUB_TOKEN` environment variable (see "Saving on Vercel" above).
