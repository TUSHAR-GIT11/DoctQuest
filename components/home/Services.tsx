import { ArrowDownRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { services } from "../../data/services";
import ScrollReveal from "../ScrollReveal";

const highlights = [
  "Personalized guidance",
  "A whole-person approach",
  "Everyday wellbeing",
];

const cardAccents = [
  {
    background: "bg-[#e9f0e5]",
    text: "text-[#466647]",
    glow: "bg-[#dce8d4]",
    label: "Care for today",
  },
  {
    background: "bg-[#f2e8dc]",
    text: "text-[#8b7055]",
    glow: "bg-[#ead9c5]",
    label: "Balance for life",
  },
  {
    background: "bg-[#eae7ef]",
    text: "text-[#716382]",
    glow: "bg-[#ded6e9]",
    label: "Guidance for you",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-36 xl:px-24"
    >
      <style>{`
        @keyframes services-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes services-icon-enter {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(-8deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        .services-glow {
          animation: services-glow 8s ease-in-out infinite;
        }

        .services-icon-enter {
          animation: services-icon-enter 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .services-card {
          transition:
            transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 450ms ease,
            border-color 350ms ease,
            background-color 350ms ease;
        }

        .services-card:hover {
          transform: translateY(-7px);
        }

        .services-card-icon {
          transition:
            transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 350ms ease;
        }

        .services-card:hover .services-card-icon {
          transform: translateY(-3px) rotate(-5deg) scale(1.05);
          box-shadow: 0 10px 24px rgba(38, 55, 46, 0.08);
        }

        .services-card-arrow {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            color 300ms ease;
        }

        .services-card:hover .services-card-arrow {
          transform: rotate(45deg);
        }

        .services-card-line {
          transition: width 500ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .services-bottom-link {
          transition:
            color 250ms ease,
            transform 250ms ease;
        }

        .services-bottom-link:hover {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .services-glow,
          .services-icon-enter {
            animation: none !important;
          }

          .services-card,
          .services-card-icon,
          .services-card-arrow,
          .services-card-line,
          .services-bottom-link {
            transition: none !important;
          }

          .services-card:hover,
          .services-bottom-link:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="services-glow absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#e8eee1] blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#f3e9dd]/70 blur-[110px]" />
        <div className="absolute right-[8%] top-20 hidden size-24 rounded-full border border-[#e3e7dc] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center gap-3 rounded-full border border-[#e1e7da] bg-[#fafbf7] px-4 py-2.5">
                <Sparkles size={14} className="text-[#829775]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#788a70] sm:text-[11px]">
                  Thoughtful care, your way
                </span>
              </span>

              <h2
                id="services-heading"
                className="mt-7 text-[clamp(2.8rem,6vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.07em] text-[#26372e]"
              >
                Your wellbeing.
                <br />
                <span className="font-serif font-normal italic text-[#829775]">
                  Our priority.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <p className="mt-6 max-w-[570px] text-sm leading-8 text-[#737d72] sm:text-base sm:leading-8">
                Discover thoughtful ways to care for yourself, build
                healthier routines, and make more informed choices for
                your wellbeing.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={150}>
            <div className="flex flex-wrap gap-x-5 gap-y-3 lg:max-w-[260px] lg:justify-start lg:pb-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-xs text-[#5e6e5d]"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#829775]"
                    aria-hidden="true"
                  />
                  {highlight}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = cardAccents[index % cardAccents.length];

            return (
              <ScrollReveal
                key={service.number}
                direction="up"
                delay={index * 130}
                duration={750}
              >
                <article className="services-card group relative flex min-h-[345px] flex-col overflow-hidden rounded-[1.75rem] border border-[#e8eae1] bg-[#fbfbf7] p-6 hover:border-[#d5dfce] hover:bg-[#f7f9f3] hover:shadow-2xl hover:shadow-[#26372e]/[0.07] sm:min-h-[370px] sm:p-8">
                  {/* Card decoration */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full ${accent.glow} opacity-40 blur-2xl transition-transform duration-700 group-hover:scale-150`}
                  />

                  <div className="relative flex items-start justify-between">
                    <div
                      className={`services-icon-enter services-card-icon flex size-[60px] items-center justify-center rounded-[1.25rem] ${accent.background} ${accent.text}`}
                      style={{
                        animationDelay: `${index * 150 + 200}ms`,
                      }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.55}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="pt-1 font-serif text-lg italic text-[#a2ac99] transition-colors duration-300 group-hover:text-[#526b50]">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8a9680]">
                      {accent.label}
                    </span>

                    <h3 className="mt-3 text-[1.65rem] font-medium leading-tight tracking-[-0.045em] text-[#293c2e] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#737d72]">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#829075] sm:text-[10px]">
                      Explore wellbeing
                    </span>

                    <Link
                      href="/services"
                      aria-label={`Learn more about ${service.title}`}
                      className="services-card-arrow flex size-11 shrink-0 items-center justify-center rounded-full border border-[#dfe4d8] bg-white text-[#3d6045] group-hover:border-[#214c3b] group-hover:bg-[#214c3b] group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
                    >
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#e8ede2]">
                    <div className="services-card-line h-full w-0 bg-[#829775] group-hover:w-full" />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom callout */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-[#e7e9df] bg-[#f4f5ee] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#526b50] shadow-sm">
                <Sparkles size={17} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#344c3a]">
                  A healthier routine starts with one small step.
                </p>
                <p className="mt-1 text-xs leading-6 text-[#7b8477]">
                  Find an approach that feels right for you.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="services-bottom-link group inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-[#31543a] hover:text-[#78916d] sm:self-center"
            >
              Let&apos;s talk
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}