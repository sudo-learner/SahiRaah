import { useState } from 'react';
import { analyzeText } from '../utils/scamCheck';

export default function ScamCheck() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setResult(analyzeText(text));
    setChecked(true);
  };

  const colorMap = {
    alert: { bg: 'bg-alert-bg', text: 'text-alert', border: 'border-alert/30' },
    saffron: { bg: 'bg-saffron/10', text: 'text-saffron-deep', border: 'border-saffron/30' },
    sage: { bg: 'bg-sage/10', text: 'text-sage', border: 'border-sage/30' },
  };

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
      <p className="text-alert font-semibold text-sm tracking-wide uppercase mb-3">
        Anti-Scam Verification
      </p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
        Ye offer real hai ya scam?
      </h1>
      <p className="text-ink-soft mb-8 max-w-lg">
        Job, internship, ya scholarship ka pura message yahan paste karo. Hum common scam patterns check karenge.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yahan job/internship message paste karein..."
        rows={7}
        className="w-full border border-ink/15 rounded-2xl p-4 text-ink bg-paper focus:border-saffron transition-colors resize-none mb-4"
      />

      <button
        onClick={handleCheck}
        disabled={text.trim().length < 10}
        className="bg-ink text-paper font-semibold px-6 py-3.5 rounded-full hover:bg-ink-soft transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Check karo
      </button>

      {checked && !result && (
        <p className="mt-6 text-sm text-taupe">Thoda lamba message paste karein (kam se kam 10 characters).</p>
      )}

      {result && (
        <div className="mt-10">
          <div className={`border ${colorMap[result.verdictColor].border} ${colorMap[result.verdictColor].bg} rounded-2xl p-6 mb-6`}>
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <h2 className={`font-display text-xl font-semibold ${colorMap[result.verdictColor].text}`}>
                {result.verdict}
              </h2>
              <span className={`font-display text-2xl font-semibold ${colorMap[result.verdictColor].text}`}>
                {result.score}/100
              </span>
            </div>
            <p className="text-sm text-ink-soft">Risk score — jitna zyada, utna sambhal kar rahein.</p>
          </div>

          {result.matched.length > 0 ? (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-ink-soft uppercase tracking-wide mb-3">
                Mile hue red flags ({result.matched.length})
              </h3>
              <div className="space-y-3">
                {result.matched.map((flag, i) => (
                  <div key={i} className="border border-ink/10 rounded-xl p-4">
                    <p className="font-semibold text-ink text-sm mb-1">{flag.label}</p>
                    <p className="text-sm text-ink-soft">{flag.explain}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-sage mb-6">Koi obvious red flag pattern nahi mila — lekin phir bhi independently verify karein.</p>
          )}

          <div className="border border-taupe/30 bg-paper-dim rounded-xl p-4">
            <p className="text-xs text-taupe leading-relaxed">{result.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
