export type MediaAsset = {
  src: string
  alt: string
}

/**
 * Stock imagery (temporary).
 * Swap these URLs for real WASTiNNOVA project photography when available.
 */
export const media = {
  dashboard: {
    // Analytics / dashboard style (stock)
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    alt: 'Compliance dashboard on a laptop screen',
  },
  gps: {
    // Car dashboard map display (stock)
    src: 'https://source.unsplash.com/EdjqbuY-CH4/1600x1000',
    alt: 'Navigation map display representing GPS visibility',
  },
  controlledFacility: {
    // Industrial facility (stock) — stand-in for controlled treatment infrastructure
    src: 'https://source.unsplash.com/23BRp1we8n0/1600x1000',
    alt: 'Industrial facility representing controlled treatment infrastructure',
  },
  healthcare: {
    // Free nurse image (stock) — stand-in for healthcare environments
    src: 'https://source.unsplash.com/ZRBC7e3mq_g/1600x1000',
    alt: 'Healthcare professional representing clinical environments',
  },
  sterilisation: {
    // Sterile instruments / decontamination equipment (stock)
    src: 'https://source.unsplash.com/1506E0wIoAU/1600x1000',
    alt: 'Sterilisation equipment representing validated protocols',
  },
  recycling: {
    // Tires (stock) — stand-in for rubber recovery workflows
    src: 'https://source.unsplash.com/KEaZffWNhyM/1600x1000',
    alt: 'Recovered tires representing circular economy inputs',
  },
} satisfies Record<string, MediaAsset>

