import { redirect } from "next/navigation";

// La landing llega en la Fase 4. Mientras tanto, la raíz lleva a las exploraciones.
export default function Home() {
  redirect("/explorations");
}
