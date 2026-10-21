import { HorizonteMark, RegistroMark, VialText } from "./Marks";

const CTA = "Calcula tu Elum Score gratis";

/* ═════════ 1 · REGISTRO ═════════ */

export function RegistroPage({ id, aligned = false }: { id: string; aligned?: boolean }) {
  return (
    <div className="reg">
      <header className="reg-nav">
        <RegistroMark id={`${id}-nav`} className="reg-nav__logo" />
        <nav aria-label="Principal">
          <a href="#">Cómo funciona</a>
          <a href="#">Precios</a>
          <a href="#" className="reg-nav__cta">Score gratis</a>
        </nav>
      </header>
      {!aligned ? (
        <>
          <h3 className="reg-title">Una agenda llena no siempre es una clínica rentable.</h3>
          <RegistroMark id={`${id}-hero`} drift={1.1} className="reg-big" title="Elum fuera de registro" />
          <div className="reg-foot">
            <p>Así se ve tu clínica cuando no sabes qué servicio, qué médico ni qué metro cuadrado deja utilidad.</p>
            <a href="#" className="reg-btn">{CTA}</a>
          </div>
        </>
      ) : (
        <>
          <p className="reg-kicker">Después de tu diagnóstico</p>
          <RegistroMark id={`${id}-hero`} className="reg-big" title="Elum en registro" />
          <div className="reg-foot">
            <p className="reg-calm">Calm is a number.</p>
            <a href="#" className="reg-btn">{CTA}</a>
          </div>
        </>
      )}
    </div>
  );
}

/* ═════════ 2 · HORIZONTE ═════════ */

export function HorizontePage({ tilt = 3.2 }: { tilt?: number }) {
  const level = tilt === 0;
  return (
    <div className="hor">
      <header className="hor-nav">
        <HorizonteMark className="hor-nav__logo" rule={300} color="#fff" />
        <nav aria-label="Principal">
          <a href="#">Cómo funciona</a>
          <a href="#">Precios</a>
        </nav>
      </header>
      <div className="hor-stage">
        <p className="hor-top">{level ? "Calm is" : "Una agenda llena"}</p>
        <div className="hor-line" style={{ transform: `rotate(${-tilt}deg)` }} aria-hidden="true" />
        <p className="hor-reading" aria-label={`Lectura de ejemplo: ${tilt} grados`}>
          {level ? "0.0°" : `−${tilt.toFixed(1)}°`}
        </p>
        <p className="hor-bottom">{level ? "a number." : "no siempre es una clínica rentable."}</p>
      </div>
      <div className="hor-foot">
        <p>
          {level
            ? "Cero grados: cada número de tu clínica en su lugar."
            : "Lectura de ejemplo. Elum mide a cuántos grados está tu clínica del equilibrio."}
        </p>
        <a href="#" className="hor-btn">{CTA}</a>
      </div>
    </div>
  );
}

/* ═════════ 3 · VIALES ═════════ */

const ROWS = [
  { label: "Costo por hora de cabina", value: "1840", state: "Fuera de rango", out: true },
  { label: "Nómina sobre ingresos", value: "28", state: "En rango", out: false },
  { label: "Ocupación de agenda", value: "71", state: "Mejorable", out: false },
];

export function VialesPage() {
  return (
    <div className="via">
      <header className="via-nav">
        <VialText text="ELUM" className="via-nav__logo" bubble title="Elum" />
        <nav aria-label="Principal">
          <a href="#">Cómo funciona</a>
          <a href="#">Precios</a>
        </nav>
      </header>
      <div className="via-hero">
        <div className="via-score">
          <VialText text="64" ghosts className="via-score__num" title="Elum Score de ejemplo: 64" />
          <p className="via-score__cap">Elum Score · ejemplo</p>
        </div>
        <div className="via-copy">
          <h3 className="via-title">Una agenda llena no siempre es una clínica rentable.</h3>
          <a href="#" className="via-btn">{CTA}</a>
        </div>
      </div>
      <ul className="via-rows">
        {ROWS.map((r) => (
          <li key={r.label}>
            <span className="via-rows__label">{r.label}</span>
            <VialText text={r.value} ghosts className="via-rows__num" />
            <span className={r.out ? "via-rows__state via-rows__state--out" : "via-rows__state"}>{r.state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
