// Minimal static build: assembles the dependency-free site into dist/.
// GitHub Pages serves the repository root, so dist/ is only used as a CI
// sanity check that every referenced file copies cleanly.
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const entries = [
  'index.html',
  'issues.html',
  'organizations.html',
  'resources.html',
  'styles.css',
  'main.js',
  'images',
];

fs.rmSync(dist, { recursive: true, force: true });
for (const entry of entries) {
  const src = path.join(root, entry);
  const dest = path.join(dist, entry);
  if (!fs.existsSync(src)) throw new Error(`missing build input: ${entry}`);
  fs.cpSync(src, dest, { recursive: true });
}
console.log(`Build complete -> ${dist}`);
