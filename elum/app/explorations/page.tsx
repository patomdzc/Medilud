import type { Metadata } from "next";
import { fontVars } from "./fonts";
import "./explorations.css";
import { MarkA, MarkB, MarkC, MonoA, MonoB, MonoC } from "@/components/explorations/Marks";
import { HeroA, HeroB, HeroC, ScoreA, ScoreB, ScoreC } from "@/components/explorations/Directions";

export const metadata: Metadata = {
  title: "Exploraciones de identidad · Elum",
  robots: { index: false, follow: false },
};

type Swatch = { name: string; hex: string; role: string; text: string };
type Direction = {
  id: "a" | "b" | "c";
  letter: string;
  name: string;
  route: string;
  idea: string;
  construction: string;
  why: string;
  Mark: typeof MarkA;
  Mono: typeof MonoA;
  ink: string;
  bg: string;
  accent: string;
  type: { family: string; use: string; reason: string; sample: string; cls: string }[];
  palette: Swatch[];
  Score: () => React.JSX.Element;
};

const DIRECTIONS: Direction[] = [
  {
    id: "a",
    letter: "A",
    name: "Medidor",
    route: "Ruta Mineral · concepto 4 y 6",
    idea: "La clínica como un instrumento de medición que se lee de un vistazo.",
    construction:
      "La l es un tubo de nivel; su burbuja se sienta exactamente en la altura x, la línea donde descansan las demás letras.",
    why: "Es la ruta más táctil y serena: piedra, tinta y un solo acento. La burbuja puede moverse con el Score de cada clínica (logo vivo), así que la marca crece con el producto.",
    Mark: MarkA,
    Mono: MonoA,
    ink: "#1E1F1C",
    bg: "#ECEAE5",
    accent: "#5B6B45",
    type: [
      {
        family: "Familjen Grotesk",
        use: "Titulares y texto",
        reason: "Grotesca con trampas de tinta suaves: suena humana sin ser decorativa. Casi no se usa en LatAm.",
        sample: "Una agenda llena",
        cls: "t-a-display",
      },
      {
        family: "Azeret Mono",
        use: "Cifras y Score",
        reason: "Mono con números tabulares y ligeros. Las cifras se alinean como en un estudio de laboratorio.",
        sample: "64 · $1,840 · 28 %",
        cls: "t-a-num",
      },
    ],
    palette: [
      { name: "Piedra", hex: "#ECEAE5", role: "Fondo. Aire, calma.", text: "#1E1F1C" },
      { name: "Tinta", hex: "#1E1F1C", role: "Texto, logo, botón. 13.8:1", text: "#ECEAE5" },
      { name: "Pizarra", hex: "#5E5C56", role: "Texto secundario, reglas. 5.6:1", text: "#ECEAE5" },
      { name: "Liquen", hex: "#5B6B45", role: "En rango. 4.8:1", text: "#ECEAE5" },
      { name: "Ocre", hex: "#A0521A", role: "Fuera de rango. 4.7:1", text: "#ECEAE5" },
    ],
    Score: ScoreA,
  },
  {
    id: "b",
    letter: "B",
    name: "Instrumento",
    route: "Ruta Nocturno · concepto 5",
    idea: "Un tablero de precisión que se lee de noche, cuando el dueño por fin revisa los números.",
    construction:
      "La barra de la e es la línea del nivel y la burbuja se sienta en su centro exacto. Terminales rectas, como un instrumento.",
    why: "Es la más “producto”: oscura, nítida, con un número central que se quiere mover hacia el centro. Ideal si Elum se va a sentir como app antes que como consultoría.",
    Mark: MarkB,
    Mono: MonoB,
    ink: "#E8EAE6",
    bg: "#0E1113",
    accent: "#7FD6B4",
    type: [
      {
        family: "Geologica",
        use: "Titulares y texto",
        reason: "Sans geométrica con eje de inclinación y cortes técnicos. Precisa sin ser fría; muy poco vista en el sector.",
        sample: "Una agenda llena",
        cls: "t-b-display",
      },
      {
        family: "Fragment Mono",
        use: "Etiquetas y lecturas",
        reason: "Mono de dibujo limpio para lecturas del instrumento. Da el tono de “dato medido”.",
        sample: "COSTO/HORA  $1,840",
        cls: "t-b-num",
      },
    ],
    palette: [
      { name: "Noche", hex: "#0E1113", role: "Fondo.", text: "#E8EAE6" },
      { name: "Grafito", hex: "#1A1F22", role: "Superficies y tarjetas.", text: "#E8EAE6" },
      { name: "Hueso", hex: "#E8EAE6", role: "Texto y logo. 15.7:1", text: "#0E1113" },
      { name: "Menta", hex: "#7FD6B4", role: "En rango y botón. 11:1", text: "#0E1113" },
      { name: "Sodio", hex: "#F2A93B", role: "Fuera de rango. 9.5:1", text: "#0E1113" },
    ],
    Score: ScoreB,
  },
  {
    id: "c",
    letter: "C",
    name: "Reposo",
    route: "Ruta Editorial, ajustada · conceptos 1 y 2",
    idea: "El reporte como una hoja de resultados bien diseñada: se lee con calma, como una revista.",
    construction:
      "La u y la m comparten un trazo y forman una ola; en el valle de la u descansa un punto, donde una esfera se detiene sola.",
    why: "Es la más cálida y editorial. Cambié el caqui por granada para no caer en la mezcla serif + terracota que ya se descartó, y sumé pino para “en rango”.",
    Mark: MarkC,
    Mono: MonoC,
    ink: "#2A1B2E",
    bg: "#EEEAF3",
    accent: "#2F5E55",
    type: [
      {
        family: "Gloock",
        use: "Titulares y Score",
        reason: "Serif de alto contraste con remates cortos; tiene carácter sin ser la serif editorial de siempre.",
        sample: "Una agenda llena",
        cls: "t-c-display",
      },
      {
        family: "Golos Text",
        use: "Texto y tablas",
        reason: "Sans de interfaz muy legible en tamaños chicos y tablas densas. Rara en marcas latinoamericanas.",
        sample: "Costo por hora de cabina",
        cls: "t-c-text",
      },
    ],
    palette: [
      { name: "Niebla", hex: "#EEEAF3", role: "Fondo.", text: "#2A1B2E" },
      { name: "Berenjena", hex: "#2A1B2E", role: "Texto, logo, botón. 13.7:1", text: "#EEEAF3" },
      { name: "Ciruela", hex: "#6B5A72", role: "Texto secundario. 5.3:1", text: "#EEEAF3" },
      { name: "Pino", hex: "#2F5E55", role: "En rango. 6.2:1", text: "#EEEAF3" },
      { name: "Granada", hex: "#A3324A", role: "Fuera de rango. 5.7:1", text: "#EEEAF3" },
    ],
    Score: ScoreC,
  },
];

