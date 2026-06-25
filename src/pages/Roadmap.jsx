import { useState } from 'react';
import { domains, roadmaps } from '../data/roadmaps';

export default function Roadmap() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const result = selectedDomain && selectedLevel
    ? roadmaps[selectedDomain][selectedLevel]
    : null;

  const reset = () => {
    setSelectedDomain(null);
    setSelectedLevel(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
      <p className="text-saffron-deep font-semibold text-sm tracking-wide uppercase mb-3">
        Roadmap Generator
      </p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
        Apni raah chuno
      </h1>

      {!result && (
        <>
          <p className="text-ink-soft mb-10 max-w-lg">
            Pehle domain chuno, fir apna current level batao — humara system tumhara step-by-step plan ready kar dega.
          </p>

          <div className="mb-10">
            <h2 className="text-sm font-semibold text-ink-soft uppercase tracking-wide mb-4">1. Domain chuno</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {domains.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDomain(d.id)}
                  className={`text-left border rounded-2xl p-5 transition-all ${
                    selectedDomain === d.id
                      ? 'border-saffron bg-saffron/5 ring-1 ring-saffron'
                      : 'border-ink/15 hover:border-saffron/50'
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">{d.label}</h3>
                  <p className="text-sm text-ink-soft">{d.tagline}</p>
                </button>
              ))}
            </div>
          </div>

          {selectedDomain && (
            <div>
              <h2 className="text-sm font-semibold text-ink-soft uppercase tracking-wide mb-4">2. Current level</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedLevel('beginner')}
                  className={`text-left border rounded-2xl p-5 transition-all ${
                    selectedLevel === 'beginner'
                      ? 'border-sage bg-sage/5 ring-1 ring-sage'
                      : 'border-ink/15 hover:border-sage/50'
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">Beginner</h3>
                  <p className="text-sm text-ink-soft">Bilkul shuruaat se seekhna hai</p>
                </button>
                <button
                  onClick={() => setSelectedLevel('intermediate')}
                  className={`text-left border rounded-2xl p-5 transition-all ${
                    selectedLevel === 'intermediate'
                      ? 'border-sage bg-sage/5 ring-1 ring-sage'
                      : 'border-ink/15 hover:border-sage/50'
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">Intermediate</h3>
                  <p className="text-sm text-ink-soft">Basics pata hai, aage badhna hai</p>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {result && (
        <div>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="text-sm text-ink-soft mb-1">Goal</p>
              <h2 className="font-display text-2xl font-semibold text-sage">{result.goal}</h2>
              <p className="text-sm text-taupe mt-1">Approx {result.durationWeeks} hafte</p>
            </div>
            <button
              onClick={reset}
              className="text-sm font-semibold text-saffron-deep hover:underline shrink-0"
            >
              Naya roadmap banao
            </button>
          </div>

          <div className="relative">
            {/* vertical dotted path */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px raah-line" />

            <div className="space-y-8">
              {result.steps.map((step, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-saffron text-paper flex items-center justify-center font-display font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div className="border border-ink/10 rounded-2xl p-6 bg-paper">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                      <span className="text-xs font-semibold text-taupe bg-paper-dim px-3 py-1 rounded-full">
                        Week {step.weeks}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((s, j) => (
                          <span key={j} className="text-sm bg-sage/10 text-sage px-3 py-1 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide mb-2">Free resources</p>
                      <ul className="text-sm text-ink-soft space-y-1">
                        {step.resources.map((r, j) => (
                          <li key={j}>• {r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-saffron/5 border border-saffron/20 rounded-xl p-3.5">
                      <p className="text-xs font-semibold text-saffron-deep uppercase tracking-wide mb-1">Project</p>
                      <p className="text-sm text-ink">{step.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
