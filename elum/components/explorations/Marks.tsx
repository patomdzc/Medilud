/*
 * Elum — exploración de logotipos (Fase 1).
 * Todas las letras están construidas con trazos, no con una fuente.
 * Retícula común: línea base y=64, altura x y=24, ascendente y=0.
 */

type MarkProps = {
  className?: string;
  title?: string;
  ink?: string;
  accent?: string;
};

/* ─────────────────────────────────────────────────────────────
 * A · MEDIDOR — la l es un tubo de nivel; la burbuja se asienta
 * exactamente en la altura x, donde descansa el resto de las letras.
 * Trazo 5, terminales redondas.
 * ──────────────────────────────────────────────────────────── */
export function MarkA({ className, title = "Elum", ink = "currentColor", accent = "#5B6B45" }: MarkProps) {
  return (
    <svg className={className} viewBox="-4 -4 194 74" role="img" aria-label={title}>
      <g fill="none" stroke={ink} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        {/* e */}
        <path d="M0 44.5 H40 A20 20.5 0 1 0 35.4 57.6" />
        {/* l · tubo */}
        <rect x="53.5" y="1.5" width="11" height="62.5" rx="5.5" />
        {/* u */}
        <path d="M78 24 V44 A20 20.5 0 0 0 118 44 M118 24 V64" />
        {/* m */}
        <path d="M130 24 V64 M130 38 A13 13.5 0 0 1 156 38 V64 M156 38 A13 13.5 0 0 1 182 38 V64" />
      </g>
      <circle cx="59" cy="24" r="2.4" fill={accent} />
    </svg>
  );
}

/* Monograma A — el tubo solo, con la burbuja. */
export function MonoA({ className, title = "Elum", ink = "currentColor", accent = "#5B6B45", bubble = 0.5 }: MarkProps & { bubble?: number }) {
  // bubble: 0 (abajo) → 1 (arriba)
  const y = 50 - bubble * 36;
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <rect x="24" y="6" width="16" height="52" rx="8" fill="none" stroke={ink} strokeWidth={5} />
      <circle cx="32" cy={y} r="3.6" fill={accent} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
 * B · INSTRUMENTO — la barra de la e es la línea del nivel y la
 * burbuja se sienta al centro exacto. Terminales rectas: precisión.
 * Trazo 4.5.
 * ──────────────────────────────────────────────────────────── */
export function MarkB({ className, title = "Elum", ink = "currentColor", accent = "#7FD6B4" }: MarkProps) {
  return (
    <svg className={className} viewBox="-3 -2 178 69" role="img" aria-label={title}>
      <g fill="none" stroke={ink} strokeWidth={4.5} strokeLinecap="butt" strokeLinejoin="miter">
        {/* e — el arco, sin barra */}
        <path d="M40 44 A20 20 0 1 0 34.6 57.7" />
        {/* barra-nivel */}
        <path d="M0 44 H40" />
        {/* l */}
        <path d="M53 0 V64" />
        {/* u */}
        <path d="M66 24 V44 A20 20 0 0 0 106 44 M106 24 V64" />
        {/* m */}
        <path d="M118 24 V64 M118 37.5 A13 13.5 0 0 1 144 37.5 V64 M144 37.5 A13 13.5 0 0 1 170 37.5 V64" />
      </g>
      <circle cx="20" cy="44" r="4.6" fill={accent} />
    </svg>
  );
}

/* Monograma B — la e-nivel. */
export function MonoB({ className, title = "Elum", ink = "currentColor", accent = "#7FD6B4" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <g fill="none" stroke={ink} strokeWidth={5.5} strokeLinecap="butt">
        <path d="M51 32 A19 19 0 1 0 45.4 45.4" />
        <path d="M13 32 H51" />
      </g>
      <circle cx="32" cy="32" r="5.6" fill={accent} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
 * C · REPOSO — la u y la m comparten trazo y forman una ola; en el
 * valle de la u descansa un punto: donde una esfera se detiene
 * por sí sola. Equilibrio sin esfuerzo. La l remata en una cola suave.
 * Trazo 4, terminales redondas.
 * ──────────────────────────────────────────────────────────── */
export function MarkC({ className, title = "Elum", ink = "currentColor", accent = "#2F5E55" }: MarkProps) {
  return (
    <svg className={className} viewBox="-3 -3 176 71" role="img" aria-label={title}>
      <g fill="none" stroke={ink} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
        {/* e */}
        <path d="M0 44 H40 A20 20.2 0 1 0 35 57.2" />
        {/* l con cola */}
        <path d="M51 0 V51 A13 13 0 0 0 64 64" />
        {/* u + m en un solo trazo: valle, cresta, cresta */}
        <path d="M74 24 V44 A20 20 0 0 0 114 44 V38 A13 13.5 0 0 1 140 38 V64 M114 44 V64 M140 38 A13 13.5 0 0 1 166 38 V64" />
      </g>
      <circle cx="94" cy="57.3" r="3.4" fill={accent} />
    </svg>
  );
}

/* Monograma C — el cuenco con el punto en reposo. */
export function MonoC({ className, title = "Elum", ink = "currentColor", accent = "#2F5E55" }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label={title}>
      <path d="M14 14 V32 A18 18 0 0 0 50 32 V14" fill="none" stroke={ink} strokeWidth={5.5} strokeLinecap="round" />
      <circle cx="32" cy="41.5" r="5" fill={accent} />
    </svg>
  );
}
