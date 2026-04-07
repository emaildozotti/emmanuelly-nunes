import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'dúvidas frequentes',
  heading: 'Perguntas que eu recebo muito',
  faqs: [
    {
      q: 'Preciso contar tudo que aconteceu?',
      a: 'Não. Eu não peço que você me relate cada detalhe da sua história. Trabalho com o que está travado no inconsciente, de um jeito que não exige exposição dolorosa. Você decide o que compartilha.',
    },
    {
      q: 'Funciona para casos muito antigos?',
      a: 'Sim. A maioria das pessoas com quem trabalho carrega dores de anos ou décadas atrás. O tempo não apaga o que não foi processado, mas também não impede que seja tratado agora.',
    },
    {
      q: 'Quantas sessões vou precisar?',
      a: 'Não prometo prazos nem número fixo de sessões. Cada pessoa tem seu ritmo. O que posso dizer é que muitos pacientes percebem mudanças reais já nas primeiras sessões.',
    },
    {
      q: 'Como é a sessão gratuita?',
      a: 'É uma conversa de aproximadamente 50 minutos, 100% online. Nela eu entendo o que você está vivendo, você sente como é o meu trabalho, e juntas decidimos se faz sentido continuar.',
    },
    {
      q: 'E se eu não tiver dinheiro para continuar?',
      a: 'A sessão gratuita não tem compromisso algum. Se depois você sentir que quer continuar e o orçamento for um desafio, conversamos juntas sobre as possibilidades. Minha prioridade é que você tenha acesso ao que precisa.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
