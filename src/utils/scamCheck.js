// Rule-based scam pattern detection.
// No AI cost — pure keyword/pattern matching, runs entirely client-side.

const redFlags = [
  {
    pattern: /(registration|security|processing|verification|booking)\s*(fee|amount|charge)/i,
    weight: 30,
    label: 'Paisa maangna registration/security ke naam par',
    explain: 'Genuine companies kabhi job dene se pehle paisa nahi maangti. Ye sabse common scam tactic hai.',
  },
  {
    pattern: /pay\s*(only|just)?\s*(₹|rs\.?|inr)?\s*\d+/i,
    weight: 30,
    label: 'Kisi bhi amount ki payment maangi gayi hai',
    explain: 'Job ya internship ke liye paisa dena padta hai — yeh red flag hai, chahe amount kitna bhi chhota ho.',
  },
  {
    pattern: /(work from home|wfh).{0,30}(₹|rs\.?|inr)?\s*\d{3,}\s*\/?\s*(day|hour|ghanta|din)/i,
    weight: 25,
    label: 'Bahut zyada daily/hourly income ka vaada (WFH)',
    explain: 'Unrealistic daily income promises (₹500-2000/day, no experience) classic scam pattern hai.',
  },
  {
    pattern: /(telegram|whatsapp)\s*(group|channel|link)?\s*(join|send|message)/i,
    weight: 15,
    label: 'Sirf Telegram/WhatsApp par baat aage badhane ko kaha gaya',
    explain: 'Legitimate companies official email/portal use karti hain, sirf Telegram/WhatsApp pe shift hona suspicious hai.',
  },
  {
    pattern: /no\s*(interview|experience|qualification)\s*(needed|required)/i,
    weight: 15,
    label: '"No interview/experience needed" jaisa vaada',
    explain: 'Real jobs mein kam se kam basic screening hoti hai. Iska bilkul na hona red flag hai.',
  },
  {
    pattern: /(send|share).{0,20}(aadhar|pan card|bank details|otp|password)/i,
    weight: 35,
    label: 'Sensitive personal/financial details maangi gayi',
    explain: 'Kabhi bhi OTP, password, ya Aadhar/PAN details kisi job offer ke liye share na karein.',
  },
  {
    pattern: /limited\s*(seats|slots|time)|hurry|urgent.{0,20}(join|apply)/i,
    weight: 10,
    label: 'Artificial urgency create ki gayi hai',
    explain: '"Limited seats", "hurry up" jaisi language pressure tactic hai taaki aap sochne ka time na lein.',
  },
  {
    pattern: /\b(gmail|yahoo|outlook)\.com\b/i,
    weight: 10,
    label: 'Company email free provider (Gmail/Yahoo) se hai',
    explain: 'Genuine companies apne official domain se email karti hain (e.g. hr@company.com), free email se nahi.',
  },
];

export function analyzeText(text) {
  if (!text || text.trim().length < 10) {
    return null;
  }

  const matched = [];
  let totalWeight = 0;

  for (const flag of redFlags) {
    if (flag.pattern.test(text)) {
      matched.push(flag);
      totalWeight += flag.weight;
    }
  }

  const score = Math.min(totalWeight, 100);

  let verdict, verdictColor;
  if (score >= 50) {
    verdict = 'High Risk — Bahut sambhal kar';
    verdictColor = 'alert';
  } else if (score >= 20) {
    verdict = 'Caution — Verify karein';
    verdictColor = 'saffron';
  } else {
    verdict = 'Low Risk — Koi obvious red flag nahi mila';
    verdictColor = 'sage';
  }

  return {
    score,
    verdict,
    verdictColor,
    matched,
    disclaimer: 'Yeh tool sirf pattern-matching par based hai, 100% guarantee nahi deta. Hamesha company ko independently verify karein — official website, LinkedIn, Glassdoor reviews check karein.',
  };
}
