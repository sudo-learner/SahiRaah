import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export default function Community() {
  const [tab, setTab] = useState('outcomes');

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
      <p className="text-sage font-semibold text-sm tracking-wide uppercase mb-3">
        Community
      </p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
        Dusron se seekho, dusron ki madad karo
      </h1>
      <p className="text-ink-soft mb-6 max-w-lg">
        Jaise-jaise zyada students apna experience share karte hain, roadmaps sabke liye behtar hote jaate hain.
      </p>

      {!isSupabaseConfigured && (
        <div className="border border-saffron/30 bg-saffron/5 rounded-xl p-4 mb-8">
          <p className="text-sm text-saffron-deep">
            Database connect nahi hai abhi — .env file mein Supabase credentials daalo (.env.example dekho).
            Tab tak ye data sirf is session mein rahega, refresh pe chala jayega.
          </p>
        </div>
      )}

      <div className="flex gap-2 mb-8 border-b border-ink/10">
        <TabButton active={tab === 'outcomes'} onClick={() => setTab('outcomes')}>
          Outcomes share karo
        </TabButton>
        <TabButton active={tab === 'skills'} onClick={() => setTab('skills')}>
          Skill Exchange
        </TabButton>
      </div>

      {tab === 'outcomes' && <OutcomesTab />}
      {tab === 'skills' && <SkillsTab />}
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-1 pb-3 text-sm font-semibold border-b-2 transition-colors ${
        active ? 'border-sage text-sage' : 'border-transparent text-ink-soft hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}

// Fallback seed data — sirf tab dikhta hai jab Supabase configured nahi ho
// ya table khaali ho, taaki page kabhi bilkul empty na lage.
const fallbackOutcomes = [
  { domain: 'Cybersecurity', text: 'TryHackMe free rooms se 3 mahine practice karke SOC analyst internship mila.' },
  { domain: 'Web Development', text: 'freeCodeCamp se React seekh kar pehla freelance project mila.' },
];

const fallbackSkills = [
  { skill: 'Excel & Data Entry', contact: 'Telegram: @example1' },
  { skill: 'Basic Python', contact: 'Telegram: @example2' },
];

function OutcomesTab() {
  const [outcomes, setOutcomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [domain, setDomain] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchOutcomes();
  }, []);

  async function fetchOutcomes() {
    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setOutcomes(fallbackOutcomes);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('outcomes')
        .select('domain, text, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setOutcomes(data && data.length > 0 ? data : fallbackOutcomes);
    } catch (err) {
      console.error('Outcomes fetch error:', err);
      setError('Data load nahi ho paya. Thodi der baad try karo.');
      setOutcomes(fallbackOutcomes);
    } finally {
      setLoading(false);
    }
  }

  async function submit() {
    const trimmedDomain = domain.trim();
    const trimmedText = text.trim();

    if (!trimmedDomain || trimmedText.length < 10) {
      setError('Domain aur kam se kam 10 character ka experience likho.');
      return;
    }

    setSubmitting(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setOutcomes([{ domain: trimmedDomain, text: trimmedText }, ...outcomes]);
      setDomain('');
      setText('');
      setSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('outcomes')
        .insert({ domain: trimmedDomain, text: trimmedText });

      if (error) throw error;
      setDomain('');
      setText('');
      await fetchOutcomes();
    } catch (err) {
      console.error('Outcomes insert error:', err);
      setError('Submit nahi ho paya. Thodi der baad try karo.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="border border-ink/10 rounded-2xl p-6 mb-8 bg-paper-dim">
        <h3 className="font-display text-lg font-semibold text-ink mb-4">Apna experience share karo</h3>
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Domain (e.g. Cybersecurity, Web Dev)"
          className="w-full border border-ink/15 rounded-xl p-3 text-sm mb-3 bg-paper focus:border-sage transition-colors"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Kya seekha, kya kaam aaya, kya outcome mila..."
          rows={3}
          className="w-full border border-ink/15 rounded-xl p-3 text-sm mb-3 bg-paper focus:border-sage transition-colors resize-none"
        />
        {error && <p className="text-sm text-alert mb-3">{error}</p>}
        <button
          onClick={submit}
          disabled={submitting}
          className="bg-sage text-paper font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-sage-light transition-colors disabled:opacity-50"
        >
          {submitting ? 'Submit ho raha hai...' : 'Anonymously share karo'}
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-taupe">Load ho raha hai...</p>
      ) : (
        <div className="space-y-4">
          {outcomes.map((o, i) => (
            <div key={i} className="border border-ink/10 rounded-xl p-5">
              <span className="text-xs font-semibold text-sage bg-sage/10 px-2.5 py-1 rounded-full">
                {o.domain}
              </span>
              <p className="text-sm text-ink mt-3 leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillsTab() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skill, setSkill] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, []);

  async function fetchSkills() {
    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setSkills(fallbackSkills);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('skills')
        .select('skill, contact, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setSkills(data && data.length > 0 ? data : fallbackSkills);
    } catch (err) {
      console.error('Skills fetch error:', err);
      setError('Data load nahi ho paya. Thodi der baad try karo.');
      setSkills(fallbackSkills);
    } finally {
      setLoading(false);
    }
  }

  async function submit() {
    const trimmedSkill = skill.trim();
    const trimmedContact = contact.trim();

    if (!trimmedSkill || !trimmedContact) {
      setError('Skill aur contact dono fill karo.');
      return;
    }

    setSubmitting(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setSkills([{ skill: trimmedSkill, contact: trimmedContact }, ...skills]);
      setSkill('');
      setContact('');
      setSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('skills')
        .insert({ skill: trimmedSkill, contact: trimmedContact });

      if (error) throw error;
      setSkill('');
      setContact('');
      await fetchSkills();
    } catch (err) {
      console.error('Skills insert error:', err);
      setError('Submit nahi ho paya. Thodi der baad try karo.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="border border-ink/10 rounded-2xl p-6 mb-8 bg-paper-dim">
        <h3 className="font-display text-lg font-semibold text-ink mb-4">Koi skill sikha sakte ho?</h3>
        <p className="text-xs text-taupe mb-4">Bina paise ke knowledge exchange — koi bhi skill jo tum sikha sakte ho.</p>
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill (e.g. Python, Excel, Design)"
          className="w-full border border-ink/15 rounded-xl p-3 text-sm mb-3 bg-paper focus:border-sage transition-colors"
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact (Telegram/Discord handle)"
          className="w-full border border-ink/15 rounded-xl p-3 text-sm mb-3 bg-paper focus:border-sage transition-colors"
        />
        {error && <p className="text-sm text-alert mb-3">{error}</p>}
        <button
          onClick={submit}
          disabled={submitting}
          className="bg-sage text-paper font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-sage-light transition-colors disabled:opacity-50"
        >
          {submitting ? 'Submit ho raha hai...' : 'Board par post karo'}
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-taupe">Load ho raha hai...</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="border border-ink/10 rounded-xl p-5">
              <p className="font-semibold text-ink text-sm mb-1">{s.skill}</p>
              <p className="text-xs text-taupe">{s.contact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
