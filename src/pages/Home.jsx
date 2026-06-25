export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-saffron-deep font-semibold text-sm tracking-wide uppercase mb-4">
              Career confusion se career clarity
            </p>
            <h1 className="font-display text-[2.75rem] sm:text-6xl leading-[1.05] font-semibold text-ink mb-6">
              Guess nahi,<br />
              <span className="italic text-sage">sahi raah</span> follow karo.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-md">
              Free roadmaps jo batate hain kya seekhna hai, kaunsi jobs/internships scam hain,
              aur dusre students ne kya seekh kar job paaya — sab ek jagah.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('roadmap')}
                className="bg-saffron text-paper font-semibold px-6 py-3.5 rounded-full hover:bg-saffron-deep transition-colors"
              >
                Apna roadmap banao
              </button>
              <button
                onClick={() => onNavigate('scamcheck')}
                className="border border-ink/20 text-ink font-semibold px-6 py-3.5 rounded-full hover:border-ink/40 transition-colors"
              >
                Job offer check karo
              </button>
            </div>
          </div>

          {/* Signature visual: a hand-drawn winding path with milestone dots */}
          <div className="relative h-80 sm:h-96 hidden md:block">
            <svg viewBox="0 0 320 380" className="w-full h-full" fill="none">
              <path
                d="M40 360 C 40 280, 140 280, 130 200 C 120 120, 220 120, 210 40"
                stroke="#8B7355"
                strokeWidth="2.5"
                strokeDasharray="1 10"
                strokeLinecap="round"
              />
              {[
                { cx: 40, cy: 360, label: 'Confusion', color: '#8B7355' },
                { cx: 130, cy: 200, label: 'Roadmap', color: '#D9622B' },
                { cx: 210, cy: 40, label: 'Job Ready', color: '#3D6B4F' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.cx} cy={pt.cy} r="9" fill={pt.color} />
                  <circle cx={pt.cx} cy={pt.cy} r="14" stroke={pt.color} strokeWidth="1.5" opacity="0.4" />
                  <text
                    x={pt.cx + (i === 2 ? -14 : 20)}
                    y={pt.cy + 5}
                    textAnchor={i === 2 ? 'end' : 'start'}
                    className="font-body"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1A2E22"
                  >
                    {pt.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-ink/10 bg-paper-dim">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-3 gap-6 text-center">
          <Stat number="100%" label="Free, hamesha" />
          <Stat number="3" label="Career domains abhi" />
          <Stat number="0" label="Spam ya paid ads" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-3">
          Teen tareeke se hum madad karte hain
        </h2>
        <p className="text-ink-soft mb-12 max-w-lg">
          Har feature ek real problem solve karta hai jo Indian students roz face karte hain.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Roadmap Generator"
            desc="Apna domain aur level batao, step-by-step plan milega — kya seekhna hai, kahan se free seekhna hai, kitna time lagega."
            cta="Roadmap banao"
            onClick={() => onNavigate('roadmap')}
            accent="saffron"
          />
          <FeatureCard
            title="Scam Verify"
            desc="Job ya internship ka message paste karo, pattern-matching se pata chalega kitna risky hai aur kyun."
            cta="Abhi check karo"
            onClick={() => onNavigate('scamcheck')}
            accent="alert"
          />
          <FeatureCard
            title="Student Data Loop"
            desc="Apna outcome share karo — kisne kya seekha, kya kaam aaya. Isse roadmaps sabke liye behtar hote jaate hain."
            cta="Apna experience share karo"
            onClick={() => onNavigate('community')}
            accent="sage"
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-display text-3xl sm:text-4xl font-semibold text-saffron-deep">{number}</p>
      <p className="text-sm text-ink-soft mt-1">{label}</p>
    </div>
  );
}

function FeatureCard({ title, desc, cta, onClick, accent }) {
  const accentMap = {
    saffron: 'border-saffron/30 hover:border-saffron',
    alert: 'border-alert/30 hover:border-alert',
    sage: 'border-sage/30 hover:border-sage',
  };
  const textMap = {
    saffron: 'text-saffron-deep',
    alert: 'text-alert',
    sage: 'text-sage',
  };
  return (
    <div className={`border ${accentMap[accent]} rounded-2xl p-7 transition-colors bg-paper`}>
      <h3 className="font-display text-xl font-semibold text-ink mb-2.5">{title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed mb-5">{desc}</p>
      <button
        onClick={onClick}
        className={`text-sm font-semibold ${textMap[accent]} hover:underline`}
      >
        {cta} →
      </button>
    </div>
  );
}
