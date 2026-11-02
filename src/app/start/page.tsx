import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui";
import { SKOOL_URL_PT } from "@/lib/links";
import { AuthorityBadge } from "@/components/pt/AuthorityBadge";

export const metadata: Metadata = {
  title: "Por dentro da Anfitriões Sérios — comunidade privada para anfitriões",
  description:
    "Tudo o que há dentro da Anfitriões Sérios: hangouts ao vivo, ajuda por mensagem privada com o Bruno, workshops, cursos e casos reais. Comunidade privada, só de anfitriões, em português. 7 dias grátis.",
};

/* ── Conteúdo ─────────────────────────────────────────────── */

const TRUST = [
  { n: "3+ anos", d: "A ajudar anfitriões" },
  { n: "Dezenas", d: "De anfitriões ajudados individualmente" },
  { n: "Só anfitriões", d: "Sem hóspedes, sem curiosos" },
  { n: "Sem drama", d: "Problema → solução" },
];

const PAIN = [
  {
    t: "Uma queixa vira um pedido de reembolso",
    d: "E a resposta que se escreve a quente fica para sempre na conversa.",
  },
  {
    t: "Uma avaliação que não corresponde ao que aconteceu",
    d: "A resposta pública fica à vista de todos os próximos hóspedes.",
  },
  {
    t: "Nos grupos, dez opiniões contraditórias",
    d: "Muito desabafo, pouca orientação, e o caso continua por resolver.",
  },
];

const INSIDE = [
  {
    n: "01",
    t: "Situações difíceis com hóspedes",
    d: "Danos, reembolsos, check-outs que correm mal: o que fazer, o que registar e o que evitar, por ordem.",
  },
  {
    n: "02",
    t: "Avaliações",
    d: "Como prevenir as más, responder às injustas com calma e perceber que opções existem, sem promessas.",
  },
  {
    n: "03",
    t: "Anúncio e visibilidade",
    d: "Título, fotografias, descrição e práticas que ajudam o anúncio a ganhar visibilidade e mais reservas.",
  },
  {
    n: "04",
    t: "Mudanças da plataforma",
    d: "Regras novas explicadas em português, logo que a informação é pública, e o que fazer em cada caso.",
  },
];

const HELP = [
  {
    t: "Hangouts ao vivo, todos os domingos",
    d: "Uma hora com o Bruno às 19h de Brasília (22h de Lisboa). Perguntas, casos reais, análise de anúncios em direto e atualizações da plataforma. As gravações ficam disponíveis.",
  },
  {
    t: "Ajuda por mensagem privada",
    d: "Um caso concreto, uma avaliação por responder, uma dúvida antes de agir. A conversa é direta com o Bruno, com calma e organização.",
  },
  {
    t: "Workshops conforme as necessidades",
    d: "Os temas partem do que os membros precisam. O primeiro: as novas regras da casa da Airbnb.",
  },
];

const COURSES = [
  "Comece Aqui",
  "Checklist do Novo Anfitrião",
  "Avaliações no Airbnb",
  "Roteiro para Avaliações de 5 Estrelas",
  "Visibilidade no Airbnb",
  "Biblioteca de Casos Reais",
  "Gravações dos hangouts e workshops",
];

const COMPARE: [string, string][] = [
  ["Dezenas de opiniões contraditórias", "Respostas focadas em cada caso"],
  ["Desabafos sem saída", "Problema → solução"],
  ["Anfitriões, hóspedes e curiosos misturados", "Só anfitriões"],
  ["Conselhos que se perdem no feed", "Cursos, guias e casos organizados"],
  ["Discussões que amplificam o drama", "Crítica construtiva e respeito"],
];

const FOUNDER = [
  "Hangouts ao vivo, ajuda por mensagem privada, workshops, todos os cursos e gravações.",
  "US$5/mês para sempre, desde que a adesão se mantenha paga e ativa, mesmo quando o preço subir.",
  "Os primeiros temas, workshops e cursos partem do feedback dos Fundadores.",
  "Grupo ainda pequeno: mais tempo e atenção para cada caso.",
];

