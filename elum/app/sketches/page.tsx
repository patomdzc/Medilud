import type { Metadata } from "next";
import { sketchFonts } from "./fonts";
import "./sketches.css";
import { HorizonteMark, HorizonteMono, RegistroMark, VialMono, VialText } from "@/components/sketches/Marks";
import { HorizontePage, RegistroPage, VialesPage } from "@/components/sketches/Compositions";

export const metadata: Metadata = {
  title: "Bocetos v2 · Elum",
  robots: { index: false, follow: false },
};

function Sizes({ children }: { children: (cls: string) => React.ReactNode }) {
  return (
    <div className="sk-sizes">
      {["sk-i96", "sk-i48", "sk-i32", "sk-i16"].map((c) => (
        <div key={c} className={`sk-icon ${c}`}>
          {children("sk-icon__svg")}
        </div>
      ))}
      <p className="sk-note">96 · 48 · 32 · 16 px</p>
    </div>
  );
}

export default function SketchesPage() {
  return (
    <main className={`sk ${sketchFonts}`}>
      <header className="sk-head">
        <p className="sk-meta">Elum · bocetos v2 · blanco y negro · 21.10.2026</p>
        <h1>Tres ideas. Sin color, sin tipografía final.</h1>
        <p className="sk-lede">
          Si una idea no funciona en blanco y negro, el color no la va a salvar. Cada boceto propone un comportamiento,
          no un dibujo: qué le pasa a la marca cuando una clínica está fuera de rango y qué pasa cuando vuelve al
          equilibrio.
        </p>
      </header>

      {/* ═══════════ 01 REGISTRO ═══════════ */}
      <section className="sk-block" aria-labelledby="s1">
        <div className="sk-intro">
          <p className="sk-num">01</p>
          <div>
            <h2 id="s1">Registro</h2>
            <p className="sk-idea">
              La palabra está cortada en diez franjas. Cuando la clínica está fuera de rango, las franjas se corren
              como una impresión mal registrada. Con el diagnóstico, se alinean.
            </p>
            <p className="sk-why">
              <strong>Por qué no es plantilla:</strong> no hay figura añadida; la burbuja desaparece y queda la
              sensación física de enfocar. El logo es un estado, no un dibujo. Funciona en impresión, bordado o
              grabado.
            </p>
          </div>
        </div>
        <div className="sk-states">
          {[
            { d: 1.2, l: "Score 38 · fuera de rango" },
            { d: 0.6, l: "Score 64 · mejorable" },
            { d: 0, l: "Score 100 · el logo" },
          ].map((s, i) => (
            <figure key={i} className="sk-state">
              <RegistroMark id={`st1-${i}`} drift={s.d} className="sk-state__mark" />
              <figcaption>{s.l}</figcaption>
            </figure>
          ))}
        </div>
        <div className="sk-row">
          <figure className="sk-inverse">
            <RegistroMark id="inv1" className="sk-inverse__mark" color="#fff" />
          </figure>
          <Sizes>{(c) => <RegistroMark id={`mono1-${c}`} glyph="e" className={c} />}</Sizes>
        </div>
        <div className="sk-frames">
          <figure className="sk-frame sk-frame--desk">
            <RegistroPage id="d1" />
            <figcaption>Portada · escritorio</figcaption>
          </figure>
          <figure className="sk-frame sk-frame--mob">
            <RegistroPage id="m1" />
            <figcaption>375</figcaption>
          </figure>
          <figure className="sk-frame sk-frame--desk sk-frame--after">
            <RegistroPage id="d1b" aligned />
            <figcaption>Al hacer scroll, la palabra entra en registro</figcaption>
          </figure>
        </div>
      </section>

      {/* ═══════════ 02 HORIZONTE ═══════════ */}
      <section className="sk-block" aria-labelledby="s2">
        <div className="sk-intro">
          <p className="sk-num">02</p>
          <div>
            <h2 id="s2">Horizonte</h2>
            <p className="sk-idea">
              Elum se apoya en una regla larga: un horizonte. El logotipo entero se inclina con la lectura de la clínica
              y se endereza en 0.0°. El Score se cuenta en grados: “tu clínica está a 3.2° del equilibrio”.
            </p>
            <p className="sk-why">
              <strong>Por qué no es plantilla:</strong> la página es el instrumento. Una sola línea cruza la pantalla y
              parte el titular en dos; no hay tarjetas ni columnas. La regla, además, deja un sistema gráfico para
              redes, reportes y señalética.
            </p>
          </div>
        </div>
        <div className="sk-states">
          {[
            { t: 6, l: "6.0° · fuera de rango" },
            { t: 2.5, l: "2.5° · mejorable" },
            { t: 0, l: "0.0° · el logo" },
          ].map((s, i) => (
            <figure key={i} className="sk-state">
              <HorizonteMark tilt={s.t} rule={330} className="sk-state__mark sk-state__mark--hor" />
              <figcaption>{s.l}</figcaption>
            </figure>
          ))}
        </div>
        <div className="sk-row">
          <figure className="sk-inverse">
            <HorizonteMark className="sk-inverse__mark sk-inverse__mark--hor" rule={420} color="#fff" />
          </figure>
          <Sizes>{(c) => <HorizonteMono className={c} />}</Sizes>
        </div>
        <div className="sk-frames">
          <figure className="sk-frame sk-frame--desk">
            <HorizontePage />
            <figcaption>Portada · escritorio</figcaption>
          </figure>
          <figure className="sk-frame sk-frame--mob">
            <HorizontePage />
            <figcaption>375</figcaption>
          </figure>
          <figure className="sk-frame sk-frame--desk sk-frame--after">
            <HorizontePage tilt={0} />
            <figcaption>Al terminar el Score, la línea se nivela</figcaption>
          </figure>
        </div>
      </section>

      {/* ═══════════ 03 VIALES ═══════════ */}
      <section className="sk-block" aria-labelledby="s3">
        <div className="sk-intro">
          <p className="sk-num">03</p>
          <div>
            <h2 id="s3">Viales</h2>
            <p className="sk-idea">
              Un solo módulo, el vial de un nivel, construye las letras E-L-U-M y los diez dígitos. El nombre y el
              Score están hechos de la misma pieza. “Calm is a number”, literalmente.
            </p>
            <p className="sk-why">
              <strong>Por qué no es plantilla:</strong> Elum tendría su propia tipografía de cifras, imposible de
              confundir con otra. Cada vial puede encenderse por separado: en el reporte, cada métrica se lee como un
              instrumento.
            </p>
          </div>
        </div>
        <div className="sk-states">
          <figure className="sk-state">
            <VialText text="ELUM" bubble className="sk-state__mark sk-state__mark--via" />
            <figcaption>El logo · burbuja al centro de la E</figcaption>
          </figure>
          <figure className="sk-state">
            <VialText text="0123456789" ghosts className="sk-state__mark sk-state__mark--digits" />
            <figcaption>Las cifras, del mismo módulo</figcaption>
          </figure>
          <figure className="sk-state">
            <VialText text="64" ghosts className="sk-state__mark sk-state__mark--short" />
            <figcaption>Score 64 · los viales apagados quedan visibles</figcaption>
          </figure>
        </div>
        <div className="sk-row">
          <figure className="sk-inverse">
            <VialText text="ELUM" className="sk-inverse__mark sk-inverse__mark--via" color="#fff" />
          </figure>
          <Sizes>{(c) => <VialMono className={c} />}</Sizes>
        </div>
        <div className="sk-frames sk-frames--two">
          <figure className="sk-frame sk-frame--desk">
            <VialesPage />
            <figcaption>Portada · escritorio</figcaption>
          </figure>
          <figure className="sk-frame sk-frame--mob">
            <VialesPage />
            <figcaption>375</figcaption>
          </figure>
        </div>
      </section>

      <footer className="sk-foot">
        <p>
          Tipografías de texto provisionales (Anybody, Big Shoulders y Funnel), solo para bocetar. Los logotipos están
          dibujados a mano en SVG. Todas las cifras son de ejemplo.
        </p>
      </footer>
    </main>
  );
}
