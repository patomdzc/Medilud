/*
 * Elum — bocetos v2, en blanco y negro.
 * Tres sistemas de letra dibujados a mano. Ninguno usa una fuente.
 * Altura de mayúscula = 100 en las tres.
 */

type Base = { className?: string; title?: string; color?: string };

/* ═════════════════ 1 · REGISTRO ═════════════════
 * ELUM ancha y pesada, cortada en diez franjas horizontales.
 * Fuera de rango, las franjas se desplazan y la palabra pierde nitidez;
 * en rango, se alinean. El logo es el momento en que todo está en registro.
 */

const REG_LETTERS =
  // E
  "M0 0 H72 V18.4 H26 V40 H64 V58.4 H26 V80 H72 V100 H0 Z " +
  // L
  "M88 0 H114 V80 H152 V100 H88 Z " +
  // U
  "M166 0 H192 V58 A16 16 0 0 0 224 58 V0 H250 V58 A42 42 0 0 1 166 58 Z " +
  // M
  "M266 100 V0 H295 L318 54 L341 0 H370 V100 H345 V44 L327 84 H309 L291 44 V100 Z";

const REG_E = "M0 0 H72 V18.4 H26 V40 H64 V58.4 H26 V80 H72 V100 H0 Z";

// Los brazos de E y L coinciden con la retícula de franjas para que los cortes caigan limpios.
// Patrón de desfase por franja: irregular a propósito, como un registro de imprenta corrido.
const DRIFT = [0, 7, -5, 12, -9, 4, -14, 8, -4, 2];
const SLICES = 10;
const SLICE_H = 10;
const SLICE_GAP = 1.6;

export function RegistroMark({ id, drift = 0, className, title = "Elum", color = "currentColor", glyph = "word" }: Base & { id: string; drift?: number; glyph?: "word" | "e" }) {
  const d = glyph === "word" ? REG_LETTERS : REG_E;
  const w = glyph === "word" ? 370 : 72;
  const pad = 18;
  return (
    <svg className={className} viewBox={`${-pad} 0 ${w + pad * 2} 100`} role="img" aria-label={title}>
      <defs>
        {DRIFT.slice(0, SLICES).map((_, i) => (
          <clipPath id={`${id}-s${i}`} key={i}>
            <rect x={-pad - 20} y={i * SLICE_H} width={w + pad * 2 + 40} height={SLICE_H - SLICE_GAP} />
          </clipPath>
        ))}
      </defs>
      {DRIFT.map((dx, i) => (
        <g key={i} clipPath={`url(#${id}-s${i})`}>
          <path d={d} fill={color} transform={`translate(${dx * drift} 0)`} />
        </g>
      ))}
    </svg>
  );
}

/* ═════════════════ 2 · HORIZONTE ═════════════════
 * ELUM condensada, apoyada sobre una regla larga. La regla es el nivel:
 * el logotipo completo se inclina con la lectura de la clínica y se
 * endereza en 0.0°. La regla siempre sale de la palabra, como un horizonte.
 */

const HOR_LETTERS =
  "M0 0 H46 V17 H17 V41.5 H40 V58.5 H17 V83 H46 V100 H0 Z " +
  "M58 0 H75 V83 H100 V100 H58 Z " +
  "M112 0 H129 V75 A8 8 0 0 0 145 75 V0 H162 V75 A25 25 0 0 1 112 75 Z " +
  "M174 100 V0 H193 L205 52 L217 0 H236 V100 H219 V44 L211 80 H199 L191 44 V100 Z";

export function HorizonteMark({ tilt = 0, rule = 360, className, title = "Elum", color = "currentColor" }: Base & { tilt?: number; rule?: number }) {
  const w = Math.max(rule, 236);
  return (
    <svg className={className} viewBox={`-6 ${-40} ${w + 12} 190`} role="img" aria-label={title} overflow="visible">
      <g transform={`rotate(${-tilt} 0 108)`} fill={color}>
        <path d={HOR_LETTERS} />
        <rect x="0" y="108" width={w} height="4" />
      </g>
    </svg>
  );
}

