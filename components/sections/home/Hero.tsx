import {
  ArrowDownRight,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#f8f7f1]"
    >
      <style>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-image-enter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes hero-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes hero-glow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.08);
          }
        }

        @keyframes hero-dot {
          0%, 100% {
            box-shadow: 0 0 0 4px rgba(130, 151, 117, 0.12);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(130, 151, 117, 0.05);
          }
        }

        .hero-enter {
          animation: hero-enter 850ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .hero-delay-1 {
          animation-delay: 100ms;
        }

        .hero-delay-2 {
          animation-delay: 200ms;
        }

        .hero-delay-3 {
          animation-delay: 300ms;
        }

        .hero-image-enter {
          animation: hero-image-enter 1000ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
          animation-delay: 180ms;
        }

        .hero-float {
          animation: hero-float 5.5s ease-in-out infinite;
          animation-delay: 900ms;
        }

        .hero-glow {
          animation: hero-glow 8s ease-in-out infinite;
        }

        .hero-dot {
          animation: hero-dot 2.5s ease-in-out infinite;
        }

        .hero-image-zoom {
          transition: transform 1000ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .hero-image-zoom:hover {
          transform: scale(1.035);
        }

        .hero-cta-arrow {
          transition: transform 300ms ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        .hero-secondary-arrow {
          transition: transform 300ms ease;
        }

        .hero-secondary:hover .hero-secondary-arrow {
          transform: translate(3px, 3px);
        }

        .hero-orbit {
          border: 1px solid rgba(130, 151, 117, 0.22);
          border-radius: 9999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter,
          .hero-image-enter,
          .hero-float,
          .hero-glow,
          .hero-dot {
            animation: none !important;
          }

          .hero-image-zoom,
          .hero-cta-arrow,
          .hero-secondary-arrow {
            transition: none;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-glow absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#e3eadb] blur-[90px] sm:h-96 sm:w-96" />
        <div className="absolute -left-32 top-[35%] h-72 w-72 rounded-full bg-[#eee5d8]/70 blur-[100px]" />

        <div className="absolute right-[5%] top-28 hidden h-36 w-36 rounded-full border border-[#dfe5d7]/70 lg:block" />
        <div className="absolute right-[7%] top-32 hidden h-28 w-28 rounded-full border border-[#dfe5d7]/50 lg:block" />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-16 lg:pb-24 lg:pt-36 xl:gap-20 xl:px-24">
        {/* Hero content */}
        <div className="relative z-10 max-w-[650px]">
          

          <h1
            id="hero-heading"
            className="hero-enter hero-delay-1 mt-8 text-[clamp(3.35rem,7.3vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.075em] text-[#213c2e] sm:mt-9"
          >
            Feel good.
            <br />
            Live{" "}
            <span className="relative inline-block font-serif font-normal italic text-[#829775]">
              well.
              <svg
                aria-hidden="true"
                viewBox="0 0 180 14"
                fill="none"
                className="absolute -bottom-2 left-0 w-full text-[#c6d3b9]"
              >
                <path
                  d="M3 10C45 2 112 1 177 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Be yourself.
          </h1>

          <p className="hero-enter hero-delay-2 mt-8 max-w-[470px] text-[15px] leading-8 text-[#687469] sm:text-[17px] sm:leading-9">
            Your wellbeing is personal. Discover thoughtful care,
            practical guidance, and healthier habits that fit your
            everyday life.
          </p>

          {/* Calls to action */}
          <div className="hero-enter hero-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="hero-cta group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#214c3b] px-7 text-sm font-medium text-white shadow-lg shadow-[#214c3b]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#173b2d] hover:shadow-xl hover:shadow-[#214c3b]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
            >
              Explore our services
              <ArrowRight
                size={17}
                className="hero-cta-arrow"
              />
            </a>

            <a
              href="#approach"
              className="hero-secondary group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-[#344c3a] transition-colors duration-300 hover:bg-[#e9ede3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
            >
              Discover our approach
              <ArrowDownRight
                size={17}
                className="hero-secondary-arrow"
              />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-enter hero-delay-3 mt-10 grid max-w-[470px] grid-cols-2 gap-4 border-t border-[#e3e5da] pt-6 sm:mt-12 sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e9f0e5] text-[#456747]">
                <ShieldCheck size={19} strokeWidth={1.7} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#344c3a]">
                  Thoughtful care
                </p>
                <p className="mt-1 text-xs leading-5 text-[#7b8477]">
                  Guidance with you in mind
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f0e8dd] text-[#8a765b]">
                <HeartPulse size={19} strokeWidth={1.7} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#344c3a]">
                  Whole-person wellness
                </p>
                <p className="mt-1 text-xs leading-5 text-[#7b8477]">
                  A more balanced everyday
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero-image-enter relative mx-auto w-full max-w-[550px] lg:ml-auto">
          {/* Soft decorative glow */}
          <div
            aria-hidden="true"
            className="hero-glow absolute -right-4 -top-6 h-40 w-40 rounded-full bg-[#dce6d2] blur-3xl sm:-right-10 sm:-top-10 sm:h-56 sm:w-56"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#eadbca]/70 blur-3xl sm:-bottom-10 sm:-left-12 sm:h-56 sm:w-56"
          />

          {/* Image frame */}
          <div className="hero-orbit absolute -inset-3 rotate-[-5deg] sm:-inset-4" />

          <div className="relative rounded-t-[48%] rounded-b-[2rem] border-[6px] border-white bg-white p-2 shadow-2xl shadow-[#304832]/10 sm:border-[9px] sm:p-2.5">
            <div
              role="img"
              aria-label="Healthcare professional in a calm, welcoming clinical setting"
              className="hero-image-zoom aspect-[4/4.65] overflow-hidden rounded-t-[48%] rounded-b-[1.5rem] bg-[#e5e9de] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85')",
              }}
            />
          </div>

          {/* Floating wellness card */}
          <div className="hero-float absolute -left-1 bottom-8 max-w-[245px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-[#26372e]/10 backdrop-blur-xl sm:-left-9 sm:bottom-12 sm:max-w-[270px] sm:p-5">
            <div className="flex items-start gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e9f0e5] text-[#426447]">
                <HeartPulse size={22} strokeWidth={1.7} />
              </span>

              <div>
                <p className="text-sm font-semibold tracking-[-0.02em] text-[#26372e]">
                  Your health, your journey
                </p>
                <p className="mt-1.5 text-xs leading-5 text-[#778174]">
                  Small steps towards a more balanced everyday life.
                </p>
              </div>
            </div>
          </div>

          {/* Floating image label */}
          <div className="hero-enter hero-delay-3 absolute right-1 top-7 rounded-full border border-white/80 bg-[#f8f7f1]/95 px-4 py-3 shadow-lg shadow-[#26372e]/5 backdrop-blur sm:right-4 sm:top-12">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#e4ebe0] text-[#456747]">
                <Sparkles size={13} />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#4d654a] sm:text-[10px]">
                Care meets wellbeing
              </span>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div
            aria-hidden="true"
            className="absolute -right-2 bottom-4 flex size-12 items-center justify-center rounded-full border border-white/80 bg-[#e7ecdf] text-[#66805d] shadow-lg sm:-right-5 sm:bottom-8 sm:size-14"
          >
            <HeartPulse size={23} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-t border-[#e5e6dc] bg-[#f2f1e9]/80">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-5 sm:gap-x-10 sm:px-8 sm:py-6 lg:gap-x-14">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#788274] sm:text-[10px]">
            A little more care
          </span>

          <span className="size-1 rounded-full bg-[#a7b59c]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#788274] sm:text-[10px]">
            A little more balance
          </span>

          <span className="hidden size-1 rounded-full bg-[#a7b59c] sm:block" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#788274] sm:text-[10px]">
            A little more you
          </span>
        </div>
      </div>
    </section>
  );
}