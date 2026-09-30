export default function BonusSection() {
  return (
    <section className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[620px] mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="text-[20px] sm:text-[25px] md:text-[28px] font-black uppercase tracking-tight text-black leading-tight">
          E NÃO PARA POR AÍ... TEM MAIS!
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 mb-3">
          Você também vai receber...
        </p>

        {/* Bonus Pill */}
        <div className="inline-flex items-center gap-1.5 bg-[#f3b318] text-black text-xs font-black uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span>🎁</span>
          <span>6 BÔNUS EXCLUSIVOS</span>
        </div>

        {/* Imagem Superior dos Bônus */}
        <div className="w-full mb-4 rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white">
          <img
            src="https://i.postimg.cc/nzqxSV8s/Imagem-do-Chat-GPT-29-de-set-de-2026-22-31-58-(1).png"
            alt="Bônus Exclusivos"
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
            decoding="async"
            width={620}
            height={380}
          />
        </div>

        {/* Imagem dos Bônus */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white">
          <img
            src="https://i.postimg.cc/wvDz4xKx/Imagem-do-Chat-GPT-29-de-set-de-2026-22-35-58-(1).png"
            alt="6 Bônus Exclusivos"
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
            decoding="async"
            width={620}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}