/* Versión compacta (sin regla larga) para tamaños chicos. */
export function HorizonteMono({ className, title = "Elum", color = "currentColor" }: Base) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <g fill={color}>
        <path d="M16 8 H44 V16 H25 V24 H40 V31 H25 V40 H44 V48 H16 Z" />
        <rect x="8" y="52" width="48" height="4" />
      </g>
    </svg>
  );
}

/* ═════════════════ 3 · VIALES ═════════════════
 * Un solo módulo: el vial (cápsula) de un nivel. Con él se construyen
 * las letras E, L, U, M y los diez dígitos del Score. El nombre y los
 * números son literalmente lo mismo: Calm is a number.
 */

type Seg = [number, number, number, number];
const T = 14;
const SEG: Record<string, Seg> = {
  a: [13, 0, 34, T],
  b: [46, 13, T, 34],
  c: [46, 53, T, 34],
  d: [13, 86, 34, T],
  e: [0, 53, T, 34],
  f: [0, 13, T, 34],
  g: [13, 43, 34, T],
};
const GLYPHS: Record<string, string> = {
  "0": "abcdef",
  "1": "bc",
  "2": "abged",
  "3": "abgcd",
  "4": "fgbc",
  "5": "afgcd",
  "6": "afgedc",
  "7": "abc",
  "8": "abcdefg",
  "9": "abcdfg",
  E: "afged",
  L: "fed",
  U: "fedbc",
};
// La M es la única letra de dos celdas: tres columnas y dos techos.
const M_SEGS: Seg[] = [
  [0, 13, T, 34],
  [0, 53, T, 34],
  [46, 13, T, 34],
  [46, 53, T, 34],
  [92, 13, T, 34],
  [92, 53, T, 34],
  [13, 0, 34, T],
  [59, 0, 34, T],
];
const CELL = 60;
const ADV = 72;

function Capsule({ s, dx, fill, ghost }: { s: Seg; dx: number; fill: string; ghost?: boolean }) {
  const [x, y, w, h] = s;
  return <rect x={x + dx} y={y} width={w} height={h} rx={T / 2} fill={ghost ? "none" : fill} stroke={ghost ? fill : "none"} strokeWidth={ghost ? 1.5 : 0} opacity={ghost ? 0.35 : 1} />;
}

export function VialText({ text, className, title, color = "currentColor", ghosts = false, bubble = false }: Base & { text: string; ghosts?: boolean; bubble?: boolean }) {
  let x = 0;
  const parts: React.ReactNode[] = [];
  for (const [i, ch] of [...text].entries()) {
    if (ch === "M") {
      M_SEGS.forEach((s, k) => parts.push(<Capsule key={`${i}m${k}`} s={s} dx={x} fill={color} />));
      x += 106 + 12;
      continue;
    }
    const on = GLYPHS[ch] ?? "";
    for (const k of Object.keys(SEG)) {
      if (on.includes(k)) parts.push(<Capsule key={`${i}${k}`} s={SEG[k]} dx={x} fill={color} />);
      else if (ghosts) parts.push(<Capsule key={`${i}${k}`} s={SEG[k]} dx={x} fill={color} ghost />);
    }
    if (bubble && ch === "E") {
      // La burbuja vive dentro del vial central de la E, al centro exacto.
      parts.push(<rect key={`${i}bub`} x={x + 24} y={46.5} width={12} height={7} rx={3.5} fill="#fff" />);
    }
    x += ADV;
  }
  const width = x - 12;
  return (
    <svg className={className} viewBox={`0 0 ${width} 100`} role="img" aria-label={title ?? text}>
      {parts}
    </svg>
  );
}

export function VialMono({ className, title = "Elum", color = "currentColor" }: Base) {
  return (
    <svg className={className} viewBox="-14 -10 88 120" role="img" aria-label={title}>
      {"afged".split("").map((k) => {
        const [x, y, w, h] = SEG[k];
        return <rect key={k} x={x} y={y} width={w} height={h} rx={T / 2} fill={color} />;
      })}
      <rect x={24} y={46.5} width={12} height={7} rx={3.5} fill="#fff" />
    </svg>
  );
}

export { CELL };
