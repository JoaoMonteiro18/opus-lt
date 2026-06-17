import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[78vh] flex-col items-center justify-center py-28 text-center">
      <p className="bg-copper-metal bg-clip-text font-display text-7xl font-bold text-transparent sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal-800">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-charcoal-500">
        O endereço que você procurou não existe ou foi movido. Vamos te levar de
        volta ao caminho certo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg">
          <Home size={18} />
          Ir para a Home
        </Button>
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-600 transition-colors hover:text-copper-600"
        >
          <ArrowLeft size={16} />
          Falar com a equipe
        </Link>
      </div>
    </section>
  );
}
