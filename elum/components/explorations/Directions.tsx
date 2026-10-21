import { MarkA, MarkB, MarkC, MonoA } from "./Marks";
import { SAMPLE_METRICS, SAMPLE_SCORE, STATUS_LABEL, pct, type Metric } from "./data";

const HEADLINE = "Una agenda llena no siempre es una clínica rentable.";
const CTA = "Calcula tu Elum Score gratis";

/* ═══════════════════════════ A · MEDIDOR ═══════════════════════════ */

function RangeA({ m }: { m: Metric }) {
  const lo = pct(m.refLow, m.scaleMin, m.scaleMax);
  const hi = pct(m.refHigh, m.scaleMin, m.scaleMax);
  const v = pct(m.value, m.scaleMin, m.scaleMax);
  return (
    <div className="a-range" aria-hidden="true">
      <span className="a-range__band" style={{ left: `${lo}%`, width: `${hi - lo}%` }} />
      <span className={`a-range__dot a-range__dot--${m.status}`} style={{ left: `${v}%` }} />
    </div>
  );
}

export function ScoreA() {
  const bubble = SAMPLE_SCORE / 100;
  return (
    <article className="a-score" aria-label="Elum Score, ejemplo">
      <div className="a-score__head">
        <MonoA className="a-score__tube" bubble={bubble} accent="#A0521A" title="Medidor del Score" />
        <div>
          <p className="a-eyebrow">Elum Score</p>
          <p className="a-score__num">
            {SAMPLE_SCORE}
            <span>/100</span>
          </p>
          <p className="a-score__state">Mejorable · 3 de 9 áreas fuera de rango</p>
        </div>
      </div>
      <ul className="a-score__list">
        {SAMPLE_METRICS.map((m) => (
          <li key={m.label}>
            <div className="a-score__row">
              <span>{m.label}</span>
              <span className="a-num">{m.display}</span>
            </div>
            <RangeA m={m} />
            <div className="a-score__row a-score__row--meta">
              <span className="a-num">ref. {m.refDisplay}</span>
              <span className={`a-tag a-tag--${m.status}`}>{STATUS_LABEL[m.status]}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="a-note">Datos de ejemplo.</p>
    </article>
  );
}

export function HeroA() {
  const ticks = [100, 75, 50, 25, 0];
  return (
    <section className="a-hero" aria-label="Portada, dirección A">
      <header className="a-nav">
        <MarkA className="a-nav__logo" ink="#1E1F1C" />
        <nav aria-label="Principal (A)">
          <a href="#">Cómo funciona</a>
          <a href="#">Qué analiza</a>
          <a href="#">Precios</a>
        </nav>
      </header>
      <div className="a-hero__grid">
        <div>
          <p className="a-eyebrow">Diagnóstico de negocio para clínicas</p>
          <h2 className="a-hero__title">{HEADLINE}</h2>
          <p className="a-hero__lead">
            Elum lee tu clínica como tú lees un estudio de laboratorio: qué está en rango, qué no y qué hacer en los
            próximos 90 días.
          </p>
          <a className="a-btn" href="#">
            {CTA}
          </a>
          <dl className="a-facts">
            <div><dt>10</dt><dd>preguntas</dd></div>
            <div><dt>5</dt><dd>minutos</dd></div>
            <div><dt>0</dt><dd>datos de pacientes</dd></div>
          </dl>
        </div>
        <figure className="a-gauge" aria-label="Medidor del Elum Score, ejemplo: 64">
          <div className="a-gauge__scale" aria-hidden="true">
            {ticks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="a-gauge__tube">
            <span className="a-gauge__band" />
            <span className="a-gauge__bubble" style={{ bottom: `calc(${SAMPLE_SCORE}% - 14px)` }} />
          </div>
          <figcaption>
            <span className="a-num">64</span> Elum Score
            <br />
            <span className="a-note">ejemplo</span>
          </figcaption>
        </figure>
      </div>
      <p className="a-slogan">Calm is a number.</p>
    </section>
  );
}

/* ═══════════════════════════ B · INSTRUMENTO ═══════════════════════════ */

function Vial({ score, big = false }: { score: number; big?: boolean }) {
  // El centro es el equilibrio. La distancia al centro es lo que falta para estar en rango.
  const offset = ((100 - score) / 100) * 46; // % desde el centro hacia la izquierda
  return (
    <div className={`b-vial ${big ? "b-vial--big" : ""}`} aria-hidden="true">
      <span className="b-vial__mark b-vial__mark--l" />
      <span className="b-vial__mark b-vial__mark--r" />
      <span className="b-vial__bubble" style={{ left: `${50 - offset}%`, ["--b-from" as string]: "-38%" }} />
    </div>
  );
}

export function ScoreB() {
  return (
    <article className="b-score" aria-label="Elum Score, ejemplo">
      <div className="b-score__top">
        <p className="b-label">Elum Score</p>
        <p className="b-label b-label--muted">Ejemplo</p>
      </div>
      <p className="b-score__num">{SAMPLE_SCORE}</p>
      <Vial score={SAMPLE_SCORE} />
      <p className="b-score__hint">A 36 puntos del centro. El centro es una clínica en equilibrio.</p>
      <ul className="b-chips">
        {SAMPLE_METRICS.map((m) => (
          <li key={m.label} className={`b-chip b-chip--${m.status}`}>
            <span className="b-chip__dot" aria-hidden="true" />
            <span className="b-chip__label">{m.label}</span>
            <span className="b-chip__val">{m.display}</span>
            <span className="sr-only">{STATUS_LABEL[m.status]}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function HeroB() {
  return (
    <section className="b-hero" aria-label="Portada, dirección B">
      <header className="b-nav">
        <MarkB className="b-nav__logo" ink="#E8EAE6" />
        <nav aria-label="Principal (B)">
          <a href="#">Cómo funciona</a>
          <a href="#">Qué analiza</a>
          <a href="#">Precios</a>
        </nav>
      </header>
      <div className="b-hero__body">
        <p className="b-label">Calm is a number.</p>
        <h2 className="b-hero__title">{HEADLINE}</h2>
        <p className="b-hero__lead">
          Sabes cuánto vendes. Elum te dice qué servicio, qué médico y qué metro cuadrado te deja utilidad.
        </p>
        <a className="b-btn" href="#">
          {CTA}
        </a>
        <p className="b-hero__meta">10 preguntas · 5 minutos · sin datos de pacientes</p>
      </div>
      <div className="b-hero__instrument">
        <div className="b-hero__readouts" aria-hidden="true">
          <span className="b-out">Costo por hora · fuera de rango</span>
          <span className="b-in">Nómina · en rango</span>
        </div>
        <Vial score={SAMPLE_SCORE} big />
        <p className="b-label b-label--muted b-hero__caption">Lectura de ejemplo · Elum Score 64</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════ C · REPOSO ═══════════════════════════ */

export function ScoreC() {
  return (
    <article className="c-sheet" aria-label="Elum Score, ejemplo">
      <header className="c-sheet__head">
        <MarkC className="c-sheet__logo" ink="#2A1B2E" />
        <span>Resultados · ejemplo</span>
      </header>
      <div className="c-sheet__score">
        <p className="c-sheet__num">{SAMPLE_SCORE}</p>
        <p className="c-sheet__of">
          Elum Score
          <br />
          de 100
        </p>
      </div>
      <table className="c-table">
        <thead>
          <tr>
            <th scope="col">Indicador</th>
            <th scope="col">Resultado</th>
            <th scope="col">Referencia</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_METRICS.map((m) => (
            <tr key={m.label} className={`c-row--${m.status}`}>
              <th scope="row">{m.label}</th>
              <td>
                {m.display}
                {m.flag && <span className="c-flag">{m.flag}</span>}
              </td>
              <td>{m.refDisplay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="c-note">Valores de ejemplo. Referencias ilustrativas.</p>
    </article>
  );
}

export function HeroC() {
  return (
    <section className="c-hero" aria-label="Portada, dirección C">
      <header className="c-nav">
        <MarkC className="c-nav__logo" ink="#2A1B2E" />
        <nav aria-label="Principal (C)">
          <a href="#">Cómo funciona</a>
          <a href="#">Qué analiza</a>
          <a href="#">Precios</a>
        </nav>
      </header>
      <div className="c-hero__grid">
        <div className="c-hero__copy">
          <h2 className="c-hero__title">
            Una agenda llena no siempre es una <em>clínica rentable.</em>
          </h2>
          <p className="c-hero__lead">
            Ya sabes leer un estudio con valores en rango y fuera de rango. Elum te entrega tu clínica igual: claro,
            medible y con un plan de 90 días.
          </p>
          <div className="c-hero__actions">
            <a className="c-btn" href="#">
              {CTA}
            </a>
            <span>10 preguntas, 5 minutos.</span>
          </div>
        </div>
        <ScoreC />
      </div>
      <p className="c-slogan">Calm is a number.</p>
    </section>
  );
}
