interface DarkCtaBannerProps {
  onCtaClick?: () => void;
}

export default function DarkCtaBanner({ onCtaClick }: DarkCtaBannerProps) {
  return (
    <section className="bg-[#0b0c0e] text-white py-12 px-4 border-b border-slate-800 text-center">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        {/* Top small label */}
        <span className="text-[#f3b318] text-xs font-black uppercase tracking-widest block mb-1">
          APENAS HOJE
        </span>

        {/* Headline */}
        <h2 className="text-[21px] sm:text-[26px] md:text-[29px] font-black uppercase text-white tracking-tight leading-tight mb-2">
          Aproveite enquanto as fichas estão em promoção!
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-xs sm:text-sm font-medium mb-6">
          Garanta já a sua e comece a diagnosticar com confiança.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="bg-[#1ba852] hover:bg-[#158941] active:scale-[0.98] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-10 rounded-lg shadow-lg cursor-pointer transition-all"
        >
          GARANTIR MINHAS FICHAS
        </button>
      </div>
    </section>
  );
}
