const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const deployDir = path.join(rootDir, 'deploy');

console.log('Preparing cPanel deployment folder...');

// 1. Create/Clear deploy directory
if (fs.existsSync(deployDir)) {
    fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir);

// 2. Copy standalone files
const standaloneDir = path.join(rootDir, '.next', 'standalone');
if (!fs.existsSync(standaloneDir)) {
    console.error('Error: .next/standalone not found. Did you run "npm run build"?');
    process.exit(1);
}

console.log('Copying standalone build...');
copyRecursiveSync(standaloneDir, deployDir);

// 3. Copy static files
console.log('Copying static assets...');
const staticDir = path.join(rootDir, '.next', 'static');
const deployStaticDir = path.join(deployDir, '.next', 'static');
fs.mkdirSync(deployStaticDir, { recursive: true });
copyRecursiveSync(staticDir, deployStaticDir);

const publicDir = path.join(rootDir, 'public');
const deployPublicDir = path.join(deployDir, 'public');
copyRecursiveSync(publicDir, deployPublicDir);

// 4. Copy .htaccess if exists, or create one
const htaccessPath = path.join(rootDir, '.htaccess');
if (fs.existsSync(htaccessPath)) {
    fs.copyFileSync(htaccessPath, path.join(deployDir, '.htaccess'));
} else {
    console.log('Creating default .htaccess...');
    const defaultHtaccess = `
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;
    // Note: Most cPanel Node.js apps don't need .htaccess for basic routing as Passenger handles it,
    // but it's good to have for redirects or custom Apache settings.
    fs.writeFileSync(path.join(deployDir, '.htaccess'), defaultHtaccess);
}

console.log('\nSuccessfully prepared "deploy" folder!');
console.log('Now you can zip the contents of the "deploy" folder and upload it to cPanel.');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}
