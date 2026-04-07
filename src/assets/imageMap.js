// Vite-processed image map.
//
// Image paths stored as plain strings in JSON data files (ebooks.json,
// kdp-books.json, mobile-apps.json) are NOT processed by Vite's bundler, so
// they break in the production build. To fix that, we eagerly import every
// image under `src/assets/images/**` via `import.meta.glob`. Vite transforms
// these into hashed asset URLs at build time, copies them into `dist/assets`,
// and gives us a map keyed by source path.
//
// `resolveImage(path)` takes any path string from JSON, extracts the
// filename, and returns the bundled URL — so the JSON files can stay portable
// and don't need to know the on-disk folder layout.

const imageModules = import.meta.glob(
  './images/**/*.{png,jpg,jpeg,gif,svg,webp,ico}',
  { eager: true, import: 'default' }
);

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const filename = path.split('/').pop();
    return [filename, url];
  })
);

export function resolveImage(path) {
  if (!path) return path;
  const filename = String(path).split('/').pop();
  return imageMap[filename] ?? path;
}
