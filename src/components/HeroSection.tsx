import { ShoppingCart, Check } from 'lucide-react';
import HeroBundleGraphic from './visuals/HeroBundleGraphic.tsx';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick: _onCtaClick }: HeroSectionProps) {
  return (
    <section className="bg-[#0b0c0e] text-white pt-6 pb-12 px-4 border-b border-slate-800">
      <div className="max-w-[620px] mx-auto flex flex-col items-center text-center">
        {/* Top Guarantee Pill */}
        <div className="inline-flex items-center gap-1.5 bg-[#17181f] border border-white/15 px-4 py-1 rounded-full text-xs font-semibold text-slate-200 mb-5 shadow-sm">
          <ShoppingCart className="w-3.5 h-3.5 text-[#f3b318]" />
          <span>Compra 100% Segura e Protegida</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[19px] sm:text-[25px] md:text-[28px] font-black uppercase tracking-tight leading-snug sm:leading-tight text-white max-w-[560px] mx-auto text-balance">
          <span className="text-white">+120 FICHAS PRÁTICAS PARA </span>
          <span className="text-[#f3b318]">ENCONTRAR O DEFEITO MAIS RÁPIDO E TROCAR SÓ O QUE REALMENTE PRECISA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base font-normal mt-3.5 mb-2">
          Encontre a causa da falha antes de trocar peças.
        </p>

        {/* Hero Visual Mockup */}
        <HeroBundleGraphic />

        {/* Description paragraph */}
        <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-[500px] mb-5">
          Você recebe 120 fichas organizadas por sintoma, com causas prováveis, testes em sequência e valores de referência para consultar na bancada e descobrir o defeito antes de trocar peças sem necessidade.
        </p>

        {/* Checkmark list */}
        <div className="space-y-1.5 text-left text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span className="text-slate-100">Do sintoma ao defeito com um caminho simples de diagnóstico</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span className="text-slate-100">Testes organizados passo a passo para não se perder</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span className="text-slate-100">Menos trocas no chute e menos prejuízo na oficina</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span className="text-slate-100">Mais rapidez para liberar a moto e atender o próximo cliente</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span className="text-slate-100">Material pronto para consulta rápida sempre que precisar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
