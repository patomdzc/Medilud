import type { Metadata } from "next";
import { anybody } from "../sketches/fonts";
import "./registro.css";
import { Registro, DRIFT_BY_STATUS } from "@/components/registro/Registro";

export const metadata: Metadata = {
  title: "Registro v2.1 · Elum",
  robots: { index: false, follow: false },
};

type Status = keyof typeof DRIFT_BY_STATUS;
const METRICS: { label: string; value: string; unit: string; ref: string; status: Status }[] = [
  { label: "Costo por hora de cabina", value: "1840", unit: "MXN / h", ref: "ref. 1,100 – 1,500", status: "out" },
  { label: "Nómina sobre ingresos", value: "28", unit: "%", ref: "ref. 25 – 32 %", status: "in" },
  { label: "Ocupación de agenda", value: "71", unit: "%", ref: "ref. 75 – 90 %", status: "watch" },
  { label: "Margen por servicio estrella", value: "46", unit: "%", ref: "ref. 40 – 55 %", status: "in" },
];
const STATUS_LABEL: Record<Status, string> = { in: "En rango", watch: "Mejorable", out: "Fuera de rango" };

const PALETTES = [
  {
    id: "imprenta",
    name: "Imprenta",
    bg: "#FFFFFF",
    ink: "#0B0B0B",
    alert: "#E4007C",
    alertName: "Magenta de registro",
    why: "Es el color de las marcas de registro de una imprenta: aparece justo cuando algo no está alineado. Nadie en salud ni en finanzas lo usa.",
    contrast: "Magenta sobre blanco 4.6:1",
  },
  {
    id: "vial",
    name: "Vial de noche",
    bg: "#0B0B0B",
    ink: "#F2F1EE",
    alert: "#E6E23A",
    alertName: "Amarillo vial",
    why: "Es el líquido de un nivel de burbuja. Sobre negro se lee como un instrumento encendido: serio, preciso y con una sola luz.",
    contrast: "Amarillo sobre negro 14.3:1",
  },
  {
    id: "taller",
    name: "Taller",
    bg: "#F2F1EE",
    ink: "#0B0B0B",
    alert: "#E04A0A",
    alertName: "Naranja de seguridad",
    why: "Es el naranja de las herramientas de medición. Se siente de oficio y de precisión física, no de software. Se usa solo en cifras grandes.",
    contrast: "Naranja sobre gris 3.6:1 (solo cifras ≥ 24 px)",
  },
];

