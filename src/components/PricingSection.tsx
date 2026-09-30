import { useState } from 'react';
import { Check, Lock, Zap, Tag, Gift, ZoomIn, X } from 'lucide-react';
import HeroBundleGraphic from './visuals/HeroBundleGraphic.tsx';

interface PricingSectionProps {
  onPlanClick?: (planName: string) => void;
}

export default function PricingSection({ onPlanClick }: PricingSectionProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section id="planos" className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[660px] mx-auto flex flex-col items-center">
        {/* Top Warning Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#f3b318] text-black text-xs font-black uppercase px-4 py-1.5 rounded-full mb-2 shadow-sm">
          <span>⚡</span>
          <span>ÚLTIMA CHANCE — OFERTA TERMINA HOJE</span>
        </div>

        {/* Section Title */}
        <h2 className="text-[21px] sm:text-[26px] md:text-[30px] font-black uppercase tracking-tight text-center leading-tight text-black mb-8">
          ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
        </h2>

        {/* Two Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-stretch mb-6">
          {/* 1. PLANO COMPLETO (First Card - FEATURED) */}
          <div className="bg-[#0e1014] text-white border-2 border-amber-400 rounded-2xl p-5 shadow-2xl flex flex-col justify-between items-center text-center relative ring-2 ring-amber-400/20">
            {/* Top Floating Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1ba852] text-white text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-full shadow flex items-center gap-1 whitespace-nowrap">
              <span>👑</span>
              <span>MAIS VENDIDO</span>
            </div>

            {/* Header Banner - Condição Especial de Hoje */}
            <div className="w-full bg-[#f3b318] text-black rounded-xl py-2 px-2 mt-1 mb-2.5 shadow-md">
              <div className="flex items-center justify-center gap-1.5 font-black text-xs sm:text-[13px] uppercase tracking-tight text-black">
                <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black fill-black/15 stroke-[2.5]" />
                <span>CONDIÇÃO ESPECIAL DE HOJE</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[9px] sm:text-[10px] font-extrabold uppercase text-black/90 mt-0.5 tracking-wider">
                <span className="h-[1px] w-5 sm:w-8 bg-black/60"></span>
                <span>ACESSO IMEDIATO APÓS A COMPRA</span>
                <span className="h-[1px] w-5 sm:w-8 bg-black/60"></span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-1">
              <h3
                className="text-[26px] sm:text-[32px] font-black uppercase tracking-tight leading-none flex items-center justify-center gap-2 drop-shadow-md"
                style={{ fontFamily: "'Oswald', 'Montserrat', sans-serif" }}
              >
                <span className="text-white">PLANO</span>
                <span className="text-amber-400">COMPLETO</span>
              </h3>
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200 mt-1">
                <span className="h-[1.5px] w-5 sm:w-7 bg-amber-400"></span>
                <span>DIAGNÓSTICO DE MOTOS</span>
                <span className="h-[1.5px] w-5 sm:w-7 bg-amber-400"></span>
              </div>
            </div>

            {/* Mockup Graphic - Expandido */}
            <div
              className="w-full max-w-[340px] my-2 relative group cursor-pointer"
              onClick={() => setExpandedImage('https://i.postimg.cc/8z3c63kP/Imagem-do-Chat-GPT-29-de-set-de-2026-18-51-24.png')}
              title="Clique para expandir a imagem"
            >
              <HeroBundleGraphic
                loading="lazy"
                fetchPriority="low"
                containerClassName="max-w-full my-0 px-0"
                className="w-full h-auto max-h-[320px] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 hover:bg-black text-white text-[10px] font-bold py-1 px-2.5 rounded-md opacity-80 group-hover:opacity-100 flex items-center gap-1 transition-all shadow-md border border-white/10">
                <ZoomIn className="w-3 h-3 text-amber-400" />
                <span>Ampliar</span>
              </div>
            </div>

            {/* Bonus Tag */}
            <div className="bg-black border-2 border-amber-400 rounded-full py-1.5 px-4 sm:px-5 mb-3 inline-flex items-center gap-2 shadow-lg">
              <Gift className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <span
                className="text-amber-400 font-black text-xs sm:text-[13px] tracking-tight uppercase"
                style={{ fontFamily: "'Oswald', 'Montserrat', sans-serif" }}
              >
                +120 FICHAS + 6 BÔNUS
              </span>
            </div>

            {/* Benefits List */}
            <div className="w-full text-left my-2">
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>120 fichas práticas organizadas por sintoma</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Roteiro de testes para chegar na causa certa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Valores de referência para medir com mais segurança</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Explicação simples e direta para usar na oficina</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Consulta rápida no celular ou para impressão</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 01: 30 fichas de diagnóstico de injeção eletrônica</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 02: 25 fichas de diagnóstico de partida e carga</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 03: Guia de Pontos de Medição da Moto</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 04: Tabela de Valores de Referência</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 05: Checklist Antes de Condenar a Peça Cara</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>BÔNUS 06: Guia de Quando o Reparo Não Compensa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Acesso vitalício a todo o material</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Acesso imediato após a compra</span>
                </li>
              </ul>
            </div>

            {/* Price Area */}
            <div className="mt-auto w-full pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 line-through">
                de R$157,00 por
              </div>
              <div className="text-[36px] sm:text-[42px] font-black text-emerald-400 leading-none my-1">
                R$ 37,90
              </div>
              <div className="text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-1 mb-4">
                <span>✔</span> Você economiza R$120,00
              </div>

              {/* Button */}
              <button
                onClick={() => onPlanClick?.('Plano Completo')}
                className="w-full bg-[#1ba852] hover:bg-[#158941] active:scale-[0.98] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 rounded-lg shadow-xl hover:shadow-emerald-900/50 cursor-pointer transition-all"
              >
                GARANTIR AGORA
              </button>
            </div>
          </div>

          {/* 2. PLANO BÁSICO (Second Card) */}
          <div className="bg-[#f9f6f0] border-2 border-slate-300 rounded-2xl p-5 shadow-lg flex flex-col justify-between items-center text-center">
            {/* Header Badge */}
            <div className="bg-black text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full mb-3">
              PLANO BÁSICO
            </div>

            {/* Mockup Graphic - Expandido */}
            <div
              className="w-full max-w-[340px] my-2 relative group cursor-pointer"
              onClick={() => setExpandedImage('https://i.postimg.cc/8z3c63kP/Imagem-do-Chat-GPT-29-de-set-de-2026-18-51-24.png')}
              title="Clique para expandir a imagem"
            >
              <HeroBundleGraphic
                loading="lazy"
                fetchPriority="low"
                containerClassName="max-w-full my-0 px-0"
                className="w-full h-auto max-h-[320px] object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-2 right-2 bg-black/75 hover:bg-black text-white text-[10px] font-bold py-1 px-2.5 rounded-md opacity-80 group-hover:opacity-100 flex items-center gap-1 transition-all shadow-md">
                <ZoomIn className="w-3 h-3 text-amber-400" />
                <span>Ampliar</span>
              </div>
            </div>

            {/* Benefits List */}
            <div className="w-full text-left my-4">
              <div className="text-xs font-bold text-slate-700 mb-2">Você recebe:</div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>120 fichas de diagnóstico de motos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Acesso por 3 meses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Acesso imediato após a compra</span>
                </li>
              </ul>
            </div>

            {/* Price Area */}
            <div className="mt-auto w-full pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 line-through">
                de R$52,00 por
              </div>
              <div className="text-[32px] sm:text-[36px] font-black text-emerald-700 leading-none my-1">
                R$ 27,90
              </div>
              <div className="text-[11px] font-bold text-emerald-700 flex items-center justify-center gap-1 mb-4">
                <span>✔</span> Você economiza R$30,00
              </div>

              {/* Button */}
              <button
                onClick={() => onPlanClick?.('Plano Básico')}
                className="w-full bg-[#1ba852] hover:bg-[#158941] active:scale-[0.98] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-lg shadow-md cursor-pointer transition-all"
              >
                GARANTIR AGORA
              </button>
            </div>
          </div>
        </div>

        {/* 100% segura note */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
          <Lock className="w-3.5 h-3.5 text-slate-500" />
          <span>Compra 100% segura e garantida.</span>
        </div>
      </div>

      {/* Lightbox / Modal for expanded image */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 sm:right-2 text-white hover:text-amber-400 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer transition-all"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={expandedImage}
              alt="Visualização ampliada do material completo"
              className="w-full max-h-[85vh] object-contain rounded-xl drop-shadow-2xl border border-white/10"
            />
            <p className="text-slate-300 text-xs text-center mt-3 font-medium">
              Toque fora ou clique no X para fechar
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
