# cPanel Deployment Guide for Next.js

This project is configured for easy deployment on cPanel using the **Node.js Selector** (Phusion Passenger).

## Prerequisites
- cPanel access with **Setup Node.js App** feature.
- Node.js v18.18.0 or higher.

## Step 1: Prepare the Deployment Build

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the preparation script:
   ```bash
   npm run prepare:cpanel
   ```
   This will create a `deploy` folder containing everything you need to upload.

## Step 2: Upload to cPanel

1. Use File Manager or FTP to upload the contents of the `deploy` folder to your application root (e.g., `/home/username/public_html` or a subdirectory like `/home/username/myapp`).
2. Make sure you include:
   - `server.js`
   - `node_modules/`
   - `.next/`
   - `public/`
   - `.htaccess`
   - `package.json`

## Step 3: Configure Node.js App in cPanel

1. Log in to cPanel and go to **Setup Node.js App**.
2. Click **Create Application**.
3. Set the following:
   - **Node.js version**: 18.x or higher (match your local version).
   - **Application mode**: Production.
   - **Application root**: The path where you uploaded the files (e.g., `myapp`).
   - **Application URL**: Your domain or subdomain.
   - **Application startup file**: `server.js`.
4. Click **Create**.
5. Once created, click **Run JS Build** if needed (usually not necessary if you uploaded the `node_modules`).
6. Click **Restart**.

## Step 4: Environment Variables

If you have environment variables (like Sanity project ID), add them in the **Environment variables** section of the Node.js App configuration in cPanel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Troubleshooting

- **404 for Static Assets**: Ensure the `public` and `.next/static` folders were copied correctly into the app root.
- **Images not showing**: Verify that `sharp` is installed (the preparation script handles this).
- **RTL Issues**: The project uses `next-intl`. Ensure the middleware is running correctly (Node.js App must be active).
