const fs = require('fs');
const path = require('path');

const root = process.cwd();
const ignoredProtocols = /^(https?:|mailto:|tel:|sms:|javascript:)/i;
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
const missing = [];

function stripUrl(value) {
  return value.split('#')[0].split('?')[0].trim();
}

function isLocalReference(value) {
  if (!value || value.startsWith('#') || value.startsWith('//')) return false;
  return !ignoredProtocols.test(value);
}

function checkReference(fromFile, rawValue) {
  const value = stripUrl(rawValue);
  if (!isLocalReference(value)) return;

  const absolutePath = path.resolve(path.dirname(path.join(root, fromFile)), value);
  if (!absolutePath.startsWith(root)) return;

  if (!fs.existsSync(absolutePath)) {
    missing.push(`${fromFile} -> ${rawValue}`);
  }
}

function scanHtml(file) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const attrPattern = /\b(?:href|src)=["']([^"']+)["']/gi;
  let match;

  while ((match = attrPattern.exec(html)) !== null) {
    checkReference(file, match[1]);
  }
}

function scanCss(file) {
  const cssPath = path.join(root, file);
  if (!fs.existsSync(cssPath)) return;

  const css = fs.readFileSync(cssPath, 'utf8');
  const urlPattern = /url\((?!['"]?data:)(['"]?)([^'")]+)\1\)/gi;
  let match;

  while ((match = urlPattern.exec(css)) !== null) {
    checkReference(file, match[2]);
  }
}

htmlFiles.forEach(scanHtml);
scanCss('css/style.css');

if (missing.length) {
  console.error('Missing local references found:');
  missing.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files and css/style.css. No missing local references found.`);
