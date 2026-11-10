# SyncSingil Corp. — GitHub + Cloudflare Pages

A responsive front-end prototype based on the supplied borrower and admin dashboard references.

## Demo accounts
- Borrower: `borrower@syncsingil.test` / `borrower123`
- Admin / Worker: `worker@syncsingil.test` / `worker123`

## Run locally
Open `public/index.html` in a browser, or use a local static server.

## Deploy with GitHub and Cloudflare Pages
1. Create a GitHub repository, for example `syncsingil`.
2. Upload the contents of this project. Keep the `public` folder at the repository root.
3. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
4. Select your GitHub repository and authorize access.
5. Configure the build:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `public`
   - Root directory: `/` (default)
6. Click **Save and Deploy**. Cloudflare will provide a `*.pages.dev` URL. Future pushes to the connected branch trigger deployments.

## Important security note
This is a **front-end prototype**, not a production lending system. The sample login checks hard-coded demo credentials in browser JavaScript. The sample loans and submissions are held in page memory and reset on refresh. Do not put real borrower information, passwords, payment receipts, or financial records into this version.

Before real-world use, add a server-side authentication and data layer, for example:
- Cloudflare Workers for API endpoints and server-side authorization.
- Cloudflare D1 for borrower, loan, installment, payment and audit-log records.
- Cloudflare R2 for private receipt uploads, with access controlled by authenticated Worker endpoints.
- Password hashing (never store plain-text passwords), role-based authorization, input validation, rate limiting, secure session cookies, CSRF protections, backups and audit logs.
- Separate permissions for borrowers, workers and administrators. Workers should not automatically receive administrator privileges.

Also review applicable Philippine privacy, lending, consumer-protection and financial regulations before handling real users or money. This prototype does not process payments or connect to GCash/Maya.
