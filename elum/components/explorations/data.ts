// Datos de EJEMPLO para las exploraciones. No son cifras reales ni benchmarks:
// los valores de referencia son ilustrativos hasta definir la metodología [Placeholder].

export type Status = "in" | "watch" | "out";

export type Metric = {
  label: string;
  value: number;
  display: string;
  refLow: number;
  refHigh: number;
  refDisplay: string;
  scaleMin: number;
  scaleMax: number;
  status: Status;
  flag?: "Alto" | "Bajo";
};

export const SAMPLE_SCORE = 64;

export const SAMPLE_METRICS: Metric[] = [
  {
    label: "Costo por hora de cabina",
    value: 1840,
    display: "$1,840",
    refLow: 1100,
    refHigh: 1500,
    refDisplay: "$1,100 – 1,500",
    scaleMin: 600,
    scaleMax: 2200,
    status: "out",
    flag: "Alto",
  },
  {
    label: "Nómina sobre ingresos",
    value: 28,
    display: "28 %",
    refLow: 25,
    refHigh: 32,
    refDisplay: "25 – 32 %",
    scaleMin: 10,
    scaleMax: 50,
    status: "in",
  },
  {
    label: "Ocupación de agenda",
    value: 71,
    display: "71 %",
    refLow: 75,
    refHigh: 90,
    refDisplay: "75 – 90 %",
    scaleMin: 40,
    scaleMax: 100,
    status: "watch",
    flag: "Bajo",
  },
];

export const STATUS_LABEL: Record<Status, string> = {
  in: "En rango",
  watch: "Mejorable",
  out: "Fuera de rango",
};

export const pct = (v: number, min: number, max: number) =>
  Math.min(100, Math.max(0, ((v - min) / (max - min)) * 100));