export default function ExplorationsPage() {
  return (
    <main className={`x ${fontVars}`}>
      <header className="x-head">
        <p className="x-kicker">Elum · Fase 1 · Exploración de identidad</p>
        <h1 className="x-title">Tres direcciones para una marca que da calma con números.</h1>
        <p className="x-lede">
          Cada dirección parte de la misma idea —la burbuja del nivel: cuando está al centro, todo está en equilibrio—
          y la resuelve de forma distinta. Compara fila por fila y elige una para pasar al sistema de logo.
        </p>
        <nav className="x-jump" aria-label="Saltar a">
          <a href="#logos">Logos</a>
          <a href="#tipografia">Tipografía</a>
          <a href="#paleta">Paleta</a>
          <a href="#score">Elum Score</a>
          <a href="#portadas">Portadas</a>
        </nav>
      </header>

      {/* ───── Resumen de cada dirección ───── */}
      <section className="x-row" aria-labelledby="dirs">
        <h2 id="dirs" className="sr-only">Direcciones</h2>
        <div className="x-grid">
          {DIRECTIONS.map((d) => (
            <article key={d.id} className="x-card">
              <p className="x-letter">{d.letter}</p>
              <h3 className="x-name">{d.name}</h3>
              <p className="x-route">{d.route}</p>
              <p className="x-idea">{d.idea}</p>
              <p className="x-why">{d.why}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Logos ───── */}
      <section id="logos" className="x-row" aria-labelledby="logos-h">
        <h2 id="logos-h" className="x-rowtitle">Logo</h2>
        <div className="x-grid">
          {DIRECTIONS.map(({ id, letter, Mark, Mono, ink, bg, accent, construction }) => (
            <article key={id} className="x-cell">
              <p className="x-celltag">{letter}</p>
              <div className="x-logo" style={{ background: bg }}>
                <Mark className="x-logo__mark" ink={ink} accent={accent} />
              </div>
              <div className="x-logo x-logo--inverse" style={{ background: ink }}>
                <Mark className="x-logo__mark" ink={bg} accent={accent} />
              </div>
              <p className="x-construction">
                <strong>Construcción.</strong> {construction}
              </p>
              <div className="x-icons" style={{ ["--ink" as string]: ink, ["--bg" as string]: bg }}>
                <div className="x-icon x-icon--lg" style={{ background: bg }}>
                  <Mono className="x-icon__svg" ink={ink} accent={accent} />
                </div>
                <div className="x-icon x-icon--md" style={{ background: bg }}>
                  <Mono className="x-icon__svg" ink={ink} accent={accent} />
                </div>
                <div className="x-icon x-icon--sm" style={{ background: bg }}>
                  <Mono className="x-icon__svg" ink={ink} accent={accent} />
                </div>
                <div className="x-icon x-icon--xs" style={{ background: bg }}>
                  <Mono className="x-icon__svg" ink={ink} accent={accent} />
                </div>
                <div className="x-wordsmall" style={{ background: bg }}>
                  <Mark className="x-wordsmall__svg" ink={ink} accent={accent} />
                </div>
              </div>
              <p className="x-caption">Ícono a 96, 48, 32 y 16 px · logotipo a 16 px de altura</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Tipografía ───── */}
      <section id="tipografia" className="x-row" aria-labelledby="tipo-h">
        <h2 id="tipo-h" className="x-rowtitle">Tipografía</h2>
        <div className="x-grid">
          {DIRECTIONS.map((d) => (
            <article key={d.id} className="x-cell">
              <p className="x-celltag">{d.letter}</p>
              {d.type.map((t) => (
                <div key={t.family} className="x-type">
                  <p className={`x-type__sample ${t.cls}`}>{t.sample}</p>
                  <p className="x-type__name">
                    {t.family} <span>· {t.use}</span>
                  </p>
                  <p className="x-type__why">{t.reason}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* ───── Paleta ───── */}
      <section id="paleta" className="x-row" aria-labelledby="pal-h">
        <h2 id="pal-h" className="x-rowtitle">Paleta</h2>
        <div className="x-grid">
          {DIRECTIONS.map((d) => (
            <article key={d.id} className="x-cell">
              <p className="x-celltag">{d.letter}</p>
              <ul className="x-swatches">
                {d.palette.map((s) => (
                  <li key={s.hex} className="x-swatch" style={{ background: s.hex, color: s.text }}>
                    <span className="x-swatch__name">{s.name}</span>
                    <span className="x-swatch__hex">{s.hex}</span>
                    <span className="x-swatch__role">{s.role}</span>
                  </li>
                ))}
              </ul>
              <p className="x-caption">Contraste medido contra el fondo principal. Todo texto pasa WCAG AA.</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Score ───── */}
      <section id="score" className="x-row" aria-labelledby="score-h">
        <h2 id="score-h" className="x-rowtitle">Elum Score</h2>
        <div className="x-grid x-grid--score">
          {DIRECTIONS.map(({ id, letter, Score }) => (
            <div key={id} className={`x-cell x-cell--flush dir-${id}`}>
              <p className="x-celltag">{letter}</p>
              <Score />
            </div>
          ))}
        </div>
      </section>

      {/* ───── Portadas ───── */}
      <section id="portadas" className="x-row x-row--wide" aria-labelledby="hero-h">
        <h2 id="hero-h" className="x-rowtitle">Portada de la landing</h2>
        {[
          { id: "a", letter: "A · Medidor", Hero: HeroA },
          { id: "b", letter: "B · Instrumento", Hero: HeroB },
          { id: "c", letter: "C · Reposo", Hero: HeroC },
        ].map(({ id, letter, Hero }) => (
          <div key={id} className={`x-frame dir-${id}`}>
            <p className="x-frame__tag">{letter}</p>
            <Hero />
          </div>
        ))}
      </section>

      <footer className="x-foot">
        <p>
          Datos de ejemplo en todas las piezas. Ninguna cifra es real. · Elum es una marca independiente. · Calm is a
          number.
        </p>
      </footer>
    </main>
  );
}
