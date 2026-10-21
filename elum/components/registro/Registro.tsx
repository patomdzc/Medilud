/*
 * Elum · Registro — motor de letras y cifras.
 *
 * Todo glifo mide 100 de alto y se corta en 10 franjas. Los brazos y barras
 * horizontales caen sobre la retícula de franjas (0–18.4, 40–58.4, 80–100)
 * para que los cortes sean limpios. Las cifras son tabulares: todas miden 80.
 *
 * `drift` = qué tan fuera de registro está el texto. 0 = nítido (en rango).
 */

type Glyph = { d: string; w: number; transform?: string; evenodd?: boolean };

/* Rectángulo redondeado; `ccw` lo dibuja al revés para que funcione como contraforma. */
function rr(x: number, y: number, w: number, h: number, r: number, ccw = false) {
  if (!ccw)
    return `M${x + r} ${y} H${x + w - r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + h - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + h} H${x + r} A${r} ${r} 0 0 1 ${x} ${y + h - r} V${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z `;
  return `M${x + r} ${y} A${r} ${r} 0 0 0 ${x} ${y + r} V${y + h - r} A${r} ${r} 0 0 0 ${x + r} ${y + h} H${x + w - r} A${r} ${r} 0 0 0 ${x + w} ${y + h - r} V${y + r} A${r} ${r} 0 0 0 ${x + w - r} ${y} Z `;
}

const SIX = "M40 0 H78 V18.4 H40 A15 15 0 0 0 25 33.4 V50 H0 V40 A40 40 0 0 1 40 0 Z " + rr(0, 40, 80, 60, 30) + rr(25, 58.4, 30, 21.6, 10.8, true);

const GLYPHS: Record<string, Glyph> = {
  E: { w: 72, d: "M0 0 H72 V18.4 H26 V40 H64 V58.4 H26 V80 H72 V100 H0 Z" },
  L: { w: 64, d: "M0 0 H26 V80 H64 V100 H0 Z" },
  U: { w: 84, d: "M0 0 H26 V58 A16 16 0 0 0 58 58 V0 H84 V58 A42 42 0 0 1 0 58 Z" },
  M: { w: 104, d: "M0 100 V0 H29 L52 54 L75 0 H104 V100 H79 V44 L61 84 H43 L25 44 V100 Z" },
  "0": { w: 80, d: rr(0, 0, 80, 100, 40) + rr(25, 20, 30, 60, 15, true) },
  "1": { w: 80, d: "M18 0 H62 V100 H36 V20 H18 Z" },
  "2": { w: 80, d: "M0 40 A40 40 0 0 1 80 40 V46 C80 62 64 68 48 74 L38 80 H80 V100 H0 V78 L38 52 C48 46 55 44 55 40 A15 15 0 0 0 25 40 Z" },
  "3": { w: 80, d: "M0 0 H80 V18.4 L58 38 C72 40 80 51 80 66 A34 34 0 0 1 46 100 H0 V80 H46 A14 14 0 0 0 46 52 H24 V38 L44 18.4 H0 Z" },
  "4": { w: 80, evenodd: true, d: "M40 0 H72 V58.4 H80 V80 H72 V100 H46 V80 H0 V58.4 L40 0 Z M46 58.4 V27.7 L25 58.4 Z" },
  "5": { w: 80, d: "M2 0 H78 V18.4 H27 V38 H44 A31 31 0 0 1 44 100 H0 V80 H44 A11 11 0 0 0 44 58 H2 Z" },
  "6": { w: 80, d: SIX },
  "7": { w: 80, d: "M0 0 H80 V18.4 L46 100 H18 L51 18.4 H0 Z" },
  "8": { w: 80, d: rr(5, 0, 70, 48, 24) + rr(28, 18.4, 24, 11, 5.5, true) + rr(0, 40, 80, 60, 30) + rr(25, 58.4, 30, 21.6, 10.8, true) },
  "9": { w: 80, d: SIX, transform: "rotate(180 40 50)" },
  " ": { w: 28, d: "" },
};

const LETTER_GAP = 16;
const DIGIT_GAP = 12;

// Desfase por franja: irregular a propósito, como un registro de imprenta corrido.
export const DRIFT = [0, 7, -5, 12, -9, 4, -14, 8, -4, 2];
const SLICE_H = 10;
const SLICE_GAP = 1.6;

function layout(text: string) {
  let x = 0;
  const items: { g: Glyph; x: number }[] = [];
  [...text].forEach((ch, i) => {
    const g = GLYPHS[ch];
    if (!g) return;
    if (i > 0) x += /\d/.test(ch) ? DIGIT_GAP : LETTER_GAP;
    items.push({ g, x });
    x += g.w;
  });
  return { items, width: x };
}

type Props = {
  id: string;
  text?: string;
  drift?: number;
  className?: string;
  title?: string;
  color?: string;
  /** Anima la entrada: las franjas parten corridas y se alinean. */
  settle?: boolean;
};

export function Registro({ id, text = "ELUM", drift = 0, className, title, color = "currentColor", settle = false }: Props) {
  const { items, width } = layout(text);
  const pad = 18;
  const vb = `${-pad} 0 ${width + pad * 2} 100`;
  return (
    <svg className={className} viewBox={vb} role="img" aria-label={title ?? (text === "ELUM" ? "Elum" : text)}>
      <defs>
        <g id={`${id}-w`} fill={color}>
          {items.map(({ g, x }, i) => (
            <path key={i} d={g.d} fillRule={g.evenodd ? "evenodd" : undefined} transform={`translate(${x} 0) ${g.transform ?? ""}`} />
          ))}
        </g>
        {DRIFT.map((_, i) => (
          <clipPath id={`${id}-s${i}`} key={i}>
            <rect x={-pad - 40} y={i * SLICE_H} width={width + pad * 2 + 80} height={SLICE_H - SLICE_GAP} />
          </clipPath>
        ))}
      </defs>
      {DRIFT.map((dx, i) => (
        <g key={i} clipPath={`url(#${id}-s${i})`}>
          <use
            href={`#${id}-w`}
            className={settle ? "rg-settle" : undefined}
            style={
              settle
                ? ({ ["--from" as string]: `${dx * 2.2}px`, animationDelay: `${i * 45}ms` } as React.CSSProperties)
                : { transform: `translateX(${dx * drift}px)` }
            }
          />
        </g>
      ))}
    </svg>
  );
}

/* Cuánto se corre una cifra según su estado. */
export const DRIFT_BY_STATUS = { in: 0, watch: 0.35, out: 0.9 } as const;
