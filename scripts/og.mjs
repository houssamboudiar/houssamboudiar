// Renders public/og.png (1200x630) from an inline SVG. Run with `npm run og`
// after changing the name or role; the PNG is committed.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

const grid = Array.from({ length: 38 }, (_, i) => i * 32)
  .map((p) => `<path d="M${p} 0V630M0 ${p}H1200" stroke="#ffffff" stroke-opacity="0.035"/>`)
  .join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0d10"/>
  ${grid}
  <path d="M80 80H1090L1120 110V550H110L80 520Z" fill="#12161b"/>
  <rect x="80" y="80" width="6" height="440" fill="#f5e94a"/>
  <text x="140" y="170" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" letter-spacing="4" fill="#a0a6ad"><tspan fill="#f5e94a">//&#160;</tspan>ALGIERS · OPEN TO EUROPE</text>
  <text x="140" y="300" font-family="'Segoe UI', 'IBM Plex Sans', Arial, sans-serif" font-size="96" font-weight="600" fill="#e8e6df">Houssam Boudiar</text>
  <text x="140" y="380" font-family="'Segoe UI', 'IBM Plex Sans', Arial, sans-serif" font-size="44" fill="#e8e6df">Full-Stack Engineer, AI &amp; LLM Applications</text>
  <text x="140" y="480" font-family="Consolas, 'JetBrains Mono', monospace" font-size="26" fill="#a0a6ad">TypeScript · React · Angular · NestJS · FastAPI · LangGraph</text>
  <rect x="1050" y="456" width="22" height="30" fill="#f5e94a"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`wrote ${out}`);
