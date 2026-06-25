export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Sahi<span className="text-saffron">Raah</span>
          </p>
          <p className="text-sm text-taupe mt-1">Free, hamesha. Indian students ke liye banaya gaya.</p>
        </div>
        <p className="text-xs text-taupe">© 2026 SahiRaah</p>
      </div>
    </footer>
  );
}
