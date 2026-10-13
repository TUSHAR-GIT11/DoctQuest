"use client";

import { ArrowUpRight, Heart, ShieldCheck, Sprout } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "People come first",
    description:
      "Care begins with listening and understanding your individual needs.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Guidance you can trust",
    description:
      "Clear, thoughtful information to help you make informed choices.",
  },
  {
    icon: Sprout,
    number: "03",
    title: "Progress over perfection",
    description:
      "Build healthier everyday habits one manageable step at a time.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#f8f7f1] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-36 xl:px-24"
    >
      <style>{`
        @keyframes about-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes about-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        .about-float {
          animation: about-float 5.5s ease-in-out infinite;
        }

        .about-glow {
          animation: about-glow 8s ease-in-out infinite;
        }

        .about-image {
          transition: transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .about-image:hover {
          transform: scale(1.045);
        }

        .about-value {
          transition:
            background-color 300ms ease,
            transform 300ms ease;
        }

        .about-value:hover {
          background-color: rgba(233, 240, 229, 0.48);
          transform: translateX(4px);
        }

        .about-value-icon {
          transition:
            transform 300ms ease,
            background-color 300ms ease;
        }

        .about-value:hover .about-value-icon {
          transform: rotate(-6deg);
          background-color: #dce8d4;
        }

        .about-link-arrow {
          transition: transform 300ms ease;
        }

        .about-link:hover .about-link-arrow {
          transform: translate(3px, -3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-float,
          .about-glow {
            animation: none !important;
          }

          .about-image,
          .about-value,
          .about-value-icon,
          .about-link-arrow {
            transition: none !important;
          }

          .about-value:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="about-glow absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#e1e9d9] blur-[100px]" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#eee4d7]/70 blur-[110px]" />
        <div className="absolute right-[7%] top-24 hidden size-28 rounded-full border border-[#dfe5d7]/70 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 xl:gap-28">
        {/* Image composition */}
        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
          <div className="about-glow absolute -left-5 top-12 size-36 rounded-full bg-[#dce6d2] blur-3xl sm:-left-10 sm:size-48" />

          <div className="absolute -bottom-8 right-0 size-40 rounded-full bg-[#e9d9c8]/70 blur-3xl" />

          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-[-4deg] rounded-t-[46%] rounded-b-[2rem] border border-[#dce4d5] sm:-inset-4"
          />

          <div className="relative grid grid-cols-[1fr_0.72fr] items-center gap-3 sm:gap-5">
            {/* Main image */}
            <ScrollReveal direction="right" duration={900}>
              <div className="overflow-hidden rounded-t-[46%] rounded-b-2xl border border-white/80 bg-white p-2 shadow-xl shadow-[#26372e]/[0.06] sm:p-2.5">
                <div
                  role="img"
                  aria-label="A calm, welcoming wellness environment"
                  className="about-image aspect-[3/4.15] rounded-t-[46%] rounded-b-xl bg-[#e8ebe0] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85')",
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Secondary image and brand card */}
            <div className="space-y-4 pt-14 sm:space-y-6 sm:pt-20">
              <ScrollReveal direction="left" delay={120} duration={900}>
                <div className="overflow-hidden rounded-t-[46%] rounded-b-2xl border border-white/80 bg-white p-2 shadow-lg shadow-[#26372e]/[0.05] sm:p-2.5">
                  <div
                    role="img"
                    aria-label="A healthcare professional offering attentive care"
                    className="about-image aspect-[3/3.8] rounded-t-[46%] rounded-b-xl bg-[#e9dfd0] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85')",
                    }}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="group rounded-2xl bg-[#214c3b] p-4 text-white shadow-xl shadow-[#214c3b]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#193e30] sm:p-5">
                  <div className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Heart size={19} strokeWidth={1.5} />
                  </div>

                  <p className="mt-4 font-serif text-xl italic leading-tight sm:text-2xl">
                    Care that feels personal.
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#d1ddcd] sm:text-xs">
                    A thoughtful approach to everyday wellbeing.
                  </p>

                  <div className="mt-4 h-px w-full bg-white/15" />

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c5d6bc]">
                    Your wellbeing, your way
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Floating note */}
          <div className="about-float absolute -bottom-6 left-1 rounded-2xl border border-[#e7e9df] bg-white/95 p-3.5 shadow-xl shadow-[#26372e]/10 backdrop-blur-xl sm:bottom-5 sm:-left-7 sm:p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e9f0e5] text-[#526b50]">
                <Sprout size={20} strokeWidth={1.6} />
              </span>

              <div>
                <p className="text-xs font-semibold text-[#293c2e]">
                  Small steps matter
                </p>
                <p className="mt-1 text-[10px] text-[#778174]">
                  Progress at your pace
                </p>
              </div>
            </div>
          </div>

          {/* Small image caption */}
          <div className="absolute -right-1 top-5 rounded-full border border-white/80 bg-[#f8f7f1]/95 px-3.5 py-2.5 shadow-lg shadow-[#26372e]/5 backdrop-blur sm:-right-4 sm:top-10 sm:px-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#526b50]">
              Wellness, thoughtfully
            </span>
          </div>
        </div>

        {/* About content */}
        <div className="relative">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e0e5d9] bg-white/65 px-4 py-2.5">
              <span className="size-2 rounded-full bg-[#829775]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#788a70] sm:text-[11px]">
                A little about Wellora
              </span>
            </div>

            <h2
              id="about-heading"
              className="mt-7 max-w-[620px] text-[clamp(2.6rem,5vw,4.65rem)] font-medium leading-[1.03] tracking-[-0.065em] text-[#26372e]"
            >
              Health is more than a{" "}
              <span className="font-serif font-normal italic text-[#829775]">
                check-up.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="mt-7 max-w-[550px] space-y-4 text-sm leading-8 text-[#737d72] sm:text-[15px] sm:leading-8">
              <p>
                Wellora is built around a simple idea: feeling well should be
                part of everyday life, not something you think about only
                when something goes wrong.
              </p>

              <p>
                We bring a thoughtful wellness perspective to everyday
                choices, helping you explore healthier routines with more
                clarity, confidence, and balance.
              </p>
            </div>
          </ScrollReveal>

          {/* Values list */}
          <div className="mt-9 border-t border-[#e1e5da]">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <ScrollReveal
                  key={value.title}
                  direction="up"
                  delay={index * 90}
                  duration={650}
                >
                  <div className="about-value group flex gap-4 rounded-xl border-b border-[#e1e5da] px-2 py-5 sm:gap-5 sm:px-3 sm:py-6">
                    <span className="mt-1 w-6 shrink-0 text-[10px] font-semibold tracking-wider text-[#9aa58f]">
                      {value.number}
                    </span>

                    <div className="about-value-icon flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e9f0e5] text-[#526b50]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-[-0.015em] text-[#293c2e] sm:text-[15px]">
                        {value.title}
                      </h3>

                      <p className="mt-1.5 max-w-[390px] text-xs leading-6 text-[#737d72] sm:text-sm">
                        {value.description}
                      </p>
                    </div>

                    <span className="hidden self-center text-[#a0ad95] transition-transform duration-300 group-hover:translate-x-1 sm:block">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#approach"
                className="about-link group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#214c3b] px-6 text-sm font-medium text-white shadow-lg shadow-[#214c3b]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#173b2d] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
              >
                Discover our philosophy
                <ArrowUpRight
                  size={17}
                  className="about-link-arrow"
                />
              </a>

              <span className="text-xs text-[#8a9386]">
                Thoughtful care, everyday.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}