const FOR_WHO = [
  "tem um ou mais anúncios e quer prevenir problemas em vez de apagar fogos;",
  "prefere agir com calma e organização;",
  "valoriza respostas concretas e conversas com substância.",
];

const NOT_FOR = [
  "procura truques, lacunas ou formas de contornar o sistema;",
  "procura aconselhamento legal ou fiscal;",
  "não é anfitrião.",
];

const FAQ = [
  {
    q: "Como funcionam os 7 dias grátis?",
    a: "A entrada começa com 7 dias grátis, sem qualquer cobrança. Quem não quiser continuar pode cancelar antes do fim, sem pagar nada. O Skool envia um aviso por email antes de o período grátis terminar.",
  },
  {
    q: "É possível cancelar depois?",
    a: "Sim, a qualquer momento, nas definições da conta no Skool.",
  },
  {
    q: "Como se contam os 25 lugares de Fundador?",
    a: "O lugar fica confirmado com o primeiro pagamento, depois dos 7 dias grátis. Quando houver 25 Fundadores, o plano fecha e o preço sobe.",
  },
  {
    q: "A comunidade ajuda a remover avaliações?",
    a: "Não se prometem remoções. Ajuda-se a perceber as opções, a preparar cada caso e a responder com calma e profissionalismo.",
  },
  {
    q: "Há alguma ligação à Airbnb?",
    a: "Não. A Anfitriões Sérios é uma comunidade independente.",
  },
  {
    q: "Serve para Portugal e para o Brasil?",
    a: "Sim. O conteúdo é em português neutro. Questões legais e fiscais de cada país ficam fora do âmbito da comunidade.",
  },
  {
    q: "Porque é que o preço está em dólares?",
    a: "O Skool cobra em dólares. A conversão é feita automaticamente pelo banco ou pelo cartão.",
  },
];