function ReportRows({ idp, alert }: { idp: string; alert?: string }) {
  return (
    <ul className="rg-rows">
      {METRICS.map((m, i) => (
        <li key={m.label}>
          <span className="rg-rows__label">{m.label}</span>
          <span className="rg-rows__value">
            <Registro
              id={`${idp}-m${i}`}
              text={m.value}
              drift={DRIFT_BY_STATUS[m.status]}
              className="rg-rows__num"
              color={m.status === "out" && alert ? alert : "currentColor"}
              title={`${m.value} ${m.unit}`}
            />
            <span className="rg-rows__unit">{m.unit}</span>
          </span>
          <span className="rg-rows__ref">{m.ref}</span>
          <span className={`rg-rows__state rg-rows__state--${m.status}`} style={m.status === "out" && alert ? { color: alert } : undefined}>
            {STATUS_LABEL[m.status]}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Hero({ idp }: { idp: string }) {
  return (
    <div className="rh">
      <header className="rh-nav">
        <Registro id={`${idp}-nav`} className="rh-nav__logo" />
        <nav aria-label="Principal">
          <a href="#">Cómo funciona</a>
          <a href="#">Precios</a>
          <a href="#" className="rh-nav__cta">Score gratis</a>
        </nav>
      </header>
      <h3 className="rh-title">Una agenda llena no siempre es una clínica rentable.</h3>
      <Registro id={`${idp}-big`} settle className="rh-big" title="Elum" />
      <div className="rh-foot">
        <p>Elum ordena los números de tu clínica: qué servicio, qué médico y qué metro cuadrado te deja utilidad.</p>
        <a href="#" className="rh-btn">Calcula tu Elum Score gratis</a>
      </div>
    </div>
  );
}

export default function RegistroPage() {
  return (
    <main className={`rg ${anybody.variable}`}>
      <header className="rg-head">
        <p className="rg-meta">Elum · Registro v2.1 · 21.10.2026</p>
        <Registro id="head" className="rg-head__mark" />
        <p className="rg-lede">
          Una sola idea: <strong>lo que está en rango se ve nítido; lo que no, se ve corrido.</strong> Vale para el
          nombre y vale para cada número del reporte.
        </p>
      </header>

      {/* ── 01 Logo ── */}
      <section className="rg-sec" aria-labelledby="h-logo">
        <div className="rg-sec__head">
          <p className="rg-sec__n">01</p>
          <h2 id="h-logo">Logo</h2>
          <p>
            Ajustes contra el boceto: los brazos de la E y el pie de la L caen ahora exacto sobre la retícula de
            franjas, así que ningún corte deja hilos sueltos. El ícono es la E sola, que conserva la idea a 16 px.
          </p>
        </div>
        <div className="rg-logo-grid">
          <figure className="rg-tile rg-tile--wide">
            <Registro id="logo-pos" className="rg-tile__mark" />
          </figure>
          <figure className="rg-tile rg-tile--wide rg-tile--ink">
            <Registro id="logo-neg" className="rg-tile__mark" color="#F2F1EE" />
          </figure>
          <figure className="rg-tile rg-tile--icons">
            <div className="rg-icons">
              {[96, 48, 32, 16].map((s) => (
                <div key={s} className="rg-icon" style={{ width: s, height: s, borderRadius: s * 0.22 }}>
                  <Registro id={`ico-${s}`} text="E" className="rg-icon__svg" color="#F2F1EE" />
                </div>
              ))}
            </div>
            <figcaption>Ícono: la E sola · 96 · 48 · 32 · 16 px</figcaption>
          </figure>
          <figure className="rg-tile rg-tile--icons">
            <div className="rg-small">
              <Registro id="sm24" className="rg-small__24" />
              <Registro id="sm16" className="rg-small__16" />
            </div>
            <figcaption>Logotipo a 24 y 16 px de alto</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 02 Cifras ── */}
      <section className="rg-sec" aria-labelledby="h-num">
        <div className="rg-sec__head">
          <p className="rg-sec__n">02</p>
          <h2 id="h-num">Las cifras</h2>
          <p>
            Diez dígitos dibujados con la misma construcción que el nombre: mismo peso, mismas franjas, todos del mismo
            ancho para que las columnas del reporte se alineen. El nombre y el Score son el mismo sistema.
          </p>
        </div>
        <figure className="rg-tile rg-tile--digits">
          <Registro id="digits" text="0123456789" className="rg-digits" />
        </figure>
        <div className="rg-states">
          {[
            { d: 0.9, l: "Fuera de rango · la cifra se corre" },
            { d: 0.35, l: "Mejorable · casi en registro" },
            { d: 0, l: "En rango · nítida" },
          ].map((s, i) => (
            <figure key={i} className="rg-tile">
              <Registro id={`st-${i}`} text="64" drift={s.d} className="rg-state__num" />
              <figcaption>{s.l}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── 03 Reporte ── */}
      <section className="rg-sec" aria-labelledby="h-rep">
        <div className="rg-sec__head">
          <p className="rg-sec__n">03</p>
          <h2 id="h-rep">El reporte</h2>
          <p>
            El médico no tiene que leer la etiqueta para saber qué está mal: la cifra corrida salta a la vista antes que
            cualquier palabra, igual que un valor marcado en un estudio.
          </p>
        </div>
        <article className="rg-report">
          <div className="rg-report__score">
            <p className="rg-report__label">Elum Score</p>
            <Registro id="score" text="64" drift={0.3} className="rg-report__num" title="Elum Score 64, ejemplo" />
            <p className="rg-report__of">de 100 · 1 área fuera de rango · 1 mejorable</p>
          </div>
          <ReportRows idp="rep" />
          <p className="rg-note">Datos y referencias de ejemplo.</p>
        </article>
      </section>

      {/* ── 04 Color ── */}
      <section className="rg-sec" aria-labelledby="h-col">
        <div className="rg-sec__head">
          <p className="rg-sec__n">04</p>
          <h2 id="h-col">Color</h2>
          <p>
            <strong>La calma es blanco y negro.</strong> Elum tiene un solo color y solo aparece cuando algo está fuera
            de rango. Cuando todo está en orden, la marca no grita. Tres candidatos para ese único color:
          </p>
        </div>
        <div className="rg-palettes">
          {PALETTES.map((p) => (
            <article key={p.id} className="rg-pal" style={{ background: p.bg, color: p.ink }}>
              <div className="rg-pal__top">
                <Registro id={`pal-${p.id}`} className="rg-pal__logo" />
                <span className="rg-pal__chip" style={{ background: p.alert }} aria-hidden="true" />
              </div>
              <div className="rg-pal__metric">
                <span>Costo por hora de cabina</span>
                <Registro id={`pal-${p.id}-n`} text="1840" drift={0.9} color={p.alert} className="rg-pal__num" />
                <span style={{ color: p.id === "taller" ? p.ink : p.alert }} className="rg-pal__state">
                  Fuera de rango
                </span>
              </div>
              <h3>
                {p.name} <span>· {p.alertName}</span>
              </h3>
              <p>{p.why}</p>
              <p className="rg-pal__contrast">{p.contrast}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 05 Portada ── */}
      <section className="rg-sec" aria-labelledby="h-hero">
        <div className="rg-sec__head">
          <p className="rg-sec__n">05</p>
          <h2 id="h-hero">Portada</h2>
          <p>
            Al cargar, la palabra entra corrida y se alinea en un segundo y medio, sin rebotes. Es la promesa entera de
            Elum en un solo gesto. Si el sistema pide menos movimiento, aparece ya alineada.
          </p>
        </div>
        <div className="rg-frames">
          <figure className="rg-frame">
            <Hero idp="hd" />
            <figcaption>Escritorio</figcaption>
          </figure>
          <figure className="rg-frame rg-frame--mob">
            <Hero idp="hm" />
            <figcaption>375 px</figcaption>
          </figure>
        </div>
      </section>

      <footer className="rg-foot">
        Tipografía de texto provisional (Anybody). Logo y cifras dibujados a mano en SVG. Todas las cifras son de
        ejemplo. · Calm is a number.
      </footer>
    </main>
  );
}
