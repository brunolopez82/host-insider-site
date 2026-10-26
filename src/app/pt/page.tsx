import { redirect } from "next/navigation";

// A página portuguesa vive agora na raiz (/). Mantém /pt/ a funcionar.
export default function PtRedirect() {
  redirect("/");
}
