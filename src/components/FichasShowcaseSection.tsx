import PhoneMockup from './visuals/PhoneMockup.tsx';
import InfiniteCardsCarouselSection from './InfiniteCardsCarouselSection.tsx';
import IdealParaSection from './IdealParaSection.tsx';

export default function FichasShowcaseSection() {
  return (
    <section className="bg-[#ede8df] text-slate-900 py-10 px-4 border-b border-slate-300">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        {/* Section Headline */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[27px] font-black uppercase tracking-tight text-center leading-tight text-black mb-4">
          VEJA AS FICHAS DE DIAGNÓSTICO QUE<br />
          VOCÊ VAI RECEBER JÁ
        </h2>

        {/* 1. Phone Mockup (as 3 fichas colocadas uma abaixo da outra) */}
        <PhoneMockup />

        {/* Carrossel Infinito Duplo colocado abaixo das 3 fichas */}
        <div className="w-[calc(100%+2rem)] -mx-4 my-2">
          <InfiniteCardsCarouselSection />
        </div>

        {/* Este Material é Ideal Para Você que Deseja */}
        <IdealParaSection />
      </div>
    </section>
  );
}