/* ── Peças ────────────────────────────────────────────────── */

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={SKOOL_URL_PT}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-semibold text-white text-[15px] transition-transform hover:scale-[1.03]"
      style={{ background: "var(--color-orange-deep)" }}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="accent-ink text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase">
      {children}
    </p>
  );
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-3 text-[28px] md:text-[38px] font-extrabold tracking-[-0.03em] leading-[1.12] ${className}`}
    >
      {children}
    </h2>
  );
}

const card = {
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
} as const;

const Check = () => <span className="accent-ink font-bold shrink-0">✓</span>;

/* ── Página ───────────────────────────────────────────────── */

export default function StartPage() {
  return (
    <main className="tone-pt min-h-screen flex flex-col text-[color:var(--fg)]">
      <header className="px-6 pt-7">
        <div className="max-w-[1100px] mx-auto flex items-center gap-2.5">
          <Image src="/images/logo-anfitrioes-serios.png" alt="" width={36} height={36} priority />
          <span className="font-bold text-[15px] tracking-tight">
            Anfitriões <span className="accent-ink">Sérios</span>
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <FadeIn>
            <Eyebrow>Por dentro da comunidade</Eyebrow>
            <h1 className="mt-5 text-[36px] sm:text-[48px] md:text-[54px] font-extrabold leading-[1.06] tracking-[-0.035em]">
              Quando um hóspede complica,{" "}
              <span className="brand-gradient-text">saiba o que fazer.</span>
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl leading-relaxed max-w-[560px]">
              Uma comunidade privada, só de anfitriões de Portugal e do Brasil,
              para preparar as situações difíceis, responder às avaliações com
              calma e pôr o anúncio a trabalhar melhor. Sem drama.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Cta>Experimentar 7 dias grátis →</Cta>
              <a
                href="#dentro"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold text-[15px] border border-[color:var(--card-border)] hover:bg-white"
              >
                Ver o que há dentro
              </a>
            </div>
            <p className="mt-4 text-white/50 text-sm max-w-[520px]">
              Sem qualquer compromisso: se não fizer sentido, basta cancelar
              antes do fim dos 7 dias, sem pagar nada.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center">
            <div className="relative mb-6 md:mb-0">
              <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(15,31,61,0.14)]">
                <Image
                  src="/images/avatar.webp"
                  alt="Bruno, fundador da Anfitriões Sérios"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <AuthorityBadge />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Confiança */}
      <section className="px-6 py-10 border-y border-white/[0.07] bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST.map((t) => (
            <div key={t.n} className="text-center md:text-left">
              <p className="brand-gradient-text text-[24px] md:text-[28px] font-extrabold tracking-[-0.02em]">
                {t.n}
              </p>
              <p className="mt-1.5 text-white/55 text-sm">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problema */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <Eyebrow>A realidade de quem recebe hóspedes</Eyebrow>
            <H2 className="max-w-[680px]">Ser anfitrião complica-se depressa.</H2>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {PAIN.map((p) => (
                <div key={p.t} className="rounded-2xl p-6" style={card}>
                  <p className="font-bold text-[17px] leading-snug">{p.t}</p>
                  <p className="mt-3 text-white/55 text-[15px] leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg md:text-xl font-bold max-w-[680px] leading-snug">
              Muitos anfitriões perdem casos não por falta de razão, mas por falta
              de serenidade e organização. É isso que se trabalha aqui.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* O que há dentro */}
      <section id="dentro" className="px-6 py-16 md:py-20 bg-white border-y border-white/[0.07] scroll-mt-6">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <Eyebrow>O que há dentro</Eyebrow>
            <H2 className="max-w-[720px]">
              Tudo o que um anfitrião precisa para decidir com calma.
            </H2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSIDE.map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl p-6" style={{ ...card, background: "#f6f8fc" }}>
                  <p className="accent-ink text-xl font-extrabold">{c.n}</p>
                  <p className="mt-2 font-bold text-[17px] leading-snug">{c.t}</p>
                  <p className="mt-2 text-white/55 text-[15px] leading-relaxed">{c.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ajuda focada */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <Eyebrow>Ajuda focada no caso de cada anfitrião</Eyebrow>
            <H2 className="max-w-[720px]">
              Mais do que conteúdo: acompanhamento contínuo.
            </H2>
          </FadeIn>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {HELP.map((h, i) => (
              <FadeIn key={h.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl p-6" style={card}>
                  <p className="font-bold text-[17px] leading-snug">{h.t}</p>
                  <p className="mt-3 text-white/55 text-[15px] leading-relaxed">{h.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 text-white/60">Sem conselhos genéricos. Cada caso é olhado pelo que é.</p>
        </div>
      </section>

      {/* Cursos */}
      <section className="px-6 py-16 md:py-20 bg-white border-y border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <Eyebrow>Cursos e guias práticos</Eyebrow>
            <H2>Escritos, diretos e fáceis de consultar.</H2>
            <p className="mt-5 text-white/60 text-lg leading-relaxed">
              Para ler com calma ou abrir no momento em que é preciso. Novos
              cursos são acrescentados conforme as necessidades e o feedback dos
              membros.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ol className="rounded-2xl overflow-hidden" style={card}>
              {COURSES.map((c, i) => (
                <li
                  key={c}
                  className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.07] last:border-b-0"
                >
                  <span className="accent-ink font-extrabold text-sm w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{c}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* Comparação */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <Eyebrow>Porque não um grupo gratuito</Eyebrow>
            <H2>Longe dos dramas dos grupos gratuitos.</H2>
            <div className="mt-10 grid grid-cols-2 rounded-2xl overflow-hidden" style={card}>
              <p className="px-5 py-4 font-bold text-white/55 border-b border-white/[0.07]">
                Grupos gratuitos
              </p>
              <p className="px-5 py-4 font-bold border-b border-white/[0.07] bg-[#f6f8fc]">
                Anfitriões <span className="accent-ink">Sérios</span>
              </p>
              {COMPARE.map(([a, b]) => (
                <div key={a} className="contents">
                  <p className="px-5 py-3.5 text-white/55 text-[15px] border-b border-white/[0.07]">
                    {a}
                  </p>
                  <p className="px-5 py-3.5 text-[15px] font-semibold border-b border-white/[0.07] bg-[#f6f8fc] flex gap-2">
                    <Check />
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fundadores */}
      <section className="px-6 py-16 md:py-20 bg-white border-y border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <FadeIn>
            <Eyebrow>Membros Fundadores</Eyebrow>
            <H2>Só os 25 primeiros membros entram como Fundadores.</H2>
            <ul className="mt-7 space-y-3.5">
              {FOUNDER.map((f) => (
                <li key={f} className="flex gap-3 text-white/70 text-[16px] leading-relaxed">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-8 text-center" style={{ ...card, background: "#f6f8fc" }}>
              <p className="accent-ink text-xs font-bold tracking-[0.18em] uppercase">
                Fundador · 25 lugares
              </p>
              <p className="mt-3 text-[48px] font-extrabold tracking-[-0.03em] leading-none">
                US$5<span className="text-lg font-semibold text-white/55">/mês</span>
              </p>
              <p className="mt-3 text-white/60 text-[15px]">
                Acesso completo, valor mantido enquanto a adesão estiver ativa.
              </p>
              <p className="mt-2 text-white/45 text-sm">
                Depois dos 25 lugares, a partir de US$19/mês.
              </p>
              <div className="mt-7">
                <Cta>Experimentar 7 dias grátis →</Cta>
              </div>
              <p className="mt-4 text-white/50 text-[13px] leading-relaxed">
                O lugar de Fundador fica confirmado com o primeiro pagamento,
                depois dos 7 dias grátis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quem está por trás */}
      <section className="px-6 py-16 md:py-20">
        <FadeIn>
          <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="relative shrink-0 mb-6 md:mb-0">
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/avatar.webp"
                  alt="Bruno, fundador da Anfitriões Sérios"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <AuthorityBadge />
            </div>
            <div className="text-center md:text-left">
              <Eyebrow>Quem está por trás</Eyebrow>
              <H2>O Bruno participa como membro, não como guru.</H2>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                Ajuda anfitriões há mais de 3 anos a lidar com problemas e a
                preparar-se para os evitar, e a otimizar os anúncios para
                potenciar mais reservas. Já acompanhou individualmente dezenas
                de anfitriões e estuda de forma constante os termos e as
                atualizações da plataforma.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Para quem é */}
      <section className="px-6 py-16 md:py-20 bg-white border-y border-white/[0.07]">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <Eyebrow>Para quem é</Eyebrow>
            <H2>Uma comunidade para quem leva o alojamento a sério.</H2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-7" style={{ ...card, background: "#f6f8fc" }}>
                <p className="font-bold text-[17px]">É para quem:</p>
                <ul className="mt-4 space-y-3">
                  {FOR_WHO.map((f) => (
                    <li key={f} className="flex gap-3 text-white/70 leading-relaxed">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-7" style={card}>
                <p className="font-bold text-[17px]">Não é para quem:</p>
                <ul className="mt-4 space-y-3">
                  {NOT_FOR.map((f) => (
                    <li key={f} className="flex gap-3 text-white/60 leading-relaxed">
                      <span className="text-white/40 font-bold shrink-0">✕</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto">
          <FadeIn>
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <H2>Antes de entrar</H2>
            <div className="mt-8 space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group rounded-2xl px-6 py-5" style={card}>
                  <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-[16px]">
                    {f.q}
                    <span className="accent-ink transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-white/60 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07] text-center bg-white">
        <FadeIn>
          <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-[-0.03em] max-w-[620px] mx-auto leading-[1.12]">
            Menos drama. <span className="accent-ink">Mais preparação.</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-[560px] mx-auto">
            Só 25 lugares de Fundador: acesso completo por US$5/mês, para sempre
            enquanto a adesão estiver ativa.
          </p>
          <div className="mt-9 flex flex-col items-center">
            <Cta>Experimentar 7 dias grátis →</Cta>
            <p className="mt-4 text-white/50 text-sm">
              7 dias completamente grátis, sem qualquer compromisso.
            </p>
          </div>
        </FadeIn>
      </section>

      <footer className="px-6 py-9 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs max-w-xl leading-relaxed">
            A Anfitriões Sérios é uma comunidade independente, sem afiliação,
            aprovação ou operação do Airbnb. Conteúdo educativo, sem garantia
            de resultados.
          </p>
          <a href="mailto:hello@hostinsider.app" className="text-white/35 hover-accent-ink text-xs shrink-0">
            hello@hostinsider.app
          </a>
        </div>
      </footer>
    </main>
  );
}
