/**
 * Default event frames for Campeonato GCF (Campeonato de Fútbol 2026)
 * SVG vector fallback replicating "Marco Vertical.png" and "Marco Horizontal.png"
 */

export function getVerticalFrameSvg(): string {
  // 1080 x 1920 px (9:16 Vertical Story / Event Format)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="vGcfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00419c" />
      <stop offset="50%" stop-color="#00285d" />
      <stop offset="100%" stop-color="#00142f" />
    </linearGradient>

    <filter id="vShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Transparent upper area for live camera feed -->

  <!-- Bottom Banner -->
  <g id="gcf_vertical_banner" filter="url(#vShadow)">
    <path d="M 0,1520 L 1080,1520 L 1080,1920 L 0,1920 Z" fill="url(#vGcfGrad)" opacity="0.92" />
    <line x1="0" y1="1520" x2="1080" y2="1520" stroke="#6aa6f5" stroke-width="6" />
    <text x="540" y="1675" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="88" fill="#ffffff" text-anchor="middle" letter-spacing="4">CAMPEONATO</text>
    <text x="540" y="1765" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="76" fill="#93bfff" text-anchor="middle" letter-spacing="4">DE FÚTBOL 2026</text>
    <text x="540" y="1845" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="42" fill="#dbeafe" text-anchor="middle" letter-spacing="6">CAMPEONATO GCF</text>
  </g>
</svg>`;
}

export function getHorizontalFrameSvg(): string {
  // 1920 x 1080 px (16:9 Horizontal / Landscape Format)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="hGcfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00419c" />
      <stop offset="50%" stop-color="#00285d" />
      <stop offset="100%" stop-color="#00142f" />
    </linearGradient>

    <filter id="hShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Transparent upper area for camera feed -->

  <!-- Bottom Banner -->
  <g id="gcf_horizontal_banner" filter="url(#hShadow)">
    <path d="M 0,830 L 1920,830 L 1920,1080 L 0,1080 Z" fill="url(#hGcfGrad)" opacity="0.92" />
    <line x1="0" y1="830" x2="1920" y2="830" stroke="#6aa6f5" stroke-width="6" />
    <text x="960" y="935" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="72" fill="#ffffff" text-anchor="middle" letter-spacing="4">CAMPEONATO DE FÚTBOL 2026</text>
    <text x="960" y="1015" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="40" fill="#93bfff" text-anchor="middle" letter-spacing="6">CAMPEONATO GCF</text>
  </g>
</svg>`;
}

export function svgToDataUrl(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}

/**
 * Converts an SVG string or loaded image to a transparent PNG Blob
 */
export async function createPngFromSvg(svgString: string, width: number, height: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas 2D context unavailable'));
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to convert canvas to PNG blob'));
      }, 'image/png');
    };
    img.onerror = err => reject(err);
    img.src = svgToDataUrl(svgString);
  });
}
