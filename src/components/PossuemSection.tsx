import { FileText, BarChart3, ListOrdered, Gauge, Compass } from 'lucide-react';

export default function PossuemSection() {
  return (
    <section className="bg-[#ede8df] text-slate-900 py-10 px-4 border-b border-slate-300">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[19px] sm:text-[23px] font-black uppercase tracking-tight text-center leading-tight text-black mb-6">
          TUDO O QUE VOCÊ VAI RECEBER
        </h2>

        {/* Imagem das Fichas */}
        <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white">
          <img
            src="https://i.postimg.cc/1RLRKdLN/Imagem-do-Chat-GPT-29-de-set-de-2026-22-00-06-(1).png"
            alt="Tudo o que você vai receber"
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
            decoding="async"
            width={560}
            height={380}
          />
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
          {/* Item 1 */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-300 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Sintomas descritos como a moto chega - fácil de entender
            </span>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-300 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Causas mais prováveis organizadas por frequência
            </span>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-300 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <ListOrdered className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Sequência de testes para cada sintoma - passo a passo
            </span>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-300 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
              <Gauge className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Valores esperados e o que indicam a cada teste
            </span>
          </div>

          {/* Item 5 (spanning full width or centered) */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-300 flex items-center gap-3 sm:col-span-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Orientações sobre o próximo passo após o teste
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
