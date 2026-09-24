import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  'solna-blixt-camp',
  'super-five',
  'super-six',
  'super-eight',
  'super-nine',
  'solna-masterskapen',
];

await copyFile('dist/index.html', 'dist/404.html');

await mkdir(join('dist', 'fortur'), { recursive: true });
await copyFile('dist/index.html', join('dist', 'fortur', 'index.html'));

for (const route of ['information', 'om-oss']) {
  const directory = join('dist', route);
  await mkdir(directory, { recursive: true });
  await copyFile('dist/index.html', join(directory, 'index.html'));
}

for (const route of routes) {
  const directory = join('dist', 'cuper', route);
  await mkdir(directory, { recursive: true });
  await copyFile('dist/index.html', join(directory, 'index.html'));
}